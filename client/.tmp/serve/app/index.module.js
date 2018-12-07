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
	    $scope.countId = 0;
	    $scope.test = "true";
	
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
	        //console.log(id);
	        //console.log(tee[0].textContent);
	        $http.post('/api/editPost', { token: localStorage.getItem("Token"), postID: id }).then(function (result) {
	            if (result.data.status === "OK") {
	                console.log(editPost[0].attributes);
	                /*
	                let test = () => {
	                    editPost[0].disabled = "false";
	                    $scope.test = "false";
	                }
	                */
	                //$scope.$apply(test());
	                $scope.test = "false";
	                editPost[0].attributes.removeNamedItem("disabled");
	                //editPost[0].disabled.remove();
	                console.log("asddfsfgd");
	                //console.log(editPost[0].querySelector(""));
	                //console.log(editPost[0].getAttribute('disabled'));
	                //console.log(editPost[0].);
	            }
	        }).catch(function (result) {
	            console.log(result);
	        });
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
	
	        //console.log(tee[0].textContent);
	    };
	    $scope.AllPost = function () {
	        $http.post('/api/allPost', { token: localStorage.getItem("Token") }).then(function (result) {
	            $scope.books = result.data;
	        }).catch(function (result) {
	            console.log(result);
	        });
	    };
	    $scope.delPost = function (id) {
	        var DelPost = document.getElementsByClassName("multi-files" + id);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTY5Zjg4NDQ1MTEwYTNmMmE4MmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3RlbXBsYXRlLkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL3JlZ2lzdHJhdGlvbi5Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi9Vc2VyTWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mcmllbmQvZnJpZW5kLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9Qb3N0QWxsL2RpcmVjdGl2ZVBvc3RBbGwuZGlyZWN0aXZlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25zdGFudCIsIm1hbGFya2V5IiwibW9tZW50IiwiY29uZmlnIiwicm91dGVyQ29uZmlnIiwicnVuIiwicnVuQmxvY2siLCJzZXJ2aWNlIiwiR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIiwiV2ViRGV2VGVjU2VydmljZSIsIkZyaWVuZHNTZXJ2aWNlIiwiY29udHJvbGxlciIsIk15Q29udHJvbGxlciIsIk15UmVnaXN0cmF0aW9uIiwiTWFpblVzZXJDb250cm9sbGVyIiwiRnJpZW5kQ29udHJvbGxlciIsImRpcmVjdGl2ZSIsIk5hdmJhckRpcmVjdGl2ZSIsIk1hbGFya2V5RGlyZWN0aXZlIiwiUG9zdEFsbERpcmVjdGl2ZSIsIiRsb2dQcm92aWRlciIsInRvYXN0ckNvbmZpZyIsImRlYnVnRW5hYmxlZCIsImFsbG93SHRtbCIsInRpbWVPdXQiLCJwb3NpdGlvbkNsYXNzIiwicHJldmVudER1cGxpY2F0ZXMiLCJwcm9ncmVzc0JhciIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXJBcyIsIm90aGVyd2lzZSIsIiRsb2ciLCJkZWJ1ZyIsIiR0aW1lb3V0IiwiZnJpZW5kc1NlcnZpY2UiLCJ3ZWJEZXZUZWMiLCIkaHR0cCIsIiRzY29wZSIsInRoYXQiLCJnZXQiLCJ0aGVuIiwicHJvbWlzZSIsInByIiwiZGF0YSIsImVycm9yIiwicHJvbWlzIiwiVGFibGVQZXJzb24iLCJteWZpcnN0c1NlcnZpY2UiLCJzdWNjZXNzIiwiYWN0aXZhdGUiLCJnZXREYXRhRnJpZW5kcyIsImZyaWVuZHNEYXRhIiwiZ2V0RnJpZW5kcyIsImdldGRhdGEiLCJnZXREYXRhIiwiJGxvY2F0aW9uIiwidGl0bGUiLCJlcnJfbG9nIiwiZXJyX3BhcyIsImVudHJ5IiwicG9zdCIsIm5hbWUiLCJOYW1lIiwiZW1haWwiLCJFbWFpbCIsInBhc3N3b3JkIiwiUGFzc3dvcmQiLCJyZXN1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJwYXRoIiwiY2F0Y2giLCJsb2ciLCJyZWdpc3RyYXRpb24iLCJuYW1lVXNlciIsImdldEl0ZW0iLCJ0ZXh0Rm9yUG9zdCIsInRleHRGb3JUaXRsZSIsImNvdW50SWQiLCJ0ZXN0IiwiYWRkQm9vayIsImJvb2tzIiwiY29uc29sZSIsImVkaXRQb3N0IiwiaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwb3N0SUQiLCJzdGF0dXMiLCJhdHRyaWJ1dGVzIiwicmVtb3ZlTmFtZWRJdGVtIiwibmV3UG9zdCIsInRleHQiLCJ0ZXh0Q29udGVudCIsInRleHRQb3N0IiwidGV4dFRpdGxlIiwiQWxsUG9zdCIsImRlbFBvc3QiLCJEZWxQb3N0IiwiYXBpSG9zdCIsImxpbWl0IiwicmVzcG9uc2UiLCJ0b0pzb24iLCJkYXRhWWVzTk8iLCJyZXN0cmljdCIsInNjb3BlIiwiY3JlYXRpb25EYXRlIiwiTmF2YmFyQ29udHJvbGxlciIsImJpbmRUb0NvbnRyb2xsZXIiLCJyZWxhdGl2ZURhdGUiLCJmcm9tTm93IiwiZXh0cmFWYWx1ZXMiLCJ0ZW1wbGF0ZSIsImxpbmsiLCJsaW5rRnVuYyIsIk1hbGFya2V5Q29udHJvbGxlciIsImVsIiwiYXR0ciIsInZtIiwid2F0Y2hlciIsInR5cGlzdCIsInR5cGVTcGVlZCIsImRlbGV0ZVNwZWVkIiwicGF1c2VEZWxheSIsImxvb3AiLCJwb3N0Zml4IiwiYWRkQ2xhc3MiLCJmb3JFYWNoIiwidmFsdWUiLCJ0eXBlIiwicGF1c2UiLCJkZWxldGUiLCIkd2F0Y2giLCJjb250cmlidXRvcnMiLCJjb250cmlidXRvciIsImxvZ2luIiwiJG9uIiwiZ2l0aHViQ29udHJpYnV0b3IiLCJnZXRDb250cmlidXRvcnMiLCJpbmZvIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztB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QSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87O0FBRVQsU0FIZ0J2SDtBQUFULFVBQVNBLG1CQUFrQjtHQUNoQzs7R0FHRixJQUFJSCxZQUFZO0tBQ1o2RixVQUFVO0tBQ1ZRLFVBQVMsNkdBQ1AsVUFBUyxxR0FDVCx5RUFBdUUsdUVBQ3ZFLDZOQUNDLHdKQUNEO0tBQ0ZwRixjQUFjOztHQUVoQixPQUFPakIiLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTY5Zjg4NDQ1MTEwYTNmMmE4MmEiLCIvKiBnbG9iYWwgbWFsYXJrZXk6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2luZGV4LmNvbmZpZyc7XG5pbXBvcnQgeyByb3V0ZXJDb25maWcgfSBmcm9tICcuL2luZGV4LnJvdXRlJztcbmltcG9ydCB7IHJ1bkJsb2NrIH0gZnJvbSAnLi9pbmRleC5ydW4nO1xuXG5pbXBvcnQgeyBGcmllbmRDb250cm9sbGVyIH0gZnJvbSAnLi9mcmllbmQvZnJpZW5kcy5jb250cm9sbGVyJztcblxuaW1wb3J0IHsgTXlDb250cm9sbGVyIH0gZnJvbSAnLi9tYWluL3RlbXBsYXRlLkNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTXlSZWdpc3RyYXRpb24gfSBmcm9tICcuL21haW4vcmVnaXN0cmF0aW9uLkNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTWFpblVzZXJDb250cm9sbGVyIH0gZnJvbSAnLi9tYWluL1VzZXJNYWluLmNvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyBHaXRodWJDb250cmlidXRvclNlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYkRldlRlY1NlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UnO1xuaW1wb3J0IHsgRnJpZW5kc1NlcnZpY2UgfSBmcm9tIFwiLi4vYXBwL2ZyaWVuZC9mcmllbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgTmF2YmFyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFsYXJrZXlEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUG9zdEFsbERpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC8vUG9zdEFsbC9kaXJlY3RpdmVQb3N0QWxsLmRpcmVjdGl2ZSc7XG5cblxuXG5hbmd1bGFyLm1vZHVsZSgneWVzbm8nLCBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLCAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3RvYXN0ciddKVxuICAuY29uc3RhbnQoJ21hbGFya2V5JywgbWFsYXJrZXkpXG4gIC5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KVxuICAuY29uZmlnKGNvbmZpZylcbiAgLmNvbmZpZyhyb3V0ZXJDb25maWcpXG4gIC5ydW4ocnVuQmxvY2spXG4gIC5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSlcbiAgLnNlcnZpY2UoJ3dlYkRldlRlYycsIFdlYkRldlRlY1NlcnZpY2UpXG4gIC5zZXJ2aWNlKCdmcmllbmRzU2VydmljZScsIEZyaWVuZHNTZXJ2aWNlKVxuXG4gICAgLmNvbnRyb2xsZXIoJ015Q29udHJvbGxlcicsIE15Q29udHJvbGxlcilcbiAgLmNvbnRyb2xsZXIoJ015UmVnaXN0cmF0aW9uJywgTXlSZWdpc3RyYXRpb24pXG4gICAgLmNvbnRyb2xsZXIoJ01haW5Vc2VyQ29udHJvbGxlcicsIE1haW5Vc2VyQ29udHJvbGxlcilcblxuICAuY29udHJvbGxlcignRnJpZW5kQ29udHJvbGxlcicsIEZyaWVuZENvbnRyb2xsZXIpXG5cbiAgLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIE5hdmJhckRpcmVjdGl2ZSlcbiAgLmRpcmVjdGl2ZSgnYWNtZU1hbGFya2V5JywgTWFsYXJrZXlEaXJlY3RpdmUpXG4gIC5kaXJlY3RpdmUoJ3Bvc3QnLCBQb3N0QWxsRGlyZWN0aXZlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyAoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcbiAgJ25nSW5qZWN0JztcbiAgLy8gRW5hYmxlIGxvZ1xuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuXG4gIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSA1MDAwO1xuICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJleHBvcnQgZnVuY3Rpb24gcm91dGVyQ29uZmlnICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICduZ0luamVjdCc7XG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdob21lJywge1xuICAgICAgdXJsOiAnLycsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL3RlbXBsYXRlLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ015Q29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd0ZW1wJ1xuICAgIH0pXG4gICAgLnN0YXRlKCdmb2xsb3dzJyx7XG4gICAgICB1cmw6Jy9yZWdpc3RyYXRpb24nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9yZWdpc3RyYXRpb24uaHRtbCcsXG4gICAgICBjb250cm9sbGVyOidNeVJlZ2lzdHJhdGlvbicsXG4gICAgICBjb250cm9sbGVyQXM6J3JlZ2lzdCdcbiAgICB9KVxuICAgICAgLnN0YXRlKCcxJyx7XG4gICAgICAgICAgdXJsOicvbWFpbicsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9Vc2VyTWFpbi5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOidNYWluVXNlckNvbnRyb2xsZXInLFxuICAgICAgICAgIGNvbnRyb2xsZXJBczonTWVVc2UnXG4gICAgICB9KTtcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBydW5CbG9jayAoJGxvZykge1xuICAnbmdJbmplY3QnO1xuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwiZXhwb3J0IGNsYXNzIEZyaWVuZENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwLCAkc2NvcGUpIHtcbiAgICAnbmdJbmplY3QnXG5cbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZm9sbG93cycpXG4gICAgICAudGhlbihmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgICAgLy90aGlzLmRhdGE9c3VjY2Vzcy5kYXRhO1xuICAgICAgICAkc2NvcGUucHIgPSBwcm9taXNlLmRhdGE7XG4gICAgICAgIHRoYXQucHJvbWlzZSA9IHByb21pc2UuZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICB0aGlzLnByb21pcyA9IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB0aGlzLnByb21pc2UgPSAkc2NvcGUucHI7XG4gICAgdGhpcy5UYWJsZVBlcnNvbiA9IFtdO1xuICAgIHRoaXMubXlmaXJzdHNTZXJ2aWNlID0gW11cbiAgICB0aGlzLnN1Y2Nlc3MgPW51bGw7XG4gICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHApO1xuICB9XG4gIGFjdGl2YXRlKCR0aW1lb3V0LCBmcmllbmRzU2VydmljZSwgd2ViRGV2VGVjLCAkaHR0cCkge1xuICAgIHRoaXMuZ2V0RGF0YUZyaWVuZHMoZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHApO1xuICB9XG4gIGdldERhdGFGcmllbmRzKGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMpe1xuICAgIHRoaXMuZnJpZW5kc0RhdGEgPSBmcmllbmRzU2VydmljZS5nZXRGcmllbmRzKCk7XG4gICAgdGhpcy5UYWJsZVBlcnNvbiA9IHdlYkRldlRlYy5nZXRkYXRhKCk7XG4gICAgdGhpcy5zdWNjZXNzID0gZnJpZW5kc1NlcnZpY2UuZ2V0RGF0YSgpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2ZyaWVuZC9mcmllbmRzLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgTXlDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwLCAkbG9nLCAkbG9jYXRpb24sICRzY29wZSkge1xuICAgICAgJ25nSW5qZWN0J1xuXG4gICAgICAvL2xldCB0aGF0ID0gdGhpcztcbiAgICAgIHRoaXMudGl0bGUgPSBcItCS0YXQvtC0XCI7XG4gICAgICAvL3RoaXMuTmFtZSA9IFwiXCI7XG4gICAgICAvL3RoaXMuRW1haWwgPSBcIlwiO1xuICAgICAgLy90aGlzLlBhc3N3b3JkID0gXCJcIjtcbiAgICAgICAgJHNjb3BlLmVycl9sb2cgPSBcIlwiO1xuICAgICAgICAkc2NvcGUuZXJyX3BhcyA9IFwiXCI7XG5cbiAgICAgIHRoaXMuZW50cnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRodHRwLnBvc3QoJ2FwaS9lbnRyeScsIHtuYW1lOiAkc2NvcGUuTmFtZSwgZW1haWw6ICRzY29wZS5FbWFpbCwgcGFzc3dvcmQ6ICRzY29wZS5QYXNzd29yZH0pXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgLy8kc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIC8vdGhpcy5lcnJfbG9nID0gXCJcIjtcbiAgICAgICAgICAgIC8vdGhpcy5lcnJfcGFzID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSA9PT0gXCJlcnJvcl9sb2dpblwiKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmVycl9sb2cgPSBcItCh0L3QsNGH0LDQu9CwINC90YPQttC90L4g0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNGC0YzRgdGPIVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0LmRhdGEgPT09IFwiZXJyb3JfcGFzc3dvcmRcIikge1xuICAgICAgICAgICAgICAgICRzY29wZS5lcnJfcGFzID0gXCLQndC10LLQtdGA0L3Ri9C5INC/0LDRgNC+0LvRjCFcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Rva2VuJywgcmVzdWx0LmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdOYW1lJywgcmVzdWx0LmRhdGEubmFtZSk7XG5cbiAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9tYWluXCIpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgICAkbG9nLmxvZyhyZXN1bHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5yZWdpc3RyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRsb2NhdGlvbi5wYXRoKFwiL3JlZ2lzdHJhdGlvblwiKTtcblxuICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vdGVtcGxhdGUuQ29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBNeVJlZ2lzdHJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICgkdGltZW91dCwgZnJpZW5kc1NlcnZpY2UsIHdlYkRldlRlYywgJGh0dHAsICRsb2csICRzY29wZSwgJGxvY2F0aW9uKSB7XG4gICAgJ25nSW5qZWN0J1xuXG4gICAgICAvLyRzY29wZS5OYW1lID0gXCJcIjtcbiAgICAgIC8vJHNjb3BlLkVtYWlsID0gXCJcIjtcbiAgICAgIC8vJHNjb3BlLlBhc3N3b3JkID0gXCJcIjtcbiAgICAgICRzY29wZS5lcnJfbG9nID0gXCJcIjtcblxuXG4gICAgdGhpcy5yZWdpc3RyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkaHR0cC5wb3N0KCcvYXBpL3JlZ2lzdHJhdGlvbicsIHtuYW1lOiAkc2NvcGUuTmFtZSwgZW1haWw6ICRzY29wZS5FbWFpbCwgcGFzc3dvcmQ6ICRzY29wZS5QYXNzd29yZH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSA9PT0gXCJlcnJvcl9sb2dpblwiKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmVycl9sb2cgPSBcItCi0LDQutC+0Lkg0LvQvtCz0LjQvSDRg9C20LUg0LfQsNC90Y/RgiFcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoXCIvXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgJGxvZy5sb2cocmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vJGxvY2F0aW9uLnBhdGgoXCIvXCIpO1xuXG4gICAgfTtcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vcmVnaXN0cmF0aW9uLkNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgTWFpblVzZXJDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIGZyaWVuZHNTZXJ2aWNlLCB3ZWJEZXZUZWMsICRodHRwLCAkbG9nLCAkbG9jYXRpb24sICRzY29wZSkge1xuICAgICAgICAnbmdJbmplY3QnXG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyh0ZXN0KTtcbiAgICAgICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlLZXknLCAnVmFsdWUnKTtcbiAgICAgICAgLy8xY29uc29sZS5sb2coJGxvY2F0aW9uLnNlYXJjaCgpLm5hbWUpO1xuICAgICAgICAvLyRzY29wZS5zYW1wbGUxPWZ1bmN0aW9uKCl7XG5cbiAgICAgICAgJHNjb3BlLm5hbWVVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJOYW1lXCIpO1xuXG4gICAgICAgICRzY29wZS50ZXh0Rm9yUG9zdCA9IFwiXCI7XG4gICAgICAgICRzY29wZS50ZXh0Rm9yVGl0bGUgPSBcIlwiO1xuICAgICAgICAkc2NvcGUuY291bnRJZCA9IDA7XG4gICAgICAgICRzY29wZS50ZXN0ID0gXCJ0cnVlXCI7XG5cbiAgICAgICAgLy8kc2NvcGUudXNlcl9uYW1lID0gJGxvY2F0aW9uLnNlYXJjaCgpLm5hbWU7XG4gICAgICAgICRzY29wZS5hZGRCb29rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRva2VuXCIpKTtcbiAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIil9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmJvb2tzID0gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmVkaXRQb3N0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICB2YXIgZWRpdFBvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXVsdGktZmlsZXNcIitpZCk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGVlWzBdLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZWRpdFBvc3QnLCB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIiksIHBvc3RJRDogaWR9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuc3RhdHVzID09PSBcIk9LXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdFBvc3RbMF0uYXR0cmlidXRlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlc3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFBvc3RbMF0uZGlzYWJsZWQgPSBcImZhbHNlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRlc3QgPSBcImZhbHNlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8kc2NvcGUuJGFwcGx5KHRlc3QoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGVzdCA9IFwiZmFsc2VcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQb3N0WzBdLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2VkaXRQb3N0WzBdLmRpc2FibGVkLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhc2RkZnNmZ2RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVkaXRQb3N0WzBdLnF1ZXJ5U2VsZWN0b3IoXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlZGl0UG9zdFswXS5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlZGl0UG9zdFswXS4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5uZXdQb3N0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkUG9zdFwiKTtcbiAgICAgICAgICAgIGlmKHRleHRbMV0udGV4dENvbnRlbnQgIT09IFwiXCIpe1xuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvYWRkUG9zdCcsIHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKSwgdGV4dFBvc3Q6IHRleHRbMV0udGV4dENvbnRlbnQsIHRleHRUaXRsZTogJHNjb3BlLnRleHRGb3JUaXRsZX0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5kYXRhLnN0YXR1cyA9PT0gXCJPS1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYWRkQm9vaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0ZWVbMF0udGV4dENvbnRlbnQpO1xuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuQWxsUG9zdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvYWxsUG9zdCcsIHt0b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYm9va3MgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgJHNjb3BlLmRlbFBvc3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIGxldCBEZWxQb3N0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm11bHRpLWZpbGVzXCIraWQpO1xuXG4gICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbFBvc3QnLCB7dG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIiksIHBvc3RJRDogaWR9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LmRhdGEuc3RhdHVzID09PSBcIk9LXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFkZEJvb2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluL1VzZXJNYWluLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCRsb2csICRodHRwKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xuICB9XG5cbiAgZ2V0Q29udHJpYnV0b3JzKGxpbWl0PTMwKSB7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanMiLCJleHBvcnQgY2xhc3MgV2ViRGV2VGVjU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy5kYXRhID0gW1xuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXG4gICAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcbiAgICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXG4gICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnS2FybWEgPSknLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxuICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdCb290c3RyYXAnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9nZXRib290c3RyYXAuY29tLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgaXMgdGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBmcmFtZXdvcmsgZm9yIGRldmVsb3BpbmcgcmVzcG9uc2l2ZSwgbW9iaWxlIGZpcnN0IHByb2plY3RzIG9uIHRoZSB3ZWIuJyxcbiAgICAgICAgJ2xvZ28nOiAnYm9vdHN0cmFwLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdFUzYgKEJhYmVsIGZvcm1lcmx5IDZ0bzUpJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2JhYmVsanMuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R1cm5zIEVTNisgY29kZSBpbnRvIHZhbmlsbGEgRVM1LCBzbyB5b3UgY2FuIHVzZSBuZXh0IGdlbmVyYXRpb24gZmVhdHVyZXMgdG9kYXkuJyxcbiAgICAgICAgJ2xvZ28nOiAnYmFiZWwucG5nJ1xuICAgICAgfVxuICAgIF07XG4gICAgdGhpcy5kYXRhWWVzTk89W1xuXG4gICAgICB7XG4gICAgICAgICdpZFBlcnNvbic6XCIxMDAwXCIsXG4gICAgICAgICdOYW1laGFzaCc6W1wiI2NhdFwiXSxcbiAgICAgICAgJ21hc3NhZ2UnOlwi0JrQvtGC0LjQuiDQutGA0LDRgdC40LLRi9C5P1wiLFxuICAgICAgICAnUGljdHVyZSc6XCJhc3NldHMvaW1hZ2VzL1Bvc3RBbGwvQ2F0MS5qcGdcIixcbiAgICAgICAgJ1llcyc6IFwiXCIsXG4gICAgICAgICdObyc6XCJcIixcbiAgICAgICAgJ3ZvdGVkJzpbXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDFcIixcbiAgICAgICAgJ05hbWVoYXNoJzpbXCIjaG91c2VcIl0sXG4gICAgICAgICdtYXNzYWdlJzpcItCU0L7QvCDQsdC+0LvRjNGI0L7QuVwiLFxuICAgICAgICAnUGljdHVyZSc6XCJhc3NldHMvaW1hZ2VzL1Bvc3RBbGwvSG91c2UxLmpwZ1wiLFxuICAgICAgICAnWWVzJzogXCJcIixcbiAgICAgICAgJ05vJzpcIlwiLFxuICAgICAgICAndm90ZWQnOltdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAnaWRQZXJzb24nOlwiMTAwMlwiLFxuICAgICAgICAnbWFzc2FnZSc6XCLQotC10LvQtdGE0L7QvSDQvdC+0LLRi9C5P1wiLFxuICAgICAgICAnTmFtZWhhc2gnOltcIiNwaG9uZVwiXSxcbiAgICAgICAgJ1BpY3R1cmUnOlwiYXNzZXRzL2ltYWdlcy9Qb3N0QWxsL3Bob25lMS5qcGdcIixcbiAgICAgICAgJ1llcyc6IFwiXCIsXG4gICAgICAgICdObyc6XCJcIixcbiAgICAgICAgJ3ZvdGVkJzpbXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDFcIixcbiAgICAgICAgJ05hbWVoYXNoJzpbXCIjZG9nXCJdLFxuICAgICAgICAnbWFzc2FnZSc6XCLQodC+0LHQsNC60LAg0L/QvtGA0L7QtNC40YHRgtCw0Y8/XCIsXG4gICAgICAgICdQaWN0dXJlJzpcImFzc2V0cy9pbWFnZXMvUG9zdEFsbC9Eb2cxLmpwZ1wiLFxuICAgICAgICAnWWVzJzogXCJcIixcbiAgICAgICAgJ05vJzpcIlwiLFxuICAgICAgICAndm90ZWQnOltdXG5cblxuICAgICAgfVxuICAgIF07XG4gICAgdGhpcy5UYWJsZVBlcnNvbiA9WyB7XG4gICAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDBcIixcbiAgICAgICAgICAnaWRGb2xvd3MnOltdLFxuICAgICAgICAgICdpZE15Rm9sb3dzJzpbXSxcbiAgICAgICAgICAnTmFtZSc6XCJWYXN5YVwiLFxuICAgICAgICAgICdQaWN0dXJlRmFjZSc6XCJhc3NldHMvaW1hZ2VzL3BlcnNvbnMvLzEwMDAuanBlZ1wiXG5cbiAgICAgIH0se1xuICAgICAgJ2lkUGVyc29uJzpcIjEwMDFcIixcbiAgICAgICdpZEZvbG93cyc6W10sXG4gICAgICAnaWRNeUZvbG93cyc6W10sXG4gICAgICAnTmFtZSc6XCJBbmF0b2xpaVwiLFxuICAgICAgJ1BpY3R1cmVGYWNlJzpcImFzc2V0cy9pbWFnZXMvcGVyc29ucy8xMDAxLmpwZWdcIlxuXG4gICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ2lkUGVyc29uJzpcIjEwMDJcIixcbiAgICAgICAgJ2lkRm9sb3dzJzpbXSxcbiAgICAgICAgJ2lkTXlGb2xvd3MnOltdLFxuICAgICAgICAnTmFtZSc6XCJOYXRhc2hhXCIsXG4gICAgICAgICdQaWN0dXJlRmFjZSc6XCJhc3NldHMvaW1hZ2VzL3BlcnNvbnMvMTAwMi5qcGdcIlxuXG4gICAgICB9XG5cbiAgICBdXG5cblxuXG4gIH1cblxuICBnZXRUZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuICBnZXRZZXNOb2RhdGEoKXtcbiAgICByZXR1cm4gdGhpcy5kYXRhWWVzTk87XG4gIH1cbiAgZ2V0ZGF0YSgpe1xuICAgIHJldHVybiB0aGlzLlRhYmxlUGVyc29uO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwiZXhwb3J0IGNsYXNzIEZyaWVuZHNTZXJ2aWNle1xuICBjb25zdHJ1Y3RvciAoKXtcbiAgICAnbmdJbmplY3QnO1xuICAgIHRoaXMucHJvbWlzZSA9W107XG4gICAgLy8gJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZm9sbG93cycpXG4gICAgLy8gICAudGhlbihmdW5jdGlvcm9taW4ocHJvbWlzZSkge1xuICAgIC8vICAgICAvLyAgICAgICAvL3RoaXMuPXN1Y2Nlc3MuZGF0YTtcbiAgICAvLyAgICAgLy8gICAgICAgdGhpcy5wcm9taXNlPSBwc2U7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGZ1bmN0aW9uKGVycm9yKSB7ZGF0YVxuICAgIC8vICAgICAgIHRoaXMucHJvbWlzZT0gZXJyb3I7XG4gICAgLy8gICAgIH0pO1xuXG4gICAgdGhpcy5kYXRhID0gW1xuICAgICAge1xuICAgICAgICAnaWQnOicxMDAwJyxcbiAgICAgICAgJ215RnJpZW5kJzogW1wiMTAwMVwiLFwiMTAwMlwiXVxuICAgICAgfVxuICAgIF1cblxuICB9XG4gICBnZXRGcmllbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbiAgIGdldERhdGEoKXtcbiAgICAgICAvLyAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb2xsb3dzJylcbiAgICAgICAvLyAgIC50aGVuKGZ1bmN0aW9uKHN1Y2Nlc3Mpe1xuICAgICAgIC8vICAgLy90aGlzLmRhdGE9c3VjY2Vzcy5kYXRhO1xuICAgICAgIC8vICAgcmV0dXJuIHN1Y2Nlc3MuZGF0YTtcbiAgICAgICAvLyB9LFxuICAgICAgIC8vIGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAvLyAgIHJldHVybiBlcnJvcjtcbiAgICAgICAvLyB9KTtcbiAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2ZyaWVuZC9mcmllbmQuc2VydmljZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBOYXZiYXJEaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbmNsYXNzIE5hdmJhckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9tZW50KSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIC8vIFwidGhpcy5jcmVhdGlvbkRhdGVcIiBpcyBhdmFpbGFibGUgYnkgZGlyZWN0aXZlIG9wdGlvbiBcImJpbmRUb0NvbnRyb2xsZXI6IHRydWVcIlxuICAgIHRoaXMucmVsYXRpdmVEYXRlID0gbW9tZW50KHRoaXMuY3JlYXRpb25EYXRlKS5mcm9tTm93KCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgbGluazogbGlua0Z1bmMsXG4gICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgIGxldCB3YXRjaGVyO1xuICAgIGxldCB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xuICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcblxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsICh2YWx1ZSkgPT4ge1xuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAoKSA9PiB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpID0+IHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5jbGFzcyBNYWxhcmtleUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgdGhpcy5hY3RpdmF0ZShnaXRodWJDb250cmlidXRvcik7XG4gIH1cblxuICBhY3RpdmF0ZShnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbnRyaWJ1dG9ycztcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyIsIlxuXG5leHBvcnQgZnVuY3Rpb24gUG9zdEFsbERpcmVjdGl2ZSgpe1xuICAnbmdJbmplY3QnO1xuXG5cbmxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZTpcIjxkaXYgY2xhc3M9J2ZpZycgbmctcmVwZWF0PSdwb3N0cyBpbiBtYWluLm15Zmlyc3RzU2VydmljZSc+IDxoMj57e3Bvc3RzLm1hc3NhZ2UrcG9zdHMuTmFtZWhhc2hbMF19fTwvaDI+XCIgK1xuICAgICAgXCI8ZGl2PlwiICtcIjxwIGNsYXNzPSdmaWcnPjxpbWcgc3JjPVxcXCJ7e3Bvc3RzLlBpY3R1cmV9fVxcXCIgd2lkdGg9XFxcIjcwMFxcXCIgaGVpZ2h0PVxcXCI2MDBcXFwiIGFsdD0n0KTQvtGC0L7Qs9GA0LDRhNC40Y8nPjwvcD5cIitcbiAgICAgIFwiPGRpdj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2Vzc1xcXCIgPlllczwvYnV0dG9uPlwiK1wiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCI+Tm88L2J1dHRvbj48L2Rpdj5cIitcbiAgICAgIFwiPGRpdiBuZy1yZXBlYXQ9J1BlcnNvbiBpbiBtYWluLlRhYmxlUGVyc29uJz48aDQgbmctaWYgPSAnUGVyc29uLmlkUGVyc29uID09IHBvc3RzLmlkUGVyc29uJyA+e3ttYWluLmFkZE5hbWUoUGVyc29uLHBvc3RzICl9fTxpbWcgIG5nLXNyYz1cXFwie3ttYWluLmFkZEZhY2UoUGVyc29uLHBvc3RzKX19XFxcIiB3aWR0aD1cXFwiMzVcXFwiIGhlaWdodD1cXFwiMzVcXFwiIGFsdD0n0KTQvtGC0L7Qs9GA0LDRhNC40Y8nPlwiXG4gICAgICArXCI8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXN1Y2Nlc3NcXFwiIG5nLWNsaWNrPVxcXCJtYWluLnNob3dGb2xsb3dzKG1haW4uYWRkTmFtZShQZXJzb24scG9zdHMpKVxcXCIgPtCf0L7QtNC/0LjRgdCw0YLRjNGB0Y88L2J1dHRvbj48L2g0PjwvZGl2PlwiK1xuICAgICAgXCI8L2Rpdj48L2Rpdj5cIixcbiAgICBjb250cm9sbGVyQXM6ICdwb3N0J1xuICB9XG4gIHJldHVybiBkaXJlY3RpdmU7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvUG9zdEFsbC9kaXJlY3RpdmVQb3N0QWxsLmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=