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
	            console.log("dsfdsfsd");
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
	
	    $scope.editPost = function (id, textContent) {
	        postEditId = id;
	        postEditText = textContent;
	        $scope.forEditPost = true;
	    };
	    $scope.savePost = function (id, textContent) {
	        console.log(textContent);
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
	            $scope.titleMain = "Записи всех пользвателей";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWU1ZjVlZTM0NGRmOTEwMTE4OTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3RlbXBsYXRlLkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi9Vc2VyTWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL2Zvcm1hdC9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy96ZXJvLWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy9ob29rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25zdGFudCIsIm1hbGFya2V5IiwibW9tZW50IiwiY29uZmlnIiwicm91dGVyQ29uZmlnIiwicnVuIiwicnVuQmxvY2siLCJzZXJ2aWNlIiwiR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIiwiV2ViRGV2VGVjU2VydmljZSIsIkZyaWVuZHNTZXJ2aWNlIiwiY29udHJvbGxlciIsIk15Q29udHJvbGxlciIsIk15UmVnaXN0cmF0aW9uIiwiTWFpblVzZXJDb250cm9sbGVyIiwiRnJpZW5kQ29udHJvbGxlciIsImRpcmVjdGl2ZSIsIk5hdmJhckRpcmVjdGl2ZSIsIk1hbGFya2V5RGlyZWN0aXZlIiwiJGxvZ1Byb3ZpZGVyIiwidG9hc3RyQ29uZmlnIiwiZGVidWdFbmFibGVkIiwiYWxsb3dIdG1sIiwidGltZU91dCIsInBvc2l0aW9uQ2xhc3MiLCJwcmV2ZW50RHVwbGljYXRlcyIsInByb2dyZXNzQmFyIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlckFzIiwib3RoZXJ3aXNlIiwiJGxvZyIsImRlYnVnIiwiJHRpbWVvdXQiLCJmcmllbmRzU2VydmljZSIsIndlYkRldlRlYyIsIiRodHRwIiwiJHNjb3BlIiwidGhhdCIsImdldCIsInRoZW4iLCJwcm9taXNlIiwicHIiLCJkYXRhIiwiZXJyb3IiLCJwcm9taXMiLCJUYWJsZVBlcnNvbiIsIm15Zmlyc3RzU2VydmljZSIsInN1Y2Nlc3MiLCJhY3RpdmF0ZSIsImdldERhdGFGcmllbmRzIiwiZnJpZW5kc0RhdGEiLCJnZXRGcmllbmRzIiwiZ2V0ZGF0YSIsImdldERhdGEiLCIkbG9jYXRpb24iLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcGFuIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJIZWFkZXIiLCJ0ZXh0Qm9keSIsImVudHJ5IiwicG9zdCIsIm5hbWUiLCJOYW1lIiwiZW1haWwiLCJFbWFpbCIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJpZCIsInBhdGgiLCJjYXRjaCIsIkVycm9yQ29kZSIsInN0YXR1cyIsInJlZ2lzdHJhdGlvbiIsInN0YXR1c0NvZGUiLCJjb25zb2xlIiwibG9nIiwidGl0bGVNYWluIiwiZm9yRWRpdFBvc3QiLCJib29rcyIsIm5hbWVVc2VyIiwiZ2V0SXRlbSIsInRleHRGb3JQb3N0IiwidGV4dEZvclRpdGxlIiwidGV4dEZvclNlYXJjaCIsImNvdW50SWQiLCJ0ZXN0IiwicG9zdEVkaXRJZCIsInBvc3RFZGl0VGV4dCIsImVkaXRQb3N0IiwidGV4dENvbnRlbnQiLCJzYXZlUG9zdCIsInB1dCIsIm5ld1RleHQiLCJwb3N0SUQiLCJoZWFkZXJzIiwibmV3UG9zdCIsInRleHQiLCJ2YWx1ZSIsInRleHRQb3N0IiwidGV4dFRpdGxlIiwicHVzaCIsIlBvc3RzIiwiQWxsUG9zdHMiLCJTZWFyY2giLCJkZWxQb3N0IiwiZGVsZXRlIiwidXNlciIsInRvU3RyaW5nIiwidG9JU09TdHJpbmciLCJmb3JtYXQiLCJob29rcyIsImRlZmF1bHRGb3JtYXQiLCJjbG9uZSIsImxvY2FsZSIsIm0iLCJ1dGMiLCJ5ZWFyIiwiRGF0ZSIsInByb3RvdHlwZSIsInRvRGF0ZSIsImlucHV0U3RyaW5nIiwib3V0cHV0IiwibG9jYWxlRGF0YSIsInBvc3Rmb3JtYXQiLCJhZGRGb3JtYXRUb2tlbiIsImZvcm1hdE1vbWVudCIsImV4cGFuZEZvcm1hdCIsImZvcm1hdHRpbmdUb2tlbnMiLCJsb2NhbEZvcm1hdHRpbmdUb2tlbnMiLCJmb3JtYXRGdW5jdGlvbnMiLCJmb3JtYXRUb2tlbkZ1bmN0aW9ucyIsInBhZGRlZCIsIm9yZGluYWwiLCJjYWxsYmFjayIsImZ1bmMiLCJhcHBseSIsImFyZ3VtZW50cyIsInJlbW92ZUZvcm1hdHRpbmdUb2tlbnMiLCJpbnB1dCIsIm1hdGNoIiwicmVwbGFjZSIsIm1ha2VGb3JtYXRGdW5jdGlvbiIsImFycmF5IiwiaSIsImxlbmd0aCIsIm1vbSIsIkZ1bmN0aW9uIiwiY2FsbCIsImlzVmFsaWQiLCJpbnZhbGlkRGF0ZSIsInJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2VucyIsImxvbmdEYXRlRm9ybWF0IiwibGFzdEluZGV4IiwiemVyb0ZpbGwiLCJudW1iZXIiLCJ0YXJnZXRMZW5ndGgiLCJmb3JjZVNpZ24iLCJhYnNOdW1iZXIiLCJNYXRoIiwiYWJzIiwiemVyb3NUb0ZpbGwiLCJzaWduIiwicG93IiwibWF4Iiwic3Vic3RyIiwic2V0SG9va0NhbGxiYWNrIiwiaG9va0NhbGxiYWNrIiwiYXBpSG9zdCIsImxpbWl0IiwicmVzcG9uc2UiLCJ0b0pzb24iLCJkYXRhWWVzTk8iLCJyZXN0cmljdCIsInNjb3BlIiwiY3JlYXRpb25EYXRlIiwiTmF2YmFyQ29udHJvbGxlciIsImJpbmRUb0NvbnRyb2xsZXIiLCJyZWxhdGl2ZURhdGUiLCJmcm9tTm93IiwiZXh0cmFWYWx1ZXMiLCJ0ZW1wbGF0ZSIsImxpbmsiLCJsaW5rRnVuYyIsIk1hbGFya2V5Q29udHJvbGxlciIsImVsIiwiYXR0ciIsInZtIiwid2F0Y2hlciIsInR5cGlzdCIsInR5cGVTcGVlZCIsImRlbGV0ZVNwZWVkIiwicGF1c2VEZWxheSIsImxvb3AiLCJwb3N0Zml4IiwiYWRkQ2xhc3MiLCJmb3JFYWNoIiwidHlwZSIsInBhdXNlIiwiJHdhdGNoIiwiY29udHJpYnV0b3JzIiwiY29udHJpYnV0b3IiLCJsb2dpbiIsIiRvbiIsImdpdGh1YkNvbnRyaWJ1dG9yIiwiZ2V0Q29udHJpYnV0b3JzIiwiaW5mbyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFD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RXBCLE9BQU8sT0FBS3VLOzs7OztHQXlCaEIsT0FBTyIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhZTVmNWVlMzQ0ZGY5MTAxMTg5NSIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vaW5kZXguY29uZmlnJztcbmltcG9ydCB7IHJvdXRlckNvbmZpZyB9IGZyb20gJy4vaW5kZXgucm91dGUnO1xuaW1wb3J0IHsgcnVuQmxvY2sgfSBmcm9tICcuL2luZGV4LnJ1bic7XG5cbmltcG9ydCB7IEZyaWVuZENvbnRyb2xsZXIgfSBmcm9tICcuL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyBNeUNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vdGVtcGxhdGUuQ29udHJvbGxlcic7XG5pbXBvcnQgeyBNeVJlZ2lzdHJhdGlvbiB9IGZyb20gJy4vbWFpbi9yZWdpc3RyYXRpb24uQ29udHJvbGxlcic7XG5pbXBvcnQgeyBNYWluVXNlckNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vVXNlck1haW4uY29udHJvbGxlcic7XG5cbmltcG9ydCB7IEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2ViRGV2VGVjU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZSc7XG5pbXBvcnQgeyBGcmllbmRzU2VydmljZSB9IGZyb20gXCIuLi9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOYXZiYXJEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYWxhcmtleURpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZSc7XG5cblxuXG5cbmFuZ3VsYXIubW9kdWxlKCdibG9nJywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ01lc3NhZ2VzJywgJ25nQXJpYScsICduZ1Jlc291cmNlJywgJ3VpLnJvdXRlcicsICd0b2FzdHInLCAnbmdNYXRlcmlhbCcsICduZ01lc3NhZ2VzJ10pXG4gIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcbiAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXG4gIC5jb25maWcoY29uZmlnKVxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcbiAgLnJ1bihydW5CbG9jaylcbiAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKVxuICAuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSlcbiAgLnNlcnZpY2UoJ2ZyaWVuZHNTZXJ2aWNlJywgRnJpZW5kc1NlcnZpY2UpXG5cbiAgICAuY29udHJvbGxlcignTXlDb250cm9sbGVyJywgTXlDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignTXlSZWdpc3RyYXRpb24nLCBNeVJlZ2lzdHJhdGlvbilcbiAgICAuY29udHJvbGxlcignTWFpblVzZXJDb250cm9sbGVyJywgTWFpblVzZXJDb250cm9sbGVyKVxuXG4gIC5jb250cm9sbGVyKCdGcmllbmRDb250cm9sbGVyJywgRnJpZW5kQ29udHJvbGxlcilcblxuICAuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgTmF2YmFyRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBNYWxhcmtleURpcmVjdGl2ZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJleHBvcnQgZnVuY3Rpb24gY29uZmlnICgkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xuICAnbmdJbmplY3QnO1xuICAvLyBFbmFibGUgbG9nXG4gICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgLy8gU2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXG4gIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICB0b2FzdHJDb25maWcudGltZU91dCA9IDUwMDA7XG4gIHRvYXN0ckNvbmZpZy5wb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XG4gIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vdGVtcGxhdGUuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTXlDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3RlbXAnXG4gICAgfSlcbiAgICAuc3RhdGUoJ2ZvbGxvd3MnLHtcbiAgICAgIHVybDonL3JlZ2lzdHJhdGlvbicsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6J015UmVnaXN0cmF0aW9uJyxcbiAgICAgIGNvbnRyb2xsZXJBczoncmVnaXN0J1xuICAgIH0pXG4gICAgICAuc3RhdGUoJzEnLHtcbiAgICAgICAgICB1cmw6Jy9tYWluJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL1VzZXJNYWluLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6J01haW5Vc2VyQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOidNZVVzZSdcbiAgICAgIH0pO1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4uanMiLCJleHBvcnQgY2xhc3MgRnJpZW5kQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRzY29wZSkge1xuICAgICduZ0luamVjdCdcblxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb2xsb3dzJylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICAgICAvL3RoaXMuZGF0YT1zdWNjZXNzLmRhdGE7XG4gICAgICAgICRzY29wZS5wciA9IHByb21pc2UuZGF0YTtcbiAgICAgICAgdGhhdC5wcm9taXNlID0gcHJvbWlzZS5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIHRoaXMucHJvbWlzID0gZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIHRoaXMucHJvbWlzZSA9ICRzY29wZS5wcjtcbiAgICB0aGlzLlRhYmxlUGVyc29uID0gW107XG4gICAgdGhpcy5teWZpcnN0c1NlcnZpY2UgPSBbXVxuICAgIHRoaXMuc3VjY2VzcyA9bnVsbDtcbiAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCk7XG4gIH1cbiAgYWN0aXZhdGUoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwKSB7XG4gICAgdGhpcy5nZXREYXRhRnJpZW5kcyhmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCk7XG4gIH1cbiAgZ2V0RGF0YUZyaWVuZHMoZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYyl7XG4gICAgdGhpcy5mcmllbmRzRGF0YSA9IGZyaWVuZHNTZXJ2aWNlLmdldEZyaWVuZHMoKTtcbiAgICB0aGlzLlRhYmxlUGVyc29uID0gd2ViRGV2VGVjLmdldGRhdGEoKTtcbiAgICB0aGlzLnN1Y2Nlc3MgPSBmcmllbmRzU2VydmljZS5nZXREYXRhKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZHMuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBNeUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRsb2csICRsb2NhdGlvbiwgJHNjb3BlKSB7XG4gICAgICAnbmdJbmplY3QnXG5cblxuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcbiAgICAgICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJcIjtcbiAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwiXCI7XG4gICAgICAgIH07XG5cbiAgICAgIHRoaXMuZW50cnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRodHRwLnBvc3QoJy9lbnRyeScsIHtuYW1lOiAkc2NvcGUuTmFtZSwgZW1haWw6ICRzY29wZS5FbWFpbCwgcGFzc3dvcmQ6ICRzY29wZS5QYXNzd29yZH0pXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVG9rZW4nLCByZXN1bHQuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdOYW1lJywgcmVzdWx0LmRhdGEubmFtZSk7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdJZCcsIHJlc3VsdC5kYXRhLmlkKTtcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoXCIvbWFpblwiKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5yZWdpc3RyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKFwiL3JlZ2lzdHJhdGlvblwiKTtcbiAgICAgIH07XG4gICAgICAgICRzY29wZS5FcnJvckNvZGUgPSBmdW5jdGlvbiAoc3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgaWYoc3RhdHVzQ29kZSA9PT0gNDAxKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0J3QtdCy0LXRgNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YwhXCI7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluL3RlbXBsYXRlLkNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgTXlSZWdpc3RyYXRpb24ge1xuICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwLCAkbG9nLCAkc2NvcGUsICRsb2NhdGlvbikge1xuICAgICduZ0luamVjdCdcblxuICAgICAgJHNjb3BlLk5hbWUgPSBcIlwiO1xuICAgICAgJHNjb3BlLkVtYWlsID0gXCJcIjtcbiAgICAgICRzY29wZS5QYXNzd29yZCA9IFwiXCI7XG5cbiAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCJcIjtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKTtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG4gICAgICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcIlwiO1xuICAgICAgICB9O1xuXG4gICAgdGhpcy5yZWdpc3RyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkaHR0cC5wb3N0KCcvcmVnaXN0cmF0aW9uJywge25hbWU6ICRzY29wZS5OYW1lLCBlbWFpbDogJHNjb3BlLkVtYWlsLCBwYXNzd29yZDogJHNjb3BlLlBhc3N3b3JkfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkc2Zkc2ZzZFwiKTtcbiAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKFwiL1wiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgICRzY29wZS5FcnJvckNvZGUgPSBmdW5jdGlvbiAoc3RhdHVzQ29kZSkge1xuICAgICAgICAgIGlmKHN0YXR1c0NvZGUgPT09IDQwMSl7XG4gICAgICAgICAgICAgICRzY29wZS5IZWFkZXIgPSBcIkVycm9yOiBcIiArIHN0YXR1c0NvZGU7XG4gICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0J3QtdCy0LXRgNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YwhXCI7XG4gICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgfVxuICAgICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5Db250cm9sbGVyLmpzIiwiaW1wb3J0IHt0b1N0cmluZ30gZnJvbSBcIi4uLy4uLy4uL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdFwiO1xuXG5leHBvcnQgY2xhc3MgTWFpblVzZXJDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwLCAkbG9nLCAkbG9jYXRpb24sICRzY29wZSkge1xuICAgICAgICAnbmdJbmplY3QnXG5cblxuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcbiAgICAgICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJcIjtcbiAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwiXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgJHNjb3BlLnRpdGxlTWFpbiA9IFwi0JfQtNC10YHRjCDQsdGD0LTRg9GCINCy0LDRiNC4INC30LDQv9C40YHQuFwiO1xuICAgICAgICAkc2NvcGUuZm9yRWRpdFBvc3QgPSBmYWxzZTtcbiAgICAgICAgJHNjb3BlLmJvb2tzID0gW107XG4gICAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcIlwiO1xuICAgICAgICAkc2NvcGUubmFtZVVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk5hbWVcIik7XG4gICAgICAgICRzY29wZS50ZXh0Rm9yUG9zdCA9IFwiXCI7XG4gICAgICAgICRzY29wZS50ZXh0Rm9yVGl0bGUgPSBcIlwiO1xuICAgICAgICAkc2NvcGUudGV4dEZvclNlYXJjaCA9IFwiXCI7XG4gICAgICAgICRzY29wZS5jb3VudElkID0gMDtcbiAgICAgICAgJHNjb3BlLnRlc3QgPSBcInRydWVcIjtcbiAgICAgICAgbGV0IHBvc3RFZGl0SWQ7XG4gICAgICAgIGxldCBwb3N0RWRpdFRleHQ7XG5cbiAgICAgICAgJHNjb3BlLmVkaXRQb3N0ID0gZnVuY3Rpb24gKGlkLCB0ZXh0Q29udGVudCl7XG4gICAgICAgICAgICBwb3N0RWRpdElkID0gaWQ7XG4gICAgICAgICAgICBwb3N0RWRpdFRleHQgPSB0ZXh0Q29udGVudDtcbiAgICAgICAgICAgICRzY29wZS5mb3JFZGl0UG9zdCA9IHRydWU7XG5cbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLnNhdmVQb3N0ID0gZnVuY3Rpb24oaWQsIHRleHRDb250ZW50KXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGlmKGlkICE9PSBwb3N0RWRpdElkKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKDQwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHRleHRDb250ZW50ID09PSBwb3N0RWRpdFRleHQpe1xuICAgICAgICAgICAgICAgICRzY29wZS5mb3JFZGl0UG9zdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAkaHR0cC5wdXQoJy9hcGkvcG9zdHMvJyArIGlkLCB7bmV3VGV4dDogdGV4dENvbnRlbnQsIHBvc3RJRDogaWR9LCB7aGVhZGVyczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mb3JFZGl0UG9zdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZvckVkaXRQb3N0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5uZXdQb3N0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkUG9zdFwiKTtcbiAgICAgICAgICAgIGlmKHRleHRbMV0udGV4dENvbnRlbnQgIT09IFwiXCIgJiYgdGV4dFswXS52YWx1ZSAhPT0gXCJcIil7XG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHt0ZXh0UG9zdDogdGV4dFsxXS50ZXh0Q29udGVudCwgdGV4dFRpdGxlOiAkc2NvcGUudGV4dEZvclRpdGxlfSwge2hlYWRlcnM6IHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKX19KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkc2NvcGUuYm9va3Mpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5ib29rcy5wdXNoKHJlc3VsdC5kYXRhLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRleHRGb3JQb3N0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGV4dEZvclRpdGxlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuUG9zdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdXNlci8nKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIklkXCIpICsgJy9wb3N0cycsIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aXRsZU1haW4gPSBcItCS0LDRiNC4INC30LDQv9C40YHQuFwiO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YS5yZXN1bHRbMF07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuQWxsUG9zdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnLCB7aGVhZGVyczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGl0bGVNYWluID0gXCLQl9Cw0L/QuNGB0Lgg0LLRgdC10YUg0L/QvtC70YzQt9Cy0LDRgtC10LvQtdC5XCI7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5ib29rcyA9IHJlc3VsdC5kYXRhLnJlc3VsdFswXTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5TZWFyY2ggPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoJHNjb3BlLnRleHRGb3JTZWFyY2ggIT09IFwiXCIpe1xuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9zZWFyY2gvJyArICRzY29wZS50ZXh0Rm9yU2VhcmNoLCB7aGVhZGVyczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5ib29rcyA9IHJlc3VsdC5kYXRhLnJlc3VsdFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Rm9yU2VhcmNoID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGV4dEZvclNlYXJjaCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5kZWxQb3N0ID0gZnVuY3Rpb24gKGlkLCBuYW1lKSB7XG4gICAgICAgICAgICAkaHR0cC5kZWxldGUoJy9hcGkvcG9zdHMvJysgaWQsIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLnVzZXIgPT09IG5hbWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLlBvc3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkFsbFBvc3RzKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuRXJyb3JDb2RlID0gZnVuY3Rpb24gKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MDMpe1xuICAgICAgICAgICAgICAgICRzY29wZS5IZWFkZXIgPSBcIkVycm9yOiBcIiArIHN0YXR1c0NvZGU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCLQoyDQstCw0YEg0L3QtdGCINC/0YDQsNCyINC90LAg0Y3RgtC+INC00LXQudGB0YLQstC40LUhXCI7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoc3RhdHVzQ29kZSA9PT0gNDAxKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0J3QtdCy0LXRgNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YwhXCI7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoc3RhdHVzQ29kZSA9PT0gNDAwKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0J3QtdCy0LXRgNC90YvQuSDQt9Cw0L/RgNC+0YEhXCI7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoc3RhdHVzQ29kZSA9PT0gNTAwKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0JLQvdGD0YLRgNC10L3QvdGP0Y8g0L7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwIVwiO1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi9Vc2VyTWFpbi5jb250cm9sbGVyLmpzIiwiaW1wb3J0IHsgZm9ybWF0TW9tZW50IH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gJy4uL3V0aWxzL2hvb2tzJztcblxuaG9va3MuZGVmYXVsdEZvcm1hdCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzWic7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5sb2NhbGUoJ2VuJykuZm9ybWF0KCdkZGQgTU1NIEREIFlZWVkgSEg6bW06c3MgW0dNVF1aWicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9JU09TdHJpbmcgKCkge1xuICAgIHZhciBtID0gdGhpcy5jbG9uZSgpLnV0YygpO1xuICAgIGlmICgwIDwgbS55ZWFyKCkgJiYgbS55ZWFyKCkgPD0gOTk5OSkge1xuICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKSB7XG4gICAgICAgICAgICAvLyBuYXRpdmUgaW1wbGVtZW50YXRpb24gaXMgfjUweCBmYXN0ZXIsIHVzZSBpdCB3aGVuIHdlIGNhblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9EYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRNb21lbnQobSwgJ1lZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0nKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNb21lbnQobSwgJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCAoaW5wdXRTdHJpbmcpIHtcbiAgICB2YXIgb3V0cHV0ID0gZm9ybWF0TW9tZW50KHRoaXMsIGlucHV0U3RyaW5nIHx8IGhvb2tzLmRlZmF1bHRGb3JtYXQpO1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5wb3N0Zm9ybWF0KG91dHB1dCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL21vbWVudC9mb3JtYXQuanMiLCJpbXBvcnQgemVyb0ZpbGwgZnJvbSAnLi4vdXRpbHMvemVyby1maWxsJztcblxuZXhwb3J0IHZhciBmb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFF8WVlZWVlZfFlZWVlZfFlZWVl8WVl8Z2coZ2dnPyk/fEdHKEdHRz8pP3xlfEV8YXxBfGhoP3xISD98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZztcblxudmFyIGxvY2FsRm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhMVFN8TFR8TEw/TD9MP3xsezEsNH0pL2c7XG5cbnZhciBmb3JtYXRGdW5jdGlvbnMgPSB7fTtcblxuZXhwb3J0IHZhciBmb3JtYXRUb2tlbkZ1bmN0aW9ucyA9IHt9O1xuXG4vLyB0b2tlbjogICAgJ00nXG4vLyBwYWRkZWQ6ICAgWydNTScsIDJdXG4vLyBvcmRpbmFsOiAgJ01vJ1xuLy8gY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgdGhpcy5tb250aCgpICsgMSB9XG5leHBvcnQgZnVuY3Rpb24gYWRkRm9ybWF0VG9rZW4gKHRva2VuLCBwYWRkZWQsIG9yZGluYWwsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGZ1bmMgPSBjYWxsYmFjaztcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnc3RyaW5nJykge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbY2FsbGJhY2tdKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0b2tlbikge1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0gPSBmdW5jO1xuICAgIH1cbiAgICBpZiAocGFkZGVkKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3BhZGRlZFswXV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gemVyb0ZpbGwoZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBwYWRkZWRbMV0sIHBhZGRlZFsyXSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChvcmRpbmFsKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW29yZGluYWxdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm9yZGluYWwoZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCB0b2tlbik7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0KSB7XG4gICAgaWYgKGlucHV0Lm1hdGNoKC9cXFtbXFxzXFxTXS8pKSB7XG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxbfFxcXSQvZywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxcXC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpIHtcbiAgICB2YXIgYXJyYXkgPSBmb3JtYXQubWF0Y2goZm9ybWF0dGluZ1Rva2VucyksIGksIGxlbmd0aDtcblxuICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV0pIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyYXlbaV0gPSByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAobW9tKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJztcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvdXRwdXQgKz0gYXJyYXlbaV0gaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGFycmF5W2ldLmNhbGwobW9tLCBmb3JtYXQpIDogYXJyYXlbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xufVxuXG4vLyBmb3JtYXQgZGF0ZSB1c2luZyBuYXRpdmUgZGF0ZSBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb21lbnQobSwgZm9ybWF0KSB7XG4gICAgaWYgKCFtLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gbS5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG5cbiAgICBmb3JtYXQgPSBleHBhbmRGb3JtYXQoZm9ybWF0LCBtLmxvY2FsZURhdGEoKSk7XG4gICAgZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gPSBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSB8fCBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KTtcblxuICAgIHJldHVybiBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XShtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEZvcm1hdChmb3JtYXQsIGxvY2FsZSkge1xuICAgIHZhciBpID0gNTtcblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2VucyhpbnB1dCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmxvbmdEYXRlRm9ybWF0KGlucHV0KSB8fCBpbnB1dDtcbiAgICB9XG5cbiAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICB3aGlsZSAoaSA+PSAwICYmIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UobG9jYWxGb3JtYXR0aW5nVG9rZW5zLCByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMpO1xuICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICAgICAgaSAtPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXQ7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvZm9ybWF0L2Zvcm1hdC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHplcm9GaWxsKG51bWJlciwgdGFyZ2V0TGVuZ3RoLCBmb3JjZVNpZ24pIHtcbiAgICB2YXIgYWJzTnVtYmVyID0gJycgKyBNYXRoLmFicyhudW1iZXIpLFxuICAgICAgICB6ZXJvc1RvRmlsbCA9IHRhcmdldExlbmd0aCAtIGFic051bWJlci5sZW5ndGgsXG4gICAgICAgIHNpZ24gPSBudW1iZXIgPj0gMDtcbiAgICByZXR1cm4gKHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nKSArXG4gICAgICAgIE1hdGgucG93KDEwLCBNYXRoLm1heCgwLCB6ZXJvc1RvRmlsbCkpLnRvU3RyaW5nKCkuc3Vic3RyKDEpICsgYWJzTnVtYmVyO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy96ZXJvLWZpbGwuanMiLCJleHBvcnQgeyBob29rcywgc2V0SG9va0NhbGxiYWNrIH07XG5cbnZhciBob29rQ2FsbGJhY2s7XG5cbmZ1bmN0aW9uIGhvb2tzICgpIHtcbiAgICByZXR1cm4gaG9va0NhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbi8vIFRoaXMgaXMgZG9uZSB0byByZWdpc3RlciB0aGUgbWV0aG9kIGNhbGxlZCB3aXRoIG1vbWVudCgpXG4vLyB3aXRob3V0IGNyZWF0aW5nIGNpcmN1bGFyIGRlcGVuZGVuY2llcy5cbmZ1bmN0aW9uIHNldEhvb2tDYWxsYmFjayAoY2FsbGJhY2spIHtcbiAgICBob29rQ2FsbGJhY2sgPSBjYWxsYmFjaztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvdXRpbHMvaG9va3MuanMiLCJleHBvcnQgY2xhc3MgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCRsb2csICRodHRwKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xuICB9XG5cbiAgZ2V0Q29udHJpYnV0b3JzKGxpbWl0PTMwKSB7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanMiLCJleHBvcnQgY2xhc3MgV2ViRGV2VGVjU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy5kYXRhID0gW1xuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXG4gICAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcbiAgICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXG4gICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnS2FybWEgPSknLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxuICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgaXMgdGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgcmVzcG9uc2l2ZSwgbW9iaWxlIGZpcnN0IHByb2plY3RzIG9uIHRoZSB3ZWIuJyxcbiAgICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdFUzYgKEJhYmVsIGZvcm1lcmx5IDZ0bzUpJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2JhYmVsanMuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R1cm5zIEVTNisgY29kZSBpbnRvIHZhbmlsbGEgRVM1LCBzbyB5b3UgY2FuIHVzZSBuZXh0IGdlbmVyYXRpb24gZmVhdHVyZXMgdG9kYXkuJyxcbiAgICAgICAgJ2xvZ28nOiAnYmFiZWwucG5nJ1xuICAgICAgfVxuICAgIF07XG4gICAgdGhpcy5kYXRhWWVzTk89W1xuXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAwXCIsXG4gICAgICAgICdOYW1laGFzaCc6W1wiI2NhdFwiXSxcbiAgICAgICAgJ21hc3NhZ2UnOlwi0JrQvtGC0LjQuiDQutGA0LDRgdC40LLRi9C5P1wiLFxuICAgICAgICAnUGljdHVyZSc6XCJhc3NldHMvaW1hZ2VzL1Bvc3RBbGwvQ2F0MS5qcGdcIixcbiAgICAgICAgJ1llcyc6IFwiXCIsXG4gICAgICAgICdObyc6XCJcIixcbiAgICAgICAgJ3ZvdGVkJzpbXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDFcIixcbiAgICAgICAgJ05hbWVoYXNoJzpbXCIjaG91c2VcIl0sXG4gICAgICAgICdtYXNzYWdlJzpcItCU0L7QvCDQsdC+0LvRjNGI0L7QuVwiLFxuICAgICAgICAnUGljdHVyZSc6XCJhc3NldHMvaW1hZ2VzL1Bvc3RBbGwvSG91c2UxLmpwZ1wiLFxuICAgICAgICAnWWVzJzogXCJcIixcbiAgICAgICAgJ05vJzpcIlwiLFxuICAgICAgICAndm90ZWQnOltdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMlwiLFxuICAgICAgICAnbWFzc2FnZSc6XCLQotC10LvQtdGE0L7QvSDQvdC+0LLRi9C5P1wiLFxuICAgICAgICAnTmFtZWhhc2gnOltcIiNwaG9uZVwiXSxcbiAgICAgICAgJ1BpY3R1cmUnOlwiYXNzZXRzL2ltYWdlcy9Qb3N0QWxsL3Bob25lMS5qcGdcIixcbiAgICAgICAgJ1llcyc6IFwiXCIsXG4gICAgICAgICdObyc6XCJcIixcbiAgICAgICAgJ3ZvdGVkJzpbXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDFcIixcbiAgICAgICAgJ05hbWVoYXNoJzpbXCIjZG9nXCJdLFxuICAgICAgICAnbWFzc2FnZSc6XCLQodC+0LHQsNC60LAg0L/QvtGA0L7QtNC40YHRgtCw0Y8/XCIsXG4gICAgICAgICdQaWN0dXJlJzpcImFzc2V0cy9pbWFnZXMvUG9zdEFsbC9Eb2cxLmpwZ1wiLFxuICAgICAgICAnWWVzJzogXCJcIixcbiAgICAgICAgJ05vJzpcIlwiLFxuICAgICAgICAndm90ZWQnOltdXG5cblxuICAgICAgfVxuICAgIF07XG4gICAgdGhpcy5UYWJsZVBlcnNvbiA9WyB7XG4gICAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDBcIixcbiAgICAgICAgICAnaWRGb2xvd3MnOltdLFxuICAgICAgICAgICdpZE15Rm9sb3dzJzpbXSxcbiAgICAgICAgICAnTmFtZSc6XCJWYXN5YVwiLFxuICAgICAgICAgICdQaWN0dXJlRmFjZSc6XCJhc3NldHMvaW1hZ2VzL3BlcnNvbnMvLzEwMDAuanBlZ1wiXG5cbiAgICAgIH0se1xuICAgICAgJ2lkUGVyc29uJzpcIjEwMDFcIixcbiAgICAgICdpZEZvbG93cyc6W10sXG4gICAgICAnaWRNeUZvbG93cyc6W10sXG4gICAgICAnTmFtZSc6XCJBbmF0b2xpaVwiLFxuICAgICAgJ1BpY3R1cmVGYWNlJzpcImFzc2V0cy9pbWFnZXMvcGVyc29ucy8xMDAxLmpwZWdcIlxuXG4gICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDJcIixcbiAgICAgICAgJ2lkRm9sb3dzJzpbXSxcbiAgICAgICAgJ2lkTXlGb2xvd3MnOltdLFxuICAgICAgICAnTmFtZSc6XCJOYXRhc2hhXCIsXG4gICAgICAgICdQaWN0dXJlRmFjZSc6XCJhc3NldHMvaW1hZ2VzL3BlcnNvbnMvMTAwMi5qcGdcIlxuXG4gICAgICB9XG5cbiAgICBdXG5cblxuXG4gIH1cblxuICBnZXRUZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuICBnZXRZZXNOb2RhdGEoKXtcbiAgICByZXR1cm4gdGhpcy5kYXRhWWVzTk87XG4gIH1cbiAgZ2V0ZGF0YSgpe1xuICAgIHJldHVybiB0aGlzLlRhYmxlUGVyc29uO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwiZXhwb3J0IGNsYXNzIEZyaWVuZHNTZXJ2aWNle1xuICBjb25zdHJ1Y3RvciAoKXtcbiAgICAnbmdJbmplY3QnO1xuICAgIHRoaXMucHJvbWlzZSA9W107XG4gICAgLy8gJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZm9sbG93cycpXG4gICAgLy8gICAudGhlbihmdW5jdGlvcm9taW4ocHJvbWlzZSkge1xuICAgIC8vICAgICAvLyAgICAgICAvL3RoaXMuPXN1Y2Nlc3MuZGF0YTtcbiAgICAvLyAgICAgLy8gICAgICAgdGhpcy5wcm9taXNlPSBwc2U7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGZ1bmN0aW9uKGVycm9yKSB7ZGF0YVxuICAgIC8vICAgICAgIHRoaXMucHJvbWlzZT0gZXJyb3I7XG4gICAgLy8gICAgIH0pO1xuXG4gICAgdGhpcy5kYXRhID0gW1xuICAgICAge1xuICAgICAgICAnaWQnOicxMDAwJyxcbiAgICAgICAgJ215RnJpZW5kJzogW1wiMTAwMVwiLFwiMTAwMlwiXVxuICAgICAgfVxuICAgIF1cblxuICB9XG4gICBnZXRGcmllbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbiAgIGdldERhdGEoKXtcbiAgICAgICAvLyAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb2xsb3dzJylcbiAgICAgICAvLyAgIC50aGVuKGZ1bmN0aW9uKHN1Y2Nlc3Mpe1xuICAgICAgIC8vICAgLy90aGlzLmRhdGE9c3VjY2Vzcy5kYXRhO1xuICAgICAgIC8vICAgcmV0dXJuIHN1Y2Nlc3MuZGF0YTtcbiAgICAgICAvLyB9LFxuICAgICAgIC8vIGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAvLyAgIHJldHVybiBlcnJvcjtcbiAgICAgICAvLyB9KTtcbiAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2ZyaWVuZC9mcmllbmQuc2VydmljZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBOYXZiYXJEaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbmNsYXNzIE5hdmJhckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9tZW50KSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIC8vIFwidGhpcy5jcmVhdGlvbkRhdGVcIiBpcyBhdmFpbGFibGUgYnkgZGlyZWN0aXZlIG9wdGlvbiBcImJpbmRUb0NvbnRyb2xsZXI6IHRydWVcIlxuICAgIHRoaXMucmVsYXRpdmVEYXRlID0gbW9tZW50KHRoaXMuY3JlYXRpb25EYXRlKS5mcm9tTm93KCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgbGluazogbGlua0Z1bmMsXG4gICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgIGxldCB3YXRjaGVyO1xuICAgIGxldCB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xuICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcblxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsICh2YWx1ZSkgPT4ge1xuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAoKSA9PiB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpID0+IHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5jbGFzcyBNYWxhcmtleUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgdGhpcy5hY3RpdmF0ZShnaXRodWJDb250cmlidXRvcik7XG4gIH1cblxuICBhY3RpdmF0ZShnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbnRyaWJ1dG9ycztcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=