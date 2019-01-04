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
	        $http.delete('/api/delPost', { token: localStorage.getItem("Token"), postID: id }).then(function (result) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjRjOTMzNTM3YTBiZTVkNjEyNTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3RlbXBsYXRlLkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi9Vc2VyTWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mcmllbmQvZnJpZW5kLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9Qb3N0QWxsL2RpcmVjdGl2ZVBvc3RBbGwuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25zdGFudCIsIm1hbGFya2V5IiwibW9tZW50IiwiY29uZmlnIiwicm91dGVyQ29uZmlnIiwicnVuIiwicnVuQmxvY2siLCJzZXJ2aWNlIiwiR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIiwiV2ViRGV2VGVjU2VydmljZSIsIkZyaWVuZHNTZXJ2aWNlIiwiY29udHJvbGxlciIsIk15Q29udHJvbGxlciIsIk15UmVnaXN0cmF0aW9uIiwiTWFpblVzZXJDb250cm9sbGVyIiwiRnJpZW5kQ29udHJvbGxlciIsImRpcmVjdGl2ZSIsIk5hdmJhckRpcmVjdGl2ZSIsIk1hbGFya2V5RGlyZWN0aXZlIiwiUG9zdEFsbERpcmVjdGl2ZSIsIiRsb2dQcm92aWRlciIsInRvYXN0ckNvbmZpZyIsImRlYnVnRW5hYmxlZCIsImFsbG93SHRtbCIsInRpbWVPdXQiLCJwb3NpdGlvbkNsYXNzIiwicHJldmVudER1cGxpY2F0ZXMiLCJwcm9ncmVzc0JhciIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXJBcyIsIm90aGVyd2lzZSIsIiRsb2ciLCJkZWJ1ZyIsIiR0aW1lb3V0IiwiZnJpZW5kc1NlcnZpY2UiLCJ3ZWJEZXZUZWMiLCIkaHR0cCIsIiRzY29wZSIsInRoYXQiLCJnZXQiLCJ0aGVuIiwicHJvbWlzZSIsInByIiwiZGF0YSIsImVycm9yIiwicHJvbWlzIiwiVGFibGVQZXJzb24iLCJteWZpcnN0c1NlcnZpY2UiLCJzdWNjZXNzIiwiYWN0aXZhdGUiLCJnZXREYXRhRnJpZW5kcyIsImZyaWVuZHNEYXRhIiwiZ2V0RnJpZW5kcyIsImdldGRhdGEiLCJnZXREYXRhIiwiJGxvY2F0aW9uIiwidGl0bGUiLCJlcnJfbG9nIiwiZXJyX3BhcyIsImVudHJ5IiwicG9zdCIsIm5hbWUiLCJOYW1lIiwiZW1haWwiLCJFbWFpbCIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJpZCIsInBhdGgiLCJjYXRjaCIsImxvZyIsInJlZ2lzdHJhdGlvbiIsIm5hbWVVc2VyIiwiZ2V0SXRlbSIsInRleHRGb3JQb3N0IiwidGV4dEZvclRpdGxlIiwidGV4dEZvclNlYXJjaCIsImNvdW50SWQiLCJ0ZXN0IiwicG9zdEVkaXRJZCIsInBvc3RFZGl0VGV4dCIsImVkaXRQb3N0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJwb3N0SUQiLCJzdGF0dXMiLCJjb25zb2xlIiwiZGlzYWJsZWQiLCJhdHRyaWJ1dGVzIiwicmVtb3ZlTmFtZWRJdGVtIiwic2F2ZVBvc3QiLCJuZXdUZXh0IiwibmV3UG9zdCIsInRleHQiLCJ0ZXh0UG9zdCIsInRleHRUaXRsZSIsIlBvc3RzIiwicGFyYW1zIiwiYm9va3MiLCJBbGxQb3N0cyIsIlNlYXJjaCIsInRleHRTZWFyY2giLCJkZWxQb3N0IiwiZGVsZXRlIiwiYXBpSG9zdCIsImxpbWl0IiwicmVzcG9uc2UiLCJ0b0pzb24iLCJkYXRhWWVzTk8iLCJyZXN0cmljdCIsInNjb3BlIiwiY3JlYXRpb25EYXRlIiwiTmF2YmFyQ29udHJvbGxlciIsImJpbmRUb0NvbnRyb2xsZXIiLCJyZWxhdGl2ZURhdGUiLCJmcm9tTm93IiwiZXh0cmFWYWx1ZXMiLCJ0ZW1wbGF0ZSIsImxpbmsiLCJsaW5rRnVuYyIsIk1hbGFya2V5Q29udHJvbGxlciIsImVsIiwiYXR0ciIsInZtIiwid2F0Y2hlciIsInR5cGlzdCIsInR5cGVTcGVlZCIsImRlbGV0ZVNwZWVkIiwicGF1c2VEZWxheSIsImxvb3AiLCJwb3N0Zml4IiwiYWRkQ2xhc3MiLCJmb3JFYWNoIiwidmFsdWUiLCJ0eXBlIiwicGF1c2UiLCIkd2F0Y2giLCJjb250cmlidXRvcnMiLCJjb250cmlidXRvciIsImxvZ2luIiwiJG9uIiwiZ2l0aHViQ29udHJpYnV0b3IiLCJnZXRDb250cmlidXRvcnMiLCJpbmZvIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNB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LFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7QUFFVCxTQUhnQi9IO0FBQVQsVUFBU0EsbUJBQWtCO0dBQ2hDOztHQUdGLElBQUlILFlBQVk7S0FDWnNHLFVBQVU7S0FDVlEsVUFBUyw2R0FDUCxVQUFTLHFHQUNULHlFQUF1RSx1RUFDdkUsNk5BQ0Msd0pBQ0Q7S0FDRjdGLGNBQWM7O0dBRWhCLE9BQU9qQiIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmNGM5MzM1MzdhMGJlNWQ2MTI1MSIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vaW5kZXguY29uZmlnJztcbmltcG9ydCB7IHJvdXRlckNvbmZpZyB9IGZyb20gJy4vaW5kZXgucm91dGUnO1xuaW1wb3J0IHsgcnVuQmxvY2sgfSBmcm9tICcuL2luZGV4LnJ1bic7XG5cbmltcG9ydCB7IEZyaWVuZENvbnRyb2xsZXIgfSBmcm9tICcuL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyBNeUNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vdGVtcGxhdGUuQ29udHJvbGxlcic7XG5pbXBvcnQgeyBNeVJlZ2lzdHJhdGlvbiB9IGZyb20gJy4vbWFpbi9yZWdpc3RyYXRpb24uQ29udHJvbGxlcic7XG5pbXBvcnQgeyBNYWluVXNlckNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vVXNlck1haW4uY29udHJvbGxlcic7XG5cbmltcG9ydCB7IEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2ViRGV2VGVjU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZSc7XG5pbXBvcnQgeyBGcmllbmRzU2VydmljZSB9IGZyb20gXCIuLi9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOYXZiYXJEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYWxhcmtleURpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQb3N0QWxsRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwLy9Qb3N0QWxsL2RpcmVjdGl2ZVBvc3RBbGwuZGlyZWN0aXZlJztcblxuXG5cbmFuZ3VsYXIubW9kdWxlKCd5ZXNubycsIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsICduZ0FyaWEnLCAnbmdSZXNvdXJjZScsICd1aS5yb3V0ZXInLCAndG9hc3RyJ10pXG4gIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcbiAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXG4gIC5jb25maWcoY29uZmlnKVxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcbiAgLnJ1bihydW5CbG9jaylcbiAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKVxuICAuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSlcbiAgLnNlcnZpY2UoJ2ZyaWVuZHNTZXJ2aWNlJywgRnJpZW5kc1NlcnZpY2UpXG5cbiAgICAuY29udHJvbGxlcignTXlDb250cm9sbGVyJywgTXlDb250cm9sbGVyKVxuICAuY29udHJvbGxlcignTXlSZWdpc3RyYXRpb24nLCBNeVJlZ2lzdHJhdGlvbilcbiAgICAuY29udHJvbGxlcignTWFpblVzZXJDb250cm9sbGVyJywgTWFpblVzZXJDb250cm9sbGVyKVxuXG4gIC5jb250cm9sbGVyKCdGcmllbmRDb250cm9sbGVyJywgRnJpZW5kQ29udHJvbGxlcilcblxuICAuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgTmF2YmFyRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBNYWxhcmtleURpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgncG9zdCcsIFBvc3RBbGxEaXJlY3RpdmUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJleHBvcnQgZnVuY3Rpb24gY29uZmlnICgkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZykge1xuICAnbmdJbmplY3QnO1xuICAvLyBFbmFibGUgbG9nXG4gICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgLy8gU2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXG4gIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICB0b2FzdHJDb25maWcudGltZU91dCA9IDUwMDA7XG4gIHRvYXN0ckNvbmZpZy5wb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XG4gIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vdGVtcGxhdGUuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTXlDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3RlbXAnXG4gICAgfSlcbiAgICAuc3RhdGUoJ2ZvbGxvd3MnLHtcbiAgICAgIHVybDonL3JlZ2lzdHJhdGlvbicsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6J015UmVnaXN0cmF0aW9uJyxcbiAgICAgIGNvbnRyb2xsZXJBczoncmVnaXN0J1xuICAgIH0pXG4gICAgICAuc3RhdGUoJzEnLHtcbiAgICAgICAgICB1cmw6Jy9tYWluJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL1VzZXJNYWluLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6J01haW5Vc2VyQ29udHJvbGxlcicsXG4gICAgICAgICAgY29udHJvbGxlckFzOidNZVVzZSdcbiAgICAgIH0pO1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4uanMiLCJleHBvcnQgY2xhc3MgRnJpZW5kQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRzY29wZSkge1xuICAgICduZ0luamVjdCdcblxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb2xsb3dzJylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICAgICAvL3RoaXMuZGF0YT1zdWNjZXNzLmRhdGE7XG4gICAgICAgICRzY29wZS5wciA9IHByb21pc2UuZGF0YTtcbiAgICAgICAgdGhhdC5wcm9taXNlID0gcHJvbWlzZS5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIHRoaXMucHJvbWlzID0gZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIHRoaXMucHJvbWlzZSA9ICRzY29wZS5wcjtcbiAgICB0aGlzLlRhYmxlUGVyc29uID0gW107XG4gICAgdGhpcy5teWZpcnN0c1NlcnZpY2UgPSBbXVxuICAgIHRoaXMuc3VjY2VzcyA9bnVsbDtcbiAgICB0aGlzLmFjdGl2YXRlKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCk7XG4gIH1cbiAgYWN0aXZhdGUoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwKSB7XG4gICAgdGhpcy5nZXREYXRhRnJpZW5kcyhmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCk7XG4gIH1cbiAgZ2V0RGF0YUZyaWVuZHMoZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYyl7XG4gICAgdGhpcy5mcmllbmRzRGF0YSA9IGZyaWVuZHNTZXJ2aWNlLmdldEZyaWVuZHMoKTtcbiAgICB0aGlzLlRhYmxlUGVyc29uID0gd2ViRGV2VGVjLmdldGRhdGEoKTtcbiAgICB0aGlzLnN1Y2Nlc3MgPSBmcmllbmRzU2VydmljZS5nZXREYXRhKCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZHMuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBNeUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRsb2csICRsb2NhdGlvbiwgJHNjb3BlKSB7XG4gICAgICAnbmdJbmplY3QnXG5cbiAgICAgIC8vbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgdGhpcy50aXRsZSA9IFwi0JLRhdC+0LRcIjtcbiAgICAgIC8vdGhpcy5OYW1lID0gXCJcIjtcbiAgICAgIC8vdGhpcy5FbWFpbCA9IFwiXCI7XG4gICAgICAvL3RoaXMuUGFzc3dvcmQgPSBcIlwiO1xuICAgICAgICAkc2NvcGUuZXJyX2xvZyA9IFwiXCI7XG4gICAgICAgICRzY29wZS5lcnJfcGFzID0gXCJcIjtcblxuICAgICAgdGhpcy5lbnRyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGh0dHAucG9zdCgnYXBpL2VudHJ5Jywge25hbWU6ICRzY29wZS5OYW1lLCBlbWFpbDogJHNjb3BlLkVtYWlsLCBwYXNzd29yZDogJHNjb3BlLlBhc3N3b3JkfSlcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAvLyRzY29wZS5ib29rcyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgLy90aGlzLmVycl9sb2cgPSBcIlwiO1xuICAgICAgICAgICAgLy90aGlzLmVycl9wYXMgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhID09PSBcImVycm9yX2xvZ2luXCIpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuZXJyX2xvZyA9IFwi0KHQvdCw0YfQsNC70LAg0L3Rg9C20L3QviDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y8hXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQuZGF0YSA9PT0gXCJlcnJvcl9wYXNzd29yZFwiKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmVycl9wYXMgPSBcItCd0LXQstC10YDQvdGL0Lkg0L/QsNGA0L7Qu9GMIVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVG9rZW4nLCByZXN1bHQuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ05hbWUnLCByZXN1bHQuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnSWQnLCByZXN1bHQuZGF0YS5pZCk7XG5cbiAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9tYWluXCIpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgICAkbG9nLmxvZyhyZXN1bHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5yZWdpc3RyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKFwiL3JlZ2lzdHJhdGlvblwiKTtcblxuICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vdGVtcGxhdGUuQ29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBNeVJlZ2lzdHJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRsb2csICRzY29wZSwgJGxvY2F0aW9uKSB7XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgICAvLyRzY29wZS5OYW1lID0gXCJcIjtcbiAgICAgIC8vJHNjb3BlLkVtYWlsID0gXCJcIjtcbiAgICAgIC8vJHNjb3BlLlBhc3N3b3JkID0gXCJcIjtcbiAgICAgICRzY29wZS5lcnJfbG9nID0gXCJcIjtcblxuXG4gICAgdGhpcy5yZWdpc3RyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkaHR0cC5wb3N0KCcvYXBpL3JlZ2lzdHJhdGlvbicsIHtuYW1lOiAkc2NvcGUuTmFtZSwgZW1haWw6ICRzY29wZS5FbWFpbCwgcGFzc3dvcmQ6ICRzY29wZS5QYXNzd29yZH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSA9PT0gXCJlcnJvcl9sb2dpblwiKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmVycl9sb2cgPSBcItCi0LDQutC+0Lkg0LvQvtCz0LjQvSDRg9C20LUg0LfQsNC90Y/RgiFcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoXCIvXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgJGxvZy5sb2cocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vJGxvY2F0aW9uLnBhdGgoXCIvXCIpO1xuXG4gICAgfTtcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vcmVnaXN0cmF0aW9uLkNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgTWFpblVzZXJDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwLCAkbG9nLCAkbG9jYXRpb24sICRzY29wZSkge1xuICAgICAgICAnbmdJbmplY3QnXG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyh0ZXN0KTtcbiAgICAgICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlLZXknLCAnVmFsdWUnKTtcbiAgICAgICAgLy8xY29uc29sZS5sb2coJGxvY2F0aW9uLnNlYXJjaCgpLm5hbWUpO1xuICAgICAgICAvLyRzY29wZS5zYW1wbGUxPWZ1bmN0aW9uKCl7XG5cbiAgICAgICAgJHNjb3BlLm5hbWVVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJOYW1lXCIpO1xuXG4gICAgICAgICRzY29wZS50ZXh0Rm9yUG9zdCA9IFwiXCI7XG4gICAgICAgICRzY29wZS50ZXh0Rm9yVGl0bGUgPSBcIlwiO1xuICAgICAgICAkc2NvcGUudGV4dEZvclNlYXJjaCA9IFwiXCI7XG4gICAgICAgICRzY29wZS5jb3VudElkID0gMDtcbiAgICAgICAgJHNjb3BlLnRlc3QgPSBcInRydWVcIjtcbiAgICAgICAgbGV0IHBvc3RFZGl0SWQ7XG4gICAgICAgIGxldCBwb3N0RWRpdFRleHQ7XG5cbiAgICAgICAgLy8kc2NvcGUudXNlcl9uYW1lID0gJGxvY2F0aW9uLnNlYXJjaCgpLm5hbWU7XG4gICAgICAgICRzY29wZS5lZGl0UG9zdCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgbGV0IGVkaXRQb3N0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm11bHRpLWZpbGVzXCIraWQpO1xuICAgICAgICAgICAgcG9zdEVkaXRJZCA9IGlkO1xuICAgICAgICAgICAgcG9zdEVkaXRUZXh0ID0gZWRpdFBvc3RbMF0udGV4dENvbnRlbnQ7XG5cbiAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZWRpdFBvc3QnLCB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIiksIHBvc3RJRDogaWR9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuc3RhdHVzID09PSBcIk9LXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdFBvc3RbMF0uZGlzYWJsZWQpOy8vWzBdLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vJHNjb3BlLnRlc3QgPSBcImZhbHNlXCI7Ly9uZy1kaXNhYmxlZD1cInt7dGVzdH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQb3N0WzBdLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgICRzY29wZS5zYXZlUG9zdCA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgICAgICAgIGxldCBzYXZlUG9zdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtdWx0aS1maWxlc1wiK2lkKTtcbiAgICAgICAgICAgIGlmKGlkICE9PSBwb3N0RWRpdElkKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlkINC90LXRgdC+0LLQv9Cw0LvQuCFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoc2F2ZVBvc3RbMF0udGV4dENvbnRlbnQgPT09IHBvc3RFZGl0VGV4dCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLQktGLINC90LjRh9C10LPQviDQvdC1INC40LfQvNC10L3QuNC70LghXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvc2F2ZVBvc3QnLHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKSwgbmV3VGV4dDogc2F2ZVBvc3RbMF0udGV4dENvbnRlbnQsIHBvc3RJRDogaWR9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQuZGF0YS5zdGF0dXMgPT09IFwiT0tcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8kc2NvcGUuYWRkQm9vaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVQb3N0WzBdLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLQntGI0LjQsdC60LAg0LTQvtCx0LDQstC70LXQvdC40Y8hXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLm5ld1Bvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGRQb3N0XCIpO1xuICAgICAgICAgICAgaWYodGV4dFsxXS50ZXh0Q29udGVudCAhPT0gXCJcIil7XG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKSwgdGV4dFBvc3Q6IHRleHRbMV0udGV4dENvbnRlbnQsIHRleHRUaXRsZTogJHNjb3BlLnRleHRGb3JUaXRsZX0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXR1cyA9PT0gXCJPS1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuUG9zdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLlBvc3RzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpKTtcbiAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS91c2VyLycrIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiSWRcIikgKyAnL3Bvc3RzJywge3BhcmFtczoge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpfX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuQWxsUG9zdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnLCB7cGFyYW1zOiB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9fSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmJvb2tzID0gcmVzdWx0LmRhdGE7XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLlNlYXJjaCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZigkc2NvcGUudGV4dEZvclNlYXJjaCAhPT0gXCJcIil7XG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9zZWFyY2hQb3N0Jywge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpLCB0ZXh0U2VhcmNoOiAkc2NvcGUudGV4dEZvclNlYXJjaH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5ib29rcyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmRlbFBvc3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICRodHRwLmRlbGV0ZSgnL2FwaS9kZWxQb3N0Jywge3Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpLCBwb3N0SUQ6IGlkfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXR1cyA9PT0gXCJPS1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5Qb3N0cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vVXNlck1haW4uY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBHaXRodWJDb250cmlidXRvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMobGltaXQ9MzApIHtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpKTtcbiAgICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsImV4cG9ydCBjbGFzcyBXZWJEZXZUZWNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcbiAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnR3VscEpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcbiAgICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdLYXJtYSA9KScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXG4gICAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxuICAgICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0VTNiAoQmFiZWwgZm9ybWVybHkgNnRvNSknLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYmFiZWxqcy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVHVybnMgRVM2KyBjb2RlIGludG8gdmFuaWxsYSBFUzUsIHNvIHlvdSBjYW4gdXNlIG5leHQgZ2VuZXJhdGlvbiBmZWF0dXJlcyB0b2RheS4nLFxuICAgICAgICAnbG9nbyc6ICdiYWJlbC5wbmcnXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLmRhdGFZZXNOTz1bXG5cbiAgICAgIHtcbiAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDBcIixcbiAgICAgICAgJ05hbWVoYXNoJzpbXCIjY2F0XCJdLFxuICAgICAgICAnbWFzc2FnZSc6XCLQmtC+0YLQuNC6INC60YDQsNGB0LjQstGL0Lk/XCIsXG4gICAgICAgICdQaWN0dXJlJzpcImFzc2V0cy9pbWFnZXMvUG9zdEFsbC9DYXQxLmpwZ1wiLFxuICAgICAgICAnWWVzJzogXCJcIixcbiAgICAgICAgJ05vJzpcIlwiLFxuICAgICAgICAndm90ZWQnOltdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMVwiLFxuICAgICAgICAnTmFtZWhhc2gnOltcIiNob3VzZVwiXSxcbiAgICAgICAgJ21hc3NhZ2UnOlwi0JTQvtC8INCx0L7Qu9GM0YjQvtC5XCIsXG4gICAgICAgICdQaWN0dXJlJzpcImFzc2V0cy9pbWFnZXMvUG9zdEFsbC9Ib3VzZTEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAyXCIsXG4gICAgICAgICdtYXNzYWdlJzpcItCi0LXQu9C10YTQvtC9INC90L7QstGL0Lk/XCIsXG4gICAgICAgICdOYW1laGFzaCc6W1wiI3Bob25lXCJdLFxuICAgICAgICAnUGljdHVyZSc6XCJhc3NldHMvaW1hZ2VzL1Bvc3RBbGwvcGhvbmUxLmpwZ1wiLFxuICAgICAgICAnWWVzJzogXCJcIixcbiAgICAgICAgJ05vJzpcIlwiLFxuICAgICAgICAndm90ZWQnOltdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMVwiLFxuICAgICAgICAnTmFtZWhhc2gnOltcIiNkb2dcIl0sXG4gICAgICAgICdtYXNzYWdlJzpcItCh0L7QsdCw0LrQsCDQv9C+0YDQvtC00LjRgdGC0LDRjz9cIixcbiAgICAgICAgJ1BpY3R1cmUnOlwiYXNzZXRzL2ltYWdlcy9Qb3N0QWxsL0RvZzEuanBnXCIsXG4gICAgICAgICdZZXMnOiBcIlwiLFxuICAgICAgICAnTm8nOlwiXCIsXG4gICAgICAgICd2b3RlZCc6W11cblxuXG4gICAgICB9XG4gICAgXTtcbiAgICB0aGlzLlRhYmxlUGVyc29uID1bIHtcbiAgICAgICAgICAnaWRQZXJzb24nOlwiMTAwMFwiLFxuICAgICAgICAgICdpZEZvbG93cyc6W10sXG4gICAgICAgICAgJ2lkTXlGb2xvd3MnOltdLFxuICAgICAgICAgICdOYW1lJzpcIlZhc3lhXCIsXG4gICAgICAgICAgJ1BpY3R1cmVGYWNlJzpcImFzc2V0cy9pbWFnZXMvcGVyc29ucy8vMTAwMC5qcGVnXCJcblxuICAgICAgfSx7XG4gICAgICAnaWRQZXJzb24nOlwiMTAwMVwiLFxuICAgICAgJ2lkRm9sb3dzJzpbXSxcbiAgICAgICdpZE15Rm9sb3dzJzpbXSxcbiAgICAgICdOYW1lJzpcIkFuYXRvbGlpXCIsXG4gICAgICAnUGljdHVyZUZhY2UnOlwiYXNzZXRzL2ltYWdlcy9wZXJzb25zLzEwMDEuanBlZ1wiXG5cbiAgICB9LFxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMlwiLFxuICAgICAgICAnaWRGb2xvd3MnOltdLFxuICAgICAgICAnaWRNeUZvbG93cyc6W10sXG4gICAgICAgICdOYW1lJzpcIk5hdGFzaGFcIixcbiAgICAgICAgJ1BpY3R1cmVGYWNlJzpcImFzc2V0cy9pbWFnZXMvcGVyc29ucy8xMDAyLmpwZ1wiXG5cbiAgICAgIH1cblxuICAgIF1cblxuXG5cbiAgfVxuXG4gIGdldFRlYygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG4gIGdldFllc05vZGF0YSgpe1xuICAgIHJldHVybiB0aGlzLmRhdGFZZXNOTztcbiAgfVxuICBnZXRkYXRhKCl7XG4gICAgcmV0dXJuIHRoaXMuVGFibGVQZXJzb247XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanMiLCJleHBvcnQgY2xhc3MgRnJpZW5kc1NlcnZpY2V7XG4gIGNvbnN0cnVjdG9yICgpe1xuICAgICduZ0luamVjdCc7XG4gICAgdGhpcy5wcm9taXNlID1bXTtcbiAgICAvLyAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb2xsb3dzJylcbiAgICAvLyAgIC50aGVuKGZ1bmN0aW9yb21pbihwcm9taXNlKSB7XG4gICAgLy8gICAgIC8vICAgICAgIC8vdGhpcy49c3VjY2Vzcy5kYXRhO1xuICAgIC8vICAgICAvLyAgICAgICB0aGlzLnByb21pc2U9IHBzZTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgZnVuY3Rpb24oZXJyb3IpIHtkYXRhXG4gICAgLy8gICAgICAgdGhpcy5wcm9taXNlPSBlcnJvcjtcbiAgICAvLyAgICAgfSk7XG5cbiAgICB0aGlzLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgICdpZCc6JzEwMDAnLFxuICAgICAgICAnbXlGcmllbmQnOiBbXCIxMDAxXCIsXCIxMDAyXCJdXG4gICAgICB9XG4gICAgXVxuXG4gIH1cbiAgIGdldEZyaWVuZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuICAgZ2V0RGF0YSgpe1xuICAgICAgIC8vICRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ZvbGxvd3MnKVxuICAgICAgIC8vICAgLnRoZW4oZnVuY3Rpb24oc3VjY2Vzcyl7XG4gICAgICAgLy8gICAvL3RoaXMuZGF0YT1zdWNjZXNzLmRhdGE7XG4gICAgICAgLy8gICByZXR1cm4gc3VjY2Vzcy5kYXRhO1xuICAgICAgIC8vIH0sXG4gICAgICAgLy8gZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgIC8vICAgcmV0dXJuIGVycm9yO1xuICAgICAgIC8vIH0pO1xuICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZnJpZW5kL2ZyaWVuZC5zZXJ2aWNlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxuY2xhc3MgTmF2YmFyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb21lbnQpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgLy8gXCJ0aGlzLmNyZWF0aW9uRGF0ZVwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG4gICAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQodGhpcy5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgbGV0IHdhdGNoZXI7XG4gICAgbGV0IHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XG4gICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FjbWUtbWFsYXJrZXknKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgKHZhbHVlKSA9PiB7XG4gICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKS5kZWxldGUoKTtcbiAgICB9KTtcblxuICAgIHdhdGNoZXIgPSBzY29wZS4kd2F0Y2goJ3ZtLmNvbnRyaWJ1dG9ycycsICgpID0+IHtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2bS5jb250cmlidXRvcnMsIChjb250cmlidXRvcikgPT4ge1xuICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKS5kZWxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHtcbiAgICAgIHdhdGNoZXIoKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbmNsYXNzIE1hbGFya2V5Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XG5cbiAgICB0aGlzLmFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKTtcbiAgfVxuXG4gIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiBnaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY29udHJpYnV0b3JzID0gZGF0YTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29udHJpYnV0b3JzO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIiwiXG5cbmV4cG9ydCBmdW5jdGlvbiBQb3N0QWxsRGlyZWN0aXZlKCl7XG4gICduZ0luamVjdCc7XG5cblxubGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlOlwiPGRpdiBjbGFzcz0nZmlnJyBuZy1yZXBlYXQ9J3Bvc3RzIGluIG1haW4ubXlmaXJzdHNTZXJ2aWNlJz4gPGgyPnt7cG9zdHMubWFzc2FnZStwb3N0cy5OYW1laGFzaFswXX19PC9oMj5cIiArXG4gICAgICBcIjxkaXY+XCIgK1wiPHAgY2xhc3M9J2ZpZyc+PGltZyBzcmM9XFxcInt7cG9zdHMuUGljdHVyZX19XFxcIiB3aWR0aD1cXFwiNzAwXFxcIiBoZWlnaHQ9XFxcIjYwMFxcXCIgYWx0PSfQpNC+0YLQvtCz0YDQsNGE0LjRjyc+PC9wPlwiK1xuICAgICAgXCI8ZGl2PjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzXFxcIiA+WWVzPC9idXR0b24+XCIrXCI8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj5ObzwvYnV0dG9uPjwvZGl2PlwiK1xuICAgICAgXCI8ZGl2IG5nLXJlcGVhdD0nUGVyc29uIGluIG1haW4uVGFibGVQZXJzb24nPjxoNCBuZy1pZiA9ICdQZXJzb24uaWRQZXJzb24gPT0gcG9zdHMuaWRQZXJzb24nID57e21haW4uYWRkTmFtZShQZXJzb24scG9zdHMgKX19PGltZyAgbmctc3JjPVxcXCJ7e21haW4uYWRkRmFjZShQZXJzb24scG9zdHMpfX1cXFwiIHdpZHRoPVxcXCIzNVxcXCIgaGVpZ2h0PVxcXCIzNVxcXCIgYWx0PSfQpNC+0YLQvtCz0YDQsNGE0LjRjyc+XCJcbiAgICAgICtcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1sZyBidG4tc3VjY2Vzc1xcXCIgbmctY2xpY2s9XFxcIm1haW4uc2hvd0ZvbGxvd3MobWFpbi5hZGROYW1lKFBlcnNvbixwb3N0cykpXFxcIiA+0J/QvtC00L/QuNGB0LDRgtGM0YHRjzwvYnV0dG9uPjwvaDQ+PC9kaXY+XCIrXG4gICAgICBcIjwvZGl2PjwvZGl2PlwiLFxuICAgIGNvbnRyb2xsZXJBczogJ3Bvc3QnXG4gIH1cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9Qb3N0QWxsL2RpcmVjdGl2ZVBvc3RBbGwuZGlyZWN0aXZlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==