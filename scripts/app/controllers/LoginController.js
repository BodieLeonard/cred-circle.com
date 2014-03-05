App.LoginController = App.ApplicationController.extend({

  init: function() {
    this._super();
  },
  reset: function () {
    App.customEvents.pageReset();
    this.setProperties({
      email: localStorage.hpapp_local_email,
      password: "",
      isSuccess:null,
      isLoading:null,
      isError:null
    });
  },

  actions: {

    login: function () {



      var self = this,
        params = this.getProperties('email', 'password'),
        isValid = [],
        data = {
          "email": {
            type:"email",
            required:true,
            message:App.language.en["service.invalid.email"],
            value: this.get('email')
          },
          "password": {
            type:"password",
            required:true,
            message:App.language.en["service.invalid.password"],
            value: this.get('password')
          }
        };
      self.set("errors", []);
      isValid = App.Validate.check(data);
      self.set("isLoading", true);
      self.set("isError", false);

      if (isValid.length <= 0) {
        Ember.$.post(App.SERVICE.url + App.SERVICE.endpoints.login, JSON.stringify(params))
          .success(function (response) {
            if (response.status.success) {

              // set user object
              App.AccountManager.user = response.data;

              // set observables
              user.set("role", response.data.role);
              user.set("fname", response.data.fname);
              user.set("lname", response.data.lname);
              user.set("email", response.data.email);
              user.set("photo", response.data.photo);
              user.set("registered", response.data.registered);
              user.set("online", response.data.online);
              user.set("loan_officer", response.data.loan_officer);
              user.set("license", response.data.license);
              user.set("company", response.data.company);
              user.set("invite", response.data.invite);
              user.set("optin", response.data.optin);

              // set localstorage
              self.set('token', response.token);
              self.set('hpapp_local_uid', response.data.id);
              self.set('hpapp_local_email', response.data.email);
              self.set("loading", App.language.en["app.transition.dashboard"]);
              self.set("isLoading", true);
              self.set("role", response.data.role);



              var attemptedTransition = self.get('attemptedTransition');
              if (attemptedTransition) {
                attemptedTransition.retry();
                self.set('attemptedTransition', null);
              } else {
                // Redirect to 'articles' by default.
                self.transitionToRoute('dashboard');
                //self.transitionToRoute('dashboard');
              }

            } else {
              // error

              self.set("errors", [App.language.en["service.login.nomatch"]]);
              self.set("isError", true);
              self.set("isLoading", false);
            }
          })
          .fail(function (response) {

            // error
            self.set("errors", [App.language.en["service.communication.error"]]);
            self.set("isError", true);
            self.set("isLoading", false);
          })
      } else {

        self.set("errors", isValid);
        self.set("isError", true);
        self.set("isLoading", false);
      };
    }
  }
});