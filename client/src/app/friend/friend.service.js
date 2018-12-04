export class FriendsService{
  constructor (){
    'ngInject';
    this.promise =[];
    // $http.get('http://localhost:8000/follows')
    //   .then(functioromin(promise) {
    //     //       //this.=success.data;
    //     //       this.promise= pse;
    //     },
    //     function(error) {data
    //       this.promise= error;
    //     });

    this.data = [
      {
        'id':'1000',
        'myFriend': ["1001","1002"]
      }
    ]

  }
   getFriends() {
    return this.data;
  }
   getData(){
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
}
