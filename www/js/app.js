var getAgent = function() {

  var agent = navigator.userAgent.toLowerCase(),
    obj = {
      viewport:
      {
        is:
        {
          ie10    : !!(agent.match(/msie 10.0/)),
          ie9     : !!(agent.match(/msie 9.0/)),
          ie8     : !!(agent.match(/msie 8.0/)),
          ie7     : !!(agent.match(/msie 7.0/)),
          ie6     : !!(agent.match(/msie 6.0/)),
          opera     : !!(agent.match(/opera/)),
          chrome  : !!(agent.match(/chrome/)),
          safari  : !!(agent.match(/safari/)),
          firefox : !!(agent.match(/firefox/)),
          android	: !!(agent.match(/android/)),
          iOS		: !!(agent.match(/iphone/) || agent.match(/ipod/))
        }
      }
    };

  for (var key in obj.viewport) {
    var o = obj.viewport[key];
    for (var prop in o) {
      if(o[prop])
        agent = prop;
    };
  };

  return agent;
};

/**
 * Initailize ember app
 */
App = Ember.Application.create({
  rootElement: '.wrapper',
  debug: true,
  LOG_VERSION: "0.009",
  LOG_TRANSITIONS: true,
  cache: true,
  APP_NAME: 'Homepageapp',
  APP_URL: 'http://services.jwilliams.biz',
  //APP_URL: 'http://service.homepageapp.com',
  APP_YEAR: function(){
    var date = new Date(),
    year = date.getFullYear();
    return year;
  }
});

/**
 * For touch events add FastClick
 * prevents the 300 milisecond delay
 */
window.addEventListener('load', function() { new FastClick(document.body); }, false);

/**
 * Phonegap Initialize
 */
App.reopen({

  phoneGapApp: {
    // Application Constructor
    initialize: function () {
      this.bindEvents();
    },

    bindEvents: function () {
      console.log("Phonegap :: bind events");
      document.addEventListener('deviceready', this.onDeviceReady, false);
      document.addEventListener('offline', this.onOffline, false);
      document.addEventListener("pause", this.onPause, false);
    },

    onDeviceReady: function () {
      console.log("Phonegap :: device ready");
      App.phoneGapApp.receivedEvent('deviceready');

    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
      console.log('Phonegap :: Received Event: ' + id);

    },
    onOffline: function() {
      navigator.notification.alert("Check internet connection", null, "No Service", "ok")
    },
    onPause: function() {
      //navigator.notification.alert("Welcome back.", null, "Login", "ok")
    }

  }
});

/**
 * If user is on a device
 * Load Phonegap
 */
if (window.device) {
  // A mobile device is being used
  App.phoneGapApp.onDeviceReady();
  App.phoneGapApp.initialize();
} else {
  //If a mobile device is not being used then lets kick off the app

};

(function($){

  (function(G,und) {
    'use strict';
    var load = function() {
      var tStart, body = document.body;
      tStart = function(e) {
        e = e || G.event;
        var coords = e.changedTouches[0].clientX,
          tEnd = function(e) {
            e = e || G.event;
            var currentX = e.changedTouches[0].clientX;
            if (body.removeEventListener) {
              body.removeEventListener('touchend',tEnd,false);
            } else {//shouldn't be possible, but I don't know all browsers, of course
              body.detachEvent('ontouchend',tEnd);
            } if ((coords - currentX) <= 50)
            {//too little movement
              //alert('moved, but no real swipe');
            } else {
              // swipe
            }
          };
        if (body.addEventListener) {
          return body.addEventListener('touchend',tEnd,false);
        }
        body.attachEvent('ontouchend',tEnd);
      };
      if (G.removeEventListener) {
        body.addEventListener('touchstart',tStart,false);
        return G.removeEventListener('load',load,false);
      } body.attachEvent('ontouchstart',tStart);
      return G.detachEvent('onload',load);
    };
    if (G.addEventListener) {
      return G.addEventListener('load',load,false);
    }
    return G.attachEvent('onload',load);
  }(this));

}(jQuery));