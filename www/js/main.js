/**
 * headjs is the stylesheet and javascript loader
 * all javascript files are loaded and dependencies are set here
 */
head.js( {libs:"./js/libs.min.js"} );

var templatePath,
    appFilePath;

head.ready("libs", function() {
  // load the app
  head.js( 
    {app: "./js/app.js"}
  );
});

head.ready("app", function() {

  // if a agent of iOS is detected load cordova
  if(getAgent() === "iOS"){
    head.js( {cordova: "./js/cordova.min.js"} );
    // if cordova has loaded initialze agent ready
    head.ready("cordova", function() {
      App.phoneGapApp.onDeviceReady();
      App.phoneGapApp.initialize();
    });

    // LOAD MOBILE FILES
    templatePath = "./desktop/",
    appFilePath = "./";

  } 

  // if a agent of android is detected load cordova
  if(getAgent() === "android"){
    head.js( {cordova: "./js/cordova.min.js"} );
    // if cordova has loaded initialze agent ready
    head.ready("cordova", function() {
      App.phoneGapApp.onDeviceReady();
      App.phoneGapApp.initialize();
    });
  };



  head.js(
    // load templates files
    //{templates:appFilePath+"js/templates.min.js"},
    // load application files
    {applicationFiles:"./js/mvcfiles.js"}
  );  
});