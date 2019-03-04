"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlenaAuth = void 0;

var _preact = require("preact");

var _shoif = require("../../shoif");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
      return {
        buttonText: 'Отправить'
      };
    }
  }]);

  function AlenaAuth(props) {
    var _this;

    _classCallCheck(this, AlenaAuth);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AlenaAuth).call(this, props));
    _this.state = {
      status: 'prepared'
    };
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
    key: "mainActionCalled",
    value: function mainActionCalled(e) {
      this.props.onClick();
    }
  }, {
    key: "render",
    value: function render() {
      return <div className='alenaContainer'>
                <div className='alenaBox'>
                    <div className='alenaCenter'>
                        <img className='alenaImage' src='images/alena-2.png' />
                        <div className='alenaText'>{this.props.mainText}</div>
                    </div>
                    <_shoif.ShowIf>
                        <div className='buttonBlock'>
                            <div>
                                <button onClick={this.mainActionCalled} className='submitButton'></button>
                            </div>
                        </div>
                    </_shoif.ShowIf>
                    <div key='start'>{this.props.bottomText}</div>
                </div>
                <style jsx>
                {"\n                .alenaContainer {\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    height: 100%;\n                    width: 100%;\n                }\n                .alenaContainer .alenaCenter{\n                    max-width: 560px;\n                    width: 100%;\n                    display: flex;\n                    flex-direction: row;\n                    justify-content: center;\n                    align-items: center;\n                    margin-bottom: 75px;\n                }\n                .alenaContainer .alenaText{\n                    text-align: left;\n                    max-width: 360px;\n                    padding: 15px;\n                    font-size: 18px;\n                    line-height: 1.5;\n                    font-weight: 300;\n                    color: #000;\n                }\n                .alenaContainer .alenaImage{\n                    width: 100px;\n                    height: auto;\n                }\n                .buttonBlock{\n                    display: flex;\n                    flex-direction: row;\n                    justify-content: center;\n                    align-items: center;\n                }\n                .buttonBlock .submitButton {\n                    color: #ffffff;\n                    background-color: #8c00ff;\n                    border-radius: 30px;\n                    -moz-border-radius: 30px;\n                    -webkit-border-radius: 30px;\n                    text-transform: uppercase;\n                    height: 60px;\n                    border: 0 none;\n                    font-size: 16px;\n                    padding-left: 60px;\n                    padding-right: 60px;\n                    -webkit-appearance: none;\n                    font-weight: 700;\n                    white-space: nowrap;\n                    background-image: none;\n                    cursor: pointer;\n                    margin: 0;\n                    -webkit-box-sizing: border-box;\n                    -moz-box-sizing: border-box;\n                    box-sizing: border-box;\n                    outline: none;\n                }\n                "}
                </style>
            </div>;
    }
  }]);

  return AlenaAuth;
}(_preact.Component);

