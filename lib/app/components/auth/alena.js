"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlenaAuth = void 0;

var _preact = require("preact");

var _facebook = require("../facebook");

var _shoif = require("../../shoif");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AlenaAuth =
/*#__PURE__*/
function (_Component) {
  _inherits(AlenaAuth, _Component);

  _createClass(AlenaAuth, [{
    key: "getDefaultProps",
    value: function getDefaultProps() {
      return {};
    }
  }]);

  function AlenaAuth(props) {
    var _this;

    _classCallCheck(this, AlenaAuth);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AlenaAuth).call(this, props));
    _this.state = {
      status: 'prepared'
    };
    _this.getContent = _this.getContent.bind(_assertThisInitialized(_this));
    _this.handleAuth = _this.handleAuth.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AlenaAuth, [{
    key: "handleAuth",
    value: function handleAuth(status) {
      this.setState({
        status: status
      });
    }
  }, {
    key: "getContent",
    value: function getContent(status) {
      if (status === 'ok') {
        return 'Авторизация пройдера! У вас такие токены... ммм... 😉';
      }

      if (status === 'prepared') {
        return 'Такс, такс, такс. Будем проверять вас. Давно не мочились? ';
      }

      if (status === 'fail') {
        return 'Ну ничего, ПТУ еще ни кто не отменял.';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return <div className='alenaContainer'>
                <div className='alenaBox'>
                    <div className='alenaCenter'>
                        <img className='alenaImage' src='images/alena-2.png' />
                        <div className='alenaText'>{this.getContent(this.state.status)}</div>
                    </div>
                    <_shoif.ShowIf condition={this.state.status !== 'ok'}>
                        <div key='start'>
                            <div className='policy'>
                                Отправляя данные вы соглашаетесь с <a href='https://digitalgod.be/policy'>политикой конфиденциальности</a>
                            </div>
                            <div className='facebookBlock'>
                                <_facebook.FacebookLogin change={this.handleAuth} />
                            </div>
                        </div>
                    </_shoif.ShowIf>
                </div>
                <style jsx>
                {"\n                .alenaContainer {\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    height: 100%;\n                    width: 100%;\n                }\n                .alenaCenter{\n                    max-width: 560px;\n                    width: 100%;\n                    display: flex;\n                    flex-direction: row;\n                    justify-content: center;\n                    align-items: center;\n                    margin-bottom: 75px;\n                }\n                .alenaText{\n                    text-align: left;\n                    max-width: 360px;\n                    padding: 15px;\n                    font-size: 18px;\n                    line-height: 1.5;\n                    font-weight: 300;\n                    color: #000;\n                }\n                .alenaImage{\n                    width: 100px;\n                    height: auto;\n                }\n                "}
                </style>
            </div>;
    }
  }]);

  return AlenaAuth;
}(_preact.Component);

