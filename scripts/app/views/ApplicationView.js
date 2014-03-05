App.ApplicationView = Ember.View.extend({

});

Ember.View.reopen({
  // Let actions bubble to parentView by default.
  target: function() {
    return this.get('parentView');
  }.property('parentView')
});