document.getElementById("submit").addEventListener("click",calculateIt);

function calculateIt() {

    //create some variables
    var myOperator;
    var returnValue;
    
    //get the operands and .value returns the value as a string. 
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;
    
    //get the operand type of data
    var select1 = document.getElementById("operand1-type");
    var select2 = document.getElementById("operand2-type");
  // Retrieve the selected data types for operand1 and operand2
    var operand1type = select1.value;
    var operand2type = select2.value;
    
    //get the operator
    var radios = document.getElementsByName('operator');
    
    // Convert operand1 and operand2 to the specified types based on user selection
    switch (operand1type) {
        case "string":
            operand1 = String(operand1);
            break;
        case "number":
            operand1 = Number(operand1);
            break;
    }
    
    switch (operand2type) {
        case "string":
            operand2 = String(operand2);
            break;
        case "number":
            operand2 = Number(operand2);
            break;
    }

    // If operand1 is "3.14" and operand1type is "number", operand1 becomes 3.14.
    // If operand1 is "abc" and operand1type is "number", operand1 becomes NaN.


    //loop through each possible operand value and find the checked one
    for (var i = 0, length = radios.length; i < length; i++) {
 
        if (radios[i].checked) { //Tests if the current radio button (radios[i]) is selected.
            myOperator = radios[i].value; //If selected, assigns its value to the myOperator variable.
            
            //do a different operation depending on which operator was selected
            switch (radios[i].value) {
                case "+":
                    returnValue = operand1 + operand2;
                    console.log("hello")
                    break;
                case "-":
                    returnValue = operand1 - operand2;
                    break;
                case "*":
                    returnValue = operand1 * operand2;
                    break;
                case "/":
                    returnValue = operand1 / operand2;
                    break;
                case "%":
                    returnValue = operand1 % operand2;
                    break;
                case "concat":
                    returnValue = operand1 + operand2;
                    myOperator = "+";
                    break;
                case "==":
                    returnValue = operand1 == operand2;
                    break;
                case "===":
                    returnValue = operand1 === operand2;
                    break;
                case "!=":
                    returnValue = operand1 != operand2;
                    break;
                case "!==":
                    returnValue = operand1 !== operand2;
                    break;
                case ">":
                    returnValue = operand1 > operand2;
                    break;
                case ">=":
                    returnValue = operand1 >= operand2;
                    break;
                case "<":
                    returnValue = operand1 < operand2;
                    break;
                case "<=":
                    returnValue = operand1 <= operand2;
                    break;
            }

            break;
        }
    }

    //display the operation
    if (typeof(operand1)==="string"){
        operand1 = '"' + operand1 + '"'; 
    }
    if (typeof(operand2)==="string"){
        operand2 = '"' + operand2 + '"';
    }
    //This combines operand1, myOperator, and operand2 into a single string.
    document.getElementById("final-operation").innerHTML = operand1 + myOperator + operand2;
    
    //display the return value
    document.getElementById("result").innerHTML = returnValue;
    
};

// NB! line 106 is a string containing a single double quote ("). In JavaScript, to include a double quote in a string, you have to surround it with single quotes or escape it.
