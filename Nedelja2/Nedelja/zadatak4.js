/*Исписати Марио пирамиду одређене висине:
За n = 5

    #
   ## 
  ###
 ####   
##### */

function MarioPiramida (n) {

    for (var i = 1; i <= n; i++) 
    {
      var p = '';

        for (var j = 1; j <= (n - i); j++) 
            {
            p += ' '; 
            }

        for (var k = 1; k <= i; k++) {
            p += '#';
          }
       
      console.log(p);
    }
  }
  
  MarioPiramida(5);