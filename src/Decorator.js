import {startRender, endRender, unmountComponent} from './Manager';

function shallowEqual(objA, objB) {
	if (objA === objB) {
		return true;
	}

	if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
		return false;
	}

	var keysA = Object.keys(objA);
	var keysB = Object.keys(objB);

	if (keysA.length !== keysB.length) {
		return false;
	}

	// Test for A's keys different from B.
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var bHasOwnProperty = hasOwnProperty.bind(objB);
	for (var i = 0; i < keysA.length; i++) {
		if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
			return false;
		}
	}

	return true;
}

export default function observer(originalClass){

	return class extends originalClass {
		render(...args){
			try {
				startRender(this);
				return super.render(...args);
			} catch(err) {
				console.error(err);
			} finally {
				endRender();
			}
		}

		componentWillUnmount(...args){
			unmountComponent(this);
			if(super.componentWillUnmount){
				super.componentWillUnmount(...args);
			}
		}

		shouldComponentUpdate(nextProps, nextState, nextContext){
			if(super.shouldComponentUpdate && super.shouldComponentUpdate(nextProps, nextState, nextContext)){
				return true;
			}else{
				return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
			}
		}
	}
}