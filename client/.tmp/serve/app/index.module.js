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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MyController = exports.MyController = ["$timeout", "friendsService", "webDevTec", "$http", "$log", "$location", "$scope", function MyController($timeout, friendsService, webDevTec, $http, $log, $location, $scope) {
	  'ngInject';
	
	  //let that = this;
	
	  _classCallCheck(this, MyController);
	
	  this.title = "Вход";
	  //this.Name = "";
	  //this.Email = "";
	  //this.Password = "";
	  $scope.err_log = "";
	  $scope.err_pas = "";
	
	  this.entry = function () {
	    $http.post('api/entry', { name: $scope.Name, email: $scope.Email, password: $scope.Password }).then(function (result) {
	      //$scope.books = result.data;
	      //console.log(result);
	      //this.err_log = "";
	      //this.err_pas = "";
	      if (result.data === "error_login") {
	        $scope.err_log = "Сначала нужно зарегистрироваться!";
	      } else if (result.data === "error_password") {
	        $scope.err_pas = "Неверный пароль!";
	      } else {
	        localStorage.setItem('Token', result.data.token);
	        localStorage.setItem('Name', result.data.name);
	        localStorage.setItem('Id', result.data.id);
	
	        $location.path("/main");
	        //console.log(result.data);
	      }
	    }).catch(function (result) {
	      //console.log(result)
	      $log.log(result);
	    });
	  };
	
	  this.registration = function () {
	    $location.path("/registration");
	  };
	}];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MyRegistration = exports.MyRegistration = ["$timeout", "friendsService", "webDevTec", "$http", "$log", "$scope", "$location", function MyRegistration($timeout, friendsService, webDevTec, $http, $log, $scope, $location) {
	  'ngInject';
	
	  //$scope.Name = "";
	  //$scope.Email = "";
	  //$scope.Password = "";
	
	  _classCallCheck(this, MyRegistration);
	
	  $scope.err_log = "";
	
	  this.registration = function () {
	    $http.post('/api/registration', { name: $scope.Name, email: $scope.Email, password: $scope.Password }).then(function (result) {
	      if (result.data === "error_login") {
	        $scope.err_log = "Такой логин уже занят!";
	      } else {
	        $location.path("/");
	      }
	    }).catch(function (result) {
	      //console.log(result)
	      $log.log(result);
	    });
	    //$location.path("/");
	  };
	}];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MainUserController = undefined;
	
	var _format = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainUserController = exports.MainUserController = ["$timeout", "friendsService", "webDevTec", "$http", "$log", "$location", "$scope", function MainUserController($timeout, friendsService, webDevTec, $http, $log, $location, $scope) {
	    'ngInject';
	
	    //console.log(test);
	    //localStorage.setItem('myKey', 'Value');
	    //1console.log($location.search().name);
	    //$scope.sample1=function(){
	
	    _classCallCheck(this, MainUserController);
	
	    $scope.nameUser = localStorage.getItem("Name");
	
	    $scope.textForPost = "";
	    $scope.textForTitle = "";
	    $scope.textForSearch = "";
	    $scope.countId = 0;
	    $scope.test = "true";
	    var postEditId = void 0;
	    var postEditText = void 0;
	
	    //$scope.user_name = $location.search().name;
	    $scope.editPost = function (id) {
	        var editPost = document.getElementsByClassName("multi-files" + id);
	        postEditId = id;
	        postEditText = editPost[0].textContent;
	
	        editPost[0].attributes.removeNamedItem("disabled");
	
	        /*
	        $http.post('/api/editPost', {token: localStorage.getItem("Token"), postID: id})
	            .then(function (result) {
	                if(result.data.status === "OK"){
	                    console.log(editPost[0].disabled);//[0].attributes
	                    //$scope.test = "false";//ng-disabled="{{test}}"
	                    editPost[0].attributes.removeNamedItem("disabled");
	                }
	            })
	            .catch(function (result) {
	                console.log(result);
	            });
	         */
	    };
	    $scope.savePost = function (id) {
	        var savePost = document.getElementsByClassName("multi-files" + id);
	        if (id !== postEditId) {
	            console.log("id несовпали!");
	        } else if (savePost[0].textContent === postEditText) {
	            console.log("Вы ничего не изменили!");
	        } else {
	            $http.put('/api/posts/' + id, { token: localStorage.getItem("Token"), newText: savePost[0].textContent, postID: id }).then(function (result) {
	                if (result.data.status === "OK") {
	                    //$scope.addBook();
	                    savePost[0].disabled = true;
	                } else {
	                    console.log("Ошибка добавления!");
	                }
	            }).catch(function (result) {
	                console.log(result);
	            });
	        }
	    };
	    $scope.newPost = function () {
	        var text = document.getElementsByClassName("addPost");
	        if (text[1].textContent !== "") {
	            $http.post('/api/posts', { token: localStorage.getItem("Token"), textPost: text[1].textContent, textTitle: $scope.textForTitle }).then(function (result) {
	                if (result.data.status === "OK") {
	                    $scope.Posts();
	                }
	            }).catch(function (result) {
	                console.log(result);
	            });
	        }
	    };
	    $scope.Posts = function () {
	        //console.log(localStorage.getItem("Token"));
	        $http.get('/api/user/' + localStorage.getItem("Id") + '/posts', { params: { token: localStorage.getItem("Token") } }).then(function (result) {
	            $scope.books = result.data;
	            console.log(result);
	        }).catch(function (result) {
	            console.log(result);
	        });
	    };
	    $scope.AllPosts = function () {
	        $http.get('/api/posts', { params: { token: localStorage.getItem("Token") } }).then(function (result) {
	            console.log(result.data);
	            $scope.books = result.data;
	        }).catch(function (result) {
	            console.log(result);
	        });
	    };
	    $scope.Search = function () {
	        var idPost = document.getElementsByClassName("addPost");
	        console.log($scope.books);
	
	        /*
	        if($scope.textForSearch !== ""){
	            $http.get('/api/searchPost', {token: localStorage.getItem("Token"), textSearch: $scope.textForSearch})
	                .then(function (result) {
	                    console.log(result.data);
	                    $scope.books = result.data;
	                })
	                .catch(function (result) {
	                    console.log(result);
	                })
	        }
	        */
	    };
	    $scope.delPost = function (id) {
	        $http.delete('/api/posts/' + id, { params: { token: localStorage.getItem("Token") } }).then(function (result) {
	            if (result.data.status === "OK") {
	                $scope.Posts();
	            }
	        }).catch(function (result) {
	            console.log(result);
	        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDY1N2E1ZDI2NzhmMDU5ZGZhMTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3RlbXBsYXRlLkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi9Vc2VyTWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL2Zvcm1hdC9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy96ZXJvLWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy9ob29rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvUG9zdEFsbC9kaXJlY3RpdmVQb3N0QWxsLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uc3RhbnQiLCJtYWxhcmtleSIsIm1vbWVudCIsImNvbmZpZyIsInJvdXRlckNvbmZpZyIsInJ1biIsInJ1bkJsb2NrIiwic2VydmljZSIsIkdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSIsIldlYkRldlRlY1NlcnZpY2UiLCJGcmllbmRzU2VydmljZSIsImNvbnRyb2xsZXIiLCJNeUNvbnRyb2xsZXIiLCJNeVJlZ2lzdHJhdGlvbiIsIk1haW5Vc2VyQ29udHJvbGxlciIsIkZyaWVuZENvbnRyb2xsZXIiLCJkaXJlY3RpdmUiLCJOYXZiYXJEaXJlY3RpdmUiLCJNYWxhcmtleURpcmVjdGl2ZSIsIlBvc3RBbGxEaXJlY3RpdmUiLCIkbG9nUHJvdmlkZXIiLCJ0b2FzdHJDb25maWciLCJkZWJ1Z0VuYWJsZWQiLCJhbGxvd0h0bWwiLCJ0aW1lT3V0IiwicG9zaXRpb25DbGFzcyIsInByZXZlbnREdXBsaWNhdGVzIiwicHJvZ3Jlc3NCYXIiLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyQXMiLCJvdGhlcndpc2UiLCIkbG9nIiwiZGVidWciLCIkdGltZW91dCIsImZyaWVuZHNTZXJ2aWNlIiwid2ViRGV2VGVjIiwiJGh0dHAiLCIkc2NvcGUiLCJ0aGF0IiwiZ2V0IiwidGhlbiIsInByb21pc2UiLCJwciIsImRhdGEiLCJlcnJvciIsInByb21pcyIsIlRhYmxlUGVyc29uIiwibXlmaXJzdHNTZXJ2aWNlIiwic3VjY2VzcyIsImFjdGl2YXRlIiwiZ2V0RGF0YUZyaWVuZHMiLCJmcmllbmRzRGF0YSIsImdldEZyaWVuZHMiLCJnZXRkYXRhIiwiZ2V0RGF0YSIsIiRsb2NhdGlvbiIsInRpdGxlIiwiZXJyX2xvZyIsImVycl9wYXMiLCJlbnRyeSIsInBvc3QiLCJuYW1lIiwiTmFtZSIsImVtYWlsIiwiRW1haWwiLCJwYXNzd29yZCIsIlBhc3N3b3JkIiwicmVzdWx0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwiaWQiLCJwYXRoIiwiY2F0Y2giLCJsb2ciLCJyZWdpc3RyYXRpb24iLCJuYW1lVXNlciIsImdldEl0ZW0iLCJ0ZXh0Rm9yUG9zdCIsInRleHRGb3JUaXRsZSIsInRleHRGb3JTZWFyY2giLCJjb3VudElkIiwidGVzdCIsInBvc3RFZGl0SWQiLCJwb3N0RWRpdFRleHQiLCJlZGl0UG9zdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRleHRDb250ZW50IiwiYXR0cmlidXRlcyIsInJlbW92ZU5hbWVkSXRlbSIsInNhdmVQb3N0IiwiY29uc29sZSIsInB1dCIsIm5ld1RleHQiLCJwb3N0SUQiLCJzdGF0dXMiLCJkaXNhYmxlZCIsIm5ld1Bvc3QiLCJ0ZXh0IiwidGV4dFBvc3QiLCJ0ZXh0VGl0bGUiLCJQb3N0cyIsInBhcmFtcyIsImJvb2tzIiwiQWxsUG9zdHMiLCJTZWFyY2giLCJpZFBvc3QiLCJkZWxQb3N0IiwiZGVsZXRlIiwidG9TdHJpbmciLCJ0b0lTT1N0cmluZyIsImZvcm1hdCIsImhvb2tzIiwiZGVmYXVsdEZvcm1hdCIsImNsb25lIiwibG9jYWxlIiwibSIsInV0YyIsInllYXIiLCJEYXRlIiwicHJvdG90eXBlIiwidG9EYXRlIiwiaW5wdXRTdHJpbmciLCJvdXRwdXQiLCJsb2NhbGVEYXRhIiwicG9zdGZvcm1hdCIsImFkZEZvcm1hdFRva2VuIiwiZm9ybWF0TW9tZW50IiwiZXhwYW5kRm9ybWF0IiwiZm9ybWF0dGluZ1Rva2VucyIsImxvY2FsRm9ybWF0dGluZ1Rva2VucyIsImZvcm1hdEZ1bmN0aW9ucyIsImZvcm1hdFRva2VuRnVuY3Rpb25zIiwicGFkZGVkIiwib3JkaW5hbCIsImNhbGxiYWNrIiwiZnVuYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVtb3ZlRm9ybWF0dGluZ1Rva2VucyIsImlucHV0IiwibWF0Y2giLCJyZXBsYWNlIiwibWFrZUZvcm1hdEZ1bmN0aW9uIiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwibW9tIiwiRnVuY3Rpb24iLCJjYWxsIiwiaXNWYWxpZCIsImludmFsaWREYXRlIiwicmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zIiwibG9uZ0RhdGVGb3JtYXQiLCJsYXN0SW5kZXgiLCJ6ZXJvRmlsbCIsIm51bWJlciIsInRhcmdldExlbmd0aCIsImZvcmNlU2lnbiIsImFic051bWJlciIsIk1hdGgiLCJhYnMiLCJ6ZXJvc1RvRmlsbCIsInNpZ24iLCJwb3ciLCJtYXgiLCJzdWJzdHIiLCJzZXRIb29rQ2FsbGJhY2siLCJob29rQ2FsbGJhY2siLCJhcGlIb3N0IiwibGltaXQiLCJyZXNwb25zZSIsInRvSnNvbiIsImRhdGFZZXNOTyIsInJlc3RyaWN0Iiwic2NvcGUiLCJjcmVhdGlvbkRhdGUiLCJOYXZiYXJDb250cm9sbGVyIiwiYmluZFRvQ29udHJvbGxlciIsInJlbGF0aXZlRGF0ZSIsImZyb21Ob3ciLCJleHRyYVZhbHVlcyIsInRlbXBsYXRlIiwibGluayIsImxpbmtGdW5jIiwiTWFsYXJrZXlDb250cm9sbGVyIiwiZWwiLCJhdHRyIiwidm0iLCJ3YXRjaGVyIiwidHlwaXN0IiwidHlwZVNwZWVkIiwiZGVsZXRlU3BlZWQiLCJwYXVzZURlbGF5IiwibG9vcCIsInBvc3RmaXgiLCJhZGRDbGFzcyIsImZvckVhY2giLCJ2YWx1ZSIsInR5cGUiLCJwYXVzZSIsIiR3YXRjaCIsImNvbnRyaWJ1dG9ycyIsImNvbnRyaWJ1dG9yIiwibG9naW4iLCIkb24iLCJnaXRodWJDb250cmlidXRvciIsImdldENvbnRyaWJ1dG9ycyIsImluZm8iXSwibWFwcGluZ3MiOiI7QUFBQTtB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aE4sUUFBUTRNLFFBQVFULEdBQUdjLGNBQWMsVUFBQ0MsYUFBZ0I7U0FDaERiLE9BQU9TLEtBQUtJLFlBQVlDLE9BQU9KLFFBQVE1Rjs7OztLQUkzQ21FLE1BQU04QixJQUFJLFlBQVksWUFBTTtPQUMxQmhCOzs7Ozs7OERBaUIrQjtHQVZuQyw0QkFBYS9KLE1BQU1nTCxtQkFBbUI7S0FDcEM7O0tBRG9DOztLQUdwQyxLQUFLaEwsT0FBT0E7S0FDWixLQUFLNEssZUFBZTs7S0FFcEIsS0FBSzFKLFNBQVM4Sjs7O0dBZ0JoQixhQUFhLG9CQUFvQixDQUFDO0tBQ2hDLEtBQUs7S0FDTCxPQUFPLFNBQVMsU0FmVEEsbUJBQW1CO09BQUE7O09BQzFCLE9BQU8sS0FBS0MsZ0JBQWdCRCxtQkFBbUJ2SyxLQUFLLFlBQU07U0FDeEQsTUFBS1QsS0FBS2tMLEtBQUs7OztNQW9CaEI7S0FDRCxLQUFLO0tBQ0wsT0FBTyxTQUFTLGdCQWxCRkYsbUJBQW1CO09BQUE7O09BQ2pDLE9BQU9BLGtCQUFrQkMsZ0JBQWdCLElBQUl4SyxLQUFLLFVBQUNHLE1BQVM7U0FDMUQsT0FBS2dLLGVBQWVoSzs7U0FFcEIsT0FBTyxPQUFLZ0s7Ozs7O0dBeUJoQixPQUFPOzs7Ozs7O0FDMUZUOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7QUFFVCxTQUhnQjVMO0FBQVQsVUFBU0EsbUJBQWtCO0dBQ2hDOztHQUdGLElBQUlILFlBQVk7S0FDWm1LLFVBQVU7S0FDVlEsVUFBUyw2R0FDUCxVQUFTLHFHQUNULHlFQUF1RSx1RUFDdkUsNk5BQ0Msd0pBQ0Q7S0FDRjFKLGNBQWM7O0dBRWhCLE9BQU9qQiIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkNjU3YTVkMjY3OGYwNTlkZmExOSIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vaW5kZXguY29uZmlnJztcbmltcG9ydCB7IHJvdXRlckNvbmZpZyB9IGZyb20gJy4vaW5kZXgucm91dGUnO1xuaW1wb3J0IHsgcnVuQmxvY2sgfSBmcm9tICcuL2luZGV4LnJ1bic7XG5cbmltcG9ydCB7IEZyaWVuZENvbnRyb2xsZXIgfSBmcm9tICcuL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyBNeUNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vdGVtcGxhdGUuQ29udHJvbGxlcic7XG5pbXBvcnQgeyBNeVJlZ2lzdHJhdGlvbiB9IGZyb20gJy4vbWFpbi9yZWdpc3RyYXRpb24uQ29udHJvbGxlcic7XG5pbXBvcnQgeyBNYWluVXNlckNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vVXNlck1haW4uY29udHJvbGxlcic7XG5cbmltcG9ydCB7IEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2ViRGV2VGVjU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZSc7XG5pbXBvcnQgeyBGcmllbmRzU2VydmljZSB9IGZyb20gXCIuLi9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOYXZiYXJEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYWxhcmtleURpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQb3N0QWxsRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwLy9Qb3N0QWxsL2RpcmVjdGl2ZVBvc3RBbGwuZGlyZWN0aXZlJztcblxuXG5cbmFuZ3VsYXIubW9kdWxlKCd5ZXNubycsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAnbmdSZXNvdXJjZScsICd1aS5yb3V0ZXInLCAndG9hc3RyJ10pXG4gIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcbiAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXG4gIC5jb25maWcoY29uZmlnKVxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcbiAgLnJ1bihydW5CbG9jaylcbiAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKVxuICAuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSlcbiAgLnNlcnZpY2UoJ2ZyaWVuZHNTZXJ2aWNlJywgRnJpZW5kc1NlcnZpY2UpXG5cbiAgICAuY29udHJvbGxlcignTXlDb250cm9sbGVyJywgTXlDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignTXlSZWdpc3RyYXRpb24nLCBNeVJlZ2lzdHJhdGlvbilcbiAgICAuY29udHJvbGxlcignTWFpblVzZXJDb250cm9sbGVyJywgTWFpblVzZXJDb250cm9sbGVyKVxuXG4gIC5jb250cm9sbGVyKCdGcmllbmRDb250cm9sbGVyJywgRnJpZW5kQ29udHJvbGxlcilcblxuICAuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgTmF2YmFyRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBNYWxhcmtleURpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgncG9zdCcsIFBvc3RBbGxEaXJlY3RpdmUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJleHBvcnQgZnVuY3Rpb24gY29uZmlnICgkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xuICAnbmdJbmplY3QnO1xuICAvLyBFbmFibGUgbG9nXG4gICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgLy8gU2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXG4gIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICB0b2FzdHJDb25maWcudGltZU91dCA9IDUwMDA7XG4gIHRvYXN0ckNvbmZpZy5wb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XG4gIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vdGVtcGxhdGUuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTXlDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3RlbXAnXG4gICAgfSlcbiAgICAuc3RhdGUoJ2ZvbGxvd3MnLHtcbiAgICAgIHVybDonL3JlZ2lzdHJhdGlvbicsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6J015UmVnaXN0cmF0aW9uJyxcbiAgICAgIGNvbnRyb2xsZXJBczoncmVnaXN0J1xuICAgIH0pXG4gICAgICAuc3RhdGUoJzEnLHtcbiAgICAgICAgICB1cmw6Jy9tYWluJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL1VzZXJNYWluLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6J01haW5Vc2VyQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOidNZVVzZSdcbiAgICAgIH0pO1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4uanMiLCJleHBvcnQgY2xhc3MgRnJpZW5kQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRzY29wZSkge1xuICAgICduZ0luamVjdCdcblxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb2xsb3dzJylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICAgICAvL3RoaXMuZGF0YT1zdWNjZXNzLmRhdGE7XG4gICAgICAgICRzY29wZS5wciA9IHByb21pc2UuZGF0YTtcbiAgICAgICAgdGhhdC5wcm9taXNlID0gcHJvbWlzZS5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIHRoaXMucHJvbWlzID0gZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIHRoaXMucHJvbWlzZSA9ICRzY29wZS5wcjtcbiAgICB0aGlzLlRhYmxlUGVyc29uID0gW107XG4gICAgdGhpcy5teWZpcnN0c1NlcnZpY2UgPSBbXVxuICAgIHRoaXMuc3VjY2VzcyA9bnVsbDtcbiAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCk7XG4gIH1cbiAgYWN0aXZhdGUoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwKSB7XG4gICAgdGhpcy5nZXREYXRhRnJpZW5kcyhmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCk7XG4gIH1cbiAgZ2V0RGF0YUZyaWVuZHMoZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYyl7XG4gICAgdGhpcy5mcmllbmRzRGF0YSA9IGZyaWVuZHNTZXJ2aWNlLmdldEZyaWVuZHMoKTtcbiAgICB0aGlzLlRhYmxlUGVyc29uID0gd2ViRGV2VGVjLmdldGRhdGEoKTtcbiAgICB0aGlzLnN1Y2Nlc3MgPSBmcmllbmRzU2VydmljZS5nZXREYXRhKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZHMuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBNeUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRsb2csICRsb2NhdGlvbiwgJHNjb3BlKSB7XG4gICAgICAnbmdJbmplY3QnXG5cbiAgICAgIC8vbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgdGhpcy50aXRsZSA9IFwi0JLRhdC+0LRcIjtcbiAgICAgIC8vdGhpcy5OYW1lID0gXCJcIjtcbiAgICAgIC8vdGhpcy5FbWFpbCA9IFwiXCI7XG4gICAgICAvL3RoaXMuUGFzc3dvcmQgPSBcIlwiO1xuICAgICAgICAkc2NvcGUuZXJyX2xvZyA9IFwiXCI7XG4gICAgICAgICRzY29wZS5lcnJfcGFzID0gXCJcIjtcblxuICAgICAgdGhpcy5lbnRyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHAucG9zdCgnYXBpL2VudHJ5Jywge25hbWU6ICRzY29wZS5OYW1lLCBlbWFpbDogJHNjb3BlLkVtYWlsLCBwYXNzd29yZDogJHNjb3BlLlBhc3N3b3JkfSlcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAvLyRzY29wZS5ib29rcyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgLy90aGlzLmVycl9sb2cgPSBcIlwiO1xuICAgICAgICAgICAgLy90aGlzLmVycl9wYXMgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhID09PSBcImVycm9yX2xvZ2luXCIpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZXJyX2xvZyA9IFwi0KHQvdCw0YfQsNC70LAg0L3Rg9C20L3QviDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8hXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuZGF0YSA9PT0gXCJlcnJvcl9wYXNzd29yZFwiKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmVycl9wYXMgPSBcItCd0LXQstC10YDQvdGL0Lkg0L/QsNGA0L7Qu9GMIVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVG9rZW4nLCByZXN1bHQuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05hbWUnLCByZXN1bHQuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnSWQnLCByZXN1bHQuZGF0YS5pZCk7XG5cbiAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9tYWluXCIpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgICAkbG9nLmxvZyhyZXN1bHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5yZWdpc3RyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKFwiL3JlZ2lzdHJhdGlvblwiKTtcblxuICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vdGVtcGxhdGUuQ29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBNeVJlZ2lzdHJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRsb2csICRzY29wZSwgJGxvY2F0aW9uKSB7XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgICAvLyRzY29wZS5OYW1lID0gXCJcIjtcbiAgICAgIC8vJHNjb3BlLkVtYWlsID0gXCJcIjtcbiAgICAgIC8vJHNjb3BlLlBhc3N3b3JkID0gXCJcIjtcbiAgICAgICRzY29wZS5lcnJfbG9nID0gXCJcIjtcblxuXG4gICAgdGhpcy5yZWdpc3RyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkaHR0cC5wb3N0KCcvYXBpL3JlZ2lzdHJhdGlvbicsIHtuYW1lOiAkc2NvcGUuTmFtZSwgZW1haWw6ICRzY29wZS5FbWFpbCwgcGFzc3dvcmQ6ICRzY29wZS5QYXNzd29yZH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSA9PT0gXCJlcnJvcl9sb2dpblwiKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmVycl9sb2cgPSBcItCi0LDQutC+0Lkg0LvQvtCz0LjQvSDRg9C20LUg0LfQsNC90Y/RgiFcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoXCIvXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgJGxvZy5sb2cocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vJGxvY2F0aW9uLnBhdGgoXCIvXCIpO1xuXG4gICAgfTtcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vcmVnaXN0cmF0aW9uLkNvbnRyb2xsZXIuanMiLCJpbXBvcnQge3RvU3RyaW5nfSBmcm9tIFwiLi4vLi4vLi4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi9tb21lbnQvZm9ybWF0XCI7XG5cbmV4cG9ydCBjbGFzcyBNYWluVXNlckNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRsb2csICRsb2NhdGlvbiwgJHNjb3BlKSB7XG4gICAgICAgICduZ0luamVjdCdcblxuICAgICAgICAvL2NvbnNvbGUubG9nKHRlc3QpO1xuICAgICAgICAvL2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUtleScsICdWYWx1ZScpO1xuICAgICAgICAvLzFjb25zb2xlLmxvZygkbG9jYXRpb24uc2VhcmNoKCkubmFtZSk7XG4gICAgICAgIC8vJHNjb3BlLnNhbXBsZTE9ZnVuY3Rpb24oKXtcblxuICAgICAgICAkc2NvcGUubmFtZVVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk5hbWVcIik7XG5cbiAgICAgICAgJHNjb3BlLnRleHRGb3JQb3N0ID0gXCJcIjtcbiAgICAgICAgJHNjb3BlLnRleHRGb3JUaXRsZSA9IFwiXCI7XG4gICAgICAgICRzY29wZS50ZXh0Rm9yU2VhcmNoID0gXCJcIjtcbiAgICAgICAgJHNjb3BlLmNvdW50SWQgPSAwO1xuICAgICAgICAkc2NvcGUudGVzdCA9IFwidHJ1ZVwiO1xuICAgICAgICBsZXQgcG9zdEVkaXRJZDtcbiAgICAgICAgbGV0IHBvc3RFZGl0VGV4dDtcblxuICAgICAgICAvLyRzY29wZS51c2VyX25hbWUgPSAkbG9jYXRpb24uc2VhcmNoKCkubmFtZTtcbiAgICAgICAgJHNjb3BlLmVkaXRQb3N0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBsZXQgZWRpdFBvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXVsdGktZmlsZXNcIitpZCk7XG4gICAgICAgICAgICBwb3N0RWRpdElkID0gaWQ7XG4gICAgICAgICAgICBwb3N0RWRpdFRleHQgPSBlZGl0UG9zdFswXS50ZXh0Q29udGVudDtcblxuICAgICAgICAgICAgZWRpdFBvc3RbMF0uYXR0cmlidXRlcy5yZW1vdmVOYW1lZEl0ZW0oXCJkaXNhYmxlZFwiKTtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZWRpdFBvc3QnLCB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIiksIHBvc3RJRDogaWR9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuc3RhdHVzID09PSBcIk9LXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdFBvc3RbMF0uZGlzYWJsZWQpOy8vWzBdLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vJHNjb3BlLnRlc3QgPSBcImZhbHNlXCI7Ly9uZy1kaXNhYmxlZD1cInt7dGVzdH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQb3N0WzBdLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLnNhdmVQb3N0ID0gZnVuY3Rpb24oaWQpe1xuICAgICAgICAgICAgbGV0IHNhdmVQb3N0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm11bHRpLWZpbGVzXCIraWQpO1xuICAgICAgICAgICAgaWYoaWQgIT09IHBvc3RFZGl0SWQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaWQg0L3QtdGB0L7QstC/0LDQu9C4IVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihzYXZlUG9zdFswXS50ZXh0Q29udGVudCA9PT0gcG9zdEVkaXRUZXh0KXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcItCS0Ysg0L3QuNGH0LXQs9C+INC90LUg0LjQt9C80LXQvdC40LvQuCFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgJGh0dHAucHV0KCcvYXBpL3Bvc3RzLycgKyBpZCwge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpLCBuZXdUZXh0OiBzYXZlUG9zdFswXS50ZXh0Q29udGVudCwgcG9zdElEOiBpZH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXR1cyA9PT0gXCJPS1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyRzY29wZS5hZGRCb29rKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVBvc3RbMF0uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcItCe0YjQuNCx0LrQsCDQtNC+0LHQsNCy0LvQtdC90LjRjyFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUubmV3UG9zdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZFBvc3RcIik7XG4gICAgICAgICAgICBpZih0ZXh0WzFdLnRleHRDb250ZW50ICE9PSBcIlwiKXtcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpLCB0ZXh0UG9zdDogdGV4dFsxXS50ZXh0Q29udGVudCwgdGV4dFRpdGxlOiAkc2NvcGUudGV4dEZvclRpdGxlfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuc3RhdHVzID09PSBcIk9LXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5Qb3N0cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuUG9zdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIikpO1xuICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3VzZXIvJysgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJJZFwiKSArICcvcG9zdHMnLCB7cGFyYW1zOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5ib29rcyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5BbGxQb3N0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9wb3N0cycsIHtwYXJhbXM6IHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKX19KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuU2VhcmNoID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBpZFBvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkUG9zdFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5ib29rcyk7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBpZigkc2NvcGUudGV4dEZvclNlYXJjaCAhPT0gXCJcIil7XG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3NlYXJjaFBvc3QnLCB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIiksIHRleHRTZWFyY2g6ICRzY29wZS50ZXh0Rm9yU2VhcmNofSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmJvb2tzID0gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKi9cbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmRlbFBvc3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICRodHRwLmRlbGV0ZSgnL2FwaS9wb3N0cy8nKyBpZCwge3BhcmFtczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5zdGF0dXMgPT09IFwiT0tcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuUG9zdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluL1VzZXJNYWluLmNvbnRyb2xsZXIuanMiLCJpbXBvcnQgeyBmb3JtYXRNb21lbnQgfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnLi4vdXRpbHMvaG9va3MnO1xuXG5ob29rcy5kZWZhdWx0Rm9ybWF0ID0gJ1lZWVktTU0tRERUSEg6bW06c3NaJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmxvY2FsZSgnZW4nKS5mb3JtYXQoJ2RkZCBNTU0gREQgWVlZWSBISDptbTpzcyBbR01UXVpaJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0lTT1N0cmluZyAoKSB7XG4gICAgdmFyIG0gPSB0aGlzLmNsb25lKCkudXRjKCk7XG4gICAgaWYgKDAgPCBtLnllYXIoKSAmJiBtLnllYXIoKSA8PSA5OTk5KSB7XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcpIHtcbiAgICAgICAgICAgIC8vIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBpcyB+NTB4IGZhc3RlciwgdXNlIGl0IHdoZW4gd2UgY2FuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE1vbWVudChtLCAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdE1vbWVudChtLCAnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0IChpbnB1dFN0cmluZykge1xuICAgIHZhciBvdXRwdXQgPSBmb3JtYXRNb21lbnQodGhpcywgaW5wdXRTdHJpbmcgfHwgaG9va3MuZGVmYXVsdEZvcm1hdCk7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLnBvc3Rmb3JtYXQob3V0cHV0KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvbW9tZW50L3NyYy9saWIvbW9tZW50L2Zvcm1hdC5qcyIsImltcG9ydCB6ZXJvRmlsbCBmcm9tICcuLi91dGlscy96ZXJvLWZpbGwnO1xuXG5leHBvcnQgdmFyIGZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UXxZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nO1xuXG52YXIgbG9jYWxGb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KExUU3xMVHxMTD9MP0w/fGx7MSw0fSkvZztcblxudmFyIGZvcm1hdEZ1bmN0aW9ucyA9IHt9O1xuXG5leHBvcnQgdmFyIGZvcm1hdFRva2VuRnVuY3Rpb25zID0ge307XG5cbi8vIHRva2VuOiAgICAnTSdcbi8vIHBhZGRlZDogICBbJ01NJywgMl1cbi8vIG9yZGluYWw6ICAnTW8nXG4vLyBjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB0aGlzLm1vbnRoKCkgKyAxIH1cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb3JtYXRUb2tlbiAodG9rZW4sIHBhZGRlZCwgb3JkaW5hbCwgY2FsbGJhY2spIHtcbiAgICB2YXIgZnVuYyA9IGNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tjYWxsYmFja10oKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSA9IGZ1bmM7XG4gICAgfVxuICAgIGlmIChwYWRkZWQpIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB6ZXJvRmlsbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHBhZGRlZFsxXSwgcGFkZGVkWzJdKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKG9yZGluYWwpIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbb3JkaW5hbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkub3JkaW5hbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRva2VuKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQubWF0Y2goL1xcW1tcXHNcXFNdLykpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXFxcL2csICcnKTtcbn1cblxuZnVuY3Rpb24gbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCkge1xuICAgIHZhciBhcnJheSA9IGZvcm1hdC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKSwgaSwgbGVuZ3RoO1xuXG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXSkge1xuICAgICAgICAgICAgYXJyYXlbaV0gPSBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJheVtpXSA9IHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb20pIHtcbiAgICAgICAgdmFyIG91dHB1dCA9ICcnO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG91dHB1dCArPSBhcnJheVtpXSBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJyYXlbaV0uY2FsbChtb20sIGZvcm1hdCkgOiBhcnJheVtpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG59XG5cbi8vIGZvcm1hdCBkYXRlIHVzaW5nIG5hdGl2ZSBkYXRlIG9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vbWVudChtLCBmb3JtYXQpIHtcbiAgICBpZiAoIW0uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBtLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cblxuICAgIGZvcm1hdCA9IGV4cGFuZEZvcm1hdChmb3JtYXQsIG0ubG9jYWxlRGF0YSgpKTtcbiAgICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSA9IGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdIHx8IG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpO1xuXG4gICAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKG0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbG9jYWxlKSB7XG4gICAgdmFyIGkgPSA1O1xuXG4gICAgZnVuY3Rpb24gcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUubG9uZ0RhdGVGb3JtYXQoaW5wdXQpIHx8IGlucHV0O1xuICAgIH1cblxuICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgIHdoaWxlIChpID49IDAgJiYgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLnRlc3QoZm9ybWF0KSkge1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShsb2NhbEZvcm1hdHRpbmdUb2tlbnMsIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2Vucyk7XG4gICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgICAgICBpIC09IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdDtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi9mb3JtYXQvZm9ybWF0LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gemVyb0ZpbGwobnVtYmVyLCB0YXJnZXRMZW5ndGgsIGZvcmNlU2lnbikge1xuICAgIHZhciBhYnNOdW1iZXIgPSAnJyArIE1hdGguYWJzKG51bWJlciksXG4gICAgICAgIHplcm9zVG9GaWxsID0gdGFyZ2V0TGVuZ3RoIC0gYWJzTnVtYmVyLmxlbmd0aCxcbiAgICAgICAgc2lnbiA9IG51bWJlciA+PSAwO1xuICAgIHJldHVybiAoc2lnbiA/IChmb3JjZVNpZ24gPyAnKycgOiAnJykgOiAnLScpICtcbiAgICAgICAgTWF0aC5wb3coMTAsIE1hdGgubWF4KDAsIHplcm9zVG9GaWxsKSkudG9TdHJpbmcoKS5zdWJzdHIoMSkgKyBhYnNOdW1iZXI7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ib3dlcl9jb21wb25lbnRzL21vbWVudC9zcmMvbGliL3V0aWxzL3plcm8tZmlsbC5qcyIsImV4cG9ydCB7IGhvb2tzLCBzZXRIb29rQ2FsbGJhY2sgfTtcblxudmFyIGhvb2tDYWxsYmFjaztcblxuZnVuY3Rpb24gaG9va3MgKCkge1xuICAgIHJldHVybiBob29rQ2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuLy8gVGhpcyBpcyBkb25lIHRvIHJlZ2lzdGVyIHRoZSBtZXRob2QgY2FsbGVkIHdpdGggbW9tZW50KClcbi8vIHdpdGhvdXQgY3JlYXRpbmcgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuZnVuY3Rpb24gc2V0SG9va0NhbGxiYWNrIChjYWxsYmFjaykge1xuICAgIGhvb2tDYWxsYmFjayA9IGNhbGxiYWNrO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYm93ZXJfY29tcG9uZW50cy9tb21lbnQvc3JjL2xpYi91dGlscy9ob29rcy5qcyIsImV4cG9ydCBjbGFzcyBHaXRodWJDb250cmlidXRvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMobGltaXQ9MzApIHtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpKTtcbiAgICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsImV4cG9ydCBjbGFzcyBXZWJEZXZUZWNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcbiAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnR3VscEpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcbiAgICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdLYXJtYSA9KScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXG4gICAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxuICAgICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0VTNiAoQmFiZWwgZm9ybWVybHkgNnRvNSknLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYmFiZWxqcy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVHVybnMgRVM2KyBjb2RlIGludG8gdmFuaWxsYSBFUzUsIHNvIHlvdSBjYW4gdXNlIG5leHQgZ2VuZXJhdGlvbiBmZWF0dXJlcyB0b2RheS4nLFxuICAgICAgICAnbG9nbyc6ICdiYWJlbC5wbmcnXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLmRhdGFZZXNOTz1bXG5cbiAgICAgIHtcbiAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDBcIixcbiAgICAgICAgJ05hbWVoYXNoJzpbXCIjY2F0XCJdLFxuICAgICAgICAnbWFzc2FnZSc6XCLQmtC+0YLQuNC6INC60YDQsNGB0LjQstGL0Lk/XCIsXG4gICAgICAgICdQaWN0dXJlJzpcImFzc2V0cy9pbWFnZXMvUG9zdEFsbC9DYXQxLmpwZ1wiLFxuICAgICAgICAnWWVzJzogXCJcIixcbiAgICAgICAgJ05vJzpcIlwiLFxuICAgICAgICAndm90ZWQnOltdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMVwiLFxuICAgICAgICAnTmFtZWhhc2gnOltcIiNob3VzZVwiXSxcbiAgICAgICAgJ21hc3NhZ2UnOlwi0JTQvtC8INCx0L7Qu9GM0YjQvtC5XCIsXG4gICAgICAgICdQaWN0dXJlJzpcImFzc2V0cy9pbWFnZXMvUG9zdEFsbC9Ib3VzZTEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAyXCIsXG4gICAgICAgICdtYXNzYWdlJzpcItCi0LXQu9C10YTQvtC9INC90L7QstGL0Lk/XCIsXG4gICAgICAgICdOYW1laGFzaCc6W1wiI3Bob25lXCJdLFxuICAgICAgICAnUGljdHVyZSc6XCJhc3NldHMvaW1hZ2VzL1Bvc3RBbGwvcGhvbmUxLmpwZ1wiLFxuICAgICAgICAnWWVzJzogXCJcIixcbiAgICAgICAgJ05vJzpcIlwiLFxuICAgICAgICAndm90ZWQnOltdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMVwiLFxuICAgICAgICAnTmFtZWhhc2gnOltcIiNkb2dcIl0sXG4gICAgICAgICdtYXNzYWdlJzpcItCh0L7QsdCw0LrQsCDQv9C+0YDQvtC00LjRgdGC0LDRjz9cIixcbiAgICAgICAgJ1BpY3R1cmUnOlwiYXNzZXRzL2ltYWdlcy9Qb3N0QWxsL0RvZzEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cblxuXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLlRhYmxlUGVyc29uID1bIHtcbiAgICAgICAgICAnaWRQZXJzb24nOlwiMTAwMFwiLFxuICAgICAgICAgICdpZEZvbG93cyc6W10sXG4gICAgICAgICAgJ2lkTXlGb2xvd3MnOltdLFxuICAgICAgICAgICdOYW1lJzpcIlZhc3lhXCIsXG4gICAgICAgICAgJ1BpY3R1cmVGYWNlJzpcImFzc2V0cy9pbWFnZXMvcGVyc29ucy8vMTAwMC5qcGVnXCJcblxuICAgICAgfSx7XG4gICAgICAnaWRQZXJzb24nOlwiMTAwMVwiLFxuICAgICAgJ2lkRm9sb3dzJzpbXSxcbiAgICAgICdpZE15Rm9sb3dzJzpbXSxcbiAgICAgICdOYW1lJzpcIkFuYXRvbGlpXCIsXG4gICAgICAnUGljdHVyZUZhY2UnOlwiYXNzZXRzL2ltYWdlcy9wZXJzb25zLzEwMDEuanBlZ1wiXG5cbiAgICB9LFxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMlwiLFxuICAgICAgICAnaWRGb2xvd3MnOltdLFxuICAgICAgICAnaWRNeUZvbG93cyc6W10sXG4gICAgICAgICdOYW1lJzpcIk5hdGFzaGFcIixcbiAgICAgICAgJ1BpY3R1cmVGYWNlJzpcImFzc2V0cy9pbWFnZXMvcGVyc29ucy8xMDAyLmpwZ1wiXG5cbiAgICAgIH1cblxuICAgIF1cblxuXG5cbiAgfVxuXG4gIGdldFRlYygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gIGdldFllc05vZGF0YSgpe1xuICAgIHJldHVybiB0aGlzLmRhdGFZZXNOTztcbiAgfVxuICBnZXRkYXRhKCl7XG4gICAgcmV0dXJuIHRoaXMuVGFibGVQZXJzb247XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanMiLCJleHBvcnQgY2xhc3MgRnJpZW5kc1NlcnZpY2V7XG4gIGNvbnN0cnVjdG9yICgpe1xuICAgICduZ0luamVjdCc7XG4gICAgdGhpcy5wcm9taXNlID1bXTtcbiAgICAvLyAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb2xsb3dzJylcbiAgICAvLyAgIC50aGVuKGZ1bmN0aW9yb21pbihwcm9taXNlKSB7XG4gICAgLy8gICAgIC8vICAgICAgIC8vdGhpcy49c3VjY2Vzcy5kYXRhO1xuICAgIC8vICAgICAvLyAgICAgICB0aGlzLnByb21pc2U9IHBzZTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgZnVuY3Rpb24oZXJyb3IpIHtkYXRhXG4gICAgLy8gICAgICAgdGhpcy5wcm9taXNlPSBlcnJvcjtcbiAgICAvLyAgICAgfSk7XG5cbiAgICB0aGlzLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgICdpZCc6JzEwMDAnLFxuICAgICAgICAnbXlGcmllbmQnOiBbXCIxMDAxXCIsXCIxMDAyXCJdXG4gICAgICB9XG4gICAgXVxuXG4gIH1cbiAgIGdldEZyaWVuZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuICAgZ2V0RGF0YSgpe1xuICAgICAgIC8vICRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ZvbGxvd3MnKVxuICAgICAgIC8vICAgLnRoZW4oZnVuY3Rpb24oc3VjY2Vzcyl7XG4gICAgICAgLy8gICAvL3RoaXMuZGF0YT1zdWNjZXNzLmRhdGE7XG4gICAgICAgLy8gICByZXR1cm4gc3VjY2Vzcy5kYXRhO1xuICAgICAgIC8vIH0sXG4gICAgICAgLy8gZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgIC8vICAgcmV0dXJuIGVycm9yO1xuICAgICAgIC8vIH0pO1xuICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxuY2xhc3MgTmF2YmFyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb21lbnQpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgLy8gXCJ0aGlzLmNyZWF0aW9uRGF0ZVwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG4gICAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQodGhpcy5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgbGV0IHdhdGNoZXI7XG4gICAgbGV0IHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XG4gICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FjbWUtbWFsYXJrZXknKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgKHZhbHVlKSA9PiB7XG4gICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKS5kZWxldGUoKTtcbiAgICB9KTtcblxuICAgIHdhdGNoZXIgPSBzY29wZS4kd2F0Y2goJ3ZtLmNvbnRyaWJ1dG9ycycsICgpID0+IHtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2bS5jb250cmlidXRvcnMsIChjb250cmlidXRvcikgPT4ge1xuICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKS5kZWxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHtcbiAgICAgIHdhdGNoZXIoKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbmNsYXNzIE1hbGFya2V5Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XG5cbiAgICB0aGlzLmFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKTtcbiAgfVxuXG4gIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiBnaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY29udHJpYnV0b3JzID0gZGF0YTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29udHJpYnV0b3JzO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIiwiXG5cbmV4cG9ydCBmdW5jdGlvbiBQb3N0QWxsRGlyZWN0aXZlKCl7XG4gICduZ0luamVjdCc7XG5cblxubGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlOlwiPGRpdiBjbGFzcz0nZmlnJyBuZy1yZXBlYXQ9J3Bvc3RzIGluIG1haW4ubXlmaXJzdHNTZXJ2aWNlJz4gPGgyPnt7cG9zdHMubWFzc2FnZStwb3N0cy5OYW1laGFzaFswXX19PC9oMj5cIiArXG4gICAgICBcIjxkaXY+XCIgK1wiPHAgY2xhc3M9J2ZpZyc+PGltZyBzcmM9XFxcInt7cG9zdHMuUGljdHVyZX19XFxcIiB3aWR0aD1cXFwiNzAwXFxcIiBoZWlnaHQ9XFxcIjYwMFxcXCIgYWx0PSfQpNC+0YLQvtCz0YDQsNGE0LjRjyc+PC9wPlwiK1xuICAgICAgXCI8ZGl2PjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiA+WWVzPC9idXR0b24+XCIrXCI8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj5ObzwvYnV0dG9uPjwvZGl2PlwiK1xuICAgICAgXCI8ZGl2IG5nLXJlcGVhdD0nUGVyc29uIGluIG1haW4uVGFibGVQZXJzb24nPjxoNCBuZy1pZiA9ICdQZXJzb24uaWRQZXJzb24gPT0gcG9zdHMuaWRQZXJzb24nID57e21haW4uYWRkTmFtZShQZXJzb24scG9zdHMgKX19PGltZyAgbmctc3JjPVxcXCJ7e21haW4uYWRkRmFjZShQZXJzb24scG9zdHMpfX1cXFwiIHdpZHRoPVxcXCIzNVxcXCIgaGVpZ2h0PVxcXCIzNVxcXCIgYWx0PSfQpNC+0YLQvtCz0YDQsNGE0LjRjyc+XCJcbiAgICAgICtcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1sZyBidG4tc3VjY2Vzc1xcXCIgbmctY2xpY2s9XFxcIm1haW4uc2hvd0ZvbGxvd3MobWFpbi5hZGROYW1lKFBlcnNvbixwb3N0cykpXFxcIiA+0J/QvtC00L/QuNGB0LDRgtGM0YHRjzwvYnV0dG9uPjwvaDQ+PC9kaXY+XCIrXG4gICAgICBcIjwvZGl2PjwvZGl2PlwiLFxuICAgIGNvbnRyb2xsZXJBczogJ3Bvc3QnXG4gIH1cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9Qb3N0QWxsL2RpcmVjdGl2ZVBvc3RBbGwuZGlyZWN0aXZlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==