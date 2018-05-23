(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactObser"] = factory(require("react"), require("react-dom"));
	else
		root["ReactObser"] = factory(root["react"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Decorator = __webpack_require__(1);

	var _Decorator2 = _interopRequireDefault(_Decorator);

	var _Element = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		observer: _Decorator2.default,
		Any: _Element.Any,
		List: _Element.List
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = observer;

	var _Manager = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	function shallowEqual(objA, objB) {
		if (objA === objB) {
			return true;
		}

		if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
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

	function observer(originalClass) {

		return (function (_originalClass) {
			_inherits(_class, _originalClass);

			function _class() {
				_classCallCheck(this, _class);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
			}

			_createClass(_class, [{
				key: 'render',
				value: function render() {
					try {
						var _get2;

						(0, _Manager.startRender)(this);

						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						return (_get2 = _get(Object.getPrototypeOf(_class.prototype), 'render', this)).call.apply(_get2, [this].concat(args));
					} catch (err) {
						console.error(err);
					} finally {
						(0, _Manager.endRender)();
					}
				}
			}, {
				key: 'componentWillUnmount',
				value: function componentWillUnmount() {
					(0, _Manager.unmountComponent)(this);
					if (_get(Object.getPrototypeOf(_class.prototype), 'componentWillUnmount', this)) {
						var _get3;

						for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
							args[_key2] = arguments[_key2];
						}

						(_get3 = _get(Object.getPrototypeOf(_class.prototype), 'componentWillUnmount', this)).call.apply(_get3, [this].concat(args));
					}
				}
			}, {
				key: 'shouldComponentUpdate',
				value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
					if (_get(Object.getPrototypeOf(_class.prototype), 'shouldComponentUpdate', this) && _get(Object.getPrototypeOf(_class.prototype), 'shouldComponentUpdate', this).call(this, nextProps, nextState, nextContext)) {
						return true;
					} else {
						return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
					}
				}
			}]);

			return _class;
		})(originalClass);
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Decorator = __webpack_require__(1);

	var _Decorator2 = _interopRequireDefault(_Decorator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Any = (function (_React$Component) {
		_inherits(Any, _React$Component);

		function Any() {
			_classCallCheck(this, Any);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Any).apply(this, arguments));
		}

		_createClass(Any, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				if (this.model.componentWillMount) {
					this.model.componentWillMount(this);
				}
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				if (this.model.componentDidMount) {
					this.model.componentDidMount(this);
				}
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				if (this.model.componentWillReceiveProps) {
					this.model.componentWillReceiveProps(this, nextProps);
				}
			}
		}, {
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps, nextState) {
				if (this.model.shouldComponentUpdate) {
					this.model.shouldComponentUpdate(this, nextProps, nextState);
				}
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(nextProps, nextState) {
				if (this.model.componentWillUpdate) {
					this.model.componentWillUpdate(this, nextProps, nextState);
				}
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps, prevState) {
				if (this.model.componentDidUpdate) {
					this.model.componentDidUpdate(this, prevProps, prevState);
				}
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				if (this.model.componentWillUnmount) {
					this.model.componentWillUnmount(this);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				if (this.model == null) {
					return null;
				}
				if (Array.isArray(this.model)) {
					return _react2.default.createElement(List, { m: this.model });
				} else {
					return this.model.render(this);
				}
			}
		}, {
			key: 'model',
			get: function get() {
				return this.props.model || this.props.m;
			}
		}]);

		return Any;
	})(_react2.default.Component);

	Any = (0, _Decorator2.default)(Any) || Any;

	var List = (function (_React$Component2) {
		_inherits(List, _React$Component2);

		function List() {
			_classCallCheck(this, List);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
		}

		_createClass(List, [{
			key: 'render',
			value: function render() {
				var arr = this.props.model || this.props.m;
				if (arr == null) {
					return null;
				}
				var keyName = this.props.keyName;
				return arr.$map(function (item, index) {
					if (keyName == null || keyName == '$index') {
						return _react2.default.createElement(Any, { m: item, key: index });
					} else {
						return _react2.default.createElement(Any, { m: item, key: item[keyName] });
					}
				});
			}
		}]);

		return List;
	})(_react2.default.Component);

	List = (0, _Decorator2.default)(List) || List;

	exports.default = {
		Any: Any,
		List: List
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }
/******/ ])
});
;