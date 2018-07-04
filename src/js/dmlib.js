(function(window){
  'use strict';
    function define_dmLib(){
        var dmLib = {};

        // greet

        dmLib.greet = function(){
          console.log("greet");
            alert("Hello from dmLib.");
        }

        // ....
        dmLib.selectImage = function(method, max, root, type){
          var name = "00";
          console.log(method);
          if (method === "random") {
            var hour = new Date().getHours();
            var num = max;
            name = ("00"+ Math.floor(Math.random() * num)).slice(-2);
            //var pic = "url(" + root + rnd + "." + type + ")";
            //return pic;
          } else if (method == "dayOfWeek") {
            var dow = new Date().getDay();
            var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            name = days[dow];

          } else {
            console.log("default");
          }

          var pic = "url(" + root + name + "." + type + ")";
          return pic;
        }

        // Return Library
        return dmLib;
    }

    if(typeof(dmLib) === 'undefined'){
        window.dmLib = define_dmLib();
    }
    else{
        console.log("Library dmLib already defined.");
    }
})(window);
