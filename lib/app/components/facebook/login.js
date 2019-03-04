"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookLogin = void 0;

var _preact = require("preact");

var url = _interopRequireWildcard(require("url"));

var queryString = _interopRequireWildcard(require("query-string"));

var _isomorphicUnfetch = _interopRequireDefault(require("isomorphic-unfetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var facebookInitOptions = {
  appId: APP_CONFIG.appId,
  version: 'v3.2',
  cookie: true,
  xfbml: true
};

var FacebookLogin =
/*#__PURE__*/
function (_Component) {
  _inherits(FacebookLogin, _Component);

  function FacebookLogin(props) {
    var _this;

    _classCallCheck(this, FacebookLogin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FacebookLogin).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      scriptLoaded: false,
      inited: false,
      eventsSubscribed: false,
      xfbmlRendered: false,
      login: false,
      status: 'unknown'
    });

    _this.onLoadFacebookSDKScript = _this.onLoadFacebookSDKScript.bind(_assertThisInitialized(_this));
    _this.facebookInit = _this.facebookInit.bind(_assertThisInitialized(_this));
    _this.subscribeFacebookEvents = _this.subscribeFacebookEvents.bind(_assertThisInitialized(_this));
    _this.onFBMLrender = _this.onFBMLrender.bind(_assertThisInitialized(_this));
    _this.onFacebookLogin = _this.onFacebookLogin.bind(_assertThisInitialized(_this));
    _this.sendAuthResponse = _this.sendAuthResponse.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FacebookLogin, [{
    key: "subscribeFacebookEvents",
    value: function () {
      var _subscribeFacebookEvents = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.state.inited) {
                  FB.Event.subscribe('xfbml.render', this.onFBMLrender);
                  this.setState({
                    eventsSubscribed: true
                  });
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function subscribeFacebookEvents() {
        return _subscribeFacebookEvents.apply(this, arguments);
      }

      return subscribeFacebookEvents;
    }()
  }, {
    key: "facebookInit",
    value: function () {
      var _facebookInit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                window['fbAsyncInit'] = function () {
                  FB.init(facebookInitOptions);
                };

                if (!this.state.scriptLoaded) {
                  _context3.next = 4;
                  break;
                }

                _context3.next = 4;
                return (
                  /*#__PURE__*/
                  _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            window['fbAsyncInit'] = function () {
                              FB.init(facebookInitOptions);
                            };

                          case 1:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }))
                );

              case 4:
                if (typeof FB !== 'undefined') {
                  this.setState({
                    inited: true
                  });
                }

                if (!this.state.inited) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 8;
                return this.subscribeFacebookEvents();

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function facebookInit() {
        return _facebookInit.apply(this, arguments);
      }

      return facebookInit;
    }()
  }, {
    key: "onFBMLrender",
    value: function onFBMLrender() {
      this.setState({
        xfbmlRendered: true
      });
    }
  }, {
    key: "sendAuthResponse",
    value: function () {
      var _sendAuthResponse = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(authResponse) {
        var path, params, response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                path = url.parse(location.href);
                params = queryString.parse(path.search);
                _context4.prev = 2;
                _context4.next = 5;
                return (0, _isomorphicUnfetch.default)("".concat(APP_CONFIG.serviceUrl), {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    params: params,
                    authResponse: authResponse
                  })
                });

              case 5:
                response = _context4.sent;

                if (response.status === 200) {
                  this.props.change('ok');
                  this.setState({
                    login: true
                  });
                }

                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](2);
                console.log(_context4.t0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 9]]);
      }));

      function sendAuthResponse(_x) {
        return _sendAuthResponse.apply(this, arguments);
      }

      return sendAuthResponse;
    }()
  }, {
    key: "onFacebookLogin",
    value: function onFacebookLogin(event) {
      var _this2 = this;

      event.preventDefault();
      FB.login(function (_ref2) {
        var status = _ref2.status,
            authResponse = _ref2.authResponse;

        _this2.setState({
          status: status
        });

        if (status === 'connected') {
          _this2.sendAuthResponse(authResponse);
        }
      }, {
        auth_type: 'rerequest',
        scope: 'email'
      });
    }
  }, {
    key: "onLoadFacebookSDKScript",
    value: function onLoadFacebookSDKScript(_event) {
      this.setState({
        scriptLoaded: true
      });
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(this.state.scriptLoaded && this.state.inited && !this.state.eventsSubscribed)) {
                  _context5.next = 3;
                  break;
                }

                _context5.next = 3;
                return this.subscribeFacebookEvents();

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          scriptLoaded = _this$state.scriptLoaded,
          inited = _this$state.inited;

      if (scriptLoaded && !inited) {
        this.facebookInit();
      }

      return <div>
                <button onClick={this.onFacebookLogin} type='submit' className='submitButton'>Отправить</button>
                <div id="fb-root"></div>
                <script async defer src="https://connect.facebook.net/ru_RU/sdk.js" onLoad={this.onLoadFacebookSDKScript}></script>
            </div>;
    }
  }]);

  return FacebookLogin;
}(_preact.Component);

