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
	
	var _githubContributor = __webpack_require__(8);
	
	var _webDevTec = __webpack_require__(9);
	
	var _friend = __webpack_require__(10);
	
	var _navbar = __webpack_require__(11);
	
	var _malarkey = __webpack_require__(12);
	
	var _directivePostAll = __webpack_require__(13);
	
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
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
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
	    $scope.addBook = function () {
	        //console.log(localStorage.getItem("Token"));
	        $http.post('/api/posts', { token: localStorage.getItem("Token") }).then(function (result) {
	            $scope.books = result.data;
	            console.log(result);
	        }).catch(function (result) {
	            console.log(result);
	        });
	    };
	    $scope.editPost = function (id) {
	        var editPost = document.getElementsByClassName("multi-files" + id);
	        postEditId = id;
	        postEditText = editPost[0].textContent;
	
	        $http.post('/api/editPost', { token: localStorage.getItem("Token"), postID: id }).then(function (result) {
	            if (result.data.status === "OK") {
	                console.log(editPost[0].disabled); //[0].attributes
	                //$scope.test = "false";//ng-disabled="{{test}}"
	                editPost[0].attributes.removeNamedItem("disabled");
	            }
	        }).catch(function (result) {
	            console.log(result);
	        });
	    };
	    $scope.savePost = function (id) {
	        var savePost = document.getElementsByClassName("multi-files" + id);
	        if (id !== postEditId) {
	            console.log("id несовпали!");
	        } else if (savePost[0].textContent === postEditText) {
	            console.log("Вы ничего не изменили!");
	        } else {
	            $http.post('/api/savePost', { token: localStorage.getItem("Token"), newText: savePost[0].textContent, postID: id }).then(function (result) {
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
	        //console.log(savePost[0].textContent);
	    };
	    $scope.newPost = function () {
	        var text = document.getElementsByClassName("addPost");
	        if (text[1].textContent !== "") {
	            $http.post('/api/addPost', { token: localStorage.getItem("Token"), textPost: text[1].textContent, textTitle: $scope.textForTitle }).then(function (result) {
	                if (result.data.status === "OK") {
	                    $scope.addBook();
	                }
	            }).catch(function (result) {
	                console.log(result);
	            });
	        }
	    };
	    $scope.AllPost = function () {
	        $http.post('/api/allPost', { token: localStorage.getItem("Token") }).then(function (result) {
	            console.log(result.data);
	            $scope.books = result.data;
	        }).catch(function (result) {
	            console.log(result);
	        });
	    };
	    $scope.Search = function () {
	        if ($scope.textForSearch !== "") {
	            $http.post('/api/searchPost', { token: localStorage.getItem("Token"), textSearch: $scope.textForSearch }).then(function (result) {
	                console.log(result.data);
	                $scope.books = result.data;
	            }).catch(function (result) {
	                console.log(result);
	            });
	        }
	    };
	    $scope.delPost = function (id) {
	        //let DelPost = document.getElementsByClassName("multi-files"+id);
	
	        $http.post('/api/delPost', { token: localStorage.getItem("Token"), postID: id }).then(function (result) {
	            if (result.data.status === "OK") {
	                $scope.addBook();
	            }
	        }).catch(function (result) {
	            console.log(result);
	        });
	    };
	}];

/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjUzNzA2MDRiMzE3NTkwZjBmZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3RlbXBsYXRlLkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi9Vc2VyTWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mcmllbmQvZnJpZW5kLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9Qb3N0QWxsL2RpcmVjdGl2ZVBvc3RBbGwuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25zdGFudCIsIm1hbGFya2V5IiwibW9tZW50IiwiY29uZmlnIiwicm91dGVyQ29uZmlnIiwicnVuIiwicnVuQmxvY2siLCJzZXJ2aWNlIiwiR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIiwiV2ViRGV2VGVjU2VydmljZSIsIkZyaWVuZHNTZXJ2aWNlIiwiY29udHJvbGxlciIsIk15Q29udHJvbGxlciIsIk15UmVnaXN0cmF0aW9uIiwiTWFpblVzZXJDb250cm9sbGVyIiwiRnJpZW5kQ29udHJvbGxlciIsImRpcmVjdGl2ZSIsIk5hdmJhckRpcmVjdGl2ZSIsIk1hbGFya2V5RGlyZWN0aXZlIiwiUG9zdEFsbERpcmVjdGl2ZSIsIiRsb2dQcm92aWRlciIsInRvYXN0ckNvbmZpZyIsImRlYnVnRW5hYmxlZCIsImFsbG93SHRtbCIsInRpbWVPdXQiLCJwb3NpdGlvbkNsYXNzIiwicHJldmVudER1cGxpY2F0ZXMiLCJwcm9ncmVzc0JhciIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXJBcyIsIm90aGVyd2lzZSIsIiRsb2ciLCJkZWJ1ZyIsIiR0aW1lb3V0IiwiZnJpZW5kc1NlcnZpY2UiLCJ3ZWJEZXZUZWMiLCIkaHR0cCIsIiRzY29wZSIsInRoYXQiLCJnZXQiLCJ0aGVuIiwicHJvbWlzZSIsInByIiwiZGF0YSIsImVycm9yIiwicHJvbWlzIiwiVGFibGVQZXJzb24iLCJteWZpcnN0c1NlcnZpY2UiLCJzdWNjZXNzIiwiYWN0aXZhdGUiLCJnZXREYXRhRnJpZW5kcyIsImZyaWVuZHNEYXRhIiwiZ2V0RnJpZW5kcyIsImdldGRhdGEiLCJnZXREYXRhIiwiJGxvY2F0aW9uIiwidGl0bGUiLCJlcnJfbG9nIiwiZXJyX3BhcyIsImVudHJ5IiwicG9zdCIsIm5hbWUiLCJOYW1lIiwiZW1haWwiLCJFbWFpbCIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJwYXRoIiwiY2F0Y2giLCJsb2ciLCJyZWdpc3RyYXRpb24iLCJuYW1lVXNlciIsImdldEl0ZW0iLCJ0ZXh0Rm9yUG9zdCIsInRleHRGb3JUaXRsZSIsInRleHRGb3JTZWFyY2giLCJjb3VudElkIiwidGVzdCIsInBvc3RFZGl0SWQiLCJwb3N0RWRpdFRleHQiLCJhZGRCb29rIiwiYm9va3MiLCJjb25zb2xlIiwiZWRpdFBvc3QiLCJpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRleHRDb250ZW50IiwicG9zdElEIiwic3RhdHVzIiwiZGlzYWJsZWQiLCJhdHRyaWJ1dGVzIiwicmVtb3ZlTmFtZWRJdGVtIiwic2F2ZVBvc3QiLCJuZXdUZXh0IiwibmV3UG9zdCIsInRleHQiLCJ0ZXh0UG9zdCIsInRleHRUaXRsZSIsIkFsbFBvc3QiLCJTZWFyY2giLCJ0ZXh0U2VhcmNoIiwiZGVsUG9zdCIsImFwaUhvc3QiLCJsaW1pdCIsInJlc3BvbnNlIiwidG9Kc29uIiwiZGF0YVllc05PIiwicmVzdHJpY3QiLCJzY29wZSIsImNyZWF0aW9uRGF0ZSIsIk5hdmJhckNvbnRyb2xsZXIiLCJiaW5kVG9Db250cm9sbGVyIiwicmVsYXRpdmVEYXRlIiwiZnJvbU5vdyIsImV4dHJhVmFsdWVzIiwidGVtcGxhdGUiLCJsaW5rIiwibGlua0Z1bmMiLCJNYWxhcmtleUNvbnRyb2xsZXIiLCJlbCIsImF0dHIiLCJ2bSIsIndhdGNoZXIiLCJ0eXBpc3QiLCJ0eXBlU3BlZWQiLCJkZWxldGVTcGVlZCIsInBhdXNlRGVsYXkiLCJsb29wIiwicG9zdGZpeCIsImFkZENsYXNzIiwiZm9yRWFjaCIsInZhbHVlIiwidHlwZSIsInBhdXNlIiwiZGVsZXRlIiwiJHdhdGNoIiwiY29udHJpYnV0b3JzIiwiY29udHJpYnV0b3IiLCJsb2dpbiIsIiRvbiIsImdpdGh1YkNvbnRyaWJ1dG9yIiwiZ2V0Q29udHJpYnV0b3JzIiwiaW5mbyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztB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R0FDUCxVQUFTLHFHQUNULHlFQUF1RSx1RUFDdkUsNk5BQ0Msd0pBQ0Q7S0FDRjNGLGNBQWM7O0dBRWhCLE9BQU9qQiIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyNTM3MDYwNGIzMTc1OTBmMGZlMCIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vaW5kZXguY29uZmlnJztcbmltcG9ydCB7IHJvdXRlckNvbmZpZyB9IGZyb20gJy4vaW5kZXgucm91dGUnO1xuaW1wb3J0IHsgcnVuQmxvY2sgfSBmcm9tICcuL2luZGV4LnJ1bic7XG5cbmltcG9ydCB7IEZyaWVuZENvbnRyb2xsZXIgfSBmcm9tICcuL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyBNeUNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vdGVtcGxhdGUuQ29udHJvbGxlcic7XG5pbXBvcnQgeyBNeVJlZ2lzdHJhdGlvbiB9IGZyb20gJy4vbWFpbi9yZWdpc3RyYXRpb24uQ29udHJvbGxlcic7XG5pbXBvcnQgeyBNYWluVXNlckNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vVXNlck1haW4uY29udHJvbGxlcic7XG5cbmltcG9ydCB7IEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2ViRGV2VGVjU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZSc7XG5pbXBvcnQgeyBGcmllbmRzU2VydmljZSB9IGZyb20gXCIuLi9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOYXZiYXJEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYWxhcmtleURpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQb3N0QWxsRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwLy9Qb3N0QWxsL2RpcmVjdGl2ZVBvc3RBbGwuZGlyZWN0aXZlJztcblxuXG5cbmFuZ3VsYXIubW9kdWxlKCd5ZXNubycsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAnbmdSZXNvdXJjZScsICd1aS5yb3V0ZXInLCAndG9hc3RyJ10pXG4gIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcbiAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXG4gIC5jb25maWcoY29uZmlnKVxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcbiAgLnJ1bihydW5CbG9jaylcbiAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKVxuICAuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSlcbiAgLnNlcnZpY2UoJ2ZyaWVuZHNTZXJ2aWNlJywgRnJpZW5kc1NlcnZpY2UpXG5cbiAgICAuY29udHJvbGxlcignTXlDb250cm9sbGVyJywgTXlDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignTXlSZWdpc3RyYXRpb24nLCBNeVJlZ2lzdHJhdGlvbilcbiAgICAuY29udHJvbGxlcignTWFpblVzZXJDb250cm9sbGVyJywgTWFpblVzZXJDb250cm9sbGVyKVxuXG4gIC5jb250cm9sbGVyKCdGcmllbmRDb250cm9sbGVyJywgRnJpZW5kQ29udHJvbGxlcilcblxuICAuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgTmF2YmFyRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBNYWxhcmtleURpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgncG9zdCcsIFBvc3RBbGxEaXJlY3RpdmUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJleHBvcnQgZnVuY3Rpb24gY29uZmlnICgkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xuICAnbmdJbmplY3QnO1xuICAvLyBFbmFibGUgbG9nXG4gICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgLy8gU2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXG4gIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICB0b2FzdHJDb25maWcudGltZU91dCA9IDUwMDA7XG4gIHRvYXN0ckNvbmZpZy5wb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XG4gIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vdGVtcGxhdGUuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTXlDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3RlbXAnXG4gICAgfSlcbiAgICAuc3RhdGUoJ2ZvbGxvd3MnLHtcbiAgICAgIHVybDonL3JlZ2lzdHJhdGlvbicsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6J015UmVnaXN0cmF0aW9uJyxcbiAgICAgIGNvbnRyb2xsZXJBczoncmVnaXN0J1xuICAgIH0pXG4gICAgICAuc3RhdGUoJzEnLHtcbiAgICAgICAgICB1cmw6Jy9tYWluJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL1VzZXJNYWluLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6J01haW5Vc2VyQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOidNZVVzZSdcbiAgICAgIH0pO1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4uanMiLCJleHBvcnQgY2xhc3MgRnJpZW5kQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRzY29wZSkge1xuICAgICduZ0luamVjdCdcblxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb2xsb3dzJylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICAgICAvL3RoaXMuZGF0YT1zdWNjZXNzLmRhdGE7XG4gICAgICAgICRzY29wZS5wciA9IHByb21pc2UuZGF0YTtcbiAgICAgICAgdGhhdC5wcm9taXNlID0gcHJvbWlzZS5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIHRoaXMucHJvbWlzID0gZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIHRoaXMucHJvbWlzZSA9ICRzY29wZS5wcjtcbiAgICB0aGlzLlRhYmxlUGVyc29uID0gW107XG4gICAgdGhpcy5teWZpcnN0c1NlcnZpY2UgPSBbXVxuICAgIHRoaXMuc3VjY2VzcyA9bnVsbDtcbiAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCk7XG4gIH1cbiAgYWN0aXZhdGUoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwKSB7XG4gICAgdGhpcy5nZXREYXRhRnJpZW5kcyhmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCk7XG4gIH1cbiAgZ2V0RGF0YUZyaWVuZHMoZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYyl7XG4gICAgdGhpcy5mcmllbmRzRGF0YSA9IGZyaWVuZHNTZXJ2aWNlLmdldEZyaWVuZHMoKTtcbiAgICB0aGlzLlRhYmxlUGVyc29uID0gd2ViRGV2VGVjLmdldGRhdGEoKTtcbiAgICB0aGlzLnN1Y2Nlc3MgPSBmcmllbmRzU2VydmljZS5nZXREYXRhKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZHMuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBNeUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRsb2csICRsb2NhdGlvbiwgJHNjb3BlKSB7XG4gICAgICAnbmdJbmplY3QnXG5cbiAgICAgIC8vbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgdGhpcy50aXRsZSA9IFwi0JLRhdC+0LRcIjtcbiAgICAgIC8vdGhpcy5OYW1lID0gXCJcIjtcbiAgICAgIC8vdGhpcy5FbWFpbCA9IFwiXCI7XG4gICAgICAvL3RoaXMuUGFzc3dvcmQgPSBcIlwiO1xuICAgICAgICAkc2NvcGUuZXJyX2xvZyA9IFwiXCI7XG4gICAgICAgICRzY29wZS5lcnJfcGFzID0gXCJcIjtcblxuICAgICAgdGhpcy5lbnRyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHAucG9zdCgnYXBpL2VudHJ5Jywge25hbWU6ICRzY29wZS5OYW1lLCBlbWFpbDogJHNjb3BlLkVtYWlsLCBwYXNzd29yZDogJHNjb3BlLlBhc3N3b3JkfSlcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAvLyRzY29wZS5ib29rcyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgLy90aGlzLmVycl9sb2cgPSBcIlwiO1xuICAgICAgICAgICAgLy90aGlzLmVycl9wYXMgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhID09PSBcImVycm9yX2xvZ2luXCIpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZXJyX2xvZyA9IFwi0KHQvdCw0YfQsNC70LAg0L3Rg9C20L3QviDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8hXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuZGF0YSA9PT0gXCJlcnJvcl9wYXNzd29yZFwiKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmVycl9wYXMgPSBcItCd0LXQstC10YDQvdGL0Lkg0L/QsNGA0L7Qu9GMIVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVG9rZW4nLCByZXN1bHQuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05hbWUnLCByZXN1bHQuZGF0YS5uYW1lKTtcblxuICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKFwiL21haW5cIik7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgICRsb2cubG9nKHJlc3VsdCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxvY2F0aW9uLnBhdGgoXCIvcmVnaXN0cmF0aW9uXCIpO1xuXG4gICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi90ZW1wbGF0ZS5Db250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIE15UmVnaXN0cmF0aW9uIHtcbiAgY29uc3RydWN0b3IgKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCwgJGxvZywgJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgICAnbmdJbmplY3QnXG5cbiAgICAgIC8vJHNjb3BlLk5hbWUgPSBcIlwiO1xuICAgICAgLy8kc2NvcGUuRW1haWwgPSBcIlwiO1xuICAgICAgLy8kc2NvcGUuUGFzc3dvcmQgPSBcIlwiO1xuICAgICAgJHNjb3BlLmVycl9sb2cgPSBcIlwiO1xuXG5cbiAgICB0aGlzLnJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRodHRwLnBvc3QoJy9hcGkvcmVnaXN0cmF0aW9uJywge25hbWU6ICRzY29wZS5OYW1lLCBlbWFpbDogJHNjb3BlLkVtYWlsLCBwYXNzd29yZDogJHNjb3BlLlBhc3N3b3JkfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhID09PSBcImVycm9yX2xvZ2luXCIpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZXJyX2xvZyA9IFwi0KLQsNC60L7QuSDQu9C+0LPQuNC9INGD0LbQtSDQt9Cw0L3Rj9GCIVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAkbG9nLmxvZyhyZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8kbG9jYXRpb24ucGF0aChcIi9cIik7XG5cbiAgICB9O1xuXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi9yZWdpc3RyYXRpb24uQ29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBNYWluVXNlckNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRsb2csICRsb2NhdGlvbiwgJHNjb3BlKSB7XG4gICAgICAgICduZ0luamVjdCdcblxuICAgICAgICAvL2NvbnNvbGUubG9nKHRlc3QpO1xuICAgICAgICAvL2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUtleScsICdWYWx1ZScpO1xuICAgICAgICAvLzFjb25zb2xlLmxvZygkbG9jYXRpb24uc2VhcmNoKCkubmFtZSk7XG4gICAgICAgIC8vJHNjb3BlLnNhbXBsZTE9ZnVuY3Rpb24oKXtcblxuICAgICAgICAkc2NvcGUubmFtZVVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk5hbWVcIik7XG5cbiAgICAgICAgJHNjb3BlLnRleHRGb3JQb3N0ID0gXCJcIjtcbiAgICAgICAgJHNjb3BlLnRleHRGb3JUaXRsZSA9IFwiXCI7XG4gICAgICAgICRzY29wZS50ZXh0Rm9yU2VhcmNoID0gXCJcIjtcbiAgICAgICAgJHNjb3BlLmNvdW50SWQgPSAwO1xuICAgICAgICAkc2NvcGUudGVzdCA9IFwidHJ1ZVwiO1xuICAgICAgICBsZXQgcG9zdEVkaXRJZDtcbiAgICAgICAgbGV0IHBvc3RFZGl0VGV4dDtcblxuICAgICAgICAvLyRzY29wZS51c2VyX25hbWUgPSAkbG9jYXRpb24uc2VhcmNoKCkubmFtZTtcbiAgICAgICAgJHNjb3BlLmFkZEJvb2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIikpO1xuICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuZWRpdFBvc3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIGxldCBlZGl0UG9zdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtdWx0aS1maWxlc1wiK2lkKTtcbiAgICAgICAgICAgIHBvc3RFZGl0SWQgPSBpZDtcbiAgICAgICAgICAgIHBvc3RFZGl0VGV4dCA9IGVkaXRQb3N0WzBdLnRleHRDb250ZW50O1xuXG4gICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2VkaXRQb3N0Jywge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpLCBwb3N0SUQ6IGlkfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXR1cyA9PT0gXCJPS1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVkaXRQb3N0WzBdLmRpc2FibGVkKTsvL1swXS5hdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyRzY29wZS50ZXN0ID0gXCJmYWxzZVwiOy8vbmctZGlzYWJsZWQ9XCJ7e3Rlc3R9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0UG9zdFswXS5hdHRyaWJ1dGVzLnJlbW92ZU5hbWVkSXRlbShcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuc2F2ZVBvc3QgPSBmdW5jdGlvbihpZCl7XG4gICAgICAgICAgICBsZXQgc2F2ZVBvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXVsdGktZmlsZXNcIitpZCk7XG4gICAgICAgICAgICBpZihpZCAhPT0gcG9zdEVkaXRJZCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpZCDQvdC10YHQvtCy0L/QsNC70LghXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHNhdmVQb3N0WzBdLnRleHRDb250ZW50ID09PSBwb3N0RWRpdFRleHQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi0JLRiyDQvdC40YfQtdCz0L4g0L3QtSDQuNC30LzQtdC90LjQu9C4IVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3NhdmVQb3N0Jyx7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIiksIG5ld1RleHQ6IHNhdmVQb3N0WzBdLnRleHRDb250ZW50LCBwb3N0SUQ6IGlkfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuc3RhdHVzID09PSBcIk9LXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vJHNjb3BlLmFkZEJvb2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlUG9zdFswXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi0J7RiNC40LHQutCwINC00L7QsdCw0LLQu9C10L3QuNGPIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHNhdmVQb3N0WzBdLnRleHRDb250ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLm5ld1Bvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRQb3N0XCIpO1xuICAgICAgICAgICAgaWYodGV4dFsxXS50ZXh0Q29udGVudCAhPT0gXCJcIil7XG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9hZGRQb3N0Jywge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpLCB0ZXh0UG9zdDogdGV4dFsxXS50ZXh0Q29udGVudCwgdGV4dFRpdGxlOiAkc2NvcGUudGV4dEZvclRpdGxlfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuc3RhdHVzID09PSBcIk9LXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5hZGRCb29rKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5BbGxQb3N0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9hbGxQb3N0Jywge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmJvb2tzID0gcmVzdWx0LmRhdGE7XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLlNlYXJjaCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZigkc2NvcGUudGV4dEZvclNlYXJjaCAhPT0gXCJcIil7XG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9zZWFyY2hQb3N0Jywge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpLCB0ZXh0U2VhcmNoOiAkc2NvcGUudGV4dEZvclNlYXJjaH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5ib29rcyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuXG5cblxuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuZGVsUG9zdCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgLy9sZXQgRGVsUG9zdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtdWx0aS1maWxlc1wiK2lkKTtcblxuICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZWxQb3N0Jywge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpLCBwb3N0SUQ6IGlkfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXR1cyA9PT0gXCJPS1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5hZGRCb29rKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi9Vc2VyTWFpbi5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCAkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhsaW1pdD0zMCkge1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSkpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwiZXhwb3J0IGNsYXNzIFdlYkRldlRlY1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXJKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9hbmd1bGFyanMub3JnLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdIVE1MIGVuaGFuY2VkIGZvciB3ZWIgYXBwcyEnLFxuICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdCcm93c2VyU3luYycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2Jyb3dzZXJzeW5jLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLicsXG4gICAgICAgICdsb2dvJzogJ2Jyb3dzZXJzeW5jLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdHdWxwSlMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9ndWxwanMuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUaGUgc3RyZWFtaW5nIGJ1aWxkIHN5c3RlbS4nLFxuICAgICAgICAnbG9nbyc6ICdndWxwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdKYXNtaW5lJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vamFzbWluZS5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0JlaGF2aW9yLURyaXZlbiBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2phc21pbmUucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0thcm1hID0pJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8va2FybWEtcnVubmVyLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnU3BlY3RhY3VsYXIgVGVzdCBSdW5uZXIgZm9yIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAna2FybWEucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1Byb3RyYWN0b3InLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3Byb3RyYWN0b3InLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnRW5kIHRvIGVuZCB0ZXN0IGZyYW1ld29yayBmb3IgQW5ndWxhckpTIGFwcGxpY2F0aW9ucyBidWlsdCBvbiB0b3Agb2YgV2ViRHJpdmVySlMuJyxcbiAgICAgICAgJ2xvZ28nOiAncHJvdHJhY3Rvci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQm9vdHN0cmFwJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQm9vdHN0cmFwIGlzIHRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIHJlc3BvbnNpdmUsIG1vYmlsZSBmaXJzdCBwcm9qZWN0cyBvbiB0aGUgd2ViLicsXG4gICAgICAgICdsb2dvJzogJ2Jvb3RzdHJhcC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnRVM2IChCYWJlbCBmb3JtZXJseSA2dG81KScsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9iYWJlbGpzLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdUdXJucyBFUzYrIGNvZGUgaW50byB2YW5pbGxhIEVTNSwgc28geW91IGNhbiB1c2UgbmV4dCBnZW5lcmF0aW9uIGZlYXR1cmVzIHRvZGF5LicsXG4gICAgICAgICdsb2dvJzogJ2JhYmVsLnBuZydcbiAgICAgIH1cbiAgICBdO1xuICAgIHRoaXMuZGF0YVllc05PPVtcblxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMFwiLFxuICAgICAgICAnTmFtZWhhc2gnOltcIiNjYXRcIl0sXG4gICAgICAgICdtYXNzYWdlJzpcItCa0L7RgtC40Log0LrRgNCw0YHQuNCy0YvQuT9cIixcbiAgICAgICAgJ1BpY3R1cmUnOlwiYXNzZXRzL2ltYWdlcy9Qb3N0QWxsL0NhdDEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAxXCIsXG4gICAgICAgICdOYW1laGFzaCc6W1wiI2hvdXNlXCJdLFxuICAgICAgICAnbWFzc2FnZSc6XCLQlNC+0Lwg0LHQvtC70YzRiNC+0LlcIixcbiAgICAgICAgJ1BpY3R1cmUnOlwiYXNzZXRzL2ltYWdlcy9Qb3N0QWxsL0hvdXNlMS5qcGdcIixcbiAgICAgICAgJ1llcyc6IFwiXCIsXG4gICAgICAgICdObyc6XCJcIixcbiAgICAgICAgJ3ZvdGVkJzpbXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDJcIixcbiAgICAgICAgJ21hc3NhZ2UnOlwi0KLQtdC70LXRhNC+0L0g0L3QvtCy0YvQuT9cIixcbiAgICAgICAgJ05hbWVoYXNoJzpbXCIjcGhvbmVcIl0sXG4gICAgICAgICdQaWN0dXJlJzpcImFzc2V0cy9pbWFnZXMvUG9zdEFsbC9waG9uZTEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAxXCIsXG4gICAgICAgICdOYW1laGFzaCc6W1wiI2RvZ1wiXSxcbiAgICAgICAgJ21hc3NhZ2UnOlwi0KHQvtCx0LDQutCwINC/0L7RgNC+0LTQuNGB0YLQsNGPP1wiLFxuICAgICAgICAnUGljdHVyZSc6XCJhc3NldHMvaW1hZ2VzL1Bvc3RBbGwvRG9nMS5qcGdcIixcbiAgICAgICAgJ1llcyc6IFwiXCIsXG4gICAgICAgICdObyc6XCJcIixcbiAgICAgICAgJ3ZvdGVkJzpbXVxuXG5cbiAgICAgIH1cbiAgICBdO1xuICAgIHRoaXMuVGFibGVQZXJzb24gPVsge1xuICAgICAgICAgICdpZFBlcnNvbic6XCIxMDAwXCIsXG4gICAgICAgICAgJ2lkRm9sb3dzJzpbXSxcbiAgICAgICAgICAnaWRNeUZvbG93cyc6W10sXG4gICAgICAgICAgJ05hbWUnOlwiVmFzeWFcIixcbiAgICAgICAgICAnUGljdHVyZUZhY2UnOlwiYXNzZXRzL2ltYWdlcy9wZXJzb25zLy8xMDAwLmpwZWdcIlxuXG4gICAgICB9LHtcbiAgICAgICdpZFBlcnNvbic6XCIxMDAxXCIsXG4gICAgICAnaWRGb2xvd3MnOltdLFxuICAgICAgJ2lkTXlGb2xvd3MnOltdLFxuICAgICAgJ05hbWUnOlwiQW5hdG9saWlcIixcbiAgICAgICdQaWN0dXJlRmFjZSc6XCJhc3NldHMvaW1hZ2VzL3BlcnNvbnMvMTAwMS5qcGVnXCJcblxuICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAyXCIsXG4gICAgICAgICdpZEZvbG93cyc6W10sXG4gICAgICAgICdpZE15Rm9sb3dzJzpbXSxcbiAgICAgICAgJ05hbWUnOlwiTmF0YXNoYVwiLFxuICAgICAgICAnUGljdHVyZUZhY2UnOlwiYXNzZXRzL2ltYWdlcy9wZXJzb25zLzEwMDIuanBnXCJcblxuICAgICAgfVxuXG4gICAgXVxuXG5cblxuICB9XG5cbiAgZ2V0VGVjKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbiAgZ2V0WWVzTm9kYXRhKCl7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVllc05PO1xuICB9XG4gIGdldGRhdGEoKXtcbiAgICByZXR1cm4gdGhpcy5UYWJsZVBlcnNvbjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsImV4cG9ydCBjbGFzcyBGcmllbmRzU2VydmljZXtcbiAgY29uc3RydWN0b3IgKCl7XG4gICAgJ25nSW5qZWN0JztcbiAgICB0aGlzLnByb21pc2UgPVtdO1xuICAgIC8vICRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ZvbGxvd3MnKVxuICAgIC8vICAgLnRoZW4oZnVuY3Rpb3JvbWluKHByb21pc2UpIHtcbiAgICAvLyAgICAgLy8gICAgICAgLy90aGlzLj1zdWNjZXNzLmRhdGE7XG4gICAgLy8gICAgIC8vICAgICAgIHRoaXMucHJvbWlzZT0gcHNlO1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBmdW5jdGlvbihlcnJvcikge2RhdGFcbiAgICAvLyAgICAgICB0aGlzLnByb21pc2U9IGVycm9yO1xuICAgIC8vICAgICB9KTtcblxuICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgJ2lkJzonMTAwMCcsXG4gICAgICAgICdteUZyaWVuZCc6IFtcIjEwMDFcIixcIjEwMDJcIl1cbiAgICAgIH1cbiAgICBdXG5cbiAgfVxuICAgZ2V0RnJpZW5kcygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gICBnZXREYXRhKCl7XG4gICAgICAgLy8gJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZm9sbG93cycpXG4gICAgICAgLy8gICAudGhlbihmdW5jdGlvbihzdWNjZXNzKXtcbiAgICAgICAvLyAgIC8vdGhpcy5kYXRhPXN1Y2Nlc3MuZGF0YTtcbiAgICAgICAvLyAgIHJldHVybiBzdWNjZXNzLmRhdGE7XG4gICAgICAgLy8gfSxcbiAgICAgICAvLyBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgLy8gICByZXR1cm4gZXJyb3I7XG4gICAgICAgLy8gfSk7XG4gICAgIHJldHVybiB0aGlzLnByb21pc2U7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mcmllbmQvZnJpZW5kLnNlcnZpY2UuanMiLCJleHBvcnQgZnVuY3Rpb24gTmF2YmFyRGlyZWN0aXZlKCkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgY3JlYXRpb25EYXRlOiAnPSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG5jbGFzcyBOYXZiYXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKG1vbWVudCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICAvLyBcInRoaXMuY3JlYXRpb25EYXRlXCIgaXMgYXZhaWxhYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcbiAgICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJleHBvcnQgZnVuY3Rpb24gTWFsYXJrZXlEaXJlY3RpdmUobWFsYXJrZXkpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHtcbiAgICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIGxpbms6IGxpbmtGdW5jLFxuICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcbiAgICBsZXQgd2F0Y2hlcjtcbiAgICBsZXQgdHlwaXN0ID0gbWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcG9zdGZpeDogJyAnXG4gICAgfSk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCAodmFsdWUpID0+IHtcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgIH0pO1xuXG4gICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgKCkgPT4ge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgKGNvbnRyaWJ1dG9yKSA9PiB7XG4gICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgKCkgPT4ge1xuICAgICAgd2F0Y2hlcigpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuY2xhc3MgTWFsYXJrZXlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcblxuICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xuICB9XG5cbiAgYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jb250cmlidXRvcnMgPSBkYXRhO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb250cmlidXRvcnM7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJcblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RBbGxEaXJlY3RpdmUoKXtcbiAgJ25nSW5qZWN0JztcblxuXG5sZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGU6XCI8ZGl2IGNsYXNzPSdmaWcnIG5nLXJlcGVhdD0ncG9zdHMgaW4gbWFpbi5teWZpcnN0c1NlcnZpY2UnPiA8aDI+e3twb3N0cy5tYXNzYWdlK3Bvc3RzLk5hbWVoYXNoWzBdfX08L2gyPlwiICtcbiAgICAgIFwiPGRpdj5cIiArXCI8cCBjbGFzcz0nZmlnJz48aW1nIHNyYz1cXFwie3twb3N0cy5QaWN0dXJlfX1cXFwiIHdpZHRoPVxcXCI3MDBcXFwiIGhlaWdodD1cXFwiNjAwXFxcIiBhbHQ9J9Ck0L7RgtC+0LPRgNCw0YTQuNGPJz48L3A+XCIrXG4gICAgICBcIjxkaXY+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiID5ZZXM8L2J1dHRvbj5cIitcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiPk5vPC9idXR0b24+PC9kaXY+XCIrXG4gICAgICBcIjxkaXYgbmctcmVwZWF0PSdQZXJzb24gaW4gbWFpbi5UYWJsZVBlcnNvbic+PGg0IG5nLWlmID0gJ1BlcnNvbi5pZFBlcnNvbiA9PSBwb3N0cy5pZFBlcnNvbicgPnt7bWFpbi5hZGROYW1lKFBlcnNvbixwb3N0cyApfX08aW1nICBuZy1zcmM9XFxcInt7bWFpbi5hZGRGYWNlKFBlcnNvbixwb3N0cyl9fVxcXCIgd2lkdGg9XFxcIjM1XFxcIiBoZWlnaHQ9XFxcIjM1XFxcIiBhbHQ9J9Ck0L7RgtC+0LPRgNCw0YTQuNGPJz5cIlxuICAgICAgK1wiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxnIGJ0bi1zdWNjZXNzXFxcIiBuZy1jbGljaz1cXFwibWFpbi5zaG93Rm9sbG93cyhtYWluLmFkZE5hbWUoUGVyc29uLHBvc3RzKSlcXFwiID7Qn9C+0LTQv9C40YHQsNGC0YzRgdGPPC9idXR0b24+PC9oND48L2Rpdj5cIitcbiAgICAgIFwiPC9kaXY+PC9kaXY+XCIsXG4gICAgY29udHJvbGxlckFzOiAncG9zdCdcbiAgfVxuICByZXR1cm4gZGlyZWN0aXZlO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL1Bvc3RBbGwvZGlyZWN0aXZlUG9zdEFsbC5kaXJlY3RpdmUuanMiXSwic291cmNlUm9vdCI6IiJ9