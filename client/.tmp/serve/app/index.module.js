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
	                    result.data.result.firstName = localStorage.getItem("Name");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmZkYzA3YTQ4NzQwZTI2ZjFkYWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3RlbXBsYXRlLkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi9Vc2VyTWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL2Zvcm1hdC9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy96ZXJvLWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy9ob29rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25zdGFudCIsIm1hbGFya2V5IiwibW9tZW50IiwiY29uZmlnIiwicm91dGVyQ29uZmlnIiwicnVuIiwicnVuQmxvY2siLCJzZXJ2aWNlIiwiR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIiwiV2ViRGV2VGVjU2VydmljZSIsIkZyaWVuZHNTZXJ2aWNlIiwiY29udHJvbGxlciIsIk15Q29udHJvbGxlciIsIk15UmVnaXN0cmF0aW9uIiwiTWFpblVzZXJDb250cm9sbGVyIiwiRnJpZW5kQ29udHJvbGxlciIsImRpcmVjdGl2ZSIsIk5hdmJhckRpcmVjdGl2ZSIsIk1hbGFya2V5RGlyZWN0aXZlIiwiJGxvZ1Byb3ZpZGVyIiwidG9hc3RyQ29uZmlnIiwiZGVidWdFbmFibGVkIiwiYWxsb3dIdG1sIiwidGltZU91dCIsInBvc2l0aW9uQ2xhc3MiLCJwcmV2ZW50RHVwbGljYXRlcyIsInByb2dyZXNzQmFyIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlckFzIiwib3RoZXJ3aXNlIiwiJGxvZyIsImRlYnVnIiwiJHRpbWVvdXQiLCJmcmllbmRzU2VydmljZSIsIndlYkRldlRlYyIsIiRodHRwIiwiJHNjb3BlIiwidGhhdCIsImdldCIsInRoZW4iLCJwcm9taXNlIiwicHIiLCJkYXRhIiwiZXJyb3IiLCJwcm9taXMiLCJUYWJsZVBlcnNvbiIsIm15Zmlyc3RzU2VydmljZSIsInN1Y2Nlc3MiLCJhY3RpdmF0ZSIsImdldERhdGFGcmllbmRzIiwiZnJpZW5kc0RhdGEiLCJnZXRGcmllbmRzIiwiZ2V0ZGF0YSIsImdldERhdGEiLCIkbG9jYXRpb24iLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcGFuIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJIZWFkZXIiLCJ0ZXh0Qm9keSIsImNoZWNrRW1haWwiLCJlbWFpbCIsInBhdHRlcm4iLCJ0ZXN0IiwiZW50cnkiLCJFbWFpbCIsInBvc3QiLCJuYW1lIiwiTmFtZSIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJpZCIsInBhdGgiLCJjYXRjaCIsIkVycm9yQ29kZSIsInN0YXR1cyIsInJlZ2lzdHJhdGlvbiIsInN0YXR1c0NvZGUiLCJ0aXRsZU1haW4iLCJmb3JFZGl0UG9zdCIsImJvb2tzIiwibmFtZVVzZXIiLCJnZXRJdGVtIiwidGV4dEZvclBvc3QiLCJ0ZXh0Rm9yVGl0bGUiLCJ0ZXh0Rm9yU2VhcmNoIiwiY291bnRJZCIsInBvc3RFZGl0SWQiLCJwb3N0RWRpdFRleHQiLCJ1c2VyUG9zdCIsImhlYWRlcnMiLCJVc2VycyIsInVzZXJzIiwiZWRpdFBvc3QiLCJ0ZXh0Q29udGVudCIsInNhdmVQb3N0IiwicHV0IiwibmV3VGV4dCIsInBvc3RJRCIsIm5ld1Bvc3QiLCJ0ZXh0IiwidmFsdWUiLCJ0ZXh0UG9zdCIsInRleHRUaXRsZSIsImZpcnN0TmFtZSIsInB1c2giLCJQb3N0cyIsIkFsbFBvc3RzIiwiU2VhcmNoIiwiZGVsUG9zdCIsImRlbGV0ZSIsInVzZXIiLCJ1c2VyRGVsZXRlIiwidG9TdHJpbmciLCJ0b0lTT1N0cmluZyIsImZvcm1hdCIsImhvb2tzIiwiZGVmYXVsdEZvcm1hdCIsImNsb25lIiwibG9jYWxlIiwibSIsInV0YyIsInllYXIiLCJEYXRlIiwicHJvdG90eXBlIiwidG9EYXRlIiwiaW5wdXRTdHJpbmciLCJvdXRwdXQiLCJsb2NhbGVEYXRhIiwicG9zdGZvcm1hdCIsImFkZEZvcm1hdFRva2VuIiwiZm9ybWF0TW9tZW50IiwiZXhwYW5kRm9ybWF0IiwiZm9ybWF0dGluZ1Rva2VucyIsImxvY2FsRm9ybWF0dGluZ1Rva2VucyIsImZvcm1hdEZ1bmN0aW9ucyIsImZvcm1hdFRva2VuRnVuY3Rpb25zIiwicGFkZGVkIiwib3JkaW5hbCIsImNhbGxiYWNrIiwiZnVuYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVtb3ZlRm9ybWF0dGluZ1Rva2VucyIsImlucHV0IiwibWF0Y2giLCJyZXBsYWNlIiwibWFrZUZvcm1hdEZ1bmN0aW9uIiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwibW9tIiwiRnVuY3Rpb24iLCJjYWxsIiwiaXNWYWxpZCIsImludmFsaWREYXRlIiwicmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zIiwibG9uZ0RhdGVGb3JtYXQiLCJsYXN0SW5kZXgiLCJ6ZXJvRmlsbCIsIm51bWJlciIsInRhcmdldExlbmd0aCIsImZvcmNlU2lnbiIsImFic051bWJlciIsIk1hdGgiLCJhYnMiLCJ6ZXJvc1RvRmlsbCIsInNpZ24iLCJwb3ciLCJtYXgiLCJzdWJzdHIiLCJzZXRIb29rQ2FsbGJhY2siLCJob29rQ2FsbGJhY2siLCJhcGlIb3N0IiwibGltaXQiLCJyZXNwb25zZSIsInRvSnNvbiIsImRhdGFZZXNOTyIsInJlc3RyaWN0Iiwic2NvcGUiLCJjcmVhdGlvbkRhdGUiLCJOYXZiYXJDb250cm9sbGVyIiwiYmluZFRvQ29udHJvbGxlciIsInJlbGF0aXZlRGF0ZSIsImZyb21Ob3ciLCJleHRyYVZhbHVlcyIsInRlbXBsYXRlIiwibGluayIsImxpbmtGdW5jIiwiTWFsYXJrZXlDb250cm9sbGVyIiwiZWwiLCJhdHRyIiwidm0iLCJ3YXRjaGVyIiwidHlwaXN0IiwidHlwZVNwZWVkIiwiZGVsZXRlU3BlZWQiLCJwYXVzZURlbGF5IiwibG9vcCIsInBvc3RmaXgiLCJhZGRDbGFzcyIsImZvckVhY2giLCJ0eXBlIiwicGF1c2UiLCIkd2F0Y2giLCJjb250cmlidXRvcnMiLCJjb250cmlidXRvciIsImxvZ2luIiwiJG9uIiwiZ2l0aHViQ29udHJpYnV0b3Ii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QUs7OztNQW9CaEI7S0FDRCxLQUFLO0tBQ0wsT0FBTyxTQUFTLGdCQWxCRkYsbUJBQW1CO09BQUE7O09BQ2pDLE9BQU9BLGtCQUFrQkMsZ0JBQWdCLElBQUlwTCxLQUFLLFVBQUNHLE1BQVM7U0FDMUQsT0FBSzRLLGVBQWU1Szs7U0FFcEIsT0FBTyxPQUFLNEs7Ozs7O0dBeUJoQixPQUFPIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZmZGMwN2E0ODc0MGUyNmYxZGFlIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9pbmRleC5jb25maWcnO1xuaW1wb3J0IHsgcm91dGVyQ29uZmlnIH0gZnJvbSAnLi9pbmRleC5yb3V0ZSc7XG5pbXBvcnQgeyBydW5CbG9jayB9IGZyb20gJy4vaW5kZXgucnVuJztcblxuaW1wb3J0IHsgRnJpZW5kQ29udHJvbGxlciB9IGZyb20gJy4vZnJpZW5kL2ZyaWVuZHMuY29udHJvbGxlcic7XG5cbmltcG9ydCB7IE15Q29udHJvbGxlciB9IGZyb20gJy4vbWFpbi90ZW1wbGF0ZS5Db250cm9sbGVyJztcbmltcG9ydCB7IE15UmVnaXN0cmF0aW9uIH0gZnJvbSAnLi9tYWluL3JlZ2lzdHJhdGlvbi5Db250cm9sbGVyJztcbmltcG9ydCB7IE1haW5Vc2VyQ29udHJvbGxlciB9IGZyb20gJy4vbWFpbi9Vc2VyTWFpbi5jb250cm9sbGVyJztcblxuaW1wb3J0IHsgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBXZWJEZXZUZWNTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJztcbmltcG9ydCB7IEZyaWVuZHNTZXJ2aWNlIH0gZnJvbSBcIi4uL2FwcC9mcmllbmQvZnJpZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5hdmJhckRpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1hbGFya2V5RGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJztcblxuXG5cblxuYW5ndWxhci5tb2R1bGUoJ2Jsb2cnLCBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLCAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3RvYXN0cicsICduZ01hdGVyaWFsJywgJ25nTWVzc2FnZXMnXSlcbiAgLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KVxuICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcbiAgLmNvbmZpZyhjb25maWcpXG4gIC5jb25maWcocm91dGVyQ29uZmlnKVxuICAucnVuKHJ1bkJsb2NrKVxuICAuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBHaXRodWJDb250cmlidXRvclNlcnZpY2UpXG4gIC5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCBXZWJEZXZUZWNTZXJ2aWNlKVxuICAuc2VydmljZSgnZnJpZW5kc1NlcnZpY2UnLCBGcmllbmRzU2VydmljZSlcblxuICAgIC5jb250cm9sbGVyKCdNeUNvbnRyb2xsZXInLCBNeUNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdNeVJlZ2lzdHJhdGlvbicsIE15UmVnaXN0cmF0aW9uKVxuICAgIC5jb250cm9sbGVyKCdNYWluVXNlckNvbnRyb2xsZXInLCBNYWluVXNlckNvbnRyb2xsZXIpXG5cbiAgLmNvbnRyb2xsZXIoJ0ZyaWVuZENvbnRyb2xsZXInLCBGcmllbmRDb250cm9sbGVyKVxuXG4gIC5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBOYXZiYXJEaXJlY3RpdmUpXG4gIC5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIE1hbGFya2V5RGlyZWN0aXZlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBjb25maWcgKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gNTAwMDtcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgIHVybDogJy8nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi90ZW1wbGF0ZS5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdNeUNvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndGVtcCdcbiAgICB9KVxuICAgIC5zdGF0ZSgnZm9sbG93cycse1xuICAgICAgdXJsOicvcmVnaXN0cmF0aW9uJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vcmVnaXN0cmF0aW9uLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjonTXlSZWdpc3RyYXRpb24nLFxuICAgICAgY29udHJvbGxlckFzOidyZWdpc3QnXG4gICAgfSlcbiAgICAgIC5zdGF0ZSgnMScse1xuICAgICAgICAgIHVybDonL21haW4nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vVXNlck1haW4uaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjonTWFpblVzZXJDb250cm9sbGVyJyxcbiAgICAgICAgICBjb250cm9sbGVyQXM6J01lVXNlJ1xuICAgICAgfSk7XG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJleHBvcnQgZnVuY3Rpb24gcnVuQmxvY2sgKCRsb2cpIHtcbiAgJ25nSW5qZWN0JztcbiAgJGxvZy5kZWJ1ZygncnVuQmxvY2sgZW5kJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsImV4cG9ydCBjbGFzcyBGcmllbmRDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCwgJHNjb3BlKSB7XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ZvbGxvd3MnKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICAgIC8vdGhpcy5kYXRhPXN1Y2Nlc3MuZGF0YTtcbiAgICAgICAgJHNjb3BlLnByID0gcHJvbWlzZS5kYXRhO1xuICAgICAgICB0aGF0LnByb21pc2UgPSBwcm9taXNlLmRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgdGhpcy5wcm9taXMgPSBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgdGhpcy5wcm9taXNlID0gJHNjb3BlLnByO1xuICAgIHRoaXMuVGFibGVQZXJzb24gPSBbXTtcbiAgICB0aGlzLm15Zmlyc3RzU2VydmljZSA9IFtdXG4gICAgdGhpcy5zdWNjZXNzID1udWxsO1xuICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwKTtcbiAgfVxuICBhY3RpdmF0ZSgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHApIHtcbiAgICB0aGlzLmdldERhdGFGcmllbmRzKGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwKTtcbiAgfVxuICBnZXREYXRhRnJpZW5kcyhmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjKXtcbiAgICB0aGlzLmZyaWVuZHNEYXRhID0gZnJpZW5kc1NlcnZpY2UuZ2V0RnJpZW5kcygpO1xuICAgIHRoaXMuVGFibGVQZXJzb24gPSB3ZWJEZXZUZWMuZ2V0ZGF0YSgpO1xuICAgIHRoaXMuc3VjY2VzcyA9IGZyaWVuZHNTZXJ2aWNlLmdldERhdGEoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mcmllbmQvZnJpZW5kcy5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIE15Q29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCwgJGxvZywgJGxvY2F0aW9uLCAkc2NvcGUpIHtcbiAgICAgICduZ0luamVjdCdcblxuXG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuICAgICAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCJcIjtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmNoZWNrRW1haWwgPSBmdW5jdGlvbiAoZW1haWwpIHtcbiAgICAgICAgICAgIGxldCBwYXR0ZXJuICA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KGVtYWlsKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbnRyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmKCRzY29wZS5jaGVja0VtYWlsKCRzY29wZS5FbWFpbCkpIHtcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvZW50cnknLCB7bmFtZTogJHNjb3BlLk5hbWUsIGVtYWlsOiAkc2NvcGUuRW1haWwsIHBhc3N3b3JkOiAkc2NvcGUuUGFzc3dvcmR9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVG9rZW4nLCByZXN1bHQuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTmFtZScsIHJlc3VsdC5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0lkJywgcmVzdWx0LmRhdGEuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoXCIvbWFpblwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgfTtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKFwiL3JlZ2lzdHJhdGlvblwiKTtcbiAgICAgIH07XG4gICAgICAgICRzY29wZS5FcnJvckNvZGUgPSBmdW5jdGlvbiAoc3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgaWYoc3RhdHVzQ29kZSA9PT0gNDAxKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0J3QtdCy0LXRgNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YwhXCI7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluL3RlbXBsYXRlLkNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgTXlSZWdpc3RyYXRpb24ge1xuICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwLCAkbG9nLCAkc2NvcGUsICRsb2NhdGlvbikge1xuICAgICduZ0luamVjdCdcblxuICAgICAgJHNjb3BlLk5hbWUgPSBcIlwiO1xuICAgICAgJHNjb3BlLkVtYWlsID0gXCJcIjtcbiAgICAgICRzY29wZS5QYXNzd29yZCA9IFwiXCI7XG5cbiAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCJcIjtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKTtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG4gICAgICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcIlwiO1xuICAgICAgICB9O1xuICAgICRzY29wZS5jaGVja0VtYWlsID0gZnVuY3Rpb24gKGVtYWlsKSB7XG4gICAgICAgIGxldCBwYXR0ZXJuICA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QoZW1haWwpO1xuICAgIH07XG4gICAgICB0aGlzLnJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8kc2NvcGUuRW1haWwuaW5kZXhPZihcIkBcIikgIT09IC0xICYmICRzY29wZS5FbWFpbC5pbmRleE9mKFwiLlwiKSAhPT0gLTFcbiAgICAgICAgaWYoJHNjb3BlLmNoZWNrRW1haWwoJHNjb3BlLkVtYWlsKSl7XG4gICAgICAgICAgICAkaHR0cC5wb3N0KCcvcmVnaXN0cmF0aW9uJywge25hbWU6ICRzY29wZS5OYW1lLCBlbWFpbDogJHNjb3BlLkVtYWlsLCBwYXNzd29yZDogJHNjb3BlLlBhc3N3b3JkfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKFwiL1wiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgfTtcbiAgICAgICRzY29wZS5FcnJvckNvZGUgPSBmdW5jdGlvbiAoc3RhdHVzQ29kZSkge1xuICAgICAgICAgIGlmKHN0YXR1c0NvZGUgPT09IDQwMSl7XG4gICAgICAgICAgICAgICRzY29wZS5IZWFkZXIgPSBcIkVycm9yOiBcIiArIHN0YXR1c0NvZGU7XG4gICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0J3QtdCy0LXRgNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YwhXCI7XG4gICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgfVxuICAgICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5Db250cm9sbGVyLmpzIiwiaW1wb3J0IHt0b1N0cmluZ30gZnJvbSBcIi4uLy4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdFwiO1xuXG5leHBvcnQgY2xhc3MgTWFpblVzZXJDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwLCAkbG9nLCAkbG9jYXRpb24sICRzY29wZSkge1xuICAgICAgICAnbmdJbmplY3QnXG5cblxuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcbiAgICAgICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJcIjtcbiAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwiXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnRpdGxlTWFpbiA9IFwi0JfQtNC10YHRjCDQsdGD0LTRg9GCINCy0LDRiNC4INC30LDQv9C40YHQuFwiO1xuICAgICAgICAkc2NvcGUuZm9yRWRpdFBvc3QgPSBmYWxzZTtcbiAgICAgICAgJHNjb3BlLmJvb2tzID0gW107XG4gICAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcIlwiO1xuICAgICAgICAkc2NvcGUubmFtZVVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk5hbWVcIik7XG4gICAgICAgICRzY29wZS50ZXh0Rm9yUG9zdCA9IFwiXCI7XG4gICAgICAgICRzY29wZS50ZXh0Rm9yVGl0bGUgPSBcIlwiO1xuICAgICAgICAkc2NvcGUudGV4dEZvclNlYXJjaCA9IFwiXCI7XG4gICAgICAgICRzY29wZS5jb3VudElkID0gMDtcbiAgICAgICAgJHNjb3BlLnRlc3QgPSBcInRydWVcIjtcbiAgICAgICAgbGV0IHBvc3RFZGl0SWQ7XG4gICAgICAgIGxldCBwb3N0RWRpdFRleHQ7XG5cbiAgICAgICAgJHNjb3BlLnVzZXJQb3N0ID0gZnVuY3Rpb24oaWQsIG5hbWUpe1xuICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3VzZXIvJysgaWQgKyAnL3Bvc3RzJywge2hlYWRlcnM6IHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKX19KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpdGxlTWFpbiA9IFwi0JfQsNC/0LjRgdC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjzogXCIgKyBuYW1lO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YS5yZXN1bHRbMF07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuVXNlcnMgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3VzZXJzJywge2hlYWRlcnM6IHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKX19KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnVzZXJzID0gcmVzdWx0LmRhdGEucmVzdWx0WzBdO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmVkaXRQb3N0ID0gZnVuY3Rpb24gKGlkLCB0ZXh0Q29udGVudCl7XG4gICAgICAgICAgICBwb3N0RWRpdElkID0gaWQ7XG4gICAgICAgICAgICBwb3N0RWRpdFRleHQgPSB0ZXh0Q29udGVudDtcbiAgICAgICAgICAgICRzY29wZS5mb3JFZGl0UG9zdCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5zYXZlUG9zdCA9IGZ1bmN0aW9uKGlkLCB0ZXh0Q29udGVudCl7XG4gICAgICAgICAgICBpZihpZCAhPT0gcG9zdEVkaXRJZCl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZSg0MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0ZXh0Q29udGVudCA9PT0gcG9zdEVkaXRUZXh0KXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZm9yRWRpdFBvc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgJGh0dHAucHV0KCcvYXBpL3Bvc3RzLycgKyBpZCwge25ld1RleHQ6IHRleHRDb250ZW50LCBwb3N0SUQ6IGlkfSwge2hlYWRlcnM6IHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKX19KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZm9yRWRpdFBvc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mb3JFZGl0UG9zdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUubmV3UG9zdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZFBvc3RcIik7XG4gICAgICAgICAgICBpZih0ZXh0WzFdLnRleHRDb250ZW50ICE9PSBcIlwiICYmIHRleHRbMF0udmFsdWUgIT09IFwiXCIpe1xuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCB7dGV4dFBvc3Q6IHRleHRbMV0udGV4dENvbnRlbnQsIHRleHRUaXRsZTogJHNjb3BlLnRleHRGb3JUaXRsZX0sIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoJHNjb3BlLmJvb2tzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGF0YS5yZXN1bHQuZmlyc3ROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJOYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5ib29rcy5wdXNoKHJlc3VsdC5kYXRhLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRleHRGb3JQb3N0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGV4dEZvclRpdGxlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuUG9zdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdXNlci8nKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIklkXCIpICsgJy9wb3N0cycsIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aXRsZU1haW4gPSBcItCS0LDRiNC4INC30LDQv9C40YHQuFwiO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YS5yZXN1bHRbMF07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuQWxsUG9zdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnLCB7aGVhZGVyczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGl0bGVNYWluID0gXCLQl9Cw0L/QuNGB0Lgg0LLRgdC10YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10LlcIjtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmJvb2tzID0gcmVzdWx0LmRhdGEucmVzdWx0WzBdO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLlNlYXJjaCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZigkc2NvcGUudGV4dEZvclNlYXJjaCAhPT0gXCJcIil7XG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3NlYXJjaC8nICsgJHNjb3BlLnRleHRGb3JTZWFyY2gsIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmJvb2tzID0gcmVzdWx0LmRhdGEucmVzdWx0WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRleHRGb3JTZWFyY2ggPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Rm9yU2VhcmNoID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmRlbFBvc3QgPSBmdW5jdGlvbiAoaWQsIG5hbWUpIHtcbiAgICAgICAgICAgICRodHRwLmRlbGV0ZSgnL2FwaS9wb3N0cy8nKyBpZCwge2hlYWRlcnM6IHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKX19KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEudXNlciA9PT0gbmFtZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuUG9zdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuQWxsUG9zdHMoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS51c2VyRGVsZXRlID0gZnVuY3Rpb24oaWQsIG5hbWUpe1xuICAgICAgICAgICAgJGh0dHAuZGVsZXRlKCcvYXBpL3VzZXJzLycrIGlkLCB7aGVhZGVyczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS51c2VyID09IG5hbWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoXCIvXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuVXNlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLkVycm9yQ29kZSA9IGZ1bmN0aW9uIChzdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gNDAzKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0KMg0LLQsNGBINC90LXRgiDQv9GA0LDQsiDQvdCwINGN0YLQviDQtNC10LnRgdGC0LLQuNC1IVwiO1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHN0YXR1c0NvZGUgPT09IDQwMSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkhlYWRlciA9IFwiRXJyb3I6IFwiICsgc3RhdHVzQ29kZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcItCd0LXQstC10YDQvdGL0Lkg0LvQvtCz0LjQvSDQuNC70Lgg0L/QsNGA0L7Qu9GMIVwiO1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHN0YXR1c0NvZGUgPT09IDQwMCl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkhlYWRlciA9IFwiRXJyb3I6IFwiICsgc3RhdHVzQ29kZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcItCd0LXQstC10YDQvdGL0Lkg0LfQsNC/0YDQvtGBIVwiO1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHN0YXR1c0NvZGUgPT09IDUwMCl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkhlYWRlciA9IFwiRXJyb3I6IFwiICsgc3RhdHVzQ29kZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcItCS0L3Rg9GC0YDQtdC90L3Rj9GPINC+0YjQuNCx0LrQsCDRgdC10YDQstC10YDQsCFcIjtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuVXNlcnMoKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluL1VzZXJNYWluLmNvbnRyb2xsZXIuanMiLCJpbXBvcnQgeyBmb3JtYXRNb21lbnQgfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuXG5ob29rcy5kZWZhdWx0Rm9ybWF0ID0gJ1lZWVktTU0tRERUSEg6bW06c3NaJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmxvY2FsZSgnZW4nKS5mb3JtYXQoJ2RkZCBNTU0gREQgWVlZWSBISDptbTpzcyBbR01UXVpaJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0lTT1N0cmluZyAoKSB7XG4gICAgdmFyIG0gPSB0aGlzLmNsb25lKCkudXRjKCk7XG4gICAgaWYgKDAgPCBtLnllYXIoKSAmJiBtLnllYXIoKSA8PSA5OTk5KSB7XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcpIHtcbiAgICAgICAgICAgIC8vIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBpcyB+NTB4IGZhc3RlciwgdXNlIGl0IHdoZW4gd2UgY2FuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE1vbWVudChtLCAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdE1vbWVudChtLCAnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0IChpbnB1dFN0cmluZykge1xuICAgIHZhciBvdXRwdXQgPSBmb3JtYXRNb21lbnQodGhpcywgaW5wdXRTdHJpbmcgfHwgaG9va3MuZGVmYXVsdEZvcm1hdCk7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLnBvc3Rmb3JtYXQob3V0cHV0KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdC5qcyIsImltcG9ydCB6ZXJvRmlsbCBmcm9tICcuLi91dGlscy96ZXJvLWZpbGwnO1xuXG5leHBvcnQgdmFyIGZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UXxZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nO1xuXG52YXIgbG9jYWxGb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KExUU3xMVHxMTD9MP0w/fGx7MSw0fSkvZztcblxudmFyIGZvcm1hdEZ1bmN0aW9ucyA9IHt9O1xuXG5leHBvcnQgdmFyIGZvcm1hdFRva2VuRnVuY3Rpb25zID0ge307XG5cbi8vIHRva2VuOiAgICAnTSdcbi8vIHBhZGRlZDogICBbJ01NJywgMl1cbi8vIG9yZGluYWw6ICAnTW8nXG4vLyBjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB0aGlzLm1vbnRoKCkgKyAxIH1cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb3JtYXRUb2tlbiAodG9rZW4sIHBhZGRlZCwgb3JkaW5hbCwgY2FsbGJhY2spIHtcbiAgICB2YXIgZnVuYyA9IGNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tjYWxsYmFja10oKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSA9IGZ1bmM7XG4gICAgfVxuICAgIGlmIChwYWRkZWQpIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB6ZXJvRmlsbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHBhZGRlZFsxXSwgcGFkZGVkWzJdKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKG9yZGluYWwpIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbb3JkaW5hbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkub3JkaW5hbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRva2VuKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQubWF0Y2goL1xcW1tcXHNcXFNdLykpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXFxcL2csICcnKTtcbn1cblxuZnVuY3Rpb24gbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCkge1xuICAgIHZhciBhcnJheSA9IGZvcm1hdC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKSwgaSwgbGVuZ3RoO1xuXG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXSkge1xuICAgICAgICAgICAgYXJyYXlbaV0gPSBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJheVtpXSA9IHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb20pIHtcbiAgICAgICAgdmFyIG91dHB1dCA9ICcnO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG91dHB1dCArPSBhcnJheVtpXSBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJyYXlbaV0uY2FsbChtb20sIGZvcm1hdCkgOiBhcnJheVtpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG59XG5cbi8vIGZvcm1hdCBkYXRlIHVzaW5nIG5hdGl2ZSBkYXRlIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vbWVudChtLCBmb3JtYXQpIHtcbiAgICBpZiAoIW0uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBtLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cblxuICAgIGZvcm1hdCA9IGV4cGFuZEZvcm1hdChmb3JtYXQsIG0ubG9jYWxlRGF0YSgpKTtcbiAgICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSA9IGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdIHx8IG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpO1xuXG4gICAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKG0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbG9jYWxlKSB7XG4gICAgdmFyIGkgPSA1O1xuXG4gICAgZnVuY3Rpb24gcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUubG9uZ0RhdGVGb3JtYXQoaW5wdXQpIHx8IGlucHV0O1xuICAgIH1cblxuICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgIHdoaWxlIChpID49IDAgJiYgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLnRlc3QoZm9ybWF0KSkge1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShsb2NhbEZvcm1hdHRpbmdUb2tlbnMsIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2Vucyk7XG4gICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgICAgICBpIC09IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdDtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi9mb3JtYXQvZm9ybWF0LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gemVyb0ZpbGwobnVtYmVyLCB0YXJnZXRMZW5ndGgsIGZvcmNlU2lnbikge1xuICAgIHZhciBhYnNOdW1iZXIgPSAnJyArIE1hdGguYWJzKG51bWJlciksXG4gICAgICAgIHplcm9zVG9GaWxsID0gdGFyZ2V0TGVuZ3RoIC0gYWJzTnVtYmVyLmxlbmd0aCxcbiAgICAgICAgc2lnbiA9IG51bWJlciA+PSAwO1xuICAgIHJldHVybiAoc2lnbiA/IChmb3JjZVNpZ24gPyAnKycgOiAnJykgOiAnLScpICtcbiAgICAgICAgTWF0aC5wb3coMTAsIE1hdGgubWF4KDAsIHplcm9zVG9GaWxsKSkudG9TdHJpbmcoKS5zdWJzdHIoMSkgKyBhYnNOdW1iZXI7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL3V0aWxzL3plcm8tZmlsbC5qcyIsImV4cG9ydCB7IGhvb2tzLCBzZXRIb29rQ2FsbGJhY2sgfTtcblxudmFyIGhvb2tDYWxsYmFjaztcblxuZnVuY3Rpb24gaG9va3MgKCkge1xuICAgIHJldHVybiBob29rQ2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuLy8gVGhpcyBpcyBkb25lIHRvIHJlZ2lzdGVyIHRoZSBtZXRob2QgY2FsbGVkIHdpdGggbW9tZW50KClcbi8vIHdpdGhvdXQgY3JlYXRpbmcgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuZnVuY3Rpb24gc2V0SG9va0NhbGxiYWNrIChjYWxsYmFjaykge1xuICAgIGhvb2tDYWxsYmFjayA9IGNhbGxiYWNrO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy9ob29rcy5qcyIsImV4cG9ydCBjbGFzcyBHaXRodWJDb250cmlidXRvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMobGltaXQ9MzApIHtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpKTtcbiAgICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsImV4cG9ydCBjbGFzcyBXZWJEZXZUZWNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcbiAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnR3VscEpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcbiAgICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdLYXJtYSA9KScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXG4gICAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxuICAgICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0VTNiAoQmFiZWwgZm9ybWVybHkgNnRvNSknLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYmFiZWxqcy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVHVybnMgRVM2KyBjb2RlIGludG8gdmFuaWxsYSBFUzUsIHNvIHlvdSBjYW4gdXNlIG5leHQgZ2VuZXJhdGlvbiBmZWF0dXJlcyB0b2RheS4nLFxuICAgICAgICAnbG9nbyc6ICdiYWJlbC5wbmcnXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLmRhdGFZZXNOTz1bXG5cbiAgICAgIHtcbiAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDBcIixcbiAgICAgICAgJ05hbWVoYXNoJzpbXCIjY2F0XCJdLFxuICAgICAgICAnbWFzc2FnZSc6XCLQmtC+0YLQuNC6INC60YDQsNGB0LjQstGL0Lk/XCIsXG4gICAgICAgICdQaWN0dXJlJzpcImFzc2V0cy9pbWFnZXMvUG9zdEFsbC9DYXQxLmpwZ1wiLFxuICAgICAgICAnWWVzJzogXCJcIixcbiAgICAgICAgJ05vJzpcIlwiLFxuICAgICAgICAndm90ZWQnOltdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMVwiLFxuICAgICAgICAnTmFtZWhhc2gnOltcIiNob3VzZVwiXSxcbiAgICAgICAgJ21hc3NhZ2UnOlwi0JTQvtC8INCx0L7Qu9GM0YjQvtC5XCIsXG4gICAgICAgICdQaWN0dXJlJzpcImFzc2V0cy9pbWFnZXMvUG9zdEFsbC9Ib3VzZTEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAyXCIsXG4gICAgICAgICdtYXNzYWdlJzpcItCi0LXQu9C10YTQvtC9INC90L7QstGL0Lk/XCIsXG4gICAgICAgICdOYW1laGFzaCc6W1wiI3Bob25lXCJdLFxuICAgICAgICAnUGljdHVyZSc6XCJhc3NldHMvaW1hZ2VzL1Bvc3RBbGwvcGhvbmUxLmpwZ1wiLFxuICAgICAgICAnWWVzJzogXCJcIixcbiAgICAgICAgJ05vJzpcIlwiLFxuICAgICAgICAndm90ZWQnOltdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMVwiLFxuICAgICAgICAnTmFtZWhhc2gnOltcIiNkb2dcIl0sXG4gICAgICAgICdtYXNzYWdlJzpcItCh0L7QsdCw0LrQsCDQv9C+0YDQvtC00LjRgdGC0LDRjz9cIixcbiAgICAgICAgJ1BpY3R1cmUnOlwiYXNzZXRzL2ltYWdlcy9Qb3N0QWxsL0RvZzEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cblxuXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLlRhYmxlUGVyc29uID1bIHtcbiAgICAgICAgICAnaWRQZXJzb24nOlwiMTAwMFwiLFxuICAgICAgICAgICdpZEZvbG93cyc6W10sXG4gICAgICAgICAgJ2lkTXlGb2xvd3MnOltdLFxuICAgICAgICAgICdOYW1lJzpcIlZhc3lhXCIsXG4gICAgICAgICAgJ1BpY3R1cmVGYWNlJzpcImFzc2V0cy9pbWFnZXMvcGVyc29ucy8vMTAwMC5qcGVnXCJcblxuICAgICAgfSx7XG4gICAgICAnaWRQZXJzb24nOlwiMTAwMVwiLFxuICAgICAgJ2lkRm9sb3dzJzpbXSxcbiAgICAgICdpZE15Rm9sb3dzJzpbXSxcbiAgICAgICdOYW1lJzpcIkFuYXRvbGlpXCIsXG4gICAgICAnUGljdHVyZUZhY2UnOlwiYXNzZXRzL2ltYWdlcy9wZXJzb25zLzEwMDEuanBlZ1wiXG5cbiAgICB9LFxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMlwiLFxuICAgICAgICAnaWRGb2xvd3MnOltdLFxuICAgICAgICAnaWRNeUZvbG93cyc6W10sXG4gICAgICAgICdOYW1lJzpcIk5hdGFzaGFcIixcbiAgICAgICAgJ1BpY3R1cmVGYWNlJzpcImFzc2V0cy9pbWFnZXMvcGVyc29ucy8xMDAyLmpwZ1wiXG5cbiAgICAgIH1cblxuICAgIF1cblxuXG5cbiAgfVxuXG4gIGdldFRlYygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gIGdldFllc05vZGF0YSgpe1xuICAgIHJldHVybiB0aGlzLmRhdGFZZXNOTztcbiAgfVxuICBnZXRkYXRhKCl7XG4gICAgcmV0dXJuIHRoaXMuVGFibGVQZXJzb247XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanMiLCJleHBvcnQgY2xhc3MgRnJpZW5kc1NlcnZpY2V7XG4gIGNvbnN0cnVjdG9yICgpe1xuICAgICduZ0luamVjdCc7XG4gICAgdGhpcy5wcm9taXNlID1bXTtcbiAgICAvLyAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb2xsb3dzJylcbiAgICAvLyAgIC50aGVuKGZ1bmN0aW9yb21pbihwcm9taXNlKSB7XG4gICAgLy8gICAgIC8vICAgICAgIC8vdGhpcy49c3VjY2Vzcy5kYXRhO1xuICAgIC8vICAgICAvLyAgICAgICB0aGlzLnByb21pc2U9IHBzZTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgZnVuY3Rpb24oZXJyb3IpIHtkYXRhXG4gICAgLy8gICAgICAgdGhpcy5wcm9taXNlPSBlcnJvcjtcbiAgICAvLyAgICAgfSk7XG5cbiAgICB0aGlzLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgICdpZCc6JzEwMDAnLFxuICAgICAgICAnbXlGcmllbmQnOiBbXCIxMDAxXCIsXCIxMDAyXCJdXG4gICAgICB9XG4gICAgXVxuXG4gIH1cbiAgIGdldEZyaWVuZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuICAgZ2V0RGF0YSgpe1xuICAgICAgIC8vICRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ZvbGxvd3MnKVxuICAgICAgIC8vICAgLnRoZW4oZnVuY3Rpb24oc3VjY2Vzcyl7XG4gICAgICAgLy8gICAvL3RoaXMuZGF0YT1zdWNjZXNzLmRhdGE7XG4gICAgICAgLy8gICByZXR1cm4gc3VjY2Vzcy5kYXRhO1xuICAgICAgIC8vIH0sXG4gICAgICAgLy8gZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgIC8vICAgcmV0dXJuIGVycm9yO1xuICAgICAgIC8vIH0pO1xuICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxuY2xhc3MgTmF2YmFyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb21lbnQpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgLy8gXCJ0aGlzLmNyZWF0aW9uRGF0ZVwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG4gICAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQodGhpcy5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgbGV0IHdhdGNoZXI7XG4gICAgbGV0IHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XG4gICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FjbWUtbWFsYXJrZXknKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgKHZhbHVlKSA9PiB7XG4gICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKS5kZWxldGUoKTtcbiAgICB9KTtcblxuICAgIHdhdGNoZXIgPSBzY29wZS4kd2F0Y2goJ3ZtLmNvbnRyaWJ1dG9ycycsICgpID0+IHtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2bS5jb250cmlidXRvcnMsIChjb250cmlidXRvcikgPT4ge1xuICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKS5kZWxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHtcbiAgICAgIHdhdGNoZXIoKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbmNsYXNzIE1hbGFya2V5Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XG5cbiAgICB0aGlzLmFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKTtcbiAgfVxuXG4gIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiBnaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY29udHJpYnV0b3JzID0gZGF0YTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29udHJpYnV0b3JzO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==