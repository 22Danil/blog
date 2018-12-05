export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/template.html',
      controller: 'MyController',
      controllerAs: 'temp'
    })
    .state('follows',{
      url:'/registration',
      templateUrl: 'app/main/registration.html',
      controller:'MyRegistration',
      controllerAs:'regist'
    })
      .state('1',{
          url:'/main',
          templateUrl: 'app/main/UserMain.html',
          controller:'MainUserController',
          controllerAs:'MeUse'
      });
  $urlRouterProvider.otherwise('/');
}
