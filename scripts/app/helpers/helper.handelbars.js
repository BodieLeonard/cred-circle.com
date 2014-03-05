
// HELPERS
Ember.Handlebars.registerBoundHelper('getStamp', function(date) {

  //return moment.utc(date.deal.stamp).fromNow();
  return moment(date.deal.stamp).format('MMMM Do, YYYY h:mm a');
});

Ember.Handlebars.registerBoundHelper('getBuyer', function(deal) {
  // search for buyer
  return searchDeal('buyer', deal);
});

Ember.Handlebars.registerBoundHelper('getDealId', function(deal) {
  // search for buyer
  return getDealId(deal);
});

Ember.Handlebars.registerBoundHelper('getAddress', function(deal) {
  // search for buyer
  return getAddress(deal);
});

Ember.Handlebars.registerBoundHelper('getMyRole', function(deal) {
  // search for buyer
  return myRole(deal);
});

Ember.Handlebars.registerBoundHelper('perc', function(perc) {

  var status = (perc.deal.statusChecklist) ? perc.deal.statusChecklist : 0;
  return parseInt(status) + "%";
});

Ember.Handlebars.registerBoundHelper('showheader', function(input) {
  return true;
});

Ember.Handlebars.registerBoundHelper('current_time', function(date, options) {
  var formatter        = options.hash['format'] ? options.hash['format'] : 'hh:mm a MM-DD-YYYY';
  var parsed_date      = moment(date);
  var formatted_date   = parsed_date.format(formatter);

  return new Handlebars.SafeString("<time datetime=" + date +">" + formatted_date + "</time>");
});

Ember.Handlebars.registerBoundHelper('title', function(title) {
  return  header.get("update.txtTitle");
});

Ember.Handlebars.registerBoundHelper('back', function(back) {
  return  header.get("update.txtBack");
});

Ember.Handlebars.registerBoundHelper('next', function(next) {
  return  header.get("update.txtNext");
});

Ember.Handlebars.registerHelper('language', function(_str) {
  var str = _str;
  if(App.language.en.hasOwnProperty(str)) {
    str = App.language.en[str];
  } else {
    str = str;
  };

  return str;
});


function myRole(_obj) {

  var object = _obj,
      data,
      roleName,
      id = _obj.deal.dealID;
  // find all user id's that match current user id and load invites
  data = $.grep(object.roles, function(e) { return e.userID == localStorage.hpapp_local_uid; })
  for(var i=0; i<data.length; i++) {
    // search list of default roles and match data role with value
    for(var roleID in App.AccountManager.Roles) {
      if (data[i].role == App.AccountManager.Roles[roleID].id ){
        roleName = App.AccountManager.Roles[roleID].proper
      }
    };
  }
  return roleName;
}

function getAddress(_obj) {

  var deal = _obj.deal,
    property,
    address;

  if(_obj != undefined || _obj) {

      property = deal.property;
      address = (property) ? " "+deal.property.address : "";
  } else {
    address = "";
  }
  return address;
};

function getDealId(_obj) {
  return "Deal "+_obj.deal.dealID;
}

function searchDeal(_role, _obj){

  var object = _obj.roles,
      data,
      matchRole,
      id = _obj.deal.dealID;

  switch (_role) {
    case "owner" :
      matchRole = 1;
      break;
    case "buyer" :
      matchRole = 2;
      break;
  };

  data = $.grep(object, function(e){ return e.role == matchRole; })

  if(data.length > 0) {
    return data[0].fname + " " + data[0].lname;
  } else {
    return "none";
  }
}
