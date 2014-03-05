App.Deal=Ember.Object.extend();

var deals=[];
var invites=[];

App.Deal.reopenClass({
  all: function (){
    return Ember.$.getJSON(App.SERVICE.url+App.SERVICE.endpoints.activeDeal+"/"+localStorage.hpapp_local_uid).then(function (response){

        deals=[];
        invites=[];

        if(response.deals!=undefined){
          if(typeof(response.deals)!="string"){
            if(response.deals.length>=1){
              response.deals.forEach(function (deal){
                deals.push(App.Deal.create(deal));
              });
            }else{
            }
          }
        }
        if(response.invites!=undefined){
          if(typeof(response.invites)!="string"){
            if(response.invites.length>=1){
              response.invites.forEach(function (invite){
                invites.push(App.Deal.create(invite));
              });
            }else{
            }
          }
        }
        deals.invites=invites;
        return deals;
      });
  }
});
