	var input = document.getElementById("input");
	var result = document.getElementById("result");
	var result2 = document.getElementById("result2");

    input.addEventListener("keyup",myResult);
    result.addEventListener("keyup",myResult);
     result2.addEventListener("keyup",myResult);
    
function myResult(){
	 //result.value = input.value;
	 //input.value = result.value;

     if (/*result.value = */input.value != "" ) {  
 		result.value = input.value *0.01;

 		var result2 = document.getElementById("result2").innerHTML
      = input.value + " CM = " +  result.value + " M "

     } else if (result.value != "" /*input.value*/) {

         input.value = result.value * 100;
         var result2 = document.getElementById("result2").innerHTML
             = result.value + " M = " + input.value + " CM "
 	
 	}
 };

 //****************************************************************//
/* var input = document.getElementById("input");
	var result = document.getElementById("result");
	var result2 = document.getElementById("result2");

    input.addEventListener("keyup",myResult);
    result.addEventListener("keyup",myResult);
    // result2.addEventListener("keyup",myResult);
    
function myResult(){
	// result.value = input.value;
	// input.value = result.value;

     if (result.value = input.value ) {  
 		result.value = input.value *0.01;

 		var result2 = document.getElementById("result2").innerHTML
      = input.value + " CM = " +  result.value + " M "

 	}else if(input.value = result.value) {

 		input.value = result.value *100;
 	
 	}
 };
*/
 




