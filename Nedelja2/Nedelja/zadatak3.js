/*Исписати Марио пирамиду одређене висине:
За n = 5

#
##
###
####
#####  */

function poluPiramida (visina) {

    for (var i = 1; i <= visina; i++) 
    {
      var red = '';

      for (var j = 1; j <= i; j++) 
        {
        red += '#'; 
        }
  
      console.log(red);
    }
  }
  
  poluPiramida(5);