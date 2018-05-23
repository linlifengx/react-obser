'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = observer;

var _Manager = require('./Manager');

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