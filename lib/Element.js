'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Decorator = require('./Decorator');

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