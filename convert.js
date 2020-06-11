	var input = document.getElementById("input");
	var result = document.getElementById("result");
	var result2 = document.getElementById("result2");

    input.addEventListener("keyup",myResult);
    result.addEventListener("keyup",myResult);
    // result2.addEventListener("keyup",myResult);


function myResult(){
	// result.value = input.value;
	// input.value = result.value;

      result.value = input.value * 0.01;
      // input.value = result.value * 100;

      // result2.value = input.value  * 0.01;
      var result2 = document.getElementById("result2").innerHTML
       = input.value + " cm = "  +  result.value + " m "; 

};




