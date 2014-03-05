App.LoginRoute = App.ApplicationRoute.extend({
  setupController: function (controller, context) {
  	Em.$(".preloader").remove();
    controller.reset();
  },
  renderTemplate: function () {
    this.render();
    this.render("myAlerts", {
      into: "login",
      outlet: 'myAlerts',
      controller: "login"
    });
  }
});