exports.AlenaAuth = AlenaAuth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9hbGVuYS9hbGVuYS50c3giXSwibmFtZXMiOlsiQWxlbmFBdXRoIiwiYnV0dG9uVGV4dCIsInByb3BzIiwic3RhdGUiLCJzdGF0dXMiLCJzZXRTdGF0ZSIsImUiLCJvbkNsaWNrIiwibWFpblRleHQiLCJtYWluQWN0aW9uQ2FsbGVkIiwiYm90dG9tVGV4dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWdCYUEsUzs7Ozs7OztzQ0FFUTtBQUNiLGFBQU87QUFDSEMsUUFBQUEsVUFBVSxFQUFFO0FBRFQsT0FBUDtBQUdIOzs7QUFFRCxxQkFBWUMsS0FBWixFQUErQjtBQUFBOztBQUFBOztBQUMzQixtRkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxNQUFNLEVBQUU7QUFEQyxLQUFiO0FBSDJCO0FBTTlCOzs7OytCQUVVQSxNLEVBQW9CO0FBQzNCLFdBQUtDLFFBQUwsQ0FBYztBQUFFRCxRQUFBQSxNQUFNLEVBQUVBO0FBQVYsT0FBZDtBQUNIOzs7cUNBRWdCRSxDLEVBQUU7QUFDZixXQUFLSixLQUFMLENBQVdLLE9BQVg7QUFDSDs7OzZCQUVRO0FBQ0wsYUFDSSxDQUFDLEdBQUQsQ0FBSyxVQUFVLGdCQUFmO2dCQUNJLENBQUMsR0FBRCxDQUFLLFVBQVUsVUFBZjtvQkFDSSxDQUFDLEdBQUQsQ0FBSyxVQUFVLGFBQWY7d0JBQ0ksQ0FBQyxHQUFELENBQUssVUFBVSxZQUFmLENBQTRCLElBQUksb0JBQWhDO3dCQUNBLENBQUMsR0FBRCxDQUFLLFVBQVUsV0FBZixDQUEyQixDQUFDLEtBQUtMLEtBQUwsQ0FBV00sUUFBWixDQUFxQixFQUFFLEdBQUY7b0JBQ3BELEVBQUUsR0FBRjtvQkFDQTt3QkFDSSxDQUFDLEdBQUQsQ0FBSyxVQUFVLGFBQWY7NEJBQ0ksQ0FBQyxHQUFEO2dDQUNJLENBQUMsTUFBRCxDQUFRLFFBQVEsQ0FBQyxLQUFLQyxnQkFBTixDQUFoQixDQUF3QyxVQUFVLGNBQWxELENBQWlFLEVBQUUsTUFBRjs0QkFDckUsRUFBRSxHQUFGO3dCQUNKLEVBQUUsR0FBRjtvQkFDSjtvQkFDQSxDQUFDLEdBQUQsQ0FBSyxJQUFJLE9BQVQsQ0FBaUIsQ0FBQyxLQUFLUCxLQUFMLENBQVdRLFVBQVosQ0FBdUIsRUFBRSxHQUFGO2dCQUM1QyxFQUFFLEdBQUY7Z0JBQ0EsQ0FBQyxLQUFELENBQU8sR0FBUDtnQkFDQTtnQkE0REEsRUFBRSxLQUFGO1lBQ0osRUFBRSxHQUFGLENBOUVKO0FBZ0ZIOzs7O0VBekcwQkMsaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGggfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgRmFjZWJvb2tMb2dpbiB9IGZyb20gJy4uL2ZhY2Vib29rJztcbmltcG9ydCB7IFNob3dJZiB9IGZyb20gJy4uLy4uL3Nob2lmJztcblxudHlwZSBBdXRoU3RhdHVzID0gJ29rJyB8ICdwcmVwYXJlZCcgfCAnZmFpbCc7XG5cblxuaW50ZXJmYWNlIEFsZW5hUHJvcHMge1xuICAgIG1haW5UZXh0OiBzdHJpbmcsXG4gICAgYnV0dG9uVGV4dD86IHN0cmluZyxcbiAgICBib3R0b21UZXh0Pzogc3RyaW5nLFxuICAgIG9uQ2xpY2s6ICgpID0+IHt9LFxufVxuXG5pbnRlcmZhY2UgQXV0aFN0YXRlIHtcbiAgICBzdGF0dXM6IEF1dGhTdGF0dXM7XG59XG5cbmV4cG9ydCBjbGFzcyBBbGVuYUF1dGggZXh0ZW5kcyBDb21wb25lbnQ8QWxlbmFQcm9wcywgQXV0aFN0YXRlPntcbiAgICBcbiAgICBnZXREZWZhdWx0UHJvcHMoKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6ICfQntGC0L/RgNCw0LLQuNGC0YwnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQWxlbmFQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0YXR1czogJ3ByZXBhcmVkJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQXV0aChzdGF0dXM6IEF1dGhTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogc3RhdHVzIH0pO1xuICAgIH1cblxuICAgIG1haW5BY3Rpb25DYWxsZWQoZSl7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljaygpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZW5hQ29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxlbmFCb3gnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxlbmFDZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2FsZW5hSW1hZ2UnIHNyYz0naW1hZ2VzL2FsZW5hLTIucG5nJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZW5hVGV4dCc+e3RoaXMucHJvcHMubWFpblRleHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8U2hvd0lmPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkJsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMubWFpbkFjdGlvbkNhbGxlZH0gY2xhc3NOYW1lPSdzdWJtaXRCdXR0b24nPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvU2hvd0lmPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT0nc3RhcnQnPnt0aGlzLnByb3BzLmJvdHRvbVRleHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5hbGVuYUNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWxlbmFDb250YWluZXIgLmFsZW5hQ2VudGVye1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU2MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hbGVuYUNvbnRhaW5lciAuYWxlbmFUZXh0e1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM2MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWxlbmFDb250YWluZXIgLmFsZW5hSW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYnV0dG9uQmxvY2t7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYnV0dG9uQmxvY2sgLnN1Ym1pdEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGMwMGZmO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAgbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=