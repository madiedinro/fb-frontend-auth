"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _preact = require("preact");

var _auth = require("./components/auth");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      title: 'local state'
    });

    _this.state.title += ' - ' + props.title;
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        var state = _this2.state;
        state.title = "Preact's [componentDidMount] worked as expected";

        _this2.setState(state);
      }, 2000);
    }
  }, {
    key: "render",
    value: function render(props, state) {
      return <div className='wrapper'>
				<_auth.AlenaAuth />
			</div>;
    }
  }]);

  return App;
}(_preact.Component);

exports.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvYXBwLnRzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInRpdGxlIiwic3RhdGUiLCJzZXRUaW1lb3V0Iiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVVhQSxHOzs7OztBQUtaLGVBQVlDLEtBQVosRUFBNkI7QUFBQTs7QUFBQTs7QUFDNUIsNkVBQU1BLEtBQU47O0FBRDRCLDREQUpkO0FBQ2RDLE1BQUFBLEtBQUssRUFBRTtBQURPLEtBSWM7O0FBRTVCLFVBQUtDLEtBQUwsQ0FBV0QsS0FBWCxJQUFvQixRQUFRRCxLQUFLLENBQUNDLEtBQWxDO0FBRjRCO0FBRzVCOzs7O3dDQUVtQjtBQUFBOztBQUNuQkUsTUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDaEIsWUFBSUQsS0FBSyxHQUFHLE1BQUksQ0FBQ0EsS0FBakI7QUFFQUEsUUFBQUEsS0FBSyxDQUFDRCxLQUFOOztBQUNBLFFBQUEsTUFBSSxDQUFDRyxRQUFMLENBQWNGLEtBQWQ7QUFDQSxPQUxTLEVBS1AsSUFMTyxDQUFWO0FBTUE7OzsyQkFFTUYsSyxFQUFpQkUsSyxFQUFpQjtBQUN4QyxhQUNDLENBQUMsR0FBRCxDQUFLLFVBQVUsU0FBZjtJQUNDO0dBQ0QsRUFBRSxHQUFGLENBSEQ7QUFLQTs7OztFQXpCdUJHLGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IEFsZW5hQXV0aCB9IGZyb20gJy4vY29tcG9uZW50cy9hdXRoJztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBQcm9wcyB7XG5cdHRpdGxlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBBcHBTdGF0ZSB7XG5cdHRpdGxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQ8QXBwUHJvcHMsIEFwcFN0YXRlPiB7XG5cdHB1YmxpYyBzdGF0ZSA9IHtcblx0XHR0aXRsZTogJ2xvY2FsIHN0YXRlJ1xuXHR9O1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzOiBBcHBQcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlLnRpdGxlICs9ICcgLSAnICsgcHJvcHMudGl0bGU7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGxldCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cblx0XHRcdHN0YXRlLnRpdGxlID0gYFByZWFjdCdzIFtjb21wb25lbnREaWRNb3VudF0gd29ya2VkIGFzIGV4cGVjdGVkYDtcblx0XHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuXHRcdH0sIDIwMDApO1xuXHR9XG5cblx0cmVuZGVyKHByb3BzOiBBcHBQcm9wcywgc3RhdGU6IEFwcFN0YXRlKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cblx0XHRcdFx0PEFsZW5hQXV0aCAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59Il19