var phase = 0; //0 init 1 render 2 update
var currentComponent = null;
var timeouter = null;
var updateComponentSets = new Set();

const OBS_KEY = '__observers__';
const TARGET_KEY = '__targets__';
const KEY_FOR_SELF = '__key_for_self__';

function subscribe(target, prop){
	if(phase == 1 && currentComponent != null){
		if(!prop){
			prop = KEY_FOR_SELF;
		}
		var observers = target[OBS_KEY][prop];
		if(observers == null){
			observers = target[OBS_KEY][prop] = new Set();
		}
		observers.add(currentComponent);
		currentComponent[TARGET_KEY].add(target);
	}
}

function notify(target, prop){
	if(phase == 2 && target[OBS_KEY][prop]){
		updateComponentSets.add(target[OBS_KEY][prop]);
		if(timeouter == null){
			timeouter = setTimeout(updateComponents);
		}
	}
}

function notifyAndDelete(target, prop){
	if(phase == 2 && target[OBS_KEY][prop]){
		updateComponentSets.add(target[OBS_KEY][prop]);
		if(timeouter == null){
			timeouter = setTimeout(updateComponents);
		}
		delete target[OBS_KEY][prop];
	}
}

function unsubscribe(component){
	var targetSet = component[TARGET_KEY];
	if(targetSet != null){
		for(let target of targetSet){
			Object.keys(target[OBS_KEY]).forEach(function(prop){
				var observerSet = target[OBS_KEY][prop];
				observerSet && observerSet.delete(component);
			});
		}
	}
}

function removeDependencies(component){
	var observed = component[TARGET_KEY];
	if(dependencies != null){
		for(let dependObj of dependencies){
			for(let prop in dependObj){
				let listenerSet = dependObj[OBS_KEY][prop];
				listenerSet && listenerSet.delete(component);
			}
		}
	}
}

function startRender(component){
	phase = 1;
	currentComponent = component;
	unsubscribe(component);
	component[TARGET_KEY] = new Set();
}

function endRender(){
	phase = 2;
	currentComponent = null;
}

function updateComponents(){
	let updateComponents = new Set();
	for(let s of updateComponentSets){
		for(let c of s) {
			updateComponents.add(c);
		}
	}
	for(let c of updateComponents){
		c.setState({});
	}
	updateComponentSets = new Set();
	timeouter = null;
}

export {subscribe, unsubscribe, notify, startRender, endRender,
		OBS_KEY, TARGET_KEY, KEY_FOR_SELF};


