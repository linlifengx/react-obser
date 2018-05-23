'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = observe;

var _Manager = require('./Manager');

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var arrayProto = Array.prototype;
var arrayModifyMethods = ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'];
var arrayReadMethods = ['concat', 'every', 'filter', 'forEach', 'indexOf', 'join', 'lastIndexOf', 'map', 'reduce', 'reduceRight', 'slice', 'some'];

arrayProto.$get = function (index) {
	if (isObserved(this)) {
		(0, _Manager.subscribe)(this);
	}
	return this[index];
};

arrayProto.$set = function (index, value) {
	var oldLength = this.length;
	this[index] = value;
	if (isObserved(this)) {
		(0, _Manager.notify)(this);
		if (oldLength != this.length) {
			(0, _Manager.notify)(this, '$length');
		}
	}
};

arrayProto.$modify = function (index, callback) {
	this.$set(index, callback(this[index]));
};

arrayModifyMethods.forEach(function (method) {
	arrayProto['$' + method] = function () {
		var oldLength = this.length;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var result = this[method].apply(this, args);

		if (isObserved(this)) {
			switch (method) {
				case 'push':
					args.forEach(function (arg) {
						observe(arg);
					});
					break;
				case 'splice':
					args.slice(2).forEach(function (arg) {
						observe(arg);
					});
					break;
				case 'unshift':
					args.forEach(function (arg) {
						observe(arg);
					});
					break;
			}
			(0, _Manager.notify)(this);
			if (oldLength != this.length) {
				(0, _Manager.notify)(this, '$length');
			}
		}

		return result;
	};
});

arrayReadMethods.forEach(function (method) {
	arrayProto['$' + method] = function () {
		var result = this[method].apply(this, arguments);

		if (isObserved(this)) {
			(0, _Manager.subscribe)(this);
		}

		return result;
	};
});

function observeArray(arr) {
	if (!Array.isArray(arr) || isObserved(arr)) {
		return;
	}

	initObserve(arr);

	Object.defineProperty(arr, '$length', {
		enumerable: true,
		get: function get() {
			(0, _Manager.subscribe)(arr, '$length');
			return arr.length;
		}
	});
}

function isObserved(obj) {
	return !!obj[_Manager.OBS_KEY];
}

function initObserve(obj) {
	Object.defineProperty(obj, _Manager.OBS_KEY, { value: {} });
}

function defineProp(obj, key, value) {
	Object.defineProperty(obj, key, {
		enumerable: true,
		configurable: true,
		writeable: true,
		get: function get() {
			(0, _Manager.subscribe)(obj, key);
			return value;
		},
		set: function set(newValue) {
			if (value === newValue) {
				return;
			}

			observe(newValue);
			value = newValue;
			(0, _Manager.notify)(obj, key);
		}
	});
	Object.defineProperty(obj, key + '$$', {
		enumerable: false,
		configurable: true,
		writeable: false,
		value: function value(_value) {
			if (arguments.length > 0) {
				obj.key = _value;
				return _value;
			} else {
				return key;
			}
		}
	});
	observe(value);
}

function deleteProp(obj, key) {
	delete obj[key] && delete obj[key + '$$'];
}

var objectProto = Object.prototype;
objectProto.$add = function (key, value) {
	defineProp(this, key, value);
	(0, _Manager.notify)(this, key);
};
objectProto.$delete = function (key) {
	deleteProp(this, key);
	(0, _Manager.notifyAndDelete)(this, key);
};

function observe(obj) {
	if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
		return;
	}

	if (isObserved(obj)) {
		return;
	}

	if (Array.isArray(obj)) {
		observeArray(obj);
	} else {
		initObserve(obj);

		Object.keys(obj).forEach(function (key) {
			defineProp(obj, key, obj[key]);
		});
	}
}