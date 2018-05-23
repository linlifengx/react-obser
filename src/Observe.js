import {subscribe, notify, notifyAndDelete, OBS_KEY} from './Manager';

var arrayProto = Array.prototype;
var arrayModifyMethods = ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'];
var arrayReadMethods = ['concat', 'every', 'filter', 'forEach', 'indexOf', 'join', 'lastIndexOf', 'map', 'reduce', 'reduceRight', 'slice', 'some'];

arrayProto.$get = function(index){
	if(isObserved(this)){
		subscribe(this);
	}
	return this[index];
}

arrayProto.$set = function(index, value){
	var oldLength = this.length;
	this[index] = value;
	if(isObserved(this)){
		notify(this);
		if(oldLength != this.length){
			notify(this, '$length');
		}
	}
}

arrayProto.$modify = function(index, callback){
	this.$set(index, callback(this[index]));
}

arrayModifyMethods.forEach(function(method){
	arrayProto['$'+method] = function(...args){
		var oldLength = this.length;
		var result = this[method](...args);

		if(isObserved(this)){
			switch(method){
				case 'push':
					args.forEach(function(arg){observe(arg)});
					break;
				case 'splice':
					args.slice(2).forEach(function(arg){observe(arg)});
					break;
				case 'unshift':
					args.forEach(function(arg){observe(arg)});
					break;
			}
			notify(this);
			if(oldLength != this.length){
				notify(this, '$length');
			}
		}

		return result;
	}
});

arrayReadMethods.forEach(function(method){
	arrayProto['$'+method] = function(...args){
		var result = this[method](...args);

		if(isObserved(this)){
			subscribe(this);
		}

		return result;
	}
});

function observeArray(arr){
	if(!Array.isArray(arr) || isObserved(arr)){
		return;
	}

	initObserve(arr);

	Object.defineProperty(arr, '$length', {
		enumerable: true,
		get: function(){
			subscribe(arr, '$length');
			return arr.length;
		}
	});

}

function isObserved(obj){
	return !!obj[OBS_KEY];
}

function initObserve(obj){
	Object.defineProperty(obj, OBS_KEY, {value: {}});
}

function defineProp(obj, key, value){
	Object.defineProperty(obj, key, {
		enumerable: true,
		configurable: true,
		writeable: true,
		get: function(){
			subscribe(obj, key);
			return value;
		},
		set: function(newValue){
			if(value === newValue){
				return;
			}

			observe(newValue);
			value = newValue;
			notify(obj, key);
		}
	});
	Object.defineProperty(obj, key+'$$', {
		enumerable: false,
		configurable: true,
		writeable: false,
		value: function(value){
			if(arguments.length > 0){
				obj.key = value;
				return value;
			}else{
				return key;
			}
		}
	});
	observe(value);
}

function deleteProp(obj, key){
	delete obj[key] && delete obj[key+'$$'];
}

var objectProto = Object.prototype;
objectProto.$add = function(key, value){
	defineProp(this, key, value);
	notify(this, key);
}
objectProto.$delete = function(key){
	deleteProp(this, key);
	notifyAndDelete(this, key);
}

export default function observe(obj){
	if(!obj || typeof obj !== 'object'){
		return;
	}

	if(isObserved(obj)){
		return;
	}

	if(Array.isArray(obj)){
		observeArray(obj);
	}else{
		initObserve(obj);

		Object.keys(obj).forEach(function(key){
			defineProp(obj, key, obj[key]);
		});
	}
}