exports.FacebookLogin = FacebookLogin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9mYWNlYm9vay9sb2dpbi50c3giXSwibmFtZXMiOlsiZmFjZWJvb2tJbml0T3B0aW9ucyIsImFwcElkIiwiQVBQX0NPTkZJRyIsInZlcnNpb24iLCJjb29raWUiLCJ4ZmJtbCIsIkZhY2Vib29rTG9naW4iLCJwcm9wcyIsInNjcmlwdExvYWRlZCIsImluaXRlZCIsImV2ZW50c1N1YnNjcmliZWQiLCJ4ZmJtbFJlbmRlcmVkIiwibG9naW4iLCJzdGF0dXMiLCJvbkxvYWRGYWNlYm9va1NES1NjcmlwdCIsImJpbmQiLCJmYWNlYm9va0luaXQiLCJzdWJzY3JpYmVGYWNlYm9va0V2ZW50cyIsIm9uRkJNTHJlbmRlciIsIm9uRmFjZWJvb2tMb2dpbiIsInNlbmRBdXRoUmVzcG9uc2UiLCJzdGF0ZSIsIkZCIiwiRXZlbnQiLCJzdWJzY3JpYmUiLCJzZXRTdGF0ZSIsIndpbmRvdyIsImluaXQiLCJhdXRoUmVzcG9uc2UiLCJwYXRoIiwidXJsIiwicGFyc2UiLCJsb2NhdGlvbiIsImhyZWYiLCJwYXJhbXMiLCJxdWVyeVN0cmluZyIsInNlYXJjaCIsInNlcnZpY2VVcmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXV0aF90eXBlIiwic2NvcGUiLCJfZXZlbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUc7QUFDeEJDLEVBQUFBLEtBQUssRUFBRUMsVUFBVSxDQUFDRCxLQURNO0FBRXhCRSxFQUFBQSxPQUFPLEVBQUUsTUFGZTtBQUd4QkMsRUFBQUEsTUFBTSxFQUFFLElBSGdCO0FBSXhCQyxFQUFBQSxLQUFLLEVB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O0FBQ3pCLGFBQUtPLFlBQUw7QUFDSDs7QUFFRCxhQUNJLENBQUMsR0FBRDtnQkFDSSxDQUFDLE1BQUQsQ0FBUSxRQUFRLENBQUMsS0FBS0csZUFBTixDQUFoQixDQUF1QyxLQUFLLFFBQTVDLENBQXFELFVBQVUsY0FBL0QsQ0FBOEUsU0FBUyxFQUFFLE1BQUY7Z0JBQ3ZGLENBQUMsR0FBRCxDQUFLLEdBQUcsU0FBUixDQUFtQixFQUFFLEdBQUY7Z0JBQ25CLENBQUMsTUFBRCxDQUFRLEtBQVIsQ0FBYyxLQUFkLENBQW9CLElBQUksMkNBQXhCLENBQW9FLE9BQU8sQ0FBQyxLQUFLTCx1QkFBTixDQUEzRSxDQUEyRyxFQUFFLE1BQUY7WUFDL0csRUFBRSxHQUFGLENBTEo7QUFPSDs7OztFQW5IOEJzQyxpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgKiBhcyB1cmwgZnJvbSAndXJsJztcbmltcG9ydCAqIGFzIHF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuY29uc3QgZmFjZWJvb2tJbml0T3B0aW9ucyA9IHtcbiAgICBhcHBJZDogQVBQX0NPTkZJRy5hcHBJZCxcbiAgICB2ZXJzaW9uOiAndjMuMicsXG4gICAgY29va2llOiB0cnVlLFxuICAgIHhmYm1sOiB0cnVlXG59XG5cbnR5cGUgRmFjZWJvb2tVc2VyU3RhdHVzID0gJ2F1dGhvcml6YXRpb25fZXhwaXJlZCcgfCAnY29ubmVjdGVkJyB8ICdub3RfYXV0aG9yaXplZCcgfCAndW5rbm93bic7XG5cbmludGVyZmFjZSBJbml0T3B0aW9ucyB7XG4gICAgc2NyaXB0TG9hZGVkOiBib29sZWFuO1xuICAgIGluaXRlZDogYm9vbGVhbjtcbiAgICBldmVudHNTdWJzY3JpYmVkOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgRmFjZWJvb2tFdmVudHMge1xuICAgIHhmYm1sUmVuZGVyZWQ6IGJvb2xlYW47XG4gICAgbG9naW46IGJvb2xlYW47XG4gICAgc3RhdHVzOiBGYWNlYm9va1VzZXJTdGF0dXNcbn1cblxuaW50ZXJmYWNlIEF1dGgge1xuICAgIGNoYW5nZTogRnVuY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlYm9va0xvZ2luIGV4dGVuZHMgQ29tcG9uZW50PEF1dGgsIEluaXRPcHRpb25zICYgRmFjZWJvb2tFdmVudHM+IHtcblxuICAgIHB1YmxpYyBzdGF0ZTogSW5pdE9wdGlvbnMgJiBGYWNlYm9va0V2ZW50cyA9IHtcbiAgICAgICAgc2NyaXB0TG9hZGVkOiBmYWxzZSxcbiAgICAgICAgaW5pdGVkOiBmYWxzZSxcbiAgICAgICAgZXZlbnRzU3Vic2NyaWJlZDogZmFsc2UsXG4gICAgICAgIHhmYm1sUmVuZGVyZWQ6IGZhbHNlLFxuICAgICAgICBsb2dpbjogZmFsc2UsXG4gICAgICAgIHN0YXR1czogJ3Vua25vd24nXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBBdXRoKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMub25Mb2FkRmFjZWJvb2tTREtTY3JpcHQgPSB0aGlzLm9uTG9hZEZhY2Vib29rU0RLU2NyaXB0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmFjZWJvb2tJbml0ID0gdGhpcy5mYWNlYm9va0luaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVGYWNlYm9va0V2ZW50cyA9IHRoaXMuc3Vic2NyaWJlRmFjZWJvb2tFdmVudHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkZCTUxyZW5kZXIgPSB0aGlzLm9uRkJNTHJlbmRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRmFjZWJvb2tMb2dpbiA9IHRoaXMub25GYWNlYm9va0xvZ2luLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VuZEF1dGhSZXNwb25zZSA9IHRoaXMuc2VuZEF1dGhSZXNwb25zZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHN1YnNjcmliZUZhY2Vib29rRXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbml0ZWQpIHtcbiAgICAgICAgICAgIEZCLkV2ZW50LnN1YnNjcmliZSgneGZibWwucmVuZGVyJywgdGhpcy5vbkZCTUxyZW5kZXIpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV2ZW50c1N1YnNjcmliZWQ6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmYWNlYm9va0luaXQoKSB7XG4gICAgICAgIHdpbmRvd1snZmJBc3luY0luaXQnXSA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIEZCLmluaXQoZmFjZWJvb2tJbml0T3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNjcmlwdExvYWRlZCkge1xuICAgICAgICAgICAgYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbJ2ZiQXN5bmNJbml0J10gPSAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEZCLmluaXQoZmFjZWJvb2tJbml0T3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIEZCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluaXRlZDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmluaXRlZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdWJzY3JpYmVGYWNlYm9va0V2ZW50cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25GQk1McmVuZGVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgeGZibWxSZW5kZXJlZDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBzZW5kQXV0aFJlc3BvbnNlKGF1dGhSZXNwb25zZTogZmIuQXV0aFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB1cmwucGFyc2UobG9jYXRpb24uaHJlZik7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKHBhdGguc2VhcmNoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUFBfQ09ORklHLnNlcnZpY2VVcmx9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhSZXNwb25zZTogYXV0aFJlc3BvbnNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoYW5nZSgnb2snKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9naW46IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZhY2Vib29rTG9naW4oZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIEZCLmxvZ2luKCh7IHN0YXR1cywgYXV0aFJlc3BvbnNlIH06IGZiLlN0YXR1c1Jlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzIH0pXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEF1dGhSZXNwb25zZShhdXRoUmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgYXV0aF90eXBlOiAncmVyZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICBzY29wZTogJ2VtYWlsJ1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkxvYWRGYWNlYm9va1NES1NjcmlwdChfZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzY3JpcHRMb2FkZWQ6IHRydWUgfSlcbiAgICB9XG5cbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2NyaXB0TG9hZGVkICYmIHRoaXMuc3RhdGUuaW5pdGVkICYmICF0aGlzLnN0YXRlLmV2ZW50c1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3Vic2NyaWJlRmFjZWJvb2tFdmVudHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHsgc2NyaXB0TG9hZGVkLCBpbml0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChzY3JpcHRMb2FkZWQgJiYgIWluaXRlZCkge1xuICAgICAgICAgICAgdGhpcy5mYWNlYm9va0luaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkZhY2Vib29rTG9naW59IHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdzdWJtaXRCdXR0b24nPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmYi1yb290XCIgPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgZGVmZXIgc3JjPVwiaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9ydV9SVS9zZGsuanNcIiBvbkxvYWQ9e3RoaXMub25Mb2FkRmFjZWJvb2tTREtTY3JpcHR9ID48L3NjcmlwdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG59Il19