exports.AlenaAuth = AlenaAuth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL2FsZW5hLnRzeCJdLCJuYW1lcyI6WyJBbGVuYUF1dGgiLCJwcm9wcyIsInN0YXRlIiwic3RhdHVzIiwiZ2V0Q29udGVudCIsImJpbmQiLCJoYW5kbGVBdXRoIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRYUEsUzs7Ozs7OztzQ0FFUTtBQUNiLGFBQU8sRUFBUDtBQUdIOzs7QUFFRCxxQkFBWUMsS0FBWixFQUF1QjtBQUFBOztBQUFBOztBQUNuQixtRkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxNQUFNLEVBQUU7QUFEQyxLQUFiO0FBSUEsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQiwrQkFBbEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLCtCQUFsQjtBQVJtQjtBQVN0Qjs7OzsrQkFFVUYsTSxFQUFvQjtBQUMzQixXQUFLSSxRQUFMLENBQWM7QUFBRUosUUFBQUEsTUFBTSxFQUFFQTtBQUFWLE9BQWQ7QUFDSDs7OytCQUVVQSxNLEVBQW9CO0FBQzNCLFVBQUlBLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ2pCLGVBQU8sdURBQVA7QUFDSDs7QUFFRCxVQUFJQSxNQUFNLEtBQUssVUFBZixFQUEyQjtBQUN2QixlQUFPLDREQUFQO0FBQ0g7O0FBRUQsVUFBSUEsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDbkIsZUFBTyx1Q0FBUDtBQUNIO0FBQ0o7Ozs2QkFFUTtBQUNMLGFBQ0ksQ0FBQyxHQUFELENBQUssVUFBVSxnQkFBZjtnQkFDSSxDQUFDLEdBQUQsQ0FBSyxVQUFVLFVBQWY7b0JBQ0ksQ0FBQyxHQUFELENBQUssVUFBVSxhQUFmO3dCQUNJLENBQUMsR0FBRCxDQUFLLFVBQVUsWUFBZixDQUE0QixJQUFJLG9CQUFoQzt3QkFDQSxDQUFDLEdBQUQsQ0FBSyxVQUFVLFdBQWYsQ0FBMkIsQ0FBQyxLQUFLQyxVQUFMLENBQWdCLEtBQUtGLEtBQUwsQ0FBV0MsTUFBM0IsQ0FBRCxDQUFvQyxFQUFFLEdBQUY7b0JBQ25FLEVBQUUsR0FBRjtvQkFDQSxlQUFRLFVBQVUsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLE1BQVgsS0FBc0IsSUFBdkIsQ0FBbEI7d0JBQ0ksQ0FBQyxHQUFELENBQUssSUFBSSxPQUFUOzRCQUNJLENBQUMsR0FBRCxDQUFLLFVBQVUsUUFBZjttRUFDdUMsQ0FBQyxDQUFELENBQUcsS0FBSyw4QkFBUixDQUF1Qyw0QkFBNEIsRUFBRSxDQUFGOzRCQUMxRyxFQUFFLEdBQUY7NEJBQ0EsQ0FBQyxHQUFELENBQUssVUFBVSxlQUFmO2dDQUNJLHlCQUFlLE9BQU8sQ0FBQyxLQUFLRyxVQUFOLENBQXRCOzRCQUNKLEVBQUUsR0FBRjt3QkFDSixFQUFFLEdBQUY7b0JBQ0o7Z0JBQ0osRUFBRSxHQUFGO2dCQUNBLENBQUMsS0FBRCxDQUFPLEdBQVA7Z0JBQ0E7Z0JBK0JBLEVBQUUsS0FBRjtZQUNKLEVBQUUsR0FBRixDQW5ESjtBQXFESDs7OztFQTNGMEJFLGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBoIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IEZhY2Vib29rTG9naW4gfSBmcm9tICcuLi9mYWNlYm9vayc7XG5pbXBvcnQgeyBTaG93SWYgfSBmcm9tICcuLi8uLi9zaG9pZic7XG5cbnR5cGUgQXV0aFN0YXR1cyA9ICdvaycgfCAncHJlcGFyZWQnIHwgJ2ZhaWwnO1xuXG5pbnRlcmZhY2UgQXV0aFN0YXRlIHtcbiAgICBzdGF0dXM6IEF1dGhTdGF0dXM7XG59XG5cbmV4cG9ydCBjbGFzcyBBbGVuYUF1dGggZXh0ZW5kcyBDb21wb25lbnQ8e30sIEF1dGhTdGF0ZT57XG4gICAgXG4gICAgZ2V0RGVmYXVsdFByb3BzKCl7XG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiB7fSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0YXR1czogJ3ByZXBhcmVkJ1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRDb250ZW50ID0gdGhpcy5nZXRDb250ZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQXV0aCA9IHRoaXMuaGFuZGxlQXV0aC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZUF1dGgoc3RhdHVzOiBBdXRoU3RhdHVzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IHN0YXR1cyB9KTtcbiAgICB9XG5cbiAgICBnZXRDb250ZW50KHN0YXR1czogQXV0aFN0YXR1cykge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAnb2snKSB7XG4gICAgICAgICAgICByZXR1cm4gJ9CQ0LLRgtC+0YDQuNC30LDRhtC40Y8g0L/RgNC+0LnQtNC10YDQsCEg0KMg0LLQsNGBINGC0LDQutC40LUg0YLQvtC60LXQvdGLLi4uINC80LzQvC4uLiDwn5iJJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdwcmVwYXJlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAn0KLQsNC60YEsINGC0LDQutGBLCDRgtCw0LrRgS4g0JHRg9C00LXQvCDQv9GA0L7QstC10YDRj9GC0Ywg0LLQsNGBLiDQlNCw0LLQvdC+INC90LUg0LzQvtGH0LjQu9C40YHRjD8gJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0dXMgPT09ICdmYWlsJykge1xuICAgICAgICAgICAgcmV0dXJuICfQndGDINC90LjRh9C10LPQviwg0J/QotCjINC10YnQtSDQvdC4INC60YLQviDQvdC1INC+0YLQvNC10L3Rj9C7LidcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGVuYUNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZW5hQm94Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZW5hQ2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdhbGVuYUltYWdlJyBzcmM9J2ltYWdlcy9hbGVuYS0yLnBuZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGVuYVRleHQnPnt0aGlzLmdldENvbnRlbnQodGhpcy5zdGF0ZS5zdGF0dXMpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFNob3dJZiBjb25kaXRpb249e3RoaXMuc3RhdGUuc3RhdHVzICE9PSAnb2snfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PSdzdGFydCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BvbGljeSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0YLQv9GA0LDQstC70Y/RjyDQtNCw0L3QvdGL0LUg0LLRiyDRgdC+0LPQu9Cw0YjQsNC10YLQtdGB0Ywg0YEgPGEgaHJlZj0naHR0cHM6Ly9kaWdpdGFsZ29kLmJlL3BvbGljeSc+0L/QvtC70LjRgtC40LrQvtC5INC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3QvtGB0YLQuDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmFjZWJvb2tCbG9jayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0xvZ2luIGNoYW5nZT17dGhpcy5oYW5kbGVBdXRofSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvU2hvd0lmPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuYWxlbmFDb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFsZW5hQ2VudGVye1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU2MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hbGVuYVRleHR7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hbGVuYUltYWdle1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG5cbn1cbiJdfQ==