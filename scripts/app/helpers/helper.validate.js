App.Validate = Ember.Object.extend();
App.Validate.reopenClass({
  check: function(args) {
    App.customEvents.messages('show');

    var types = ["text", "email", "number", "phone", "select", "date", "password", "code"],
        obj = args,
        isValid = [];

    for (var item in obj) {

      if(obj[item]) {

        var val = (obj[item].hasOwnProperty("value")) ? obj[item].value: null,
            type = (obj[item].hasOwnProperty("type")) ? obj[item].type: null,
            msg = (obj[item].hasOwnProperty("message")) ? obj[item].message: null,
            require = (obj[item].hasOwnProperty("required")) ? obj[item].required: null;

        if(require === true){
          switch(type){
            case types[0] :
              // check to see if name is valid
              if(val){
                if(val.length < 1) isValid.push(msg);
              } else {
                isValid.push(msg)
              }
              break;

            case types[1] :
              // check to see if email is valid
              if(val){

                var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;

                if(!reg.test(val)) isValid.push(msg);

              } else {
                isValid.push(msg)
              }
              break;

            case types[2] :
              // check to see if number is valid
              if(val){
                if(val.length < 1) isValid.push(msg);
              } else {
                isValid.push(msg)
              }
              break;

            case types[3] :
              // check to see if phone is valid
              if(val){
                if(val.length < 1) isValid.push(msg);
              } else {
                isValid.push(msg)
              }
              break;

            case types[4] :
              // check to see if role is valid
              if(val){
                if(val.length < 1) isValid.push(msg);
              } else {
                isValid.push(msg)
              }
              break;

            case types[5] :
              // check to see if date is valid
              if(val){
                if(val.length < 1) isValid.push(msg);
              } else {
                isValid.push(msg)
              }
              break;

            case types[6] :
              // check to see if password is valid
              /*
                (               # Start of group
                  (?=.*\d)      # must contains one digit from 0-9
                  (?=.*[a-z])   # must contains one lowercase characters
                  (?=.*[\W])    # must contains at least one special character
                  .             # match anything with previous condition checking
                  {8,20}        # length at least 8 characters and maximum of 20
                )               # End of group
              */

              if(val){
                if(val.length < 6) isValid.push(msg);
              } else {
                isValid.push(msg)
              }

              break;
            case types[6] :
              // check to see if date is valid
              if(val){
                if(val.length < 1) isValid.push(msg);
              } else {
                isValid.push(msg)
              }
              break;
            default:
             break;
          };
        };
      };
    };
    return isValid;
  }
});