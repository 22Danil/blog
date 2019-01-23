/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = __webpack_require__(2);
	
	var _index3 = __webpack_require__(3);
	
	var _friends = __webpack_require__(4);
	
	var _template = __webpack_require__(5);
	
	var _registration = __webpack_require__(6);
	
	var _UserMain = __webpack_require__(7);
	
	var _githubContributor = __webpack_require__(12);
	
	var _webDevTec = __webpack_require__(13);
	
	var _friend = __webpack_require__(14);
	
	var _navbar = __webpack_require__(15);
	
	var _malarkey = __webpack_require__(16);
	
	/* global malarkey:false, moment:false */
	
	angular.module('blog', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'toastr', 'ngMaterial', 'ngMessages']).constant('malarkey', malarkey).constant('moment', moment).config(_index.config).config(_index2.routerConfig).run(_index3.runBlock).service('githubContributor', _githubContributor.GithubContributorService).service('webDevTec', _webDevTec.WebDevTecService).service('friendsService', _friend.FriendsService).controller('MyController', _template.MyController).controller('MyRegistration', _registration.MyRegistration).controller('MainUserController', _UserMain.MainUserController).controller('FriendController', _friends.FriendController).directive('acmeNavbar', _navbar.NavbarDirective).directive('acmeMalarkey', _malarkey.MalarkeyDirective);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	config.$inject = ["$logProvider", "toastrConfig"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	function config($logProvider, toastrConfig) {
	  'ngInject';
	  // Enable log
	
	  $logProvider.debugEnabled(true);
	
	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 5000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';
	
	  $stateProvider.state('home', {
	    url: '/',
	    templateUrl: 'app/main/template.html',
	    controller: 'MyController',
	    controllerAs: 'temp'
	  }).state('follows', {
	    url: '/registration',
	    templateUrl: 'app/main/registration.html',
	    controller: 'MyRegistration',
	    controllerAs: 'regist'
	  }).state('1', {
	    url: '/main',
	    templateUrl: 'app/main/UserMain.html',
	    controller: 'MainUserController',
	    controllerAs: 'MeUse'
	  });
	  $urlRouterProvider.otherwise('/');
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	runBlock.$inject = ["$log"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runBlock = runBlock;
	function runBlock($log) {
	  'ngInject';
	
	  $log.debug('runBlock end');
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FriendController = exports.FriendController = function () {
	  FriendController.$inject = ["$timeout", "friendsService", "webDevTec", "$http", "$scope"];
	  function FriendController($timeout, friendsService, webDevTec, $http, $scope) {
	    'ngInject';
	
	    _classCallCheck(this, FriendController);
	
	    var that = this;
	    $http.get('http://localhost:8000/follows').then(function (promise) {
	      //this.data=success.data;
	      $scope.pr = promise.data;
	      that.promise = promise.data;
	    }, function (error) {
	      this.promis = error;
	    });
	    this.promise = $scope.pr;
	    this.TablePerson = [];
	    this.myfirstsService = [];
	    this.success = null;
	    this.activate($timeout, friendsService, webDevTec, $http);
	  }
	
	  _createClass(FriendController, [{
	    key: 'activate',
	    value: function activate($timeout, friendsService, webDevTec, $http) {
	      this.getDataFriends(friendsService, webDevTec, $http);
	    }
	  }, {
	    key: 'getDataFriends',
	    value: function getDataFriends(friendsService, webDevTec) {
	      this.friendsData = friendsService.getFriends();
	      this.TablePerson = webDevTec.getdata();
	      this.success = friendsService.getData();
	    }
	  }]);
	
	  return FriendController;
	}();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MyController = exports.MyController = ["$timeout", "friendsService", "webDevTec", "$http", "$log", "$location", "$scope", function MyController($timeout, friendsService, webDevTec, $http, $log, $location, $scope) {
	    'ngInject';
	
	    _classCallCheck(this, MyController);
	
	    var modal = document.getElementById('myModal');
	    var span = document.getElementsByClassName("close")[0];
	    span.onclick = function () {
	        modal.style.display = "none";
	        $scope.Header = "";
	        $scope.textBody = "";
	    };
	
	    this.entry = function () {
	        $http.post('/entry', { name: $scope.Name, email: $scope.Email, password: $scope.Password }).then(function (result) {
	            localStorage.setItem('Token', result.data.token);
	            localStorage.setItem('Name', result.data.name);
	            localStorage.setItem('Id', result.data.id);
	            $location.path("/main");
	        }).catch(function (result) {
	            $scope.ErrorCode(result.status);
	        });
	    };
	    this.registration = function () {
	        $location.path("/registration");
	    };
	    $scope.ErrorCode = function (statusCode) {
	        if (statusCode === 401) {
	            $scope.Header = "Error: " + statusCode;
	            $scope.textBody = "Неверный логин или пароль!";
	            modal.style.display = "block";
	        }
	    };
	}];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MyRegistration = exports.MyRegistration = ["$timeout", "friendsService", "webDevTec", "$http", "$log", "$scope", "$location", function MyRegistration($timeout, friendsService, webDevTec, $http, $log, $scope, $location) {
	    'ngInject';
	
	    _classCallCheck(this, MyRegistration);
	
	    $scope.Name = "";
	    $scope.Email = "";
	    $scope.Password = "";
	
	    $scope.Header = "";
	    $scope.textBody = "";
	    var modal = document.getElementById('myModal');
	    var span = document.getElementsByClassName("close")[0];
	    span.onclick = function () {
	        modal.style.display = "none";
	        $scope.Header = "";
	        $scope.textBody = "";
	    };
	
	    this.registration = function () {
	        $http.post('/registration', { name: $scope.Name, email: $scope.Email, password: $scope.Password }).then(function () {
	            $location.path("/");
	        }).catch(function (result) {
	            $scope.ErrorCode(result.status);
	        });
	    };
	    $scope.ErrorCode = function (statusCode) {
	        if (statusCode === 401) {
	            $scope.Header = "Error: " + statusCode;
	            $scope.textBody = "Неверный логин или пароль!";
	            modal.style.display = "block";
	        }
	    };
	}];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MainUserController = undefined;
	
	var _format = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainUserController = exports.MainUserController = ["$timeout", "friendsService", "webDevTec", "$http", "$log", "$location", "$scope", function MainUserController($timeout, friendsService, webDevTec, $http, $log, $location, $scope) {
	    'ngInject';
	
	    _classCallCheck(this, MainUserController);
	
	    var modal = document.getElementById('myModal');
	    var span = document.getElementsByClassName("close")[0];
	    span.onclick = function () {
	        modal.style.display = "none";
	        $scope.Header = "";
	        $scope.textBody = "";
	    };
	
	    $scope.titleMain = "Здесь будут ваши записи";
	    $scope.forEditPost = false;
	    $scope.books = [];
	    $scope.Header = "";
	    $scope.textBody = "";
	    $scope.nameUser = localStorage.getItem("Name");
	    $scope.textForPost = "";
	    $scope.textForTitle = "";
	    $scope.textForSearch = "";
	    $scope.countId = 0;
	    $scope.test = "true";
	    var postEditId = void 0;
	    var postEditText = void 0;
	
	    $scope.userPost = function (id, name) {
	        $http.get('/api/user/' + id + '/posts', { headers: { token: localStorage.getItem("Token") } }).then(function (result) {
	            $scope.titleMain = "Записи пользователя: " + name;
	            $scope.books = result.data.result[0];
	        }).catch(function (result) {
	            $scope.ErrorCode(result.status);
	        });
	    };
	    $scope.Users = function () {
	        $http.get('/api/users', { headers: { token: localStorage.getItem("Token") } }).then(function (result) {
	            $scope.users = result.data.result[0];
	        }).catch(function (result) {
	            $scope.ErrorCode(result.status);
	        });
	    };
	    $scope.editPost = function (id, textContent) {
	        postEditId = id;
	        postEditText = textContent;
	        $scope.forEditPost = true;
	    };
	    $scope.savePost = function (id, textContent) {
	        if (id !== postEditId) {
	            $scope.ErrorCode(400);
	        } else if (textContent === postEditText) {
	            $scope.forEditPost = false;
	        } else {
	            $http.put('/api/posts/' + id, { newText: textContent, postID: id }, { headers: { token: localStorage.getItem("Token") } }).then(function (result) {
	                $scope.forEditPost = false;
	            }).catch(function (result) {
	                $scope.forEditPost = true;
	                $scope.ErrorCode(result.status);
	            });
	        }
	    };
	    $scope.newPost = function () {
	        var text = document.getElementsByClassName("addPost");
	        if (text[1].textContent !== "" && text[0].value !== "") {
	            $http.post('/api/posts', { textPost: text[1].textContent, textTitle: $scope.textForTitle }, { headers: { token: localStorage.getItem("Token") } }).then(function (result) {
	                if ($scope.books) {
	                    $scope.books.push(result.data.result);
	                    $scope.textForPost = "";
	                    $scope.textForTitle = "";
	                }
	            }).catch(function (result) {
	                $scope.ErrorCode(result.status);
	            });
	        }
	    };
	    $scope.Posts = function () {
	        $http.get('/api/user/' + localStorage.getItem("Id") + '/posts', { headers: { token: localStorage.getItem("Token") } }).then(function (result) {
	            $scope.titleMain = "Ваши записи";
	            $scope.books = result.data.result[0];
	        }).catch(function (result) {
	            $scope.ErrorCode(result.status);
	        });
	    };
	    $scope.AllPosts = function () {
	        $http.get('/api/posts', { headers: { token: localStorage.getItem("Token") } }).then(function (result) {
	            $scope.titleMain = "Записи всех пользователей";
	            $scope.books = result.data.result[0];
	        }).catch(function (result) {
	            $scope.ErrorCode(result.status);
	        });
	    };
	    $scope.Search = function () {
	        if ($scope.textForSearch !== "") {
	            $http.get('/api/search/' + $scope.textForSearch, { headers: { token: localStorage.getItem("Token") } }).then(function (result) {
	                $scope.books = result.data.result[0];
	                $scope.textForSearch = "";
	            }).catch(function (result) {
	                $scope.ErrorCode(result.status);
	                $scope.textForSearch = "";
	            });
	        }
	    };
	    $scope.delPost = function (id, name) {
	        $http.delete('/api/posts/' + id, { headers: { token: localStorage.getItem("Token") } }).then(function (result) {
	            if (result.data.user === name) {
	                $scope.Posts();
	            }
	            $scope.AllPosts();
	        }).catch(function (result) {
	            $scope.ErrorCode(result.status);
	        });
	    };
	    $scope.userDelete = function (id, name) {
	        $http.delete('/api/users/' + id, { headers: { token: localStorage.getItem("Token") } }).then(function (result) {
	            if (result.data.user == name) {
	                $location.path("/");
	            } else {
	                $scope.Users();
	            }
	        }).catch(function (result) {
	            $scope.ErrorCode(result.status);
	        });
	    };
	    $scope.ErrorCode = function (statusCode) {
	        if (statusCode === 403) {
	            $scope.Header = "Error: " + statusCode;
	            $scope.textBody = "У вас нет прав на это действие!";
	            modal.style.display = "block";
	        } else if (statusCode === 401) {
	            $scope.Header = "Error: " + statusCode;
	            $scope.textBody = "Неверный логин или пароль!";
	            modal.style.display = "block";
	        } else if (statusCode === 400) {
	            $scope.Header = "Error: " + statusCode;
	            $scope.textBody = "Неверный запрос!";
	            modal.style.display = "block";
	        } else if (statusCode === 500) {
	            $scope.Header = "Error: " + statusCode;
	            $scope.textBody = "Внутренняя ошибка сервера!";
	            modal.style.display = "block";
	        }
	    };
	    $scope.Users();
	}];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.toString = toString;
	exports.toISOString = toISOString;
	exports.format = format;
	
	var _format = __webpack_require__(9);
	
	var _hooks = __webpack_require__(11);
	
	_hooks.hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	
	function toString() {
	    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	}
	
	function toISOString() {
	    var m = this.clone().utc();
	    if (0 < m.year() && m.year() <= 9999) {
	        if ('function' === typeof Date.prototype.toISOString) {
	            // native implementation is ~50x faster, use it when we can
	            return this.toDate().toISOString();
	        } else {
	            return (0, _format.formatMoment)(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	        }
	    } else {
	        return (0, _format.formatMoment)(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	    }
	}
	
	function format(inputString) {
	    var output = (0, _format.formatMoment)(this, inputString || _hooks.hooks.defaultFormat);
	    return this.localeData().postformat(output);
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.formatTokenFunctions = exports.formattingTokens = undefined;
	exports.addFormatToken = addFormatToken;
	exports.formatMoment = formatMoment;
	exports.expandFormat = expandFormat;
	
	var _zeroFill = __webpack_require__(10);
	
	var _zeroFill2 = _interopRequireDefault(_zeroFill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var formattingTokens = exports.formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
	
	var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
	
	var formatFunctions = {};
	
	var formatTokenFunctions = exports.formatTokenFunctions = {};
	
	// token:    'M'
	// padded:   ['MM', 2]
	// ordinal:  'Mo'
	// callback: function () { this.month() + 1 }
	function addFormatToken(token, padded, ordinal, callback) {
	    var func = callback;
	    if (typeof callback === 'string') {
	        func = function func() {
	            return this[callback]();
	        };
	    }
	    if (token) {
	        formatTokenFunctions[token] = func;
	    }
	    if (padded) {
	        formatTokenFunctions[padded[0]] = function () {
	            return (0, _zeroFill2.default)(func.apply(this, arguments), padded[1], padded[2]);
	        };
	    }
	    if (ordinal) {
	        formatTokenFunctions[ordinal] = function () {
	            return this.localeData().ordinal(func.apply(this, arguments), token);
	        };
	    }
	}
	
	function removeFormattingTokens(input) {
	    if (input.match(/\[[\s\S]/)) {
	        return input.replace(/^\[|\]$/g, '');
	    }
	    return input.replace(/\\/g, '');
	}
	
	function makeFormatFunction(format) {
	    var array = format.match(formattingTokens),
	        i,
	        length;
	
	    for (i = 0, length = array.length; i < length; i++) {
	        if (formatTokenFunctions[array[i]]) {
	            array[i] = formatTokenFunctions[array[i]];
	        } else {
	            array[i] = removeFormattingTokens(array[i]);
	        }
	    }
	
	    return function (mom) {
	        var output = '';
	        for (i = 0; i < length; i++) {
	            output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	        }
	        return output;
	    };
	}
	
	// format date using native date object
	function formatMoment(m, format) {
	    if (!m.isValid()) {
	        return m.localeData().invalidDate();
	    }
	
	    format = expandFormat(format, m.localeData());
	    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
	
	    return formatFunctions[format](m);
	}
	
	function expandFormat(format, locale) {
	    var i = 5;
	
	    function replaceLongDateFormatTokens(input) {
	        return locale.longDateFormat(input) || input;
	    }
	
	    localFormattingTokens.lastIndex = 0;
	    while (i >= 0 && localFormattingTokens.test(format)) {
	        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	        localFormattingTokens.lastIndex = 0;
	        i -= 1;
	    }
	
	    return format;
	}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = zeroFill;
	function zeroFill(number, targetLength, forceSign) {
	    var absNumber = '' + Math.abs(number),
	        zerosToFill = targetLength - absNumber.length,
	        sign = number >= 0;
	    return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.hooks = hooks;
	exports.setHookCallback = setHookCallback;
	
	
	var hookCallback;
	
	function hooks() {
	    return hookCallback.apply(null, arguments);
	}
	
	// This is done to register the method called with moment()
	// without creating circular dependencies.
	function setHookCallback(callback) {
	    hookCallback = callback;
	}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GithubContributorService = exports.GithubContributorService = function () {
	  GithubContributorService.$inject = ["$log", "$http"];
	  function GithubContributorService($log, $http) {
	    'ngInject';
	
	    _classCallCheck(this, GithubContributorService);
	
	    this.$log = $log;
	    this.$http = $http;
	    this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	  }
	
	  _createClass(GithubContributorService, [{
	    key: 'getContributors',
	    value: function getContributors() {
	      var _this = this;
	
	      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
	
	      return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then(function (response) {
	        return response.data;
	      }).catch(function (error) {
	        _this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
	      });
	    }
	  }]);
	
	  return GithubContributorService;
	}();

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WebDevTecService = exports.WebDevTecService = function () {
	  function WebDevTecService() {
	    'ngInject';
	
	    _classCallCheck(this, WebDevTecService);
	
	    this.data = [{
	      'title': 'AngularJS',
	      'url': 'https://angularjs.org/',
	      'description': 'HTML enhanced for web apps!',
	      'logo': 'angular.png'
	    }, {
	      'title': 'BrowserSync',
	      'url': 'http://browsersync.io/',
	      'description': 'Time-saving synchronised browser testing.',
	      'logo': 'browsersync.png'
	    }, {
	      'title': 'GulpJS',
	      'url': 'http://gulpjs.com/',
	      'description': 'The streaming build system.',
	      'logo': 'gulp.png'
	    }, {
	      'title': 'Jasmine',
	      'url': 'http://jasmine.github.io/',
	      'description': 'Behavior-Driven JavaScript.',
	      'logo': 'jasmine.png'
	    }, {
	      'title': 'Karma =)',
	      'url': 'http://karma-runner.github.io/',
	      'description': 'Spectacular Test Runner for JavaScript.',
	      'logo': 'karma.png'
	    }, {
	      'title': 'Protractor',
	      'url': 'https://github.com/angular/protractor',
	      'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	      'logo': 'protractor.png'
	    }, {
	      'title': 'Bootstrap',
	      'url': 'http://getbootstrap.com/',
	      'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
	      'logo': 'bootstrap.png'
	    }, {
	      'title': 'ES6 (Babel formerly 6to5)',
	      'url': 'https://babeljs.io/',
	      'description': 'Turns ES6+ code into vanilla ES5, so you can use next generation features today.',
	      'logo': 'babel.png'
	    }];
	    this.dataYesNO = [{
	      'idPerson': "1000",
	      'Namehash': ["#cat"],
	      'massage': "Котик красивый?",
	      'Picture': "assets/images/PostAll/Cat1.jpg",
	      'Yes': "",
	      'No': "",
	      'voted': []
	    }, {
	      'idPerson': "1001",
	      'Namehash': ["#house"],
	      'massage': "Дом большой",
	      'Picture': "assets/images/PostAll/House1.jpg",
	      'Yes': "",
	      'No': "",
	      'voted': []
	    }, {
	      'idPerson': "1002",
	      'massage': "Телефон новый?",
	      'Namehash': ["#phone"],
	      'Picture': "assets/images/PostAll/phone1.jpg",
	      'Yes': "",
	      'No': "",
	      'voted': []
	    }, {
	      'idPerson': "1001",
	      'Namehash': ["#dog"],
	      'massage': "Собака породистая?",
	      'Picture': "assets/images/PostAll/Dog1.jpg",
	      'Yes': "",
	      'No': "",
	      'voted': []
	
	    }];
	    this.TablePerson = [{
	      'idPerson': "1000",
	      'idFolows': [],
	      'idMyFolows': [],
	      'Name': "Vasya",
	      'PictureFace': "assets/images/persons//1000.jpeg"
	
	    }, {
	      'idPerson': "1001",
	      'idFolows': [],
	      'idMyFolows': [],
	      'Name': "Anatolii",
	      'PictureFace': "assets/images/persons/1001.jpeg"
	
	    }, {
	      'idPerson': "1002",
	      'idFolows': [],
	      'idMyFolows': [],
	      'Name': "Natasha",
	      'PictureFace': "assets/images/persons/1002.jpg"
	
	    }];
	  }
	
	  _createClass(WebDevTecService, [{
	    key: 'getTec',
	    value: function getTec() {
	      return this.data;
	    }
	  }, {
	    key: 'getYesNodata',
	    value: function getYesNodata() {
	      return this.dataYesNO;
	    }
	  }, {
	    key: 'getdata',
	    value: function getdata() {
	      return this.TablePerson;
	    }
	  }]);
	
	  return WebDevTecService;
	}();

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FriendsService = exports.FriendsService = function () {
	  function FriendsService() {
	    'ngInject';
	
	    _classCallCheck(this, FriendsService);
	
	    this.promise = [];
	    // $http.get('http://localhost:8000/follows')
	    //   .then(functioromin(promise) {
	    //     //       //this.=success.data;
	    //     //       this.promise= pse;
	    //     },
	    //     function(error) {data
	    //       this.promise= error;
	    //     });
	
	    this.data = [{
	      'id': '1000',
	      'myFriend': ["1001", "1002"]
	    }];
	  }
	
	  _createClass(FriendsService, [{
	    key: 'getFriends',
	    value: function getFriends() {
	      return this.data;
	    }
	  }, {
	    key: 'getData',
	    value: function getData() {
	      // $http.get('http://localhost:8000/follows')
	      //   .then(function(success){
	      //   //this.data=success.data;
	      //   return success.data;
	      // },
	      // function(error){
	      //   return error;
	      // });
	      return this.promise;
	    }
	  }]);
	
	  return FriendsService;
	}();

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavbarDirective = NavbarDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function NavbarDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/navbar/navbar.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var NavbarController = function NavbarController(moment) {
	  'ngInject';
	
	  // "this.creationDate" is available by directive option "bindToController: true"
	
	  _classCallCheck(this, NavbarController);
	
	  this.relativeDate = moment(this.creationDate).fromNow();
	};
	NavbarController.$inject = ["moment"];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	MalarkeyDirective.$inject = ["malarkey"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.MalarkeyDirective = MalarkeyDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function MalarkeyDirective(malarkey) {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    scope: {
	      extraValues: '='
	    },
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: MalarkeyController,
	    controllerAs: 'vm'
	  };
	
	  return directive;
	
	  function linkFunc(scope, el, attr, vm) {
	    var watcher = void 0;
	    var typist = malarkey(el[0], {
	      typeSpeed: 40,
	      deleteSpeed: 40,
	      pauseDelay: 800,
	      loop: true,
	      postfix: ' '
	    });
	
	    el.addClass('acme-malarkey');
	
	    angular.forEach(scope.extraValues, function (value) {
	      typist.type(value).pause().delete();
	    });
	
	    watcher = scope.$watch('vm.contributors', function () {
	      angular.forEach(vm.contributors, function (contributor) {
	        typist.type(contributor.login).pause().delete();
	      });
	    });
	
	    scope.$on('$destroy', function () {
	      watcher();
	    });
	  }
	}
	
	var MalarkeyController = function () {
	  MalarkeyController.$inject = ["$log", "githubContributor"];
	  function MalarkeyController($log, githubContributor) {
	    'ngInject';
	
	    _classCallCheck(this, MalarkeyController);
	
	    this.$log = $log;
	    this.contributors = [];
	
	    this.activate(githubContributor);
	  }
	
	  _createClass(MalarkeyController, [{
	    key: 'activate',
	    value: function activate(githubContributor) {
	      var _this = this;
	
	      return this.getContributors(githubContributor).then(function () {
	        _this.$log.info('Activated Contributors View');
	      });
	    }
	  }, {
	    key: 'getContributors',
	    value: function getContributors(githubContributor) {
	      var _this2 = this;
	
	      return githubContributor.getContributors(10).then(function (data) {
	        _this2.contributors = data;
	
	        return _this2.contributors;
	      });
	    }
	  }]);
	
	  return MalarkeyController;
	}();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGMwMWFjM2Q4NWFjMzRiN2YxZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3RlbXBsYXRlLkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi9Vc2VyTWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL2Zvcm1hdC9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy96ZXJvLWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy9ob29rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25zdGFudCIsIm1hbGFya2V5IiwibW9tZW50IiwiY29uZmlnIiwicm91dGVyQ29uZmlnIiwicnVuIiwicnVuQmxvY2siLCJzZXJ2aWNlIiwiR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIiwiV2ViRGV2VGVjU2VydmljZSIsIkZyaWVuZHNTZXJ2aWNlIiwiY29udHJvbGxlciIsIk15Q29udHJvbGxlciIsIk15UmVnaXN0cmF0aW9uIiwiTWFpblVzZXJDb250cm9sbGVyIiwiRnJpZW5kQ29udHJvbGxlciIsImRpcmVjdGl2ZSIsIk5hdmJhckRpcmVjdGl2ZSIsIk1hbGFya2V5RGlyZWN0aXZlIiwiJGxvZ1Byb3ZpZGVyIiwidG9hc3RyQ29uZmlnIiwiZGVidWdFbmFibGVkIiwiYWxsb3dIdG1sIiwidGltZU91dCIsInBvc2l0aW9uQ2xhc3MiLCJwcmV2ZW50RHVwbGljYXRlcyIsInByb2dyZXNzQmFyIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlckFzIiwib3RoZXJ3aXNlIiwiJGxvZyIsImRlYnVnIiwiJHRpbWVvdXQiLCJmcmllbmRzU2VydmljZSIsIndlYkRldlRlYyIsIiRodHRwIiwiJHNjb3BlIiwidGhhdCIsImdldCIsInRoZW4iLCJwcm9taXNlIiwicHIiLCJkYXRhIiwiZXJyb3IiLCJwcm9taXMiLCJUYWJsZVBlcnNvbiIsIm15Zmlyc3RzU2VydmljZSIsInN1Y2Nlc3MiLCJhY3RpdmF0ZSIsImdldERhdGFGcmllbmRzIiwiZnJpZW5kc0RhdGEiLCJnZXRGcmllbmRzIiwiZ2V0ZGF0YSIsImdldERhdGEiLCIkbG9jYXRpb24iLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcGFuIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJIZWFkZXIiLCJ0ZXh0Qm9keSIsImVudHJ5IiwicG9zdCIsIm5hbWUiLCJOYW1lIiwiZW1haWwiLCJFbWFpbCIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJpZCIsInBhdGgiLCJjYXRjaCIsIkVycm9yQ29kZSIsInN0YXR1cyIsInJlZ2lzdHJhdGlvbiIsInN0YXR1c0NvZGUiLCJ0aXRsZU1haW4iLCJmb3JFZGl0UG9zdCIsImJvb2tzIiwibmFtZVVzZXIiLCJnZXRJdGVtIiwidGV4dEZvclBvc3QiLCJ0ZXh0Rm9yVGl0bGUiLCJ0ZXh0Rm9yU2VhcmNoIiwiY291bnRJZCIsInRlc3QiLCJwb3N0RWRpdElkIiwicG9zdEVkaXRUZXh0IiwidXNlclBvc3QiLCJoZWFkZXJzIiwiVXNlcnMiLCJ1c2VycyIsImVkaXRQb3N0IiwidGV4dENvbnRlbnQiLCJzYXZlUG9zdCIsInB1dCIsIm5ld1RleHQiLCJwb3N0SUQiLCJuZXdQb3N0IiwidGV4dCIsInZhbHVlIiwidGV4dFBvc3QiLCJ0ZXh0VGl0bGUiLCJwdXNoIiwiUG9zdHMiLCJBbGxQb3N0cyIsIlNlYXJjaCIsImRlbFBvc3QiLCJkZWxldGUiLCJ1c2VyIiwidXNlckRlbGV0ZSIsInRvU3RyaW5nIiwidG9JU09TdHJpbmciLCJmb3JtYXQiLCJob29rcyIsImRlZmF1bHRGb3JtYXQiLCJjbG9uZSIsImxvY2FsZSIsIm0iLCJ1dGMiLCJ5ZWFyIiwiRGF0ZSIsInByb3RvdHlwZSIsInRvRGF0ZSIsImlucHV0U3RyaW5nIiwib3V0cHV0IiwibG9jYWxlRGF0YSIsInBvc3Rmb3JtYXQiLCJhZGRGb3JtYXRUb2tlbiIsImZvcm1hdE1vbWVudCIsImV4cGFuZEZvcm1hdCIsImZvcm1hdHRpbmdUb2tlbnMiLCJsb2NhbEZvcm1hdHRpbmdUb2tlbnMiLCJmb3JtYXRGdW5jdGlvbnMiLCJmb3JtYXRUb2tlbkZ1bmN0aW9ucyIsInBhZGRlZCIsIm9yZGluYWwiLCJjYWxsYmFjayIsImZ1bmMiLCJhcHBseSIsImFyZ3VtZW50cyIsInJlbW92ZUZvcm1hdHRpbmdUb2tlbnMiLCJpbnB1dCIsIm1hdGNoIiwicmVwbGFjZSIsIm1ha2VGb3JtYXRGdW5jdGlvbiIsImFycmF5IiwiaSIsImxlbmd0aCIsIm1vbSIsIkZ1bmN0aW9uIiwiY2FsbCIsImlzVmFsaWQiLCJpbnZhbGlkRGF0ZSIsInJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2VucyIsImxvbmdEYXRlRm9ybWF0IiwibGFzdEluZGV4IiwiemVyb0ZpbGwiLCJudW1iZXIiLCJ0YXJnZXRMZW5ndGgiLCJmb3JjZVNpZ24iLCJhYnNOdW1iZXIiLCJNYXRoIiwiYWJzIiwiemVyb3NUb0ZpbGwiLCJzaWduIiwicG93IiwibWF4Iiwic3Vic3RyIiwic2V0SG9va0NhbGxiYWNrIiwiaG9va0NhbGxiYWNrIiwiYXBpSG9zdCIsImxpbWl0IiwicmVzcG9uc2UiLCJ0b0pzb24iLCJkYXRhWWVzTk8iLCJyZXN0cmljdCIsInNjb3BlIiwiY3JlYXRpb25EYXRlIiwiTmF2YmFyQ29udHJvbGxlciIsImJpbmRUb0NvbnRyb2xsZXIiLCJyZWxhdGl2ZURhdGUiLCJmcm9tTm93IiwiZXh0cmFWYWx1ZXMiLCJ0ZW1wbGF0ZSIsImxpbmsiLCJsaW5rRnVuYyIsIk1hbGFya2V5Q29udHJvbGxlciIsImVsIiwiYXR0ciIsInZtIiwid2F0Y2hlciIsInR5cGlzdCIsInR5cGVTcGVlZCIsImRlbGV0ZVNwZWVkIiwicGF1c2VEZWxheSIsImxvb3AiLCJwb3N0Zml4IiwiYWRkQ2xhc3MiLCJmb3JFYWNoIiwidHlwZSIsInBhdXNlIiwiJHdhdGNoIiwiY29udHJpYnV0b3JzIiwiY29udHJpYnV0b3IiLCJsb2dpbiIsIiRvbiIsImdpdGh1YkNvbnRyaWJ1dG9yIiwiZ2V0Q29udHJpYnV0b3JzIiwiaW5mbyJdLCJtYXBwaW5n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M00sU0FBU3VNLEdBQUcsSUFBSTtPQUMzQkssV0FBVztPQUNYQyxhQUFhO09BQ2JDLFlBQVk7T0FDWkMsTUFBTTtPQUNOQyxTQUFTOzs7S0FHWFQsR0FBR1UsU0FBUzs7S0FFWnBOLFFBQVFxTixRQUFRdEIsTUFBTU0sYUFBYSxVQUFDbkYsT0FBVTtPQUM1QzRGLE9BQU9RLEtBQUtwRyxPQUFPcUcsUUFBUTdGOzs7S0FHN0JtRixVQUFVZCxNQUFNeUIsT0FBTyxtQkFBbUIsWUFBTTtPQUM5Q3hOLFFBQVFxTixRQUFRVCxHQUFHYSxjQUFjLFVBQUNDLGFBQWdCO1NBQ2hEWixPQUFPUSxLQUFLSSxZQUFZQyxPQUFPSixRQUFRN0Y7Ozs7S0FJM0NxRSxNQUFNNkIsSUFBSSxZQUFZLFlBQU07T0FDMUJmOzs7Ozs7OERBaUIrQjtHQVZuQyw0QkFBYXpLLE1BQU15TCxtQkFBbUI7S0FDcEM7O0tBRG9DOztLQUdwQyxLQUFLekwsT0FBT0E7S0FDWixLQUFLcUwsZUFBZTs7S0FFcEIsS0FBS25LLFNBQVN1Szs7O0dBZ0JoQixhQUFhLG9CQUFvQixDQUFDO0tBQ2hDLEtBQUs7S0FDTCxPQUFPLFNBQVMsU0FmVEEsbUJBQW1CO09BQUE7O09BQzFCLE9BQU8sS0FBS0MsZ0JBQWdCRCxtQkFBbUJoTCxLQUFLLFlBQU07U0FDeEQsTUFBS1QsS0FBSzJMLEtBQUs7OztNQW9CaEI7S0FDRCxLQUFLO0tBQ0wsT0FBTyxTQUFTLGdCQWxCRkYsbUJBQW1CO09BQUE7O09BQ2pDLE9BQU9BLGtCQUFrQkMsZ0JBQWdCLElBQUlqTCxLQUFLLFVBQUNHLE1BQVM7U0FDMUQsT0FBS3lLLGVBQWV6Szs7U0FFcEIsT0FBTyxPQUFLeUs7Ozs7O0dBeUJoQixPQUFPIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRjMDFhYzNkODVhYzM0YjdmMWY5IiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9pbmRleC5jb25maWcnO1xuaW1wb3J0IHsgcm91dGVyQ29uZmlnIH0gZnJvbSAnLi9pbmRleC5yb3V0ZSc7XG5pbXBvcnQgeyBydW5CbG9jayB9IGZyb20gJy4vaW5kZXgucnVuJztcblxuaW1wb3J0IHsgRnJpZW5kQ29udHJvbGxlciB9IGZyb20gJy4vZnJpZW5kL2ZyaWVuZHMuY29udHJvbGxlcic7XG5cbmltcG9ydCB7IE15Q29udHJvbGxlciB9IGZyb20gJy4vbWFpbi90ZW1wbGF0ZS5Db250cm9sbGVyJztcbmltcG9ydCB7IE15UmVnaXN0cmF0aW9uIH0gZnJvbSAnLi9tYWluL3JlZ2lzdHJhdGlvbi5Db250cm9sbGVyJztcbmltcG9ydCB7IE1haW5Vc2VyQ29udHJvbGxlciB9IGZyb20gJy4vbWFpbi9Vc2VyTWFpbi5jb250cm9sbGVyJztcblxuaW1wb3J0IHsgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBXZWJEZXZUZWNTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJztcbmltcG9ydCB7IEZyaWVuZHNTZXJ2aWNlIH0gZnJvbSBcIi4uL2FwcC9mcmllbmQvZnJpZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5hdmJhckRpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1hbGFya2V5RGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJztcblxuXG5cblxuYW5ndWxhci5tb2R1bGUoJ2Jsb2cnLCBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLCAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3RvYXN0cicsICduZ01hdGVyaWFsJywgJ25nTWVzc2FnZXMnXSlcbiAgLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KVxuICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcbiAgLmNvbmZpZyhjb25maWcpXG4gIC5jb25maWcocm91dGVyQ29uZmlnKVxuICAucnVuKHJ1bkJsb2NrKVxuICAuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBHaXRodWJDb250cmlidXRvclNlcnZpY2UpXG4gIC5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCBXZWJEZXZUZWNTZXJ2aWNlKVxuICAuc2VydmljZSgnZnJpZW5kc1NlcnZpY2UnLCBGcmllbmRzU2VydmljZSlcblxuICAgIC5jb250cm9sbGVyKCdNeUNvbnRyb2xsZXInLCBNeUNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdNeVJlZ2lzdHJhdGlvbicsIE15UmVnaXN0cmF0aW9uKVxuICAgIC5jb250cm9sbGVyKCdNYWluVXNlckNvbnRyb2xsZXInLCBNYWluVXNlckNvbnRyb2xsZXIpXG5cbiAgLmNvbnRyb2xsZXIoJ0ZyaWVuZENvbnRyb2xsZXInLCBGcmllbmRDb250cm9sbGVyKVxuXG4gIC5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBOYXZiYXJEaXJlY3RpdmUpXG4gIC5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIE1hbGFya2V5RGlyZWN0aXZlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBjb25maWcgKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gNTAwMDtcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgIHVybDogJy8nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi90ZW1wbGF0ZS5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdNeUNvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndGVtcCdcbiAgICB9KVxuICAgIC5zdGF0ZSgnZm9sbG93cycse1xuICAgICAgdXJsOicvcmVnaXN0cmF0aW9uJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vcmVnaXN0cmF0aW9uLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjonTXlSZWdpc3RyYXRpb24nLFxuICAgICAgY29udHJvbGxlckFzOidyZWdpc3QnXG4gICAgfSlcbiAgICAgIC5zdGF0ZSgnMScse1xuICAgICAgICAgIHVybDonL21haW4nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vVXNlck1haW4uaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjonTWFpblVzZXJDb250cm9sbGVyJyxcbiAgICAgICAgICBjb250cm9sbGVyQXM6J01lVXNlJ1xuICAgICAgfSk7XG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJleHBvcnQgZnVuY3Rpb24gcnVuQmxvY2sgKCRsb2cpIHtcbiAgJ25nSW5qZWN0JztcbiAgJGxvZy5kZWJ1ZygncnVuQmxvY2sgZW5kJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsImV4cG9ydCBjbGFzcyBGcmllbmRDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCwgJHNjb3BlKSB7XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ZvbGxvd3MnKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICAgIC8vdGhpcy5kYXRhPXN1Y2Nlc3MuZGF0YTtcbiAgICAgICAgJHNjb3BlLnByID0gcHJvbWlzZS5kYXRhO1xuICAgICAgICB0aGF0LnByb21pc2UgPSBwcm9taXNlLmRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgdGhpcy5wcm9taXMgPSBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgdGhpcy5wcm9taXNlID0gJHNjb3BlLnByO1xuICAgIHRoaXMuVGFibGVQZXJzb24gPSBbXTtcbiAgICB0aGlzLm15Zmlyc3RzU2VydmljZSA9IFtdXG4gICAgdGhpcy5zdWNjZXNzID1udWxsO1xuICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwKTtcbiAgfVxuICBhY3RpdmF0ZSgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHApIHtcbiAgICB0aGlzLmdldERhdGFGcmllbmRzKGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwKTtcbiAgfVxuICBnZXREYXRhRnJpZW5kcyhmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjKXtcbiAgICB0aGlzLmZyaWVuZHNEYXRhID0gZnJpZW5kc1NlcnZpY2UuZ2V0RnJpZW5kcygpO1xuICAgIHRoaXMuVGFibGVQZXJzb24gPSB3ZWJEZXZUZWMuZ2V0ZGF0YSgpO1xuICAgIHRoaXMuc3VjY2VzcyA9IGZyaWVuZHNTZXJ2aWNlLmdldERhdGEoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mcmllbmQvZnJpZW5kcy5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIE15Q29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCwgJGxvZywgJGxvY2F0aW9uLCAkc2NvcGUpIHtcbiAgICAgICduZ0luamVjdCdcblxuXG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuICAgICAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCJcIjtcbiAgICAgICAgfTtcblxuICAgICAgdGhpcy5lbnRyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHAucG9zdCgnL2VudHJ5Jywge25hbWU6ICRzY29wZS5OYW1lLCBlbWFpbDogJHNjb3BlLkVtYWlsLCBwYXNzd29yZDogJHNjb3BlLlBhc3N3b3JkfSlcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUb2tlbicsIHJlc3VsdC5kYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05hbWUnLCByZXN1bHQuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0lkJywgcmVzdWx0LmRhdGEuaWQpO1xuICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9tYWluXCIpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICB0aGlzLnJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvY2F0aW9uLnBhdGgoXCIvcmVnaXN0cmF0aW9uXCIpO1xuICAgICAgfTtcbiAgICAgICAgJHNjb3BlLkVycm9yQ29kZSA9IGZ1bmN0aW9uIChzdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICBpZihzdGF0dXNDb2RlID09PSA0MDEpe1xuICAgICAgICAgICAgICAgICRzY29wZS5IZWFkZXIgPSBcIkVycm9yOiBcIiArIHN0YXR1c0NvZGU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCLQndC10LLQtdGA0L3Ri9C5INC70L7Qs9C40L0g0LjQu9C4INC/0LDRgNC+0LvRjCFcIjtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vdGVtcGxhdGUuQ29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBNeVJlZ2lzdHJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRsb2csICRzY29wZSwgJGxvY2F0aW9uKSB7XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgICAkc2NvcGUuTmFtZSA9IFwiXCI7XG4gICAgICAkc2NvcGUuRW1haWwgPSBcIlwiO1xuICAgICAgJHNjb3BlLlBhc3N3b3JkID0gXCJcIjtcblxuICAgICAgJHNjb3BlLkhlYWRlciA9IFwiXCI7XG4gICAgICAkc2NvcGUudGV4dEJvZHkgPSBcIlwiO1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcbiAgICAgICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgJHNjb3BlLkhlYWRlciA9IFwiXCI7XG4gICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwiXCI7XG4gICAgICAgIH07XG5cbiAgICB0aGlzLnJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRodHRwLnBvc3QoJy9yZWdpc3RyYXRpb24nLCB7bmFtZTogJHNjb3BlLk5hbWUsIGVtYWlsOiAkc2NvcGUuRW1haWwsIHBhc3N3b3JkOiAkc2NvcGUuUGFzc3dvcmR9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9cIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICAkc2NvcGUuRXJyb3JDb2RlID0gZnVuY3Rpb24gKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgICBpZihzdGF0dXNDb2RlID09PSA0MDEpe1xuICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcItCd0LXQstC10YDQvdGL0Lkg0LvQvtCz0LjQvSDQuNC70Lgg0L/QsNGA0L7Qu9GMIVwiO1xuICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi9yZWdpc3RyYXRpb24uQ29udHJvbGxlci5qcyIsImltcG9ydCB7dG9TdHJpbmd9IGZyb20gXCIuLi8uLi8uLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL21vbWVudC9mb3JtYXRcIjtcblxuZXhwb3J0IGNsYXNzIE1haW5Vc2VyQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCwgJGxvZywgJGxvY2F0aW9uLCAkc2NvcGUpIHtcbiAgICAgICAgJ25nSW5qZWN0J1xuXG5cbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKTtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG4gICAgICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgJHNjb3BlLkhlYWRlciA9IFwiXCI7XG4gICAgICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcIlwiO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS50aXRsZU1haW4gPSBcItCX0LTQtdGB0Ywg0LHRg9C00YPRgiDQstCw0YjQuCDQt9Cw0L/QuNGB0LhcIjtcbiAgICAgICAgJHNjb3BlLmZvckVkaXRQb3N0ID0gZmFsc2U7XG4gICAgICAgICRzY29wZS5ib29rcyA9IFtdO1xuICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJcIjtcbiAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCJcIjtcbiAgICAgICAgJHNjb3BlLm5hbWVVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJOYW1lXCIpO1xuICAgICAgICAkc2NvcGUudGV4dEZvclBvc3QgPSBcIlwiO1xuICAgICAgICAkc2NvcGUudGV4dEZvclRpdGxlID0gXCJcIjtcbiAgICAgICAgJHNjb3BlLnRleHRGb3JTZWFyY2ggPSBcIlwiO1xuICAgICAgICAkc2NvcGUuY291bnRJZCA9IDA7XG4gICAgICAgICRzY29wZS50ZXN0ID0gXCJ0cnVlXCI7XG4gICAgICAgIGxldCBwb3N0RWRpdElkO1xuICAgICAgICBsZXQgcG9zdEVkaXRUZXh0O1xuXG4gICAgICAgICRzY29wZS51c2VyUG9zdCA9IGZ1bmN0aW9uKGlkLCBuYW1lKXtcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS91c2VyLycrIGlkICsgJy9wb3N0cycsIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aXRsZU1haW4gPSBcItCX0LDQv9C40YHQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y86IFwiICsgbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmJvb2tzID0gcmVzdWx0LmRhdGEucmVzdWx0WzBdO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLlVzZXJzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS91c2VycycsIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS51c2VycyA9IHJlc3VsdC5kYXRhLnJlc3VsdFswXTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5lZGl0UG9zdCA9IGZ1bmN0aW9uIChpZCwgdGV4dENvbnRlbnQpe1xuICAgICAgICAgICAgcG9zdEVkaXRJZCA9IGlkO1xuICAgICAgICAgICAgcG9zdEVkaXRUZXh0ID0gdGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAkc2NvcGUuZm9yRWRpdFBvc3QgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuc2F2ZVBvc3QgPSBmdW5jdGlvbihpZCwgdGV4dENvbnRlbnQpe1xuICAgICAgICAgICAgaWYoaWQgIT09IHBvc3RFZGl0SWQpe1xuICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUoNDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodGV4dENvbnRlbnQgPT09IHBvc3RFZGl0VGV4dCl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmZvckVkaXRQb3N0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICRodHRwLnB1dCgnL2FwaS9wb3N0cy8nICsgaWQsIHtuZXdUZXh0OiB0ZXh0Q29udGVudCwgcG9zdElEOiBpZH0sIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZvckVkaXRQb3N0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZm9yRWRpdFBvc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLm5ld1Bvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRQb3N0XCIpO1xuICAgICAgICAgICAgaWYodGV4dFsxXS50ZXh0Q29udGVudCAhPT0gXCJcIiAmJiB0ZXh0WzBdLnZhbHVlICE9PSBcIlwiKXtcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywge3RleHRQb3N0OiB0ZXh0WzFdLnRleHRDb250ZW50LCB0ZXh0VGl0bGU6ICRzY29wZS50ZXh0Rm9yVGl0bGV9LCB7aGVhZGVyczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCRzY29wZS5ib29rcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmJvb2tzLnB1c2gocmVzdWx0LmRhdGEucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGV4dEZvclBvc3QgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Rm9yVGl0bGUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5Qb3N0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS91c2VyLycrIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiSWRcIikgKyAnL3Bvc3RzJywge2hlYWRlcnM6IHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKX19KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpdGxlTWFpbiA9IFwi0JLQsNGI0Lgg0LfQsNC/0LjRgdC4XCI7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5ib29rcyA9IHJlc3VsdC5kYXRhLnJlc3VsdFswXTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5BbGxQb3N0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9wb3N0cycsIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aXRsZU1haW4gPSBcItCX0LDQv9C40YHQuCDQstGB0LXRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVwiO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YS5yZXN1bHRbMF07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuU2VhcmNoID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCRzY29wZS50ZXh0Rm9yU2VhcmNoICE9PSBcIlwiKXtcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvc2VhcmNoLycgKyAkc2NvcGUudGV4dEZvclNlYXJjaCwge2hlYWRlcnM6IHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKX19KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YS5yZXN1bHRbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGV4dEZvclNlYXJjaCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRleHRGb3JTZWFyY2ggPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuZGVsUG9zdCA9IGZ1bmN0aW9uIChpZCwgbmFtZSkge1xuICAgICAgICAgICAgJGh0dHAuZGVsZXRlKCcvYXBpL3Bvc3RzLycrIGlkLCB7aGVhZGVyczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS51c2VyID09PSBuYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5Qb3N0cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5BbGxQb3N0cygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLnVzZXJEZWxldGUgPSBmdW5jdGlvbihpZCwgbmFtZSl7XG4gICAgICAgICAgICAkaHR0cC5kZWxldGUoJy9hcGkvdXNlcnMvJysgaWQsIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLnVzZXIgPT0gbmFtZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5Vc2VycygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuRXJyb3JDb2RlID0gZnVuY3Rpb24gKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MDMpe1xuICAgICAgICAgICAgICAgICRzY29wZS5IZWFkZXIgPSBcIkVycm9yOiBcIiArIHN0YXR1c0NvZGU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCLQoyDQstCw0YEg0L3QtdGCINC/0YDQsNCyINC90LAg0Y3RgtC+INC00LXQudGB0YLQstC40LUhXCI7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoc3RhdHVzQ29kZSA9PT0gNDAxKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0J3QtdCy0LXRgNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YwhXCI7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoc3RhdHVzQ29kZSA9PT0gNDAwKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0J3QtdCy0LXRgNC90YvQuSDQt9Cw0L/RgNC+0YEhXCI7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoc3RhdHVzQ29kZSA9PT0gNTAwKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0JLQvdGD0YLRgNC10L3QvdGP0Y8g0L7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwIVwiO1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5Vc2VycygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vVXNlck1haW4uY29udHJvbGxlci5qcyIsImltcG9ydCB7IGZvcm1hdE1vbWVudCB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5cbmhvb2tzLmRlZmF1bHRGb3JtYXQgPSAnWVlZWS1NTS1ERFRISDptbTpzc1onO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkubG9jYWxlKCdlbicpLmZvcm1hdCgnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzIFtHTVRdWlonKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSVNPU3RyaW5nICgpIHtcbiAgICB2YXIgbSA9IHRoaXMuY2xvbmUoKS51dGMoKTtcbiAgICBpZiAoMCA8IG0ueWVhcigpICYmIG0ueWVhcigpIDw9IDk5OTkpIHtcbiAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZykge1xuICAgICAgICAgICAgLy8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGlzIH41MHggZmFzdGVyLCB1c2UgaXQgd2hlbiB3ZSBjYW5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KG0sICdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KG0sICdZWVlZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0nKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQgKGlucHV0U3RyaW5nKSB7XG4gICAgdmFyIG91dHB1dCA9IGZvcm1hdE1vbWVudCh0aGlzLCBpbnB1dFN0cmluZyB8fCBob29rcy5kZWZhdWx0Rm9ybWF0KTtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkucG9zdGZvcm1hdChvdXRwdXQpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi9tb21lbnQvZm9ybWF0LmpzIiwiaW1wb3J0IHplcm9GaWxsIGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XG5cbmV4cG9ydCB2YXIgZm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRfFlZWVlZWXxZWVlZWXxZWVlZfFlZfGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fG1tP3xzcz98U3sxLDl9fHh8WHx6ej98Wlo/fC4pL2c7XG5cbnZhciBsb2NhbEZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nO1xuXG52YXIgZm9ybWF0RnVuY3Rpb25zID0ge307XG5cbmV4cG9ydCB2YXIgZm9ybWF0VG9rZW5GdW5jdGlvbnMgPSB7fTtcblxuLy8gdG9rZW46ICAgICdNJ1xuLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxuLy8gb3JkaW5hbDogICdNbydcbi8vIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IHRoaXMubW9udGgoKSArIDEgfVxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvcm1hdFRva2VuICh0b2tlbiwgcGFkZGVkLCBvcmRpbmFsLCBjYWxsYmFjaykge1xuICAgIHZhciBmdW5jID0gY2FsbGJhY2s7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2NhbGxiYWNrXSgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dID0gZnVuYztcbiAgICB9XG4gICAgaWYgKHBhZGRlZCkge1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1twYWRkZWRbMF1dID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHplcm9GaWxsKGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgcGFkZGVkWzFdLCBwYWRkZWRbMl0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAob3JkaW5hbCkge1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1tvcmRpbmFsXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5vcmRpbmFsKGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgdG9rZW4pO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhpbnB1dCkge1xuICAgIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xcXF0kL2csICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgdmFyIGFycmF5ID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpLCBpLCBsZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dKSB7XG4gICAgICAgICAgICBhcnJheVtpXSA9IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vbSkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gJyc7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGFycmF5W2ldIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcnJheVtpXS5jYWxsKG1vbSwgZm9ybWF0KSA6IGFycmF5W2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbn1cblxuLy8gZm9ybWF0IGRhdGUgdXNpbmcgbmF0aXZlIGRhdGUgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9tZW50KG0sIGZvcm1hdCkge1xuICAgIGlmICghbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIG0ubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxuXG4gICAgZm9ybWF0ID0gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbS5sb2NhbGVEYXRhKCkpO1xuICAgIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdID0gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gfHwgbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCk7XG5cbiAgICByZXR1cm4gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0obSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRGb3JtYXQoZm9ybWF0LCBsb2NhbGUpIHtcbiAgICB2YXIgaSA9IDU7XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5sb25nRGF0ZUZvcm1hdChpbnB1dCkgfHwgaW5wdXQ7XG4gICAgfVxuXG4gICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgd2hpbGUgKGkgPj0gMCAmJiBsb2NhbEZvcm1hdHRpbmdUb2tlbnMudGVzdChmb3JtYXQpKSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKGxvY2FsRm9ybWF0dGluZ1Rva2VucywgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKTtcbiAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIGkgLT0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0O1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL2Zvcm1hdC9mb3JtYXQuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB6ZXJvRmlsbChudW1iZXIsIHRhcmdldExlbmd0aCwgZm9yY2VTaWduKSB7XG4gICAgdmFyIGFic051bWJlciA9ICcnICsgTWF0aC5hYnMobnVtYmVyKSxcbiAgICAgICAgemVyb3NUb0ZpbGwgPSB0YXJnZXRMZW5ndGggLSBhYnNOdW1iZXIubGVuZ3RoLFxuICAgICAgICBzaWduID0gbnVtYmVyID49IDA7XG4gICAgcmV0dXJuIChzaWduID8gKGZvcmNlU2lnbiA/ICcrJyA6ICcnKSA6ICctJykgK1xuICAgICAgICBNYXRoLnBvdygxMCwgTWF0aC5tYXgoMCwgemVyb3NUb0ZpbGwpKS50b1N0cmluZygpLnN1YnN0cigxKSArIGFic051bWJlcjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvdXRpbHMvemVyby1maWxsLmpzIiwiZXhwb3J0IHsgaG9va3MsIHNldEhvb2tDYWxsYmFjayB9O1xuXG52YXIgaG9va0NhbGxiYWNrO1xuXG5mdW5jdGlvbiBob29rcyAoKSB7XG4gICAgcmV0dXJuIGhvb2tDYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG4vLyBUaGlzIGlzIGRvbmUgdG8gcmVnaXN0ZXIgdGhlIG1ldGhvZCBjYWxsZWQgd2l0aCBtb21lbnQoKVxuLy8gd2l0aG91dCBjcmVhdGluZyBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG5mdW5jdGlvbiBzZXRIb29rQ2FsbGJhY2sgKGNhbGxiYWNrKSB7XG4gICAgaG9va0NhbGxiYWNrID0gY2FsbGJhY2s7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL3V0aWxzL2hvb2tzLmpzIiwiZXhwb3J0IGNsYXNzIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCAkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhsaW1pdD0zMCkge1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSkpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwiZXhwb3J0IGNsYXNzIFdlYkRldlRlY1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXG4gICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0thcm1hID0pJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQm9vdHN0cmFwJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXG4gICAgICAgICdsb2dvJzogJ2Jvb3RzdHJhcC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnRVM2IChCYWJlbCBmb3JtZXJseSA2dG81KScsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9iYWJlbGpzLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUdXJucyBFUzYrIGNvZGUgaW50byB2YW5pbGxhIEVTNSwgc28geW91IGNhbiB1c2UgbmV4dCBnZW5lcmF0aW9uIGZlYXR1cmVzIHRvZGF5LicsXG4gICAgICAgICdsb2dvJzogJ2JhYmVsLnBuZydcbiAgICAgIH1cbiAgICBdO1xuICAgIHRoaXMuZGF0YVllc05PPVtcblxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMFwiLFxuICAgICAgICAnTmFtZWhhc2gnOltcIiNjYXRcIl0sXG4gICAgICAgICdtYXNzYWdlJzpcItCa0L7RgtC40Log0LrRgNCw0YHQuNCy0YvQuT9cIixcbiAgICAgICAgJ1BpY3R1cmUnOlwiYXNzZXRzL2ltYWdlcy9Qb3N0QWxsL0NhdDEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAxXCIsXG4gICAgICAgICdOYW1laGFzaCc6W1wiI2hvdXNlXCJdLFxuICAgICAgICAnbWFzc2FnZSc6XCLQlNC+0Lwg0LHQvtC70YzRiNC+0LlcIixcbiAgICAgICAgJ1BpY3R1cmUnOlwiYXNzZXRzL2ltYWdlcy9Qb3N0QWxsL0hvdXNlMS5qcGdcIixcbiAgICAgICAgJ1llcyc6IFwiXCIsXG4gICAgICAgICdObyc6XCJcIixcbiAgICAgICAgJ3ZvdGVkJzpbXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDJcIixcbiAgICAgICAgJ21hc3NhZ2UnOlwi0KLQtdC70LXRhNC+0L0g0L3QvtCy0YvQuT9cIixcbiAgICAgICAgJ05hbWVoYXNoJzpbXCIjcGhvbmVcIl0sXG4gICAgICAgICdQaWN0dXJlJzpcImFzc2V0cy9pbWFnZXMvUG9zdEFsbC9waG9uZTEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAxXCIsXG4gICAgICAgICdOYW1laGFzaCc6W1wiI2RvZ1wiXSxcbiAgICAgICAgJ21hc3NhZ2UnOlwi0KHQvtCx0LDQutCwINC/0L7RgNC+0LTQuNGB0YLQsNGPP1wiLFxuICAgICAgICAnUGljdHVyZSc6XCJhc3NldHMvaW1hZ2VzL1Bvc3RBbGwvRG9nMS5qcGdcIixcbiAgICAgICAgJ1llcyc6IFwiXCIsXG4gICAgICAgICdObyc6XCJcIixcbiAgICAgICAgJ3ZvdGVkJzpbXVxuXG5cbiAgICAgIH1cbiAgICBdO1xuICAgIHRoaXMuVGFibGVQZXJzb24gPVsge1xuICAgICAgICAgICdpZFBlcnNvbic6XCIxMDAwXCIsXG4gICAgICAgICAgJ2lkRm9sb3dzJzpbXSxcbiAgICAgICAgICAnaWRNeUZvbG93cyc6W10sXG4gICAgICAgICAgJ05hbWUnOlwiVmFzeWFcIixcbiAgICAgICAgICAnUGljdHVyZUZhY2UnOlwiYXNzZXRzL2ltYWdlcy9wZXJzb25zLy8xMDAwLmpwZWdcIlxuXG4gICAgICB9LHtcbiAgICAgICdpZFBlcnNvbic6XCIxMDAxXCIsXG4gICAgICAnaWRGb2xvd3MnOltdLFxuICAgICAgJ2lkTXlGb2xvd3MnOltdLFxuICAgICAgJ05hbWUnOlwiQW5hdG9saWlcIixcbiAgICAgICdQaWN0dXJlRmFjZSc6XCJhc3NldHMvaW1hZ2VzL3BlcnNvbnMvMTAwMS5qcGVnXCJcblxuICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAyXCIsXG4gICAgICAgICdpZEZvbG93cyc6W10sXG4gICAgICAgICdpZE15Rm9sb3dzJzpbXSxcbiAgICAgICAgJ05hbWUnOlwiTmF0YXNoYVwiLFxuICAgICAgICAnUGljdHVyZUZhY2UnOlwiYXNzZXRzL2ltYWdlcy9wZXJzb25zLzEwMDIuanBnXCJcblxuICAgICAgfVxuXG4gICAgXVxuXG5cblxuICB9XG5cbiAgZ2V0VGVjKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbiAgZ2V0WWVzTm9kYXRhKCl7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVllc05PO1xuICB9XG4gIGdldGRhdGEoKXtcbiAgICByZXR1cm4gdGhpcy5UYWJsZVBlcnNvbjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsImV4cG9ydCBjbGFzcyBGcmllbmRzU2VydmljZXtcbiAgY29uc3RydWN0b3IgKCl7XG4gICAgJ25nSW5qZWN0JztcbiAgICB0aGlzLnByb21pc2UgPVtdO1xuICAgIC8vICRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ZvbGxvd3MnKVxuICAgIC8vICAgLnRoZW4oZnVuY3Rpb3JvbWluKHByb21pc2UpIHtcbiAgICAvLyAgICAgLy8gICAgICAgLy90aGlzLj1zdWNjZXNzLmRhdGE7XG4gICAgLy8gICAgIC8vICAgICAgIHRoaXMucHJvbWlzZT0gcHNlO1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBmdW5jdGlvbihlcnJvcikge2RhdGFcbiAgICAvLyAgICAgICB0aGlzLnByb21pc2U9IGVycm9yO1xuICAgIC8vICAgICB9KTtcblxuICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgJ2lkJzonMTAwMCcsXG4gICAgICAgICdteUZyaWVuZCc6IFtcIjEwMDFcIixcIjEwMDJcIl1cbiAgICAgIH1cbiAgICBdXG5cbiAgfVxuICAgZ2V0RnJpZW5kcygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gICBnZXREYXRhKCl7XG4gICAgICAgLy8gJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZm9sbG93cycpXG4gICAgICAgLy8gICAudGhlbihmdW5jdGlvbihzdWNjZXNzKXtcbiAgICAgICAvLyAgIC8vdGhpcy5kYXRhPXN1Y2Nlc3MuZGF0YTtcbiAgICAgICAvLyAgIHJldHVybiBzdWNjZXNzLmRhdGE7XG4gICAgICAgLy8gfSxcbiAgICAgICAvLyBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgLy8gICByZXR1cm4gZXJyb3I7XG4gICAgICAgLy8gfSk7XG4gICAgIHJldHVybiB0aGlzLnByb21pc2U7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mcmllbmQvZnJpZW5kLnNlcnZpY2UuanMiLCJleHBvcnQgZnVuY3Rpb24gTmF2YmFyRGlyZWN0aXZlKCkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgY3JlYXRpb25EYXRlOiAnPSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG5jbGFzcyBOYXZiYXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vbWVudCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICAvLyBcInRoaXMuY3JlYXRpb25EYXRlXCIgaXMgYXZhaWxhYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcbiAgICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJleHBvcnQgZnVuY3Rpb24gTWFsYXJrZXlEaXJlY3RpdmUobWFsYXJrZXkpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIGxpbms6IGxpbmtGdW5jLFxuICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcbiAgICBsZXQgd2F0Y2hlcjtcbiAgICBsZXQgdHlwaXN0ID0gbWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcG9zdGZpeDogJyAnXG4gICAgfSk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCAodmFsdWUpID0+IHtcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgIH0pO1xuXG4gICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgKCkgPT4ge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgKGNvbnRyaWJ1dG9yKSA9PiB7XG4gICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgKCkgPT4ge1xuICAgICAgd2F0Y2hlcigpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuY2xhc3MgTWFsYXJrZXlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcblxuICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xuICB9XG5cbiAgYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jb250cmlidXRvcnMgPSBkYXRhO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb250cmlidXRvcnM7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiXSwic291cmNlUm9vdCI6IiJ9