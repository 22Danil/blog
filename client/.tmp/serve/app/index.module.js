/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

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