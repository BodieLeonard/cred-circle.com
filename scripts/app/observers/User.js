// TODO: migrate user data into model
// for rapid dev users are an observable object
User = Ember.Object.extend({

  role: function() {
    var role = this.get("role");
    return { role:role }
  }.property("role"),

  fname: function() {
    var fname = this.get("fname");
    return { fname:fname }
  }.property("fname"),

  lname: function() {
    var lname = this.get("lname");
    return { lname:lname }
  }.property("lname"),

  optin: function() {
    var optin = this.get("optin");
    return { optin:optin }
  }.property("optin"),

  email: function() {
    var email = this.get("email");
    return { email:email }
  }.property("email"),

  photo: function() {
    var photo = this.get("photo");
    return { photo:photo }
  }.property("photo"),

  registered: function() {
    var registered = this.get("registered");
    return { registered:registered }
  }.property("registered"),

  online: function() {
    var online = this.get("online");
    return { online:online }
  }.property("online"),

  loan_officer: function() {
    var loan_officer = this.get("loan_officer");
    return { loan_officer:loan_officer }
  }.property("loan_officer"),

  license: function() {
    var license = this.get("license");
    return { license:license }
  }.property("license"),

  company: function() {
    var company = this.get("company");
    return { company:company }
  }.property("company"),

  invite: function() {
    var invite = this.get("invite");
    return { invite:invite }
  }.property("invite")

});

var user = User.create({
  fname: { fname: "fname"},
  lname: { lname: "lname"},
  role: { role: "role"},
  email: { email: "email"},
  photo: { photo: "photo"},
  registered: { registered: "registered"},
  online: { online: "online"},
  loan_officer: { loan_officer: "loan_officer"},
  license: { license: "license"},
  company: { company: "company"},
  invite: { invite: "invite"},
  optin: { optin: "optin"}
});

user.addObserver("role", function(e) {  });
user.addObserver("fname", function(e) {  });
user.addObserver("lname", function(e) {  });
user.addObserver("email", function(e) {  });
user.addObserver("photo", function(e) {  });
user.addObserver("registered", function(e) {  });
user.addObserver("online", function(e) {  });
user.addObserver("loan_officer", function(e) {  });
user.addObserver("license", function(e) {  });
user.addObserver("company", function(e) {  });
user.addObserver("invite", function(e) {  });
user.addObserver("optin", function(e) {  });

