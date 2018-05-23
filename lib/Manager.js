'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var phase = 0; //0 init 1 render 2 update
var currentComponent = null;
var timeouter = null;
var updateComponentSets = new Set();

var OBS_KEY = '__observers__';
var TARGET_KEY = '__targets__';
var KEY_FOR_SELF = '__key_for_self__';

function subscribe(target, prop) {
	if (phase == 1 && currentComponent != null) {
		if (!prop) {
			prop = KEY_FOR_SELF;
		}
		var observers = target[OBS_KEY][prop];
		if (observers == null) {
			observers = target[OBS_KEY][prop] = new Set();
		}
		observers.add(currentComponent);
		currentComponent[TARGET_KEY].add(target);
	}
}

function notify(target, prop) {
	if (phase == 2 && target[OBS_KEY][prop]) {
		updateComponentSets.add(target[OBS_KEY][prop]);
		if (timeouter == null) {
			timeouter = setTimeout(updateComponents);
		}
	}
}

function notifyAndDelete(target, prop) {
	if (phase == 2 && target[OBS_KEY][prop]) {
		updateComponentSets.add(target[OBS_KEY][prop]);
		if (timeouter == null) {
			timeouter = setTimeout(updateComponents);
		}
		delete target[OBS_KEY][prop];
	}
}

function unsubscribe(component) {
	var targetSet = component[TARGET_KEY];
	if (targetSet != null) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			var _loop = function _loop() {
				var target = _step.value;

				Object.keys(target[OBS_KEY]).forEach(function (prop) {
					var observerSet = target[OBS_KEY][prop];
					observerSet && observerSet.delete(component);
				});
			};

			for (var _iterator = targetSet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				_loop();
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}
}

function removeDependencies(component) {
	var observed = component[TARGET_KEY];
	if (dependencies != null) {
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = dependencies[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var dependObj = _step2.value;

				for (var prop in dependObj) {
					var listenerSet = dependObj[OBS_KEY][prop];
					listenerSet && listenerSet.delete(component);
				}
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	}
}

function startRender(component) {
	phase = 1;
	currentComponent = component;
	unsubscribe(component);
	component[TARGET_KEY] = new Set();
}

function endRender() {
	phase = 2;
	currentComponent = null;
}

function updateComponents() {
	var updateComponents = new Set();
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = updateComponentSets[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var s = _step3.value;
			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = s[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var c = _step5.value;

					updateComponents.add(c);
				}
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = updateComponents[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var c = _step4.value;

			c.setState({});
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}

	updateComponentSets = new Set();
	timeouter = null;
}

exports.subscribe = subscribe;
exports.unsubscribe = unsubscribe;
exports.notify = notify;
exports.startRender = startRender;
exports.endRender = endRender;
exports.OBS_KEY = OBS_KEY;
exports.TARGET_KEY = TARGET_KEY;
exports.KEY_FOR_SELF = KEY_FOR_SELF;