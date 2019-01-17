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
	
	angular.module('yesno', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'toastr', 'ngMaterial', 'ngMessages']).constant('malarkey', malarkey).constant('moment', moment).config(_index.config).config(_index2.routerConfig).run(_index3.runBlock).service('githubContributor', _githubContributor.GithubContributorService).service('webDevTec', _webDevTec.WebDevTecService).service('friendsService', _friend.FriendsService).controller('MyController', _template.MyController).controller('MyRegistration', _registration.MyRegistration).controller('MainUserController', _UserMain.MainUserController).controller('FriendController', _friends.FriendController).directive('acmeNavbar', _navbar.NavbarDirective).directive('acmeMalarkey', _malarkey.MalarkeyDirective);

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
	
	    $scope.editPost = function (id) {
	        var editPost = document.getElementsByClassName("multi-files" + id);
	        postEditId = id;
	        postEditText = editPost[0].textContent;
	        editPost[0].attributes.removeNamedItem("disabled");
	    };
	    $scope.savePost = function (id) {
	        var savePost = document.getElementsByClassName("multi-files" + id);
	        if (id !== postEditId) {
	            console.log("id несовпали!");
	        } else {
	            $http.put('/api/posts/' + id, { newText: savePost[0].textContent, postID: id }, { headers: { token: localStorage.getItem("Token") } }).then(function (result) {
	                console.log(result);
	                savePost[0].disabled = true;
	            }).catch(function (result) {
	                savePost[0].disabled = true;
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
	                }
	            }).catch(function (result) {
	                console.log(result);
	                $scope.ErrorCode(result.status);
	            });
	        }
	    };
	    $scope.Posts = function () {
	        //console.log(localStorage.getItem("Token"));
	        $http.get('/api/user/' + localStorage.getItem("Id") + '/posts', { headers: { token: localStorage.getItem("Token") } }).then(function (result) {
	            $scope.books = result.data.result;
	        }).catch(function (result) {
	            $scope.ErrorCode(result.status);
	        });
	    };
	    $scope.AllPosts = function () {
	        $http.get('/api/posts', { headers: { token: localStorage.getItem("Token") } }).then(function (result) {
	            console.log(result);
	            $scope.books = result.data.result;
	        }).catch(function (result) {
	            $scope.ErrorCode(result.status);
	        });
	    };
	    $scope.Search = function () {
	        if ($scope.textForSearch !== "") {
	            $http.get('/api/search/' + $scope.textForSearch, { headers: { token: localStorage.getItem("Token") } }).then(function (result) {
	                console.log(result);
	                $scope.books = result.data.result;
	            }).catch(function (result) {
	                $scope.ErrorCode(result.status);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWNiZmE5NmE4MmE0NGI3ZDMwOWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3RlbXBsYXRlLkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi9Vc2VyTWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL2Zvcm1hdC9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy96ZXJvLWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy9ob29rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25zdGFudCIsIm1hbGFya2V5IiwibW9tZW50IiwiY29uZmlnIiwicm91dGVyQ29uZmlnIiwicnVuIiwicnVuQmxvY2siLCJzZXJ2aWNlIiwiR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIiwiV2ViRGV2VGVjU2VydmljZSIsIkZyaWVuZHNTZXJ2aWNlIiwiY29udHJvbGxlciIsIk15Q29udHJvbGxlciIsIk15UmVnaXN0cmF0aW9uIiwiTWFpblVzZXJDb250cm9sbGVyIiwiRnJpZW5kQ29udHJvbGxlciIsImRpcmVjdGl2ZSIsIk5hdmJhckRpcmVjdGl2ZSIsIk1hbGFya2V5RGlyZWN0aXZlIiwiJGxvZ1Byb3ZpZGVyIiwidG9hc3RyQ29uZmlnIiwiZGVidWdFbmFibGVkIiwiYWxsb3dIdG1sIiwidGltZU91dCIsInBvc2l0aW9uQ2xhc3MiLCJwcmV2ZW50RHVwbGljYXRlcyIsInByb2dyZXNzQmFyIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlckFzIiwib3RoZXJ3aXNlIiwiJGxvZyIsImRlYnVnIiwiJHRpbWVvdXQiLCJmcmllbmRzU2VydmljZSIsIndlYkRldlRlYyIsIiRodHRwIiwiJHNjb3BlIiwidGhhdCIsImdldCIsInRoZW4iLCJwcm9taXNlIiwicHIiLCJkYXRhIiwiZXJyb3IiLCJwcm9taXMiLCJUYWJsZVBlcnNvbiIsIm15Zmlyc3RzU2VydmljZSIsInN1Y2Nlc3MiLCJhY3RpdmF0ZSIsImdldERhdGFGcmllbmRzIiwiZnJpZW5kc0RhdGEiLCJnZXRGcmllbmRzIiwiZ2V0ZGF0YSIsImdldERhdGEiLCIkbG9jYXRpb24iLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcGFuIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJIZWFkZXIiLCJ0ZXh0Qm9keSIsImVudHJ5IiwicG9zdCIsIm5hbWUiLCJOYW1lIiwiZW1haWwiLCJFbWFpbCIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJpZCIsInBhdGgiLCJjYXRjaCIsIkVycm9yQ29kZSIsInN0YXR1cyIsInJlZ2lzdHJhdGlvbiIsInN0YXR1c0NvZGUiLCJuYW1lVXNlciIsImdldEl0ZW0iLCJ0ZXh0Rm9yUG9zdCIsInRleHRGb3JUaXRsZSIsInRleHRGb3JTZWFyY2giLCJjb3VudElkIiwidGVzdCIsInBvc3RFZGl0SWQiLCJwb3N0RWRpdFRleHQiLCJlZGl0UG9zdCIsInRleHRDb250ZW50IiwiYXR0cmlidXRlcyIsInJlbW92ZU5hbWVkSXRlbSIsInNhdmVQb3N0IiwiY29uc29sZSIsImxvZyIsInB1dCIsIm5ld1RleHQiLCJwb3N0SUQiLCJoZWFkZXJzIiwiZGlzYWJsZWQiLCJuZXdQb3N0IiwidGV4dCIsInZhbHVlIiwidGV4dFBvc3QiLCJ0ZXh0VGl0bGUiLCJib29rcyIsInB1c2giLCJQb3N0cyIsIkFsbFBvc3RzIiwiU2VhcmNoIiwiZGVsUG9zdCIsImRlbGV0ZSIsInVzZXIiLCJ0b1N0cmluZyIsInRvSVNPU3RyaW5nIiwiZm9ybWF0IiwiaG9va3MiLCJkZWZhdWx0Rm9ybWF0IiwiY2xvbmUiLCJsb2NhbGUiLCJtIiwidXRjIiwieWVhciIsIkRhdGUiLCJwcm90b3R5cGUiLCJ0b0RhdGUiLCJpbnB1dFN0cmluZyIsIm91dHB1dCIsImxvY2FsZURhdGEiLCJwb3N0Zm9ybWF0IiwiYWRkRm9ybWF0VG9rZW4iLCJmb3JtYXRNb21lbnQiLCJleHBhbmRGb3JtYXQiLCJmb3JtYXR0aW5nVG9rZW5zIiwibG9jYWxGb3JtYXR0aW5nVG9rZW5zIiwiZm9ybWF0RnVuY3Rpb25zIiwiZm9ybWF0VG9rZW5GdW5jdGlvbnMiLCJwYWRkZWQiLCJvcmRpbmFsIiwiY2FsbGJhY2siLCJmdW5jIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZW1vdmVGb3JtYXR0aW5nVG9rZW5zIiwiaW5wdXQiLCJtYXRjaCIsInJlcGxhY2UiLCJtYWtlRm9ybWF0RnVuY3Rpb24iLCJhcnJheSIsImkiLCJsZW5ndGgiLCJtb20iLCJGdW5jdGlvbiIsImNhbGwiLCJpc1ZhbGlkIiwiaW52YWxpZERhdGUiLCJyZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMiLCJsb25nRGF0ZUZvcm1hdCIsImxhc3RJbmRleCIsInplcm9GaWxsIiwibnVtYmVyIiwidGFyZ2V0TGVuZ3RoIiwiZm9yY2VTaWduIiwiYWJzTnVtYmVyIiwiTWF0aCIsImFicyIsInplcm9zVG9GaWxsIiwic2lnbiIsInBvdyIsIm1heCIsInN1YnN0ciIsInNldEhvb2tDYWxsYmFjayIsImhvb2tDYWxsYmFjayIsImFwaUhvc3QiLCJsaW1pdCIsInJlc3BvbnNlIiwidG9Kc29uIiwiZGF0YVllc05PIiwicmVzdHJpY3QiLCJzY29wZSIsImNyZWF0aW9uRGF0ZSIsIk5hdmJhckNvbnRyb2xsZXIiLCJiaW5kVG9Db250cm9sbGVyIiwicmVsYXRpdmVEYXRlIiwiZnJvbU5vdyIsImV4dHJhVmFsdWVzIiwidGVtcGxhdGUiLCJsaW5rIiwibGlua0Z1bmMiLCJNYWxhcmtleUNvbnRyb2xsZXIiLCJlbCIsImF0dHIiLCJ2bSIsIndhdGNoZXIiLCJ0eXBpc3QiLCJ0eXBlU3BlZWQiLCJkZWxldGVTcGVlZCIsInBhdXNlRGVsYXkiLCJsb29wIiwicG9zdGZpeCIsImFkZENsYXNzIiwiZm9yRWFjaCIsInR5cGUiLCJwYXVzZSIsIiR3YXRjaCIsImNvbnRyaWJ1dG9ycyIsImNvbnRyaWJ1dG9yIiwibG9naW4iLCIkb24iLCJnaXRodWJDb250cmlidXRvciIsImdldENvbnRyaWJ1dG9ycyIsImluZm8iXSwibWFwcGluZ3MiOiI7QUFB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IG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWNiZmE5NmE4MmE0NGI3ZDMwOWEiLCIvKiBnbG9iYWwgbWFsYXJrZXk6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2luZGV4LmNvbmZpZyc7XG5pbXBvcnQgeyByb3V0ZXJDb25maWcgfSBmcm9tICcuL2luZGV4LnJvdXRlJztcbmltcG9ydCB7IHJ1bkJsb2NrIH0gZnJvbSAnLi9pbmRleC5ydW4nO1xuXG5pbXBvcnQgeyBGcmllbmRDb250cm9sbGVyIH0gZnJvbSAnLi9mcmllbmQvZnJpZW5kcy5jb250cm9sbGVyJztcblxuaW1wb3J0IHsgTXlDb250cm9sbGVyIH0gZnJvbSAnLi9tYWluL3RlbXBsYXRlLkNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTXlSZWdpc3RyYXRpb24gfSBmcm9tICcuL21haW4vcmVnaXN0cmF0aW9uLkNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTWFpblVzZXJDb250cm9sbGVyIH0gZnJvbSAnLi9tYWluL1VzZXJNYWluLmNvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyBHaXRodWJDb250cmlidXRvclNlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYkRldlRlY1NlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UnO1xuaW1wb3J0IHsgRnJpZW5kc1NlcnZpY2UgfSBmcm9tIFwiLi4vYXBwL2ZyaWVuZC9mcmllbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgTmF2YmFyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFsYXJrZXlEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnO1xuXG5cblxuXG5hbmd1bGFyLm1vZHVsZSgneWVzbm8nLCBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLCAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3RvYXN0cicsICduZ01hdGVyaWFsJywgJ25nTWVzc2FnZXMnXSlcbiAgLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KVxuICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcbiAgLmNvbmZpZyhjb25maWcpXG4gIC5jb25maWcocm91dGVyQ29uZmlnKVxuICAucnVuKHJ1bkJsb2NrKVxuICAuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBHaXRodWJDb250cmlidXRvclNlcnZpY2UpXG4gIC5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCBXZWJEZXZUZWNTZXJ2aWNlKVxuICAuc2VydmljZSgnZnJpZW5kc1NlcnZpY2UnLCBGcmllbmRzU2VydmljZSlcblxuICAgIC5jb250cm9sbGVyKCdNeUNvbnRyb2xsZXInLCBNeUNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKCdNeVJlZ2lzdHJhdGlvbicsIE15UmVnaXN0cmF0aW9uKVxuICAgIC5jb250cm9sbGVyKCdNYWluVXNlckNvbnRyb2xsZXInLCBNYWluVXNlckNvbnRyb2xsZXIpXG5cbiAgLmNvbnRyb2xsZXIoJ0ZyaWVuZENvbnRyb2xsZXInLCBGcmllbmRDb250cm9sbGVyKVxuXG4gIC5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBOYXZiYXJEaXJlY3RpdmUpXG4gIC5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIE1hbGFya2V5RGlyZWN0aXZlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBjb25maWcgKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gNTAwMDtcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgIHVybDogJy8nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi90ZW1wbGF0ZS5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdNeUNvbnRyb2xsZXInLFxuICAgICAgY29udHJvbGxlckFzOiAndGVtcCdcbiAgICB9KVxuICAgIC5zdGF0ZSgnZm9sbG93cycse1xuICAgICAgdXJsOicvcmVnaXN0cmF0aW9uJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vcmVnaXN0cmF0aW9uLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjonTXlSZWdpc3RyYXRpb24nLFxuICAgICAgY29udHJvbGxlckFzOidyZWdpc3QnXG4gICAgfSlcbiAgICAgIC5zdGF0ZSgnMScse1xuICAgICAgICAgIHVybDonL21haW4nLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vVXNlck1haW4uaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjonTWFpblVzZXJDb250cm9sbGVyJyxcbiAgICAgICAgICBjb250cm9sbGVyQXM6J01lVXNlJ1xuICAgICAgfSk7XG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJleHBvcnQgZnVuY3Rpb24gcnVuQmxvY2sgKCRsb2cpIHtcbiAgJ25nSW5qZWN0JztcbiAgJGxvZy5kZWJ1ZygncnVuQmxvY2sgZW5kJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsImV4cG9ydCBjbGFzcyBGcmllbmRDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCwgJHNjb3BlKSB7XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ZvbGxvd3MnKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICAgIC8vdGhpcy5kYXRhPXN1Y2Nlc3MuZGF0YTtcbiAgICAgICAgJHNjb3BlLnByID0gcHJvbWlzZS5kYXRhO1xuICAgICAgICB0aGF0LnByb21pc2UgPSBwcm9taXNlLmRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgdGhpcy5wcm9taXMgPSBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgdGhpcy5wcm9taXNlID0gJHNjb3BlLnByO1xuICAgIHRoaXMuVGFibGVQZXJzb24gPSBbXTtcbiAgICB0aGlzLm15Zmlyc3RzU2VydmljZSA9IFtdXG4gICAgdGhpcy5zdWNjZXNzID1udWxsO1xuICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwKTtcbiAgfVxuICBhY3RpdmF0ZSgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHApIHtcbiAgICB0aGlzLmdldERhdGFGcmllbmRzKGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwKTtcbiAgfVxuICBnZXREYXRhRnJpZW5kcyhmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjKXtcbiAgICB0aGlzLmZyaWVuZHNEYXRhID0gZnJpZW5kc1NlcnZpY2UuZ2V0RnJpZW5kcygpO1xuICAgIHRoaXMuVGFibGVQZXJzb24gPSB3ZWJEZXZUZWMuZ2V0ZGF0YSgpO1xuICAgIHRoaXMuc3VjY2VzcyA9IGZyaWVuZHNTZXJ2aWNlLmdldERhdGEoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mcmllbmQvZnJpZW5kcy5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIE15Q29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCwgJGxvZywgJGxvY2F0aW9uLCAkc2NvcGUpIHtcbiAgICAgICduZ0luamVjdCdcblxuXG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuICAgICAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCJcIjtcbiAgICAgICAgfTtcblxuICAgICAgdGhpcy5lbnRyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHAucG9zdCgnL2VudHJ5Jywge25hbWU6ICRzY29wZS5OYW1lLCBlbWFpbDogJHNjb3BlLkVtYWlsLCBwYXNzd29yZDogJHNjb3BlLlBhc3N3b3JkfSlcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUb2tlbicsIHJlc3VsdC5kYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05hbWUnLCByZXN1bHQuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0lkJywgcmVzdWx0LmRhdGEuaWQpO1xuICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9tYWluXCIpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICB0aGlzLnJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvY2F0aW9uLnBhdGgoXCIvcmVnaXN0cmF0aW9uXCIpO1xuICAgICAgfTtcbiAgICAgICAgJHNjb3BlLkVycm9yQ29kZSA9IGZ1bmN0aW9uIChzdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICBpZihzdGF0dXNDb2RlID09PSA0MDEpe1xuICAgICAgICAgICAgICAgICRzY29wZS5IZWFkZXIgPSBcIkVycm9yOiBcIiArIHN0YXR1c0NvZGU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCLQndC10LLQtdGA0L3Ri9C5INC70L7Qs9C40L0g0LjQu9C4INC/0LDRgNC+0LvRjCFcIjtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vdGVtcGxhdGUuQ29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBNeVJlZ2lzdHJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRsb2csICRzY29wZSwgJGxvY2F0aW9uKSB7XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgICAkc2NvcGUuTmFtZSA9IFwiXCI7XG4gICAgICAkc2NvcGUuRW1haWwgPSBcIlwiO1xuICAgICAgJHNjb3BlLlBhc3N3b3JkID0gXCJcIjtcblxuICAgICAgJHNjb3BlLkhlYWRlciA9IFwiXCI7XG4gICAgICAkc2NvcGUudGV4dEJvZHkgPSBcIlwiO1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcbiAgICAgICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgJHNjb3BlLkhlYWRlciA9IFwiXCI7XG4gICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwiXCI7XG4gICAgICAgIH07XG5cbiAgICB0aGlzLnJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRodHRwLnBvc3QoJy9yZWdpc3RyYXRpb24nLCB7bmFtZTogJHNjb3BlLk5hbWUsIGVtYWlsOiAkc2NvcGUuRW1haWwsIHBhc3N3b3JkOiAkc2NvcGUuUGFzc3dvcmR9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9cIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICAkc2NvcGUuRXJyb3JDb2RlID0gZnVuY3Rpb24gKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgICBpZihzdGF0dXNDb2RlID09PSA0MDEpe1xuICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcItCd0LXQstC10YDQvdGL0Lkg0LvQvtCz0LjQvSDQuNC70Lgg0L/QsNGA0L7Qu9GMIVwiO1xuICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi9yZWdpc3RyYXRpb24uQ29udHJvbGxlci5qcyIsImltcG9ydCB7dG9TdHJpbmd9IGZyb20gXCIuLi8uLi8uLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL21vbWVudC9mb3JtYXRcIjtcblxuZXhwb3J0IGNsYXNzIE1haW5Vc2VyQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCwgJGxvZywgJGxvY2F0aW9uLCAkc2NvcGUpIHtcbiAgICAgICAgJ25nSW5qZWN0J1xuXG5cbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKTtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG4gICAgICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgJHNjb3BlLkhlYWRlciA9IFwiXCI7XG4gICAgICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcIlwiO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcIlwiO1xuICAgICAgICAkc2NvcGUubmFtZVVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk5hbWVcIik7XG4gICAgICAgICRzY29wZS50ZXh0Rm9yUG9zdCA9IFwiXCI7XG4gICAgICAgICRzY29wZS50ZXh0Rm9yVGl0bGUgPSBcIlwiO1xuICAgICAgICAkc2NvcGUudGV4dEZvclNlYXJjaCA9IFwiXCI7XG4gICAgICAgICRzY29wZS5jb3VudElkID0gMDtcbiAgICAgICAgJHNjb3BlLnRlc3QgPSBcInRydWVcIjtcbiAgICAgICAgbGV0IHBvc3RFZGl0SWQ7XG4gICAgICAgIGxldCBwb3N0RWRpdFRleHQ7XG5cbiAgICAgICAgJHNjb3BlLmVkaXRQb3N0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBsZXQgZWRpdFBvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXVsdGktZmlsZXNcIitpZCk7XG4gICAgICAgICAgICBwb3N0RWRpdElkID0gaWQ7XG4gICAgICAgICAgICBwb3N0RWRpdFRleHQgPSBlZGl0UG9zdFswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGVkaXRQb3N0WzBdLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKFwiZGlzYWJsZWRcIik7XG5cbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLnNhdmVQb3N0ID0gZnVuY3Rpb24oaWQpe1xuICAgICAgICAgICAgbGV0IHNhdmVQb3N0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm11bHRpLWZpbGVzXCIraWQpO1xuICAgICAgICAgICAgaWYoaWQgIT09IHBvc3RFZGl0SWQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaWQg0L3QtdGB0L7QstC/0LDQu9C4IVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAkaHR0cC5wdXQoJy9hcGkvcG9zdHMvJyArIGlkLCB7bmV3VGV4dDogc2F2ZVBvc3RbMF0udGV4dENvbnRlbnQsIHBvc3RJRDogaWR9LCB7aGVhZGVyczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlUG9zdFswXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlUG9zdFswXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUubmV3UG9zdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZFBvc3RcIik7XG4gICAgICAgICAgICBpZih0ZXh0WzFdLnRleHRDb250ZW50ICE9PSBcIlwiICYmIHRleHRbMF0udmFsdWUgIT09IFwiXCIpe1xuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCB7dGV4dFBvc3Q6IHRleHRbMV0udGV4dENvbnRlbnQsIHRleHRUaXRsZTogJHNjb3BlLnRleHRGb3JUaXRsZX0sIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoJHNjb3BlLmJvb2tzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MucHVzaChyZXN1bHQuZGF0YS5yZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5Qb3N0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKSk7XG4gICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdXNlci8nKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIklkXCIpICsgJy9wb3N0cycsIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5ib29rcyA9IHJlc3VsdC5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5BbGxQb3N0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9wb3N0cycsIHtoZWFkZXJzOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5ib29rcyA9IHJlc3VsdC5kYXRhLnJlc3VsdDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5TZWFyY2ggPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoJHNjb3BlLnRleHRGb3JTZWFyY2ggIT09IFwiXCIpe1xuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9zZWFyY2gvJyArICRzY29wZS50ZXh0Rm9yU2VhcmNoLCB7aGVhZGVyczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuZGVsUG9zdCA9IGZ1bmN0aW9uIChpZCwgbmFtZSkge1xuICAgICAgICAgICAgJGh0dHAuZGVsZXRlKCcvYXBpL3Bvc3RzLycrIGlkLCB7aGVhZGVyczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS51c2VyID09PSBuYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5Qb3N0cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5BbGxQb3N0cygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLkVycm9yQ29kZSA9IGZ1bmN0aW9uIChzdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gNDAzKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0KMg0LLQsNGBINC90LXRgiDQv9GA0LDQsiDQvdCwINGN0YLQviDQtNC10LnRgdGC0LLQuNC1IVwiO1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHN0YXR1c0NvZGUgPT09IDQwMSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkhlYWRlciA9IFwiRXJyb3I6IFwiICsgc3RhdHVzQ29kZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcItCd0LXQstC10YDQvdGL0Lkg0LvQvtCz0LjQvSDQuNC70Lgg0L/QsNGA0L7Qu9GMIVwiO1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHN0YXR1c0NvZGUgPT09IDQwMCl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkhlYWRlciA9IFwiRXJyb3I6IFwiICsgc3RhdHVzQ29kZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcItCd0LXQstC10YDQvdGL0Lkg0LfQsNC/0YDQvtGBIVwiO1xuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHN0YXR1c0NvZGUgPT09IDUwMCl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLkhlYWRlciA9IFwiRXJyb3I6IFwiICsgc3RhdHVzQ29kZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcItCS0L3Rg9GC0YDQtdC90L3Rj9GPINC+0YjQuNCx0LrQsCDRgdC10YDQstC10YDQsCFcIjtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vVXNlck1haW4uY29udHJvbGxlci5qcyIsImltcG9ydCB7IGZvcm1hdE1vbWVudCB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICcuLi91dGlscy9ob29rcyc7XG5cbmhvb2tzLmRlZmF1bHRGb3JtYXQgPSAnWVlZWS1NTS1ERFRISDptbTpzc1onO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkubG9jYWxlKCdlbicpLmZvcm1hdCgnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzIFtHTVRdWlonKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSVNPU3RyaW5nICgpIHtcbiAgICB2YXIgbSA9IHRoaXMuY2xvbmUoKS51dGMoKTtcbiAgICBpZiAoMCA8IG0ueWVhcigpICYmIG0ueWVhcigpIDw9IDk5OTkpIHtcbiAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZykge1xuICAgICAgICAgICAgLy8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGlzIH41MHggZmFzdGVyLCB1c2UgaXQgd2hlbiB3ZSBjYW5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KG0sICdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KG0sICdZWVlZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0nKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQgKGlucHV0U3RyaW5nKSB7XG4gICAgdmFyIG91dHB1dCA9IGZvcm1hdE1vbWVudCh0aGlzLCBpbnB1dFN0cmluZyB8fCBob29rcy5kZWZhdWx0Rm9ybWF0KTtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkucG9zdGZvcm1hdChvdXRwdXQpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi9tb21lbnQvZm9ybWF0LmpzIiwiaW1wb3J0IHplcm9GaWxsIGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XG5cbmV4cG9ydCB2YXIgZm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRfFlZWVlZWXxZWVlZWXxZWVlZfFlZfGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fG1tP3xzcz98U3sxLDl9fHh8WHx6ej98Wlo/fC4pL2c7XG5cbnZhciBsb2NhbEZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nO1xuXG52YXIgZm9ybWF0RnVuY3Rpb25zID0ge307XG5cbmV4cG9ydCB2YXIgZm9ybWF0VG9rZW5GdW5jdGlvbnMgPSB7fTtcblxuLy8gdG9rZW46ICAgICdNJ1xuLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxuLy8gb3JkaW5hbDogICdNbydcbi8vIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IHRoaXMubW9udGgoKSArIDEgfVxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvcm1hdFRva2VuICh0b2tlbiwgcGFkZGVkLCBvcmRpbmFsLCBjYWxsYmFjaykge1xuICAgIHZhciBmdW5jID0gY2FsbGJhY2s7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2NhbGxiYWNrXSgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dID0gZnVuYztcbiAgICB9XG4gICAgaWYgKHBhZGRlZCkge1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1twYWRkZWRbMF1dID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHplcm9GaWxsKGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgcGFkZGVkWzFdLCBwYWRkZWRbMl0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAob3JkaW5hbCkge1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1tvcmRpbmFsXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5vcmRpbmFsKGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgdG9rZW4pO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhpbnB1dCkge1xuICAgIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xcXF0kL2csICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgdmFyIGFycmF5ID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpLCBpLCBsZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dKSB7XG4gICAgICAgICAgICBhcnJheVtpXSA9IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vbSkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gJyc7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGFycmF5W2ldIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcnJheVtpXS5jYWxsKG1vbSwgZm9ybWF0KSA6IGFycmF5W2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbn1cblxuLy8gZm9ybWF0IGRhdGUgdXNpbmcgbmF0aXZlIGRhdGUgb2JqZWN0XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9tZW50KG0sIGZvcm1hdCkge1xuICAgIGlmICghbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIG0ubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxuXG4gICAgZm9ybWF0ID0gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbS5sb2NhbGVEYXRhKCkpO1xuICAgIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdID0gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gfHwgbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCk7XG5cbiAgICByZXR1cm4gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0obSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRGb3JtYXQoZm9ybWF0LCBsb2NhbGUpIHtcbiAgICB2YXIgaSA9IDU7XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5sb25nRGF0ZUZvcm1hdChpbnB1dCkgfHwgaW5wdXQ7XG4gICAgfVxuXG4gICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgd2hpbGUgKGkgPj0gMCAmJiBsb2NhbEZvcm1hdHRpbmdUb2tlbnMudGVzdChmb3JtYXQpKSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKGxvY2FsRm9ybWF0dGluZ1Rva2VucywgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKTtcbiAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIGkgLT0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0O1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL2Zvcm1hdC9mb3JtYXQuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB6ZXJvRmlsbChudW1iZXIsIHRhcmdldExlbmd0aCwgZm9yY2VTaWduKSB7XG4gICAgdmFyIGFic051bWJlciA9ICcnICsgTWF0aC5hYnMobnVtYmVyKSxcbiAgICAgICAgemVyb3NUb0ZpbGwgPSB0YXJnZXRMZW5ndGggLSBhYnNOdW1iZXIubGVuZ3RoLFxuICAgICAgICBzaWduID0gbnVtYmVyID49IDA7XG4gICAgcmV0dXJuIChzaWduID8gKGZvcmNlU2lnbiA/ICcrJyA6ICcnKSA6ICctJykgK1xuICAgICAgICBNYXRoLnBvdygxMCwgTWF0aC5tYXgoMCwgemVyb3NUb0ZpbGwpKS50b1N0cmluZygpLnN1YnN0cigxKSArIGFic051bWJlcjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvdXRpbHMvemVyby1maWxsLmpzIiwiZXhwb3J0IHsgaG9va3MsIHNldEhvb2tDYWxsYmFjayB9O1xuXG52YXIgaG9va0NhbGxiYWNrO1xuXG5mdW5jdGlvbiBob29rcyAoKSB7XG4gICAgcmV0dXJuIGhvb2tDYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG4vLyBUaGlzIGlzIGRvbmUgdG8gcmVnaXN0ZXIgdGhlIG1ldGhvZCBjYWxsZWQgd2l0aCBtb21lbnQoKVxuLy8gd2l0aG91dCBjcmVhdGluZyBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG5mdW5jdGlvbiBzZXRIb29rQ2FsbGJhY2sgKGNhbGxiYWNrKSB7XG4gICAgaG9va0NhbGxiYWNrID0gY2FsbGJhY2s7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL3V0aWxzL2hvb2tzLmpzIiwiZXhwb3J0IGNsYXNzIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCAkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhsaW1pdD0zMCkge1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSkpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwiZXhwb3J0IGNsYXNzIFdlYkRldlRlY1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXG4gICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0thcm1hID0pJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQm9vdHN0cmFwJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXG4gICAgICAgICdsb2dvJzogJ2Jvb3RzdHJhcC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnRVM2IChCYWJlbCBmb3JtZXJseSA2dG81KScsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9iYWJlbGpzLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUdXJucyBFUzYrIGNvZGUgaW50byB2YW5pbGxhIEVTNSwgc28geW91IGNhbiB1c2UgbmV4dCBnZW5lcmF0aW9uIGZlYXR1cmVzIHRvZGF5LicsXG4gICAgICAgICdsb2dvJzogJ2JhYmVsLnBuZydcbiAgICAgIH1cbiAgICBdO1xuICAgIHRoaXMuZGF0YVllc05PPVtcblxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMFwiLFxuICAgICAgICAnTmFtZWhhc2gnOltcIiNjYXRcIl0sXG4gICAgICAgICdtYXNzYWdlJzpcItCa0L7RgtC40Log0LrRgNCw0YHQuNCy0YvQuT9cIixcbiAgICAgICAgJ1BpY3R1cmUnOlwiYXNzZXRzL2ltYWdlcy9Qb3N0QWxsL0NhdDEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAxXCIsXG4gICAgICAgICdOYW1laGFzaCc6W1wiI2hvdXNlXCJdLFxuICAgICAgICAnbWFzc2FnZSc6XCLQlNC+0Lwg0LHQvtC70YzRiNC+0LlcIixcbiAgICAgICAgJ1BpY3R1cmUnOlwiYXNzZXRzL2ltYWdlcy9Qb3N0QWxsL0hvdXNlMS5qcGdcIixcbiAgICAgICAgJ1llcyc6IFwiXCIsXG4gICAgICAgICdObyc6XCJcIixcbiAgICAgICAgJ3ZvdGVkJzpbXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDJcIixcbiAgICAgICAgJ21hc3NhZ2UnOlwi0KLQtdC70LXRhNC+0L0g0L3QvtCy0YvQuT9cIixcbiAgICAgICAgJ05hbWVoYXNoJzpbXCIjcGhvbmVcIl0sXG4gICAgICAgICdQaWN0dXJlJzpcImFzc2V0cy9pbWFnZXMvUG9zdEFsbC9waG9uZTEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAxXCIsXG4gICAgICAgICdOYW1laGFzaCc6W1wiI2RvZ1wiXSxcbiAgICAgICAgJ21hc3NhZ2UnOlwi0KHQvtCx0LDQutCwINC/0L7RgNC+0LTQuNGB0YLQsNGPP1wiLFxuICAgICAgICAnUGljdHVyZSc6XCJhc3NldHMvaW1hZ2VzL1Bvc3RBbGwvRG9nMS5qcGdcIixcbiAgICAgICAgJ1llcyc6IFwiXCIsXG4gICAgICAgICdObyc6XCJcIixcbiAgICAgICAgJ3ZvdGVkJzpbXVxuXG5cbiAgICAgIH1cbiAgICBdO1xuICAgIHRoaXMuVGFibGVQZXJzb24gPVsge1xuICAgICAgICAgICdpZFBlcnNvbic6XCIxMDAwXCIsXG4gICAgICAgICAgJ2lkRm9sb3dzJzpbXSxcbiAgICAgICAgICAnaWRNeUZvbG93cyc6W10sXG4gICAgICAgICAgJ05hbWUnOlwiVmFzeWFcIixcbiAgICAgICAgICAnUGljdHVyZUZhY2UnOlwiYXNzZXRzL2ltYWdlcy9wZXJzb25zLy8xMDAwLmpwZWdcIlxuXG4gICAgICB9LHtcbiAgICAgICdpZFBlcnNvbic6XCIxMDAxXCIsXG4gICAgICAnaWRGb2xvd3MnOltdLFxuICAgICAgJ2lkTXlGb2xvd3MnOltdLFxuICAgICAgJ05hbWUnOlwiQW5hdG9saWlcIixcbiAgICAgICdQaWN0dXJlRmFjZSc6XCJhc3NldHMvaW1hZ2VzL3BlcnNvbnMvMTAwMS5qcGVnXCJcblxuICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAyXCIsXG4gICAgICAgICdpZEZvbG93cyc6W10sXG4gICAgICAgICdpZE15Rm9sb3dzJzpbXSxcbiAgICAgICAgJ05hbWUnOlwiTmF0YXNoYVwiLFxuICAgICAgICAnUGljdHVyZUZhY2UnOlwiYXNzZXRzL2ltYWdlcy9wZXJzb25zLzEwMDIuanBnXCJcblxuICAgICAgfVxuXG4gICAgXVxuXG5cblxuICB9XG5cbiAgZ2V0VGVjKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbiAgZ2V0WWVzTm9kYXRhKCl7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVllc05PO1xuICB9XG4gIGdldGRhdGEoKXtcbiAgICByZXR1cm4gdGhpcy5UYWJsZVBlcnNvbjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsImV4cG9ydCBjbGFzcyBGcmllbmRzU2VydmljZXtcbiAgY29uc3RydWN0b3IgKCl7XG4gICAgJ25nSW5qZWN0JztcbiAgICB0aGlzLnByb21pc2UgPVtdO1xuICAgIC8vICRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ZvbGxvd3MnKVxuICAgIC8vICAgLnRoZW4oZnVuY3Rpb3JvbWluKHByb21pc2UpIHtcbiAgICAvLyAgICAgLy8gICAgICAgLy90aGlzLj1zdWNjZXNzLmRhdGE7XG4gICAgLy8gICAgIC8vICAgICAgIHRoaXMucHJvbWlzZT0gcHNlO1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBmdW5jdGlvbihlcnJvcikge2RhdGFcbiAgICAvLyAgICAgICB0aGlzLnByb21pc2U9IGVycm9yO1xuICAgIC8vICAgICB9KTtcblxuICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgJ2lkJzonMTAwMCcsXG4gICAgICAgICdteUZyaWVuZCc6IFtcIjEwMDFcIixcIjEwMDJcIl1cbiAgICAgIH1cbiAgICBdXG5cbiAgfVxuICAgZ2V0RnJpZW5kcygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gICBnZXREYXRhKCl7XG4gICAgICAgLy8gJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZm9sbG93cycpXG4gICAgICAgLy8gICAudGhlbihmdW5jdGlvbihzdWNjZXNzKXtcbiAgICAgICAvLyAgIC8vdGhpcy5kYXRhPXN1Y2Nlc3MuZGF0YTtcbiAgICAgICAvLyAgIHJldHVybiBzdWNjZXNzLmRhdGE7XG4gICAgICAgLy8gfSxcbiAgICAgICAvLyBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgLy8gICByZXR1cm4gZXJyb3I7XG4gICAgICAgLy8gfSk7XG4gICAgIHJldHVybiB0aGlzLnByb21pc2U7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mcmllbmQvZnJpZW5kLnNlcnZpY2UuanMiLCJleHBvcnQgZnVuY3Rpb24gTmF2YmFyRGlyZWN0aXZlKCkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgY3JlYXRpb25EYXRlOiAnPSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG5jbGFzcyBOYXZiYXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vbWVudCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICAvLyBcInRoaXMuY3JlYXRpb25EYXRlXCIgaXMgYXZhaWxhYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcbiAgICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJleHBvcnQgZnVuY3Rpb24gTWFsYXJrZXlEaXJlY3RpdmUobWFsYXJrZXkpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIGxpbms6IGxpbmtGdW5jLFxuICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcbiAgICBsZXQgd2F0Y2hlcjtcbiAgICBsZXQgdHlwaXN0ID0gbWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcG9zdGZpeDogJyAnXG4gICAgfSk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCAodmFsdWUpID0+IHtcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgIH0pO1xuXG4gICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgKCkgPT4ge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgKGNvbnRyaWJ1dG9yKSA9PiB7XG4gICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgKCkgPT4ge1xuICAgICAgd2F0Y2hlcigpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuY2xhc3MgTWFsYXJrZXlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcblxuICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xuICB9XG5cbiAgYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jb250cmlidXRvcnMgPSBkYXRhO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb250cmlidXRvcnM7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiXSwic291cmNlUm9vdCI6IiJ9