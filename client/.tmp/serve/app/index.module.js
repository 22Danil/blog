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
	
	var _directivePostAll = __webpack_require__(17);
	
	angular.module('yesno', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'toastr']).constant('malarkey', malarkey).constant('moment', moment).config(_index.config).config(_index2.routerConfig).run(_index3.runBlock).service('githubContributor', _githubContributor.GithubContributorService).service('webDevTec', _webDevTec.WebDevTecService).service('friendsService', _friend.FriendsService).controller('MyController', _template.MyController).controller('MyRegistration', _registration.MyRegistration).controller('MainUserController', _UserMain.MainUserController).controller('FriendController', _friends.FriendController).directive('acmeNavbar', _navbar.NavbarDirective).directive('acmeMalarkey', _malarkey.MalarkeyDirective).directive('post', _directivePostAll.PostAllDirective); /* global malarkey:false, moment:false */

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
	
	    this.title = "Вход";
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
	            $http.put('/api/posts/' + id, { token: localStorage.getItem("Token"), newText: savePost[0].textContent, postID: id }).then(function () {
	                savePost[0].disabled = true;
	            }).catch(function (result) {
	                savePost[0].disabled = true;
	                $scope.ErrorCode(result.status);
	            });
	        }
	    };
	    $scope.newPost = function () {
	        var text = document.getElementsByClassName("addPost");
	        if (text[1].textContent !== "") {
	            $http.post('/api/posts', { token: localStorage.getItem("Token"), textPost: text[1].textContent, textTitle: $scope.textForTitle }).then(function (result) {
	                $scope.books.push(result.data);
	            }).catch(function (result) {
	                $scope.ErrorCode(result.status);
	            });
	        }
	    };
	    $scope.Posts = function () {
	        //console.log(localStorage.getItem("Token"));
	        $http.get('/api/user/' + localStorage.getItem("Id") + '/posts', { params: { token: localStorage.getItem("Token") } }).then(function (result) {
	            $scope.books = result.data;
	            console.log($scope.books);
	        }).catch(function (result) {
	            $scope.ErrorCode(result.status);
	        });
	    };
	    $scope.AllPosts = function () {
	        $http.get('/api/posts', { params: { token: localStorage.getItem("Token") } }).then(function (result) {
	            console.log(result.data);
	            $scope.books = result.data;
	        }).catch(function (result) {
	            $scope.ErrorCode(result.status);
	        });
	    };
	    $scope.Search = function () {
	        if ($scope.textForSearch !== "") {
	            $http.get('/api/search/' + $scope.textForSearch, { params: { token: localStorage.getItem("Token") } }).then(function (result) {
	                console.log(result.data);
	                $scope.books = result.data;
	            }).catch(function (result) {
	                $scope.ErrorCode(result.status);
	            });
	        }
	    };
	    $scope.delPost = function (id) {
	        $http.delete('/api/posts/' + id, { params: { token: localStorage.getItem("Token") } }).then(function (result) {
	            console.log(result);
	            if (result.data === "OK") {
	                $scope.Posts();
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

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PostAllDirective = PostAllDirective;
	function PostAllDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    template: "<div class='fig' ng-repeat='posts in main.myfirstsService'> <h2>{{posts.massage+posts.Namehash[0]}}</h2>" + "<div>" + "<p class='fig'><img src=\"{{posts.Picture}}\" width=\"700\" height=\"600\" alt='Фотография'></p>" + "<div><button type=\"button\" class=\"btn btn-success\" >Yes</button>" + "<button type=\"button\" class=\"btn btn-danger\">No</button></div>" + "<div ng-repeat='Person in main.TablePerson'><h4 ng-if = 'Person.idPerson == posts.idPerson' >{{main.addName(Person,posts )}}<img  ng-src=\"{{main.addFace(Person,posts)}}\" width=\"35\" height=\"35\" alt='Фотография'>" + "<button type=\"button\" class=\"btn btn-lg btn-success\" ng-click=\"main.showFollows(main.addName(Person,posts))\" >Подписаться</button></h4></div>" + "</div></div>",
	    controllerAs: 'post'
	  };
	  return directive;
	}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTU5MTg3ZDg2M2JhMWE1MTI3NTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3RlbXBsYXRlLkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi9Vc2VyTWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL2Zvcm1hdC9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy96ZXJvLWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy9ob29rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvUG9zdEFsbC9kaXJlY3RpdmVQb3N0QWxsLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uc3RhbnQiLCJtYWxhcmtleSIsIm1vbWVudCIsImNvbmZpZyIsInJvdXRlckNvbmZpZyIsInJ1biIsInJ1bkJsb2NrIiwic2VydmljZSIsIkdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSIsIldlYkRldlRlY1NlcnZpY2UiLCJGcmllbmRzU2VydmljZSIsImNvbnRyb2xsZXIiLCJNeUNvbnRyb2xsZXIiLCJNeVJlZ2lzdHJhdGlvbiIsIk1haW5Vc2VyQ29udHJvbGxlciIsIkZyaWVuZENvbnRyb2xsZXIiLCJkaXJlY3RpdmUiLCJOYXZiYXJEaXJlY3RpdmUiLCJNYWxhcmtleURpcmVjdGl2ZSIsIlBvc3RBbGxEaXJlY3RpdmUiLCIkbG9nUHJvdmlkZXIiLCJ0b2FzdHJDb25maWciLCJkZWJ1Z0VuYWJsZWQiLCJhbGxvd0h0bWwiLCJ0aW1lT3V0IiwicG9zaXRpb25DbGFzcyIsInByZXZlbnREdXBsaWNhdGVzIiwicHJvZ3Jlc3NCYXIiLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyQXMiLCJvdGhlcndpc2UiLCIkbG9nIiwiZGVidWciLCIkdGltZW91dCIsImZyaWVuZHNTZXJ2aWNlIiwid2ViRGV2VGVjIiwiJGh0dHAiLCIkc2NvcGUiLCJ0aGF0IiwiZ2V0IiwidGhlbiIsInByb21pc2UiLCJwciIsImRhdGEiLCJlcnJvciIsInByb21pcyIsIlRhYmxlUGVyc29uIiwibXlmaXJzdHNTZXJ2aWNlIiwic3VjY2VzcyIsImFjdGl2YXRlIiwiZ2V0RGF0YUZyaWVuZHMiLCJmcmllbmRzRGF0YSIsImdldEZyaWVuZHMiLCJnZXRkYXRhIiwiZ2V0RGF0YSIsIiRsb2NhdGlvbiIsInRpdGxlIiwibW9kYWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3BhbiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5IiwiSGVhZGVyIiwidGV4dEJvZHkiLCJlbnRyeSIsInBvc3QiLCJuYW1lIiwiTmFtZSIsImVtYWlsIiwiRW1haWwiLCJwYXNzd29yZCIsIlBhc3N3b3JkIiwicmVzdWx0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwiaWQiLCJwYXRoIiwiY2F0Y2giLCJFcnJvckNvZGUiLCJzdGF0dXMiLCJyZWdpc3RyYXRpb24iLCJzdGF0dXNDb2RlIiwibmFtZVVzZXIiLCJnZXRJdGVtIiwidGV4dEZvclBvc3QiLCJ0ZXh0Rm9yVGl0bGUiLCJ0ZXh0Rm9yU2VhcmNoIiwiY291bnRJZCIsInRlc3QiLCJwb3N0RWRpdElkIiwicG9zdEVkaXRUZXh0IiwiZWRpdFBvc3QiLCJ0ZXh0Q29udGVudCIsImF0dHJpYnV0ZXMiLCJyZW1vdmVOYW1lZEl0ZW0iLCJzYXZlUG9zdCIsImNvbnNvbGUiLCJsb2ciLCJwdXQiLCJuZXdUZXh0IiwicG9zdElEIiwiZGlzYWJsZWQiLCJuZXdQb3N0IiwidGV4dCIsInRleHRQb3N0IiwidGV4dFRpdGxlIiwiYm9va3MiLCJwdXNoIiwiUG9zdHMiLCJwYXJhbXMiLCJBbGxQb3N0cyIsIlNlYXJjaCIsImRlbFBvc3QiLCJkZWxldGUiLCJ0b1N0cmluZyIsInRvSVNPU3RyaW5nIiwiZm9ybWF0IiwiaG9va3MiLCJkZWZhdWx0Rm9ybWF0IiwiY2xvbmUiLCJsb2NhbGUiLCJtIiwidXRjIiwieWVhciIsIkRhdGUiLCJwcm90b3R5cGUiLCJ0b0RhdGUiLCJpbnB1dFN0cmluZyIsIm91dHB1dCIsImxvY2FsZURhdGEiLCJwb3N0Zm9ybWF0IiwiYWRkRm9ybWF0VG9rZW4iLCJmb3JtYXRNb21lbnQiLCJleHBhbmRGb3JtYXQiLCJmb3JtYXR0aW5nVG9rZW5zIiwibG9jYWxGb3JtYXR0aW5nVG9rZW5zIiwiZm9ybWF0RnVuY3Rpb25zIiwiZm9ybWF0VG9rZW5GdW5jdGlvbnMiLCJwYWRkZWQiLCJvcmRpbmFsIiwiY2FsbGJhY2siLCJmdW5jIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZW1vdmVGb3JtYXR0aW5nVG9rZW5zIiwiaW5wdXQiLCJtYXRjaCIsInJlcGxhY2UiLCJtYWtlRm9ybWF0RnVuY3Rpb24iLCJhcnJheSIsImkiLCJsZW5ndGgiLCJtb20iLCJGdW5jdGlvbiIsImNhbGwiLCJpc1ZhbGlkIiwiaW52YWxpZERhdGUiLCJyZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMiLCJsb25nRGF0ZUZvcm1hdCIsImxhc3RJbmRleCIsInplcm9GaWxsIiwibnVtYmVyIiwidGFyZ2V0TGVuZ3RoIiwiZm9yY2VTaWduIiwiYWJzTnVtYmVyIiwiTWF0aCIsImFicyIsInplcm9zVG9GaWxsIiwic2lnbiIsInBvdyIsIm1heCIsInN1YnN0ciIsInNldEhvb2tDYWxsYmFjayIsImhvb2tDYWxsYmFjayIsImFwaUhvc3QiLCJsaW1pdCIsInJlc3BvbnNlIiwidG9Kc29uIiwiZGF0YVllc05PIiwicmVzdHJpY3QiLCJzY29wZSIsImNyZWF0aW9uRGF0ZSIsIk5hdmJhckNvbnRyb2xsZXIiLCJiaW5kVG9Db250cm9sbGVyIiwicmVsYXRpdmVEYXRlIiwiZnJvbU5vdyIsImV4dHJhVmFsdWVzIiwidGVtcGxhdGUiLCJsaW5rIiwibGlua0Z1bmMiLCJNYWxhcmtleUNvbnRyb2xsZXIiLCJlbCIsImF0dHIiLCJ2bSIsIndhdGNoZXIiLCJ0eXBpc3QiLCJ0eXBlU3BlZWQiLCJkZWxldGVTcGVlZCIsInBhdXNlRGVsYXkiLCJsb29wIiwicG9zdGZpeCIsImFkZENsYXNzIiwiZm9yRWFjaCIsInZhbHVlIiwidHlwZSIsInBhdXNlIiwiJHdhdGNoIiwiY29udHJpYnV0b3JzIiwiY29udHJpYnV0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QUFRNUY7OztLQUc3QmlGLFVBQVVkLE1BQU0wQixPQUFPLG1CQUFtQixZQUFNO09BQzlDeE4sUUFBUW9OLFFBQVFULEdBQUdjLGNBQWMsVUFBQ0MsYUFBZ0I7U0FDaERiLE9BQU9TLEtBQUtJLFlBQVlDLE9BQU9KLFFBQVE1Rjs7OztLQUkzQ21FLE1BQU04QixJQUFJLFlBQVksWUFBTTtPQUMxQmhCOzs7Ozs7OERBaUIrQjtHQVZuQyw0QkFBYXZLLE1BQU13TCxtQkFBbUI7S0FDcEM7O0tBRG9DOztLQUdwQyxLQUFLeEwsT0FBT0E7S0FDWixLQUFLb0wsZUFBZTs7S0FFcEIsS0FBS2xLLFNBQVNzSzs7O0dBZ0JoQixhQUFhLG9CQUFvQixDQUFDO0tBQ2hDLEtBQUs7S0FDTCxPQUFPLFNBQVMsU0FmVEEsbUJBQW1CO09BQUE7O09BQzFCLE9BQU8sS0FBS0MsZ0JBQWdCRCxtQkFBbUIvSyxLQUFLLFlBQU07U0FDeEQsTUFBS1QsS0FBSzBMLEtBQUs7OztNQW9CaEI7S0FDRCxLQUFLO0tBQ0wsT0FBTyxTQUFTLGdCQWxCRkYsbUJBQW1CO09BQUE7O09BQ2pDLE9BQU9BLGtCQUFrQkMsZ0JBQWdCLElBQUloTCxLQUFLLFVBQUNHLE1BQVM7U0FDMUQsT0FBS3dLLGVBQWV4Szs7U0FFcEIsT0FBTyxPQUFLd0s7Ozs7O0dBeUJoQixPQUFPOzs7Ozs7O0FDMUZUOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7QUFFVCxTQUhnQnBNO0FBQVQsVUFBU0EsbUJBQWtCO0dBQ2hDOztHQUdGLElBQUlILFlBQVk7S0FDWjJLLFVBQVU7S0FDVlEsVUFBUyw2R0FDUCxVQUFTLHFHQUNULHlFQUF1RSx1RUFDdkUsNk5BQ0Msd0pBQ0Q7S0FDRmxLLGNBQWM7O0dBRWhCLE9BQU9qQiIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhNTkxODdkODYzYmExYTUxMjc1MCIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vaW5kZXguY29uZmlnJztcbmltcG9ydCB7IHJvdXRlckNvbmZpZyB9IGZyb20gJy4vaW5kZXgucm91dGUnO1xuaW1wb3J0IHsgcnVuQmxvY2sgfSBmcm9tICcuL2luZGV4LnJ1bic7XG5cbmltcG9ydCB7IEZyaWVuZENvbnRyb2xsZXIgfSBmcm9tICcuL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyBNeUNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vdGVtcGxhdGUuQ29udHJvbGxlcic7XG5pbXBvcnQgeyBNeVJlZ2lzdHJhdGlvbiB9IGZyb20gJy4vbWFpbi9yZWdpc3RyYXRpb24uQ29udHJvbGxlcic7XG5pbXBvcnQgeyBNYWluVXNlckNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vVXNlck1haW4uY29udHJvbGxlcic7XG5cbmltcG9ydCB7IEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2ViRGV2VGVjU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZSc7XG5pbXBvcnQgeyBGcmllbmRzU2VydmljZSB9IGZyb20gXCIuLi9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOYXZiYXJEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYWxhcmtleURpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQb3N0QWxsRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwLy9Qb3N0QWxsL2RpcmVjdGl2ZVBvc3RBbGwuZGlyZWN0aXZlJztcblxuXG5cbmFuZ3VsYXIubW9kdWxlKCd5ZXNubycsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAnbmdSZXNvdXJjZScsICd1aS5yb3V0ZXInLCAndG9hc3RyJ10pXG4gIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcbiAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXG4gIC5jb25maWcoY29uZmlnKVxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcbiAgLnJ1bihydW5CbG9jaylcbiAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKVxuICAuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSlcbiAgLnNlcnZpY2UoJ2ZyaWVuZHNTZXJ2aWNlJywgRnJpZW5kc1NlcnZpY2UpXG5cbiAgICAuY29udHJvbGxlcignTXlDb250cm9sbGVyJywgTXlDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignTXlSZWdpc3RyYXRpb24nLCBNeVJlZ2lzdHJhdGlvbilcbiAgICAuY29udHJvbGxlcignTWFpblVzZXJDb250cm9sbGVyJywgTWFpblVzZXJDb250cm9sbGVyKVxuXG4gIC5jb250cm9sbGVyKCdGcmllbmRDb250cm9sbGVyJywgRnJpZW5kQ29udHJvbGxlcilcblxuICAuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgTmF2YmFyRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBNYWxhcmtleURpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgncG9zdCcsIFBvc3RBbGxEaXJlY3RpdmUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyAoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcbiAgJ25nSW5qZWN0JztcbiAgLy8gRW5hYmxlIGxvZ1xuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuXG4gIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSA1MDAwO1xuICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJleHBvcnQgZnVuY3Rpb24gcm91dGVyQ29uZmlnICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdob21lJywge1xuICAgICAgdXJsOiAnLycsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL3RlbXBsYXRlLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ015Q29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd0ZW1wJ1xuICAgIH0pXG4gICAgLnN0YXRlKCdmb2xsb3dzJyx7XG4gICAgICB1cmw6Jy9yZWdpc3RyYXRpb24nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9yZWdpc3RyYXRpb24uaHRtbCcsXG4gICAgICBjb250cm9sbGVyOidNeVJlZ2lzdHJhdGlvbicsXG4gICAgICBjb250cm9sbGVyQXM6J3JlZ2lzdCdcbiAgICB9KVxuICAgICAgLnN0YXRlKCcxJyx7XG4gICAgICAgICAgdXJsOicvbWFpbicsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9Vc2VyTWFpbi5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOidNYWluVXNlckNvbnRyb2xsZXInLFxuICAgICAgICAgIGNvbnRyb2xsZXJBczonTWVVc2UnXG4gICAgICB9KTtcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBydW5CbG9jayAoJGxvZykge1xuICAnbmdJbmplY3QnO1xuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwiZXhwb3J0IGNsYXNzIEZyaWVuZENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwLCAkc2NvcGUpIHtcbiAgICAnbmdJbmplY3QnXG5cbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZm9sbG93cycpXG4gICAgICAudGhlbihmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgICAgLy90aGlzLmRhdGE9c3VjY2Vzcy5kYXRhO1xuICAgICAgICAkc2NvcGUucHIgPSBwcm9taXNlLmRhdGE7XG4gICAgICAgIHRoYXQucHJvbWlzZSA9IHByb21pc2UuZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICB0aGlzLnByb21pcyA9IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB0aGlzLnByb21pc2UgPSAkc2NvcGUucHI7XG4gICAgdGhpcy5UYWJsZVBlcnNvbiA9IFtdO1xuICAgIHRoaXMubXlmaXJzdHNTZXJ2aWNlID0gW11cbiAgICB0aGlzLnN1Y2Nlc3MgPW51bGw7XG4gICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHApO1xuICB9XG4gIGFjdGl2YXRlKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCkge1xuICAgIHRoaXMuZ2V0RGF0YUZyaWVuZHMoZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHApO1xuICB9XG4gIGdldERhdGFGcmllbmRzKGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMpe1xuICAgIHRoaXMuZnJpZW5kc0RhdGEgPSBmcmllbmRzU2VydmljZS5nZXRGcmllbmRzKCk7XG4gICAgdGhpcy5UYWJsZVBlcnNvbiA9IHdlYkRldlRlYy5nZXRkYXRhKCk7XG4gICAgdGhpcy5zdWNjZXNzID0gZnJpZW5kc1NlcnZpY2UuZ2V0RGF0YSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgTXlDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwLCAkbG9nLCAkbG9jYXRpb24sICRzY29wZSkge1xuICAgICAgJ25nSW5qZWN0J1xuXG5cbiAgICAgIHRoaXMudGl0bGUgPSBcItCS0YXQvtC0XCI7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuICAgICAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCJcIjtcbiAgICAgICAgfTtcblxuICAgICAgdGhpcy5lbnRyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHAucG9zdCgnL2VudHJ5Jywge25hbWU6ICRzY29wZS5OYW1lLCBlbWFpbDogJHNjb3BlLkVtYWlsLCBwYXNzd29yZDogJHNjb3BlLlBhc3N3b3JkfSlcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUb2tlbicsIHJlc3VsdC5kYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05hbWUnLCByZXN1bHQuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0lkJywgcmVzdWx0LmRhdGEuaWQpO1xuICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9tYWluXCIpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICB0aGlzLnJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvY2F0aW9uLnBhdGgoXCIvcmVnaXN0cmF0aW9uXCIpO1xuICAgICAgfTtcbiAgICAgICAgJHNjb3BlLkVycm9yQ29kZSA9IGZ1bmN0aW9uIChzdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICBpZihzdGF0dXNDb2RlID09PSA0MDEpe1xuICAgICAgICAgICAgICAgICRzY29wZS5IZWFkZXIgPSBcIkVycm9yOiBcIiArIHN0YXR1c0NvZGU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCLQndC10LLQtdGA0L3Ri9C5INC70L7Qs9C40L0g0LjQu9C4INC/0LDRgNC+0LvRjCFcIjtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vdGVtcGxhdGUuQ29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBNeVJlZ2lzdHJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRsb2csICRzY29wZSwgJGxvY2F0aW9uKSB7XG4gICAgJ25nSW5qZWN0J1xuXG5cbiAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCJcIjtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKTtcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG4gICAgICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcIlwiO1xuICAgICAgICB9O1xuXG4gICAgdGhpcy5yZWdpc3RyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkaHR0cC5wb3N0KCcvcmVnaXN0cmF0aW9uJywge25hbWU6ICRzY29wZS5OYW1lLCBlbWFpbDogJHNjb3BlLkVtYWlsLCBwYXNzd29yZDogJHNjb3BlLlBhc3N3b3JkfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoXCIvXCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgJHNjb3BlLkVycm9yQ29kZSA9IGZ1bmN0aW9uIChzdGF0dXNDb2RlKSB7XG4gICAgICAgICAgaWYoc3RhdHVzQ29kZSA9PT0gNDAxKXtcbiAgICAgICAgICAgICAgJHNjb3BlLkhlYWRlciA9IFwiRXJyb3I6IFwiICsgc3RhdHVzQ29kZTtcbiAgICAgICAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCLQndC10LLQtdGA0L3Ri9C5INC70L7Qs9C40L0g0LjQu9C4INC/0LDRgNC+0LvRjCFcIjtcbiAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICB9XG4gICAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vcmVnaXN0cmF0aW9uLkNvbnRyb2xsZXIuanMiLCJpbXBvcnQge3RvU3RyaW5nfSBmcm9tIFwiLi4vLi4vLi4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi9tb21lbnQvZm9ybWF0XCI7XG5cbmV4cG9ydCBjbGFzcyBNYWluVXNlckNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRsb2csICRsb2NhdGlvbiwgJHNjb3BlKSB7XG4gICAgICAgICduZ0luamVjdCdcblxuXG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuICAgICAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCJcIjtcbiAgICAgICAgfTtcblxuXG4gICAgICAgICRzY29wZS5IZWFkZXIgPSBcIlwiO1xuICAgICAgICAkc2NvcGUudGV4dEJvZHkgPSBcIlwiO1xuICAgICAgICAkc2NvcGUubmFtZVVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk5hbWVcIik7XG4gICAgICAgICRzY29wZS50ZXh0Rm9yUG9zdCA9IFwiXCI7XG4gICAgICAgICRzY29wZS50ZXh0Rm9yVGl0bGUgPSBcIlwiO1xuICAgICAgICAkc2NvcGUudGV4dEZvclNlYXJjaCA9IFwiXCI7XG4gICAgICAgICRzY29wZS5jb3VudElkID0gMDtcbiAgICAgICAgJHNjb3BlLnRlc3QgPSBcInRydWVcIjtcbiAgICAgICAgbGV0IHBvc3RFZGl0SWQ7XG4gICAgICAgIGxldCBwb3N0RWRpdFRleHQ7XG5cbiAgICAgICAgJHNjb3BlLmVkaXRQb3N0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBsZXQgZWRpdFBvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXVsdGktZmlsZXNcIitpZCk7XG4gICAgICAgICAgICBwb3N0RWRpdElkID0gaWQ7XG4gICAgICAgICAgICBwb3N0RWRpdFRleHQgPSBlZGl0UG9zdFswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGVkaXRQb3N0WzBdLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKFwiZGlzYWJsZWRcIik7XG5cbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLnNhdmVQb3N0ID0gZnVuY3Rpb24oaWQpe1xuICAgICAgICAgICAgbGV0IHNhdmVQb3N0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm11bHRpLWZpbGVzXCIraWQpO1xuICAgICAgICAgICAgaWYoaWQgIT09IHBvc3RFZGl0SWQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaWQg0L3QtdGB0L7QstC/0LDQu9C4IVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAkaHR0cC5wdXQoJy9hcGkvcG9zdHMvJyArIGlkLCB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIiksIG5ld1RleHQ6IHNhdmVQb3N0WzBdLnRleHRDb250ZW50LCBwb3N0SUQ6IGlkfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVBvc3RbMF0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVBvc3RbMF0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLm5ld1Bvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRQb3N0XCIpO1xuICAgICAgICAgICAgaWYodGV4dFsxXS50ZXh0Q29udGVudCAhPT0gXCJcIil7XG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKSwgdGV4dFBvc3Q6IHRleHRbMV0udGV4dENvbnRlbnQsIHRleHRUaXRsZTogJHNjb3BlLnRleHRGb3JUaXRsZX0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5ib29rcy5wdXNoKHJlc3VsdC5kYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLlBvc3RzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpKTtcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS91c2VyLycrIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiSWRcIikgKyAnL3Bvc3RzJywge3BhcmFtczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmJvb2tzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5BbGxQb3N0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9wb3N0cycsIHtwYXJhbXM6IHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKX19KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLkVycm9yQ29kZShyZXN1bHQuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLlNlYXJjaCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZigkc2NvcGUudGV4dEZvclNlYXJjaCAhPT0gXCJcIil7XG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3NlYXJjaC8nICsgJHNjb3BlLnRleHRGb3JTZWFyY2gsIHtwYXJhbXM6IHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKX19KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5FcnJvckNvZGUocmVzdWx0LnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmRlbFBvc3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICRodHRwLmRlbGV0ZSgnL2FwaS9wb3N0cy8nKyBpZCwge3BhcmFtczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YSA9PT0gXCJPS1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5Qb3N0cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuRXJyb3JDb2RlKHJlc3VsdC5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuRXJyb3JDb2RlID0gZnVuY3Rpb24gKHN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MDMpe1xuICAgICAgICAgICAgICAgICRzY29wZS5IZWFkZXIgPSBcIkVycm9yOiBcIiArIHN0YXR1c0NvZGU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnRleHRCb2R5ID0gXCLQoyDQstCw0YEg0L3QtdGCINC/0YDQsNCyINC90LAg0Y3RgtC+INC00LXQudGB0YLQstC40LUhXCI7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoc3RhdHVzQ29kZSA9PT0gNDAxKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuSGVhZGVyID0gXCJFcnJvcjogXCIgKyBzdGF0dXNDb2RlO1xuICAgICAgICAgICAgICAgICRzY29wZS50ZXh0Qm9keSA9IFwi0J3QtdCy0LXRgNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YwhXCI7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluL1VzZXJNYWluLmNvbnRyb2xsZXIuanMiLCJpbXBvcnQgeyBmb3JtYXRNb21lbnQgfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuXG5ob29rcy5kZWZhdWx0Rm9ybWF0ID0gJ1lZWVktTU0tRERUSEg6bW06c3NaJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmxvY2FsZSgnZW4nKS5mb3JtYXQoJ2RkZCBNTU0gREQgWVlZWSBISDptbTpzcyBbR01UXVpaJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0lTT1N0cmluZyAoKSB7XG4gICAgdmFyIG0gPSB0aGlzLmNsb25lKCkudXRjKCk7XG4gICAgaWYgKDAgPCBtLnllYXIoKSAmJiBtLnllYXIoKSA8PSA5OTk5KSB7XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcpIHtcbiAgICAgICAgICAgIC8vIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBpcyB+NTB4IGZhc3RlciwgdXNlIGl0IHdoZW4gd2UgY2FuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE1vbWVudChtLCAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdE1vbWVudChtLCAnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0IChpbnB1dFN0cmluZykge1xuICAgIHZhciBvdXRwdXQgPSBmb3JtYXRNb21lbnQodGhpcywgaW5wdXRTdHJpbmcgfHwgaG9va3MuZGVmYXVsdEZvcm1hdCk7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLnBvc3Rmb3JtYXQob3V0cHV0KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdC5qcyIsImltcG9ydCB6ZXJvRmlsbCBmcm9tICcuLi91dGlscy96ZXJvLWZpbGwnO1xuXG5leHBvcnQgdmFyIGZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UXxZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nO1xuXG52YXIgbG9jYWxGb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KExUU3xMVHxMTD9MP0w/fGx7MSw0fSkvZztcblxudmFyIGZvcm1hdEZ1bmN0aW9ucyA9IHt9O1xuXG5leHBvcnQgdmFyIGZvcm1hdFRva2VuRnVuY3Rpb25zID0ge307XG5cbi8vIHRva2VuOiAgICAnTSdcbi8vIHBhZGRlZDogICBbJ01NJywgMl1cbi8vIG9yZGluYWw6ICAnTW8nXG4vLyBjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB0aGlzLm1vbnRoKCkgKyAxIH1cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb3JtYXRUb2tlbiAodG9rZW4sIHBhZGRlZCwgb3JkaW5hbCwgY2FsbGJhY2spIHtcbiAgICB2YXIgZnVuYyA9IGNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tjYWxsYmFja10oKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSA9IGZ1bmM7XG4gICAgfVxuICAgIGlmIChwYWRkZWQpIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB6ZXJvRmlsbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHBhZGRlZFsxXSwgcGFkZGVkWzJdKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKG9yZGluYWwpIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbb3JkaW5hbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkub3JkaW5hbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRva2VuKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQubWF0Y2goL1xcW1tcXHNcXFNdLykpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXFxcL2csICcnKTtcbn1cblxuZnVuY3Rpb24gbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCkge1xuICAgIHZhciBhcnJheSA9IGZvcm1hdC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKSwgaSwgbGVuZ3RoO1xuXG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXSkge1xuICAgICAgICAgICAgYXJyYXlbaV0gPSBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJheVtpXSA9IHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb20pIHtcbiAgICAgICAgdmFyIG91dHB1dCA9ICcnO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG91dHB1dCArPSBhcnJheVtpXSBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJyYXlbaV0uY2FsbChtb20sIGZvcm1hdCkgOiBhcnJheVtpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG59XG5cbi8vIGZvcm1hdCBkYXRlIHVzaW5nIG5hdGl2ZSBkYXRlIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vbWVudChtLCBmb3JtYXQpIHtcbiAgICBpZiAoIW0uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBtLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cblxuICAgIGZvcm1hdCA9IGV4cGFuZEZvcm1hdChmb3JtYXQsIG0ubG9jYWxlRGF0YSgpKTtcbiAgICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSA9IGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdIHx8IG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpO1xuXG4gICAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKG0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbG9jYWxlKSB7XG4gICAgdmFyIGkgPSA1O1xuXG4gICAgZnVuY3Rpb24gcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUubG9uZ0RhdGVGb3JtYXQoaW5wdXQpIHx8IGlucHV0O1xuICAgIH1cblxuICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgIHdoaWxlIChpID49IDAgJiYgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLnRlc3QoZm9ybWF0KSkge1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShsb2NhbEZvcm1hdHRpbmdUb2tlbnMsIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2Vucyk7XG4gICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgICAgICBpIC09IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdDtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi9mb3JtYXQvZm9ybWF0LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gemVyb0ZpbGwobnVtYmVyLCB0YXJnZXRMZW5ndGgsIGZvcmNlU2lnbikge1xuICAgIHZhciBhYnNOdW1iZXIgPSAnJyArIE1hdGguYWJzKG51bWJlciksXG4gICAgICAgIHplcm9zVG9GaWxsID0gdGFyZ2V0TGVuZ3RoIC0gYWJzTnVtYmVyLmxlbmd0aCxcbiAgICAgICAgc2lnbiA9IG51bWJlciA+PSAwO1xuICAgIHJldHVybiAoc2lnbiA/IChmb3JjZVNpZ24gPyAnKycgOiAnJykgOiAnLScpICtcbiAgICAgICAgTWF0aC5wb3coMTAsIE1hdGgubWF4KDAsIHplcm9zVG9GaWxsKSkudG9TdHJpbmcoKS5zdWJzdHIoMSkgKyBhYnNOdW1iZXI7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL3V0aWxzL3plcm8tZmlsbC5qcyIsImV4cG9ydCB7IGhvb2tzLCBzZXRIb29rQ2FsbGJhY2sgfTtcblxudmFyIGhvb2tDYWxsYmFjaztcblxuZnVuY3Rpb24gaG9va3MgKCkge1xuICAgIHJldHVybiBob29rQ2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuLy8gVGhpcyBpcyBkb25lIHRvIHJlZ2lzdGVyIHRoZSBtZXRob2QgY2FsbGVkIHdpdGggbW9tZW50KClcbi8vIHdpdGhvdXQgY3JlYXRpbmcgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuZnVuY3Rpb24gc2V0SG9va0NhbGxiYWNrIChjYWxsYmFjaykge1xuICAgIGhvb2tDYWxsYmFjayA9IGNhbGxiYWNrO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy9ob29rcy5qcyIsImV4cG9ydCBjbGFzcyBHaXRodWJDb250cmlidXRvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMobGltaXQ9MzApIHtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpKTtcbiAgICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsImV4cG9ydCBjbGFzcyBXZWJEZXZUZWNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcbiAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnR3VscEpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcbiAgICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdLYXJtYSA9KScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXG4gICAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxuICAgICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0VTNiAoQmFiZWwgZm9ybWVybHkgNnRvNSknLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYmFiZWxqcy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVHVybnMgRVM2KyBjb2RlIGludG8gdmFuaWxsYSBFUzUsIHNvIHlvdSBjYW4gdXNlIG5leHQgZ2VuZXJhdGlvbiBmZWF0dXJlcyB0b2RheS4nLFxuICAgICAgICAnbG9nbyc6ICdiYWJlbC5wbmcnXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLmRhdGFZZXNOTz1bXG5cbiAgICAgIHtcbiAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDBcIixcbiAgICAgICAgJ05hbWVoYXNoJzpbXCIjY2F0XCJdLFxuICAgICAgICAnbWFzc2FnZSc6XCLQmtC+0YLQuNC6INC60YDQsNGB0LjQstGL0Lk/XCIsXG4gICAgICAgICdQaWN0dXJlJzpcImFzc2V0cy9pbWFnZXMvUG9zdEFsbC9DYXQxLmpwZ1wiLFxuICAgICAgICAnWWVzJzogXCJcIixcbiAgICAgICAgJ05vJzpcIlwiLFxuICAgICAgICAndm90ZWQnOltdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMVwiLFxuICAgICAgICAnTmFtZWhhc2gnOltcIiNob3VzZVwiXSxcbiAgICAgICAgJ21hc3NhZ2UnOlwi0JTQvtC8INCx0L7Qu9GM0YjQvtC5XCIsXG4gICAgICAgICdQaWN0dXJlJzpcImFzc2V0cy9pbWFnZXMvUG9zdEFsbC9Ib3VzZTEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAyXCIsXG4gICAgICAgICdtYXNzYWdlJzpcItCi0LXQu9C10YTQvtC9INC90L7QstGL0Lk/XCIsXG4gICAgICAgICdOYW1laGFzaCc6W1wiI3Bob25lXCJdLFxuICAgICAgICAnUGljdHVyZSc6XCJhc3NldHMvaW1hZ2VzL1Bvc3RBbGwvcGhvbmUxLmpwZ1wiLFxuICAgICAgICAnWWVzJzogXCJcIixcbiAgICAgICAgJ05vJzpcIlwiLFxuICAgICAgICAndm90ZWQnOltdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMVwiLFxuICAgICAgICAnTmFtZWhhc2gnOltcIiNkb2dcIl0sXG4gICAgICAgICdtYXNzYWdlJzpcItCh0L7QsdCw0LrQsCDQv9C+0YDQvtC00LjRgdGC0LDRjz9cIixcbiAgICAgICAgJ1BpY3R1cmUnOlwiYXNzZXRzL2ltYWdlcy9Qb3N0QWxsL0RvZzEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cblxuXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLlRhYmxlUGVyc29uID1bIHtcbiAgICAgICAgICAnaWRQZXJzb24nOlwiMTAwMFwiLFxuICAgICAgICAgICdpZEZvbG93cyc6W10sXG4gICAgICAgICAgJ2lkTXlGb2xvd3MnOltdLFxuICAgICAgICAgICdOYW1lJzpcIlZhc3lhXCIsXG4gICAgICAgICAgJ1BpY3R1cmVGYWNlJzpcImFzc2V0cy9pbWFnZXMvcGVyc29ucy8vMTAwMC5qcGVnXCJcblxuICAgICAgfSx7XG4gICAgICAnaWRQZXJzb24nOlwiMTAwMVwiLFxuICAgICAgJ2lkRm9sb3dzJzpbXSxcbiAgICAgICdpZE15Rm9sb3dzJzpbXSxcbiAgICAgICdOYW1lJzpcIkFuYXRvbGlpXCIsXG4gICAgICAnUGljdHVyZUZhY2UnOlwiYXNzZXRzL2ltYWdlcy9wZXJzb25zLzEwMDEuanBlZ1wiXG5cbiAgICB9LFxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMlwiLFxuICAgICAgICAnaWRGb2xvd3MnOltdLFxuICAgICAgICAnaWRNeUZvbG93cyc6W10sXG4gICAgICAgICdOYW1lJzpcIk5hdGFzaGFcIixcbiAgICAgICAgJ1BpY3R1cmVGYWNlJzpcImFzc2V0cy9pbWFnZXMvcGVyc29ucy8xMDAyLmpwZ1wiXG5cbiAgICAgIH1cblxuICAgIF1cblxuXG5cbiAgfVxuXG4gIGdldFRlYygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gIGdldFllc05vZGF0YSgpe1xuICAgIHJldHVybiB0aGlzLmRhdGFZZXNOTztcbiAgfVxuICBnZXRkYXRhKCl7XG4gICAgcmV0dXJuIHRoaXMuVGFibGVQZXJzb247XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanMiLCJleHBvcnQgY2xhc3MgRnJpZW5kc1NlcnZpY2V7XG4gIGNvbnN0cnVjdG9yICgpe1xuICAgICduZ0luamVjdCc7XG4gICAgdGhpcy5wcm9taXNlID1bXTtcbiAgICAvLyAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb2xsb3dzJylcbiAgICAvLyAgIC50aGVuKGZ1bmN0aW9yb21pbihwcm9taXNlKSB7XG4gICAgLy8gICAgIC8vICAgICAgIC8vdGhpcy49c3VjY2Vzcy5kYXRhO1xuICAgIC8vICAgICAvLyAgICAgICB0aGlzLnByb21pc2U9IHBzZTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgZnVuY3Rpb24oZXJyb3IpIHtkYXRhXG4gICAgLy8gICAgICAgdGhpcy5wcm9taXNlPSBlcnJvcjtcbiAgICAvLyAgICAgfSk7XG5cbiAgICB0aGlzLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgICdpZCc6JzEwMDAnLFxuICAgICAgICAnbXlGcmllbmQnOiBbXCIxMDAxXCIsXCIxMDAyXCJdXG4gICAgICB9XG4gICAgXVxuXG4gIH1cbiAgIGdldEZyaWVuZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuICAgZ2V0RGF0YSgpe1xuICAgICAgIC8vICRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ZvbGxvd3MnKVxuICAgICAgIC8vICAgLnRoZW4oZnVuY3Rpb24oc3VjY2Vzcyl7XG4gICAgICAgLy8gICAvL3RoaXMuZGF0YT1zdWNjZXNzLmRhdGE7XG4gICAgICAgLy8gICByZXR1cm4gc3VjY2Vzcy5kYXRhO1xuICAgICAgIC8vIH0sXG4gICAgICAgLy8gZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgIC8vICAgcmV0dXJuIGVycm9yO1xuICAgICAgIC8vIH0pO1xuICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxuY2xhc3MgTmF2YmFyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb21lbnQpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgLy8gXCJ0aGlzLmNyZWF0aW9uRGF0ZVwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG4gICAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQodGhpcy5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgbGV0IHdhdGNoZXI7XG4gICAgbGV0IHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XG4gICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FjbWUtbWFsYXJrZXknKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgKHZhbHVlKSA9PiB7XG4gICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKS5kZWxldGUoKTtcbiAgICB9KTtcblxuICAgIHdhdGNoZXIgPSBzY29wZS4kd2F0Y2goJ3ZtLmNvbnRyaWJ1dG9ycycsICgpID0+IHtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2bS5jb250cmlidXRvcnMsIChjb250cmlidXRvcikgPT4ge1xuICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKS5kZWxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHtcbiAgICAgIHdhdGNoZXIoKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbmNsYXNzIE1hbGFya2V5Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XG5cbiAgICB0aGlzLmFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKTtcbiAgfVxuXG4gIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiBnaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY29udHJpYnV0b3JzID0gZGF0YTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29udHJpYnV0b3JzO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIiwiXG5cbmV4cG9ydCBmdW5jdGlvbiBQb3N0QWxsRGlyZWN0aXZlKCl7XG4gICduZ0luamVjdCc7XG5cblxubGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlOlwiPGRpdiBjbGFzcz0nZmlnJyBuZy1yZXBlYXQ9J3Bvc3RzIGluIG1haW4ubXlmaXJzdHNTZXJ2aWNlJz4gPGgyPnt7cG9zdHMubWFzc2FnZStwb3N0cy5OYW1laGFzaFswXX19PC9oMj5cIiArXG4gICAgICBcIjxkaXY+XCIgK1wiPHAgY2xhc3M9J2ZpZyc+PGltZyBzcmM9XFxcInt7cG9zdHMuUGljdHVyZX19XFxcIiB3aWR0aD1cXFwiNzAwXFxcIiBoZWlnaHQ9XFxcIjYwMFxcXCIgYWx0PSfQpNC+0YLQvtCz0YDQsNGE0LjRjyc+PC9wPlwiK1xuICAgICAgXCI8ZGl2PjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiA+WWVzPC9idXR0b24+XCIrXCI8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj5ObzwvYnV0dG9uPjwvZGl2PlwiK1xuICAgICAgXCI8ZGl2IG5nLXJlcGVhdD0nUGVyc29uIGluIG1haW4uVGFibGVQZXJzb24nPjxoNCBuZy1pZiA9ICdQZXJzb24uaWRQZXJzb24gPT0gcG9zdHMuaWRQZXJzb24nID57e21haW4uYWRkTmFtZShQZXJzb24scG9zdHMgKX19PGltZyAgbmctc3JjPVxcXCJ7e21haW4uYWRkRmFjZShQZXJzb24scG9zdHMpfX1cXFwiIHdpZHRoPVxcXCIzNVxcXCIgaGVpZ2h0PVxcXCIzNVxcXCIgYWx0PSfQpNC+0YLQvtCz0YDQsNGE0LjRjyc+XCJcbiAgICAgICtcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1sZyBidG4tc3VjY2Vzc1xcXCIgbmctY2xpY2s9XFxcIm1haW4uc2hvd0ZvbGxvd3MobWFpbi5hZGROYW1lKFBlcnNvbixwb3N0cykpXFxcIiA+0J/QvtC00L/QuNGB0LDRgtGM0YHRjzwvYnV0dG9uPjwvaDQ+PC9kaXY+XCIrXG4gICAgICBcIjwvZGl2PjwvZGl2PlwiLFxuICAgIGNvbnRyb2xsZXJBczogJ3Bvc3QnXG4gIH1cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9Qb3N0QWxsL2RpcmVjdGl2ZVBvc3RBbGwuZGlyZWN0aXZlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==