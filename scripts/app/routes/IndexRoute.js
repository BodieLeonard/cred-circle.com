App.IndexRoute = Ember.Route.extend({
  redirect: function () {

    Ember.run.scheduleOnce('afterRender', this, function(){
      Em.$(".preloader").remove();
    });

    if(localStorage.hpapp_local_email) {
      this.transitionTo('login');
    } else {
      this.transitionTo('register');
    }
  }
});