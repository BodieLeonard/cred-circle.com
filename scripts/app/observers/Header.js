App.Header = Ember.Object.extend({
  // these will be supplied by `create`
  txtTitle: null,
  txtNext: null,
  txtBack: null,
  showBtnNext : false,
  showBtnBack : false,

  update: function() {

    var txtTitle = this.get('txtTitle');
    var txtNext = this.get('txtNext');
    var txtback = this.get('txtBack');
    var showBtnNext = this.get("showBtnNext");
    var showBtnBack = this.get("showBtnBack");

    return {
      txtTitle:txtTitle,
      txtNext:txtNext,
      txtBack:txtBack,
      showBtnNext:showBtnNext,
      showBtnBack:showBtnBack
    };
  }.property('update')
});

var header = App.Header.create({
  txtTitle: "foo",
  txtNext: "Bar",
  txtBack: "Chew",
  showBtnNext : true,
  showBtnBack : true,

  update: {
    txtTitle: "Title",
    txtNext: "next",
    txtBack: "back",
    showBtnNext: false,
    showBtnBack: false
  }
});

header.addObserver('update', function(e) {
  $("title").text(App.APP_NAME+ " "+e.update.txtTitle+" v."+App.LOG_VERSION);
});
