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
	    $scope.checkEmail = function (email) {
	        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	        return pattern.test(email);
	    };
	    this.entry = function () {
	        if ($scope.checkEmail($scope.Email)) {
	            $http.post('/entry', { name: $scope.Name, email: $scope.Email, password: $scope.Password }).then(function (result) {
	                localStorage.setItem('Token', result.data.token);
	                localStorage.setItem('Name', result.data.name);
	                localStorage.setItem('Id', result.data.id);
	                $location.path("/main");
	            }).catch(function (result) {
	                $scope.ErrorCode(result.status);
	            });
	        }
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
	    $scope.checkEmail = function (email) {
	        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	        return pattern.test(email);
	    };
	    this.registration = function () {
	        //$scope.Email.indexOf("@") !== -1 && $scope.Email.indexOf(".") !== -1
	        if ($scope.checkEmail($scope.Email)) {
	            $http.post('/registration', { name: $scope.Name, email: $scope.Email, password: $scope.Password }).then(function () {
	                $location.path("/");
	            }).catch(function (result) {
	                $scope.ErrorCode(result.status);
	            });
	        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWQ4ZDZhY2E0MDc5MDkwNDQyNWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3RlbXBsYXRlLkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi9Vc2VyTWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL2Zvcm1hdC9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy96ZXJvLWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy9ob29rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25zdGFudCIsIm1hbGFya2V5IiwibW9tZW50IiwiY29uZmlnIiwicm91dGVyQ29uZmlnIiwicnVuIiwicnVuQmxvY2siLCJzZXJ2aWNlIiwiR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIiwiV2ViRGV2VGVjU2VydmljZSIsIkZyaWVuZHNTZXJ2aWNlIiwiY29udHJvbGxlciIsIk15Q29udHJvbGxlciIsIk15UmVnaXN0cmF0aW9uIiwiTWFpblVzZXJDb250cm9sbGVyIiwiRnJpZW5kQ29udHJvbGxlciIsImRpcmVjdGl2ZSIsIk5hdmJhckRpcmVjdGl2ZSIsIk1hbGFya2V5RGlyZWN0aXZlIiwiJGxvZ1Byb3ZpZGVyIiwidG9hc3RyQ29uZmlnIiwiZGVidWdFbmFibGVkIiwiYWxsb3dIdG1sIiwidGltZU91dCIsInBvc2l0aW9uQ2xhc3MiLCJwcmV2ZW50RHVwbGljYXRlcyIsInByb2dyZXNzQmFyIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlckFzIiwib3RoZXJ3aXNlIiwiJGxvZyIsImRlYnVnIiwiJHRpbWVvdXQiLCJmcmllbmRzU2VydmljZSIsIndlYkRldlRlYyIsIiRodHRwIiwiJHNjb3BlIiwidGhhdCIsImdldCIsInRoZW4iLCJwcm9taXNlIiwicHIiLCJkYXRhIiwiZXJyb3IiLCJwcm9taXMiLCJUYWJsZVBlcnNvbiIsIm15Zmlyc3RzU2VydmljZSIsInN1Y2Nlc3MiLCJhY3RpdmF0ZSIsImdldERhdGFGcmllbmRzIiwiZnJpZW5kc0RhdGEiLCJnZXRGcmllbmRzIiwiZ2V0ZGF0YSIsImdldERhdGEiLCIkbG9jYXRpb24iLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcGFuIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJIZWFkZXIiLCJ0ZXh0Qm9keSIsImNoZWNrRW1haWwiLCJlbWFpbCIsInBhdHRlcm4iLCJ0ZXN0IiwiZW50cnkiLCJFbWFpbCIsInBvc3QiLCJuYW1lIiwiTmFtZSIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJpZCIsInBhdGgiLCJjYXRjaCIsIkVycm9yQ29kZSIsInN0YXR1cyIsInJlZ2lzdHJhdGlvbiIsInN0YXR1c0NvZGUiLCJ0aXRsZU1haW4iLCJmb3JFZGl0UG9zdCIsImJvb2tzIiwibmFtZVVzZXIiLCJnZXRJdGVtIiwidGV4dEZvclBvc3QiLCJ0ZXh0Rm9yVGl0bGUiLCJ0ZXh0Rm9yU2VhcmNoIiwiY291bnRJZCIsInBvc3RFZGl0SWQiLCJwb3N0RWRpdFRleHQiLCJ1c2VyUG9zdCIsImhlYWRlcnMiLCJVc2VycyIsInVzZXJzIiwiZWRpdFBvc3QiLCJ0ZXh0Q29udGVudCIsInNhdmVQb3N0IiwicHV0IiwibmV3VGV4dCIsInBvc3RJRCIsIm5ld1Bvc3QiLCJ0ZXh0IiwidmFsdWUiLCJ0ZXh0UG9zdCIsInRleHRUaXRsZSIsInB1c2giLCJQb3N0cyIsIkFsbFBvc3RzIiwiU2VhcmNoIiwiZGVsUG9zdCIsImRlbGV0ZSIsInVzZXIiLCJ1c2VyRGVsZXRlIiwidG9TdHJpbmciLCJ0b0lTT1N0cmluZyIsImZvcm1hdCIsImhvb2tzIiwiZGVmYXVsdEZvcm1hdCIsImNsb25lIiwibG9jYWxlIiwibSIsInV0YyIsInllYXIiLCJEYXRlIiwicHJvdG90eXBlIiwidG9EYXRlIiwiaW5wdXRTdHJpbmciLCJvdXRwdXQiLCJsb2NhbGVEYXRhIiwicG9zdGZvcm1hdCIsImFkZEZvcm1hdFRva2VuIiwiZm9ybWF0TW9tZW50IiwiZXhwYW5kRm9ybWF0IiwiZm9ybWF0dGluZ1Rva2VucyIsImxvY2FsRm9ybWF0dGluZ1Rva2VucyIsImZvcm1hdEZ1bmN0aW9ucyIsImZvcm1hdFRva2VuRnVuY3Rpb25zIiwicGFkZGVkIiwib3JkaW5hbCIsImNhbGxiYWNrIiwiZnVuYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVtb3ZlRm9ybWF0dGluZ1Rva2VucyIsImlucHV0IiwibWF0Y2giLCJyZXBsYWNlIiwibWFrZUZvcm1hdEZ1bmN0aW9uIiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwibW9tIiwiRnVuY3Rpb24iLCJjYWxsIiwiaXNWYWxpZCIsImludmFsaWREYXRlIiwicmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zIiwibG9uZ0RhdGVGb3JtYXQiLCJsYXN0SW5kZXgiLCJ6ZXJvRmlsbCIsIm51bWJlciIsInRhcmdldExlbmd0aCIsImZvcmNlU2lnbiIsImFic051bWJlciIsIk1hdGgiLCJhYnMiLCJ6ZXJvc1RvRmlsbCIsInNpZ24iLCJwb3ciLCJtYXgiLCJzdWJzdHIiLCJzZXRIb29rQ2FsbGJhY2siLCJob29rQ2FsbGJhY2siLCJhcGlIb3N0IiwibGltaXQiLCJyZXNwb25zZSIsInRvSnNvbiIsImRhdGFZZXNOTyIsInJlc3RyaWN0Iiwic2NvcGUiLCJjcmVhdGlvbkRhdGUiLCJOYXZiYXJDb250cm9sbGVyIiwiYmluZFRvQ29udHJvbGxlciIsInJlbGF0aXZlRGF0ZSIsImZyb21Ob3ciLCJleHRyYVZhbHVlcyIsInRlbXBsYXRlIiwibGluayIsImxpbmtGdW5jIiwiTWFsYXJrZXlDb250cm9sbGVyIiwiZWwiLCJhdHRyIiwidm0iLCJ3YXRjaGVyIiwidHlwaXN0IiwidHlwZVNwZWVkIiwiZGVsZXRlU3BlZWQiLCJwYXVzZURlbGF5IiwibG9vcCIsInBvc3RmaXgiLCJhZGRDbGFzcyIsImZvckVhY2giLCJ0eXBlIiwicGF1c2UiLCIkd2F0Y2giLCJjb250cmlidXRvcnMiLCJjb250cmlidXRvciIsImxvZ2luIiwiJG9uIiwiZ2l0aHViQ29udHJpYnV0b3IiLCJnZXRDb250cmli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QUNqQyxPQUFPQSxrQkFBa0JDLGdCQUFnQixJQUFJbkwsS0FBSyxVQUFDRyxNQUFTO1NBQzFELE9BQUsySyxlQUFlM0s7O1NBRXBCLE9BQU8sT0FBSzJLOzs7OztHQXlCaEIsT0FBTyIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlZDhkNmFjYTQwNzkwOTA0NDI1ZCIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vaW5kZXguY29uZmlnJztcbmltcG9ydCB7IHJvdXRlckNvbmZpZyB9IGZyb20gJy4vaW5kZXgucm91dGUnO1xuaW1wb3J0IHsgcnVuQmxvY2sgfSBmcm9tICcuL2luZGV4LnJ1bic7XG5cbmltcG9ydCB7IEZyaWVuZENvbnRyb2xsZXIgfSBmcm9tICcuL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyBNeUNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vdGVtcGxhdGUuQ29udHJvbGxlcic7XG5pbXBvcnQgeyBNeVJlZ2lzdHJhdGlvbiB9IGZyb20gJy4vbWFpbi9yZWdpc3RyYXRpb24uQ29udHJvbGxlcic7XG5pbXBvcnQgeyBNYWluVXNlckNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vVXNlck1haW4uY29udHJvbGxlcic7XG5cbmltcG9ydCB7IEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2ViRGV2VGVjU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZSc7XG5pbXBvcnQgeyBGcmllbmRzU2VydmljZSB9IGZyb20gXCIuLi9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOYXZiYXJEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYWxhcmtleURpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZSc7XG5cblxuXG5cbmFuZ3VsYXIubW9kdWxlKCdibG9nJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ01lc3NhZ2VzJywgJ25nQXJpYScsICduZ1Jlc291cmNlJywgJ3VpLnJvdXRlcicsICd0b2FzdHInLCAnbmdNYXRlcmlhbCcsICduZ01lc3NhZ2VzJ10pXG4gIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcbiAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXG4gIC5jb25maWcoY29uZmlnKVxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcbiAgLnJ1bihydW5CbG9jaylcbiAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKVxuICAuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSlcbiAgLnNlcnZpY2UoJ2ZyaWVuZHNTZXJ2aWNlJywgRnJpZW5kc1NlcnZpY2UpXG5cbiAgICAuY29udHJvbGxlcignTXlDb250cm9sbGVyJywgTXlDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignTXlSZWdpc3RyYXRpb24nLCBNeVJlZ2lzdHJhdGlvbilcbiAgICAuY29udHJvbGxlcignTWFpblVzZXJDb250cm9sbGVyJywgTWFpblVzZXJDb250cm9sbGVyKVxuXG4gIC5jb250cm9sbGVyKCdGcmllbmRDb250cm9sbGVyJywgRnJpZW5kQ29udHJvbGxlcilcblxuICAuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgTmF2YmFyRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBNYWxhcmtleURpcmVjdGl2ZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJleHBvcnQgZnVuY3Rpb24gY29uZmlnICgkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xuICAnbmdJbmplY3QnO1xuICAvLyBFbmFibGUgbG9nXG4gICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgLy8gU2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXG4gIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICB0b2FzdHJDb25maWcudGltZU91dCA9IDUwMDA7XG4gIHRvYXN0ckNvbmZpZy5wb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XG4gIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vdGVtcGxhdGUuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTXlDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3RlbXAnXG4gICAgfSlcbiAgICAuc3RhdGUoJ2ZvbGxvd3MnLHtcbiAgICAgIHVybDonL3JlZ2lzdHJhdGlvbicsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6J015UmVnaXN0cmF0aW9uJyxcbiAgICAgIGNvbnRyb2xsZXJBczoncmVnaXN0J1xuICAgIH0pXG4gICAgICAuc3RhdGUoJzEnLHtcbiAgICAgICAgICB1cmw6Jy9tYWluJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL1VzZXJNYWluLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6J01haW5Vc2VyQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOidNZVVzZSdcbiAgICAgIH0pO1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4uanMiLCJleHBvcnQgY2xhc3MgRnJpZW5kQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRzY29wZSkge1xuICAgICduZ0luamVjdCdcblxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb2xsb3dzJylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICAgICAvL3RoaXMuZGF0YT1zdWNjZXNzLmRhdGE7XG4gICAgICAgICRzY29wZS5wciA9IHByb21pc2UuZGF0YTtcbiAgICAgICAgdGhhdC5wcm9taXNlID0gcHJvbWlzZS5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIHRoaXMucHJvbWlzID0gZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIHRoaXMucHJvbWlzZSA9ICRzY29wZS5wcjtcbiAgICB0aGlzLlRhYmxlUGVyc29uID0gW107XG4gICAgdGhpcy5teWZpcnN0c1NlcnZpY2UgPSBbXVxuICAgIHRoaXMuc3VjY2VzcyA9bnVsbDtcbiAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCk7XG4gIH1cbiAgYWN0aXZhdGUoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwKSB7XG4gICAgdGhpcy5nZXREYXRhRnJpZW5kcyhmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCk7XG4gIH1cbiAgZ2V0RGF0YUZyaWVuZHMoZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYyl7XG4gICAgdGhpcy5mcmllbmRzRGF0YSA9IGZyaWVuZHNTZXJ2aWNlLmdldEZyaWVuZHMoKTtcbiAgICB0aGlzLlRhYmxlUGVyc29uID0gd2ViRGV2VGVjLmdldGRhdGEoKTtcbiAgICB0aGlzLnN1Y2Nlc3MgPSBmcmllbmRzU2VydmljZS5nZXREYXRhKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZHMuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBNeUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRsb2csICRsb2NhdGlvbiwgJHNjb3BlKSB7XG4gICAgICAnbmdJbmplY3QnXG5cblxuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcbiAgICAgICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJcIjtcbiAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwiXCI7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5jaGVja0VtYWlsID0gZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgICAgICAgICBsZXQgcGF0dGVybiAgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChlbWFpbCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW50cnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZigkc2NvcGUuY2hlY2tFbWFpbCgkc2NvcGUuRW1haWwpKSB7XG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2VudHJ5Jywge25hbWU6ICRzY29wZS5OYW1lLCBlbWFpbDogJHNjb3BlLkVtYWlsLCBwYXNzd29yZDogJHNjb3BlLlBhc3N3b3JkfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Rva2VuJywgcmVzdWx0LmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05hbWUnLCByZXN1bHQuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdJZCcsIHJlc3VsdC5kYXRhLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKFwiL21haW5cIik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgIH07XG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9yZWdpc3RyYXRpb25cIik7XG4gICAgICB9O1xuICAgICAgICAkc2NvcGUuRXJyb3JDb2RlID0gZnVuY3Rpb24gKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgIGlmKHN0YXR1c0NvZGUgPT09IDQwMSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkhlYWRlciA9IFwiRXJyb3I6IFwiICsgc3RhdHVzQ29kZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcItCd0LXQstC10YDQvdGL0Lkg0LvQvtCz0LjQvSDQuNC70Lgg0L/QsNGA0L7Qu9GMIVwiO1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi90ZW1wbGF0ZS5Db250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIE15UmVnaXN0cmF0aW9uIHtcbiAgY29uc3RydWN0b3IgKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCwgJGxvZywgJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgICAnbmdJbmplY3QnXG5cbiAgICAgICRzY29wZS5OYW1lID0gXCJcIjtcbiAgICAgICRzY29wZS5FbWFpbCA9IFwiXCI7XG4gICAgICAkc2NvcGUuUGFzc3dvcmQgPSBcIlwiO1xuXG4gICAgICAkc2NvcGUuSGVhZGVyID0gXCJcIjtcbiAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwiXCI7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuICAgICAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJcIjtcbiAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCJcIjtcbiAgICAgICAgfTtcbiAgICAkc2NvcGUuY2hlY2tFbWFpbCA9IGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICBsZXQgcGF0dGVybiAgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KGVtYWlsKTtcbiAgICB9O1xuICAgICAgdGhpcy5yZWdpc3RyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vJHNjb3BlLkVtYWlsLmluZGV4T2YoXCJAXCIpICE9PSAtMSAmJiAkc2NvcGUuRW1haWwuaW5kZXhPZihcIi5cIikgIT09IC0xXG4gICAgICAgIGlmKCRzY29wZS5jaGVja0VtYWlsKCRzY29wZS5FbWFpbCkpe1xuICAgICAgICAgICAgJGh0dHAucG9zdCgnL3JlZ2lzdHJhdGlvbicsIHtuYW1lOiAkc2NvcGUuTmFtZSwgZW1haWw6ICRzY29wZS5FbWFpbCwgcGFzc3dvcmQ6ICRzY29wZS5QYXNzd29yZH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9cIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIH07XG4gICAgICAkc2NvcGUuRXJyb3JDb2RlID0gZnVuY3Rpb24gKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgICBpZihzdGF0dXNDb2RlID09PSA0MDEpe1xuICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcItCd0LXQstC10YDQvdGL0Lkg0LvQvtCz0LjQvSDQuNC70Lgg0L/QsNGA0L7Qu9GMIVwiO1xuICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi9yZWdpc3RyYXRpb24uQ29udHJvbGxlci5qcyIsImltcG9ydCB7dG9TdHJpbmd9IGZyb20gXCIuLi8uLi8uLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL21vbWVudC9mb3JtYXRcIjtcblxuZXhwb3J0IGNsYXNzIE1haW5Vc2VyQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCwgJGxvZywgJGxvY2F0aW9uLCAkc2NvcGUpIHtcbiAgICAgICAgJ25nSW5qZWN0J1xuXG5cbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKTtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG4gICAgICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgJHNjb3BlLkhlYWRlciA9IFwiXCI7XG4gICAgICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcIlwiO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS50aXRsZU1haW4gPSBcItCX0LTQtdGB0Ywg0LHRg9C00YPRgiDQstCw0YjQuCDQt9Cw0L/QuNGB0LhcIjtcbiAgICAgICAgJHNjb3BlLmZvckVkaXRQb3N0ID0gZmFsc2U7XG4gICAgICAgICRzY29wZS5ib29rcyA9IFtdO1xuICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJcIjtcbiAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCJcIjtcbiAgICAgICAgJHNjb3BlLm5hbWVVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJOYW1lXCIpO1xuICAgICAgICAkc2NvcGUudGV4dEZvclBvc3QgPSBcIlwiO1xuICAgICAgICAkc2NvcGUudGV4dEZvclRpdGxlID0gXCJcIjtcbiAgICAgICAgJHNjb3BlLnRleHRGb3JTZWFyY2ggPSBcIlwiO1xuICAgICAgICAkc2NvcGUuY291bnRJZCA9IDA7XG4gICAgICAgICRzY29wZS50ZXN0ID0gXCJ0cnVlXCI7XG4gICAgICAgIGxldCBwb3N0RWRpdElkO1xuICAgICAgICBsZXQgcG9zdEVkaXRUZXh0O1xuXG4gICAgICAgICRzY29wZS51c2VyUG9zdCA9IGZ1bmN0aW9uKGlkLCBuYW1lKXtcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS91c2VyLycrIGlkICsgJy9wb3N0cycsIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aXRsZU1haW4gPSBcItCX0LDQv9C40YHQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y86IFwiICsgbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmJvb2tzID0gcmVzdWx0LmRhdGEucmVzdWx0WzBdO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLlVzZXJzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS91c2VycycsIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS51c2VycyA9IHJlc3VsdC5kYXRhLnJlc3VsdFswXTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5lZGl0UG9zdCA9IGZ1bmN0aW9uIChpZCwgdGV4dENvbnRlbnQpe1xuICAgICAgICAgICAgcG9zdEVkaXRJZCA9IGlkO1xuICAgICAgICAgICAgcG9zdEVkaXRUZXh0ID0gdGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAkc2NvcGUuZm9yRWRpdFBvc3QgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuc2F2ZVBvc3QgPSBmdW5jdGlvbihpZCwgdGV4dENvbnRlbnQpe1xuICAgICAgICAgICAgaWYoaWQgIT09IHBvc3RFZGl0SWQpe1xuICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUoNDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodGV4dENvbnRlbnQgPT09IHBvc3RFZGl0VGV4dCl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmZvckVkaXRQb3N0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICRodHRwLnB1dCgnL2FwaS9wb3N0cy8nICsgaWQsIHtuZXdUZXh0OiB0ZXh0Q29udGVudCwgcG9zdElEOiBpZH0sIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZvckVkaXRQb3N0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZm9yRWRpdFBvc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLm5ld1Bvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRQb3N0XCIpO1xuICAgICAgICAgICAgaWYodGV4dFsxXS50ZXh0Q29udGVudCAhPT0gXCJcIiAmJiB0ZXh0WzBdLnZhbHVlICE9PSBcIlwiKXtcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywge3RleHRQb3N0OiB0ZXh0WzFdLnRleHRDb250ZW50LCB0ZXh0VGl0bGU6ICRzY29wZS50ZXh0Rm9yVGl0bGV9LCB7aGVhZGVyczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCRzY29wZS5ib29rcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmJvb2tzLnB1c2gocmVzdWx0LmRhdGEucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGV4dEZvclBvc3QgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Rm9yVGl0bGUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5Qb3N0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS91c2VyLycrIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiSWRcIikgKyAnL3Bvc3RzJywge2hlYWRlcnM6IHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKX19KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpdGxlTWFpbiA9IFwi0JLQsNGI0Lgg0LfQsNC/0LjRgdC4XCI7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5ib29rcyA9IHJlc3VsdC5kYXRhLnJlc3VsdFswXTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5BbGxQb3N0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9wb3N0cycsIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aXRsZU1haW4gPSBcItCX0LDQv9C40YHQuCDQstGB0LXRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuVwiO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YS5yZXN1bHRbMF07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuU2VhcmNoID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCRzY29wZS50ZXh0Rm9yU2VhcmNoICE9PSBcIlwiKXtcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvc2VhcmNoLycgKyAkc2NvcGUudGV4dEZvclNlYXJjaCwge2hlYWRlcnM6IHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKX19KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YS5yZXN1bHRbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGV4dEZvclNlYXJjaCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRleHRGb3JTZWFyY2ggPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuZGVsUG9zdCA9IGZ1bmN0aW9uIChpZCwgbmFtZSkge1xuICAgICAgICAgICAgJGh0dHAuZGVsZXRlKCcvYXBpL3Bvc3RzLycrIGlkLCB7aGVhZGVyczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS51c2VyID09PSBuYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5Qb3N0cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5BbGxQb3N0cygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLnVzZXJEZWxldGUgPSBmdW5jdGlvbihpZCwgbmFtZSl7XG4gICAgICAgICAgICAkaHR0cC5kZWxldGUoJy9hcGkvdXNlcnMvJysgaWQsIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLnVzZXIgPT0gbmFtZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5Vc2VycygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuRXJyb3JDb2RlID0gZnVuY3Rpb24gKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MDMpe1xuICAgICAgICAgICAgICAgICRzY29wZS5IZWFkZXIgPSBcIkVycm9yOiBcIiArIHN0YXR1c0NvZGU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCLQoyDQstCw0YEg0L3QtdGCINC/0YDQsNCyINC90LAg0Y3RgtC+INC00LXQudGB0YLQstC40LUhXCI7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoc3RhdHVzQ29kZSA9PT0gNDAxKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0J3QtdCy0LXRgNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YwhXCI7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoc3RhdHVzQ29kZSA9PT0gNDAwKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0J3QtdCy0LXRgNC90YvQuSDQt9Cw0L/RgNC+0YEhXCI7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoc3RhdHVzQ29kZSA9PT0gNTAwKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0JLQvdGD0YLRgNC10L3QvdGP0Y8g0L7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwIVwiO1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5Vc2VycygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vVXNlck1haW4uY29udHJvbGxlci5qcyIsImltcG9ydCB7IGZvcm1hdE1vbWVudCB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5cbmhvb2tzLmRlZmF1bHRGb3JtYXQgPSAnWVlZWS1NTS1ERFRISDptbTpzc1onO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkubG9jYWxlKCdlbicpLmZvcm1hdCgnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzIFtHTVRdWlonKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSVNPU3RyaW5nICgpIHtcbiAgICB2YXIgbSA9IHRoaXMuY2xvbmUoKS51dGMoKTtcbiAgICBpZiAoMCA8IG0ueWVhcigpICYmIG0ueWVhcigpIDw9IDk5OTkpIHtcbiAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZykge1xuICAgICAgICAgICAgLy8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGlzIH41MHggZmFzdGVyLCB1c2UgaXQgd2hlbiB3ZSBjYW5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KG0sICdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KG0sICdZWVlZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0nKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQgKGlucHV0U3RyaW5nKSB7XG4gICAgdmFyIG91dHB1dCA9IGZvcm1hdE1vbWVudCh0aGlzLCBpbnB1dFN0cmluZyB8fCBob29rcy5kZWZhdWx0Rm9ybWF0KTtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkucG9zdGZvcm1hdChvdXRwdXQpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi9tb21lbnQvZm9ybWF0LmpzIiwiaW1wb3J0IHplcm9GaWxsIGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XG5cbmV4cG9ydCB2YXIgZm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRfFlZWVlZWXxZWVlZWXxZWVlZfFlZfGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fG1tP3xzcz98U3sxLDl9fHh8WHx6ej98Wlo/fC4pL2c7XG5cbnZhciBsb2NhbEZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nO1xuXG52YXIgZm9ybWF0RnVuY3Rpb25zID0ge307XG5cbmV4cG9ydCB2YXIgZm9ybWF0VG9rZW5GdW5jdGlvbnMgPSB7fTtcblxuLy8gdG9rZW46ICAgICdNJ1xuLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxuLy8gb3JkaW5hbDogICdNbydcbi8vIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IHRoaXMubW9udGgoKSArIDEgfVxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvcm1hdFRva2VuICh0b2tlbiwgcGFkZGVkLCBvcmRpbmFsLCBjYWxsYmFjaykge1xuICAgIHZhciBmdW5jID0gY2FsbGJhY2s7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2NhbGxiYWNrXSgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dID0gZnVuYztcbiAgICB9XG4gICAgaWYgKHBhZGRlZCkge1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1twYWRkZWRbMF1dID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHplcm9GaWxsKGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgcGFkZGVkWzFdLCBwYWRkZWRbMl0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAob3JkaW5hbCkge1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1tvcmRpbmFsXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5vcmRpbmFsKGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgdG9rZW4pO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhpbnB1dCkge1xuICAgIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xcXF0kL2csICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgdmFyIGFycmF5ID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpLCBpLCBsZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dKSB7XG4gICAgICAgICAgICBhcnJheVtpXSA9IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vbSkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gJyc7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGFycmF5W2ldIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcnJheVtpXS5jYWxsKG1vbSwgZm9ybWF0KSA6IGFycmF5W2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbn1cblxuLy8gZm9ybWF0IGRhdGUgdXNpbmcgbmF0aXZlIGRhdGUgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9tZW50KG0sIGZvcm1hdCkge1xuICAgIGlmICghbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIG0ubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxuXG4gICAgZm9ybWF0ID0gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbS5sb2NhbGVEYXRhKCkpO1xuICAgIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdID0gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gfHwgbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCk7XG5cbiAgICByZXR1cm4gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0obSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRGb3JtYXQoZm9ybWF0LCBsb2NhbGUpIHtcbiAgICB2YXIgaSA9IDU7XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5sb25nRGF0ZUZvcm1hdChpbnB1dCkgfHwgaW5wdXQ7XG4gICAgfVxuXG4gICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgd2hpbGUgKGkgPj0gMCAmJiBsb2NhbEZvcm1hdHRpbmdUb2tlbnMudGVzdChmb3JtYXQpKSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKGxvY2FsRm9ybWF0dGluZ1Rva2VucywgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKTtcbiAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIGkgLT0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0O1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL2Zvcm1hdC9mb3JtYXQuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB6ZXJvRmlsbChudW1iZXIsIHRhcmdldExlbmd0aCwgZm9yY2VTaWduKSB7XG4gICAgdmFyIGFic051bWJlciA9ICcnICsgTWF0aC5hYnMobnVtYmVyKSxcbiAgICAgICAgemVyb3NUb0ZpbGwgPSB0YXJnZXRMZW5ndGggLSBhYnNOdW1iZXIubGVuZ3RoLFxuICAgICAgICBzaWduID0gbnVtYmVyID49IDA7XG4gICAgcmV0dXJuIChzaWduID8gKGZvcmNlU2lnbiA/ICcrJyA6ICcnKSA6ICctJykgK1xuICAgICAgICBNYXRoLnBvdygxMCwgTWF0aC5tYXgoMCwgemVyb3NUb0ZpbGwpKS50b1N0cmluZygpLnN1YnN0cigxKSArIGFic051bWJlcjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvdXRpbHMvemVyby1maWxsLmpzIiwiZXhwb3J0IHsgaG9va3MsIHNldEhvb2tDYWxsYmFjayB9O1xuXG52YXIgaG9va0NhbGxiYWNrO1xuXG5mdW5jdGlvbiBob29rcyAoKSB7XG4gICAgcmV0dXJuIGhvb2tDYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG4vLyBUaGlzIGlzIGRvbmUgdG8gcmVnaXN0ZXIgdGhlIG1ldGhvZCBjYWxsZWQgd2l0aCBtb21lbnQoKVxuLy8gd2l0aG91dCBjcmVhdGluZyBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG5mdW5jdGlvbiBzZXRIb29rQ2FsbGJhY2sgKGNhbGxiYWNrKSB7XG4gICAgaG9va0NhbGxiYWNrID0gY2FsbGJhY2s7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL3V0aWxzL2hvb2tzLmpzIiwiZXhwb3J0IGNsYXNzIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCAkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhsaW1pdD0zMCkge1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSkpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwiZXhwb3J0IGNsYXNzIFdlYkRldlRlY1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXG4gICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0thcm1hID0pJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQm9vdHN0cmFwJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXG4gICAgICAgICdsb2dvJzogJ2Jvb3RzdHJhcC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnRVM2IChCYWJlbCBmb3JtZXJseSA2dG81KScsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9iYWJlbGpzLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUdXJucyBFUzYrIGNvZGUgaW50byB2YW5pbGxhIEVTNSwgc28geW91IGNhbiB1c2UgbmV4dCBnZW5lcmF0aW9uIGZlYXR1cmVzIHRvZGF5LicsXG4gICAgICAgICdsb2dvJzogJ2JhYmVsLnBuZydcbiAgICAgIH1cbiAgICBdO1xuICAgIHRoaXMuZGF0YVllc05PPVtcblxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMFwiLFxuICAgICAgICAnTmFtZWhhc2gnOltcIiNjYXRcIl0sXG4gICAgICAgICdtYXNzYWdlJzpcItCa0L7RgtC40Log0LrRgNCw0YHQuNCy0YvQuT9cIixcbiAgICAgICAgJ1BpY3R1cmUnOlwiYXNzZXRzL2ltYWdlcy9Qb3N0QWxsL0NhdDEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAxXCIsXG4gICAgICAgICdOYW1laGFzaCc6W1wiI2hvdXNlXCJdLFxuICAgICAgICAnbWFzc2FnZSc6XCLQlNC+0Lwg0LHQvtC70YzRiNC+0LlcIixcbiAgICAgICAgJ1BpY3R1cmUnOlwiYXNzZXRzL2ltYWdlcy9Qb3N0QWxsL0hvdXNlMS5qcGdcIixcbiAgICAgICAgJ1llcyc6IFwiXCIsXG4gICAgICAgICdObyc6XCJcIixcbiAgICAgICAgJ3ZvdGVkJzpbXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDJcIixcbiAgICAgICAgJ21hc3NhZ2UnOlwi0KLQtdC70LXRhNC+0L0g0L3QvtCy0YvQuT9cIixcbiAgICAgICAgJ05hbWVoYXNoJzpbXCIjcGhvbmVcIl0sXG4gICAgICAgICdQaWN0dXJlJzpcImFzc2V0cy9pbWFnZXMvUG9zdEFsbC9waG9uZTEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAxXCIsXG4gICAgICAgICdOYW1laGFzaCc6W1wiI2RvZ1wiXSxcbiAgICAgICAgJ21hc3NhZ2UnOlwi0KHQvtCx0LDQutCwINC/0L7RgNC+0LTQuNGB0YLQsNGPP1wiLFxuICAgICAgICAnUGljdHVyZSc6XCJhc3NldHMvaW1hZ2VzL1Bvc3RBbGwvRG9nMS5qcGdcIixcbiAgICAgICAgJ1llcyc6IFwiXCIsXG4gICAgICAgICdObyc6XCJcIixcbiAgICAgICAgJ3ZvdGVkJzpbXVxuXG5cbiAgICAgIH1cbiAgICBdO1xuICAgIHRoaXMuVGFibGVQZXJzb24gPVsge1xuICAgICAgICAgICdpZFBlcnNvbic6XCIxMDAwXCIsXG4gICAgICAgICAgJ2lkRm9sb3dzJzpbXSxcbiAgICAgICAgICAnaWRNeUZvbG93cyc6W10sXG4gICAgICAgICAgJ05hbWUnOlwiVmFzeWFcIixcbiAgICAgICAgICAnUGljdHVyZUZhY2UnOlwiYXNzZXRzL2ltYWdlcy9wZXJzb25zLy8xMDAwLmpwZWdcIlxuXG4gICAgICB9LHtcbiAgICAgICdpZFBlcnNvbic6XCIxMDAxXCIsXG4gICAgICAnaWRGb2xvd3MnOltdLFxuICAgICAgJ2lkTXlGb2xvd3MnOltdLFxuICAgICAgJ05hbWUnOlwiQW5hdG9saWlcIixcbiAgICAgICdQaWN0dXJlRmFjZSc6XCJhc3NldHMvaW1hZ2VzL3BlcnNvbnMvMTAwMS5qcGVnXCJcblxuICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAyXCIsXG4gICAgICAgICdpZEZvbG93cyc6W10sXG4gICAgICAgICdpZE15Rm9sb3dzJzpbXSxcbiAgICAgICAgJ05hbWUnOlwiTmF0YXNoYVwiLFxuICAgICAgICAnUGljdHVyZUZhY2UnOlwiYXNzZXRzL2ltYWdlcy9wZXJzb25zLzEwMDIuanBnXCJcblxuICAgICAgfVxuXG4gICAgXVxuXG5cblxuICB9XG5cbiAgZ2V0VGVjKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbiAgZ2V0WWVzTm9kYXRhKCl7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVllc05PO1xuICB9XG4gIGdldGRhdGEoKXtcbiAgICByZXR1cm4gdGhpcy5UYWJsZVBlcnNvbjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsImV4cG9ydCBjbGFzcyBGcmllbmRzU2VydmljZXtcbiAgY29uc3RydWN0b3IgKCl7XG4gICAgJ25nSW5qZWN0JztcbiAgICB0aGlzLnByb21pc2UgPVtdO1xuICAgIC8vICRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ZvbGxvd3MnKVxuICAgIC8vICAgLnRoZW4oZnVuY3Rpb3JvbWluKHByb21pc2UpIHtcbiAgICAvLyAgICAgLy8gICAgICAgLy90aGlzLj1zdWNjZXNzLmRhdGE7XG4gICAgLy8gICAgIC8vICAgICAgIHRoaXMucHJvbWlzZT0gcHNlO1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBmdW5jdGlvbihlcnJvcikge2RhdGFcbiAgICAvLyAgICAgICB0aGlzLnByb21pc2U9IGVycm9yO1xuICAgIC8vICAgICB9KTtcblxuICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgJ2lkJzonMTAwMCcsXG4gICAgICAgICdteUZyaWVuZCc6IFtcIjEwMDFcIixcIjEwMDJcIl1cbiAgICAgIH1cbiAgICBdXG5cbiAgfVxuICAgZ2V0RnJpZW5kcygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gICBnZXREYXRhKCl7XG4gICAgICAgLy8gJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZm9sbG93cycpXG4gICAgICAgLy8gICAudGhlbihmdW5jdGlvbihzdWNjZXNzKXtcbiAgICAgICAvLyAgIC8vdGhpcy5kYXRhPXN1Y2Nlc3MuZGF0YTtcbiAgICAgICAvLyAgIHJldHVybiBzdWNjZXNzLmRhdGE7XG4gICAgICAgLy8gfSxcbiAgICAgICAvLyBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgLy8gICByZXR1cm4gZXJyb3I7XG4gICAgICAgLy8gfSk7XG4gICAgIHJldHVybiB0aGlzLnByb21pc2U7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mcmllbmQvZnJpZW5kLnNlcnZpY2UuanMiLCJleHBvcnQgZnVuY3Rpb24gTmF2YmFyRGlyZWN0aXZlKCkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgY3JlYXRpb25EYXRlOiAnPSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG5jbGFzcyBOYXZiYXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vbWVudCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICAvLyBcInRoaXMuY3JlYXRpb25EYXRlXCIgaXMgYXZhaWxhYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcbiAgICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJleHBvcnQgZnVuY3Rpb24gTWFsYXJrZXlEaXJlY3RpdmUobWFsYXJrZXkpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIGxpbms6IGxpbmtGdW5jLFxuICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcbiAgICBsZXQgd2F0Y2hlcjtcbiAgICBsZXQgdHlwaXN0ID0gbWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcG9zdGZpeDogJyAnXG4gICAgfSk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCAodmFsdWUpID0+IHtcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgIH0pO1xuXG4gICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgKCkgPT4ge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgKGNvbnRyaWJ1dG9yKSA9PiB7XG4gICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgKCkgPT4ge1xuICAgICAgd2F0Y2hlcigpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuY2xhc3MgTWFsYXJrZXlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcblxuICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xuICB9XG5cbiAgYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jb250cmlidXRvcnMgPSBkYXRhO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb250cmlidXRvcnM7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiXSwic291cmNlUm9vdCI6IiJ9