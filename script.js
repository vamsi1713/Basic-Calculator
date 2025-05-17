function Calculate(){
    let number1 =  Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    let operator = document.getElementById('operator').value;

    switch(operator){
        case '+':
            {
                alert(`The addition of the 2 numbers is: ${number1+number2}`);
                break;
            }
        case '-':
            {
                alert(`The sub of the 2 numbers is: ${number1-number2}`);
                break;
            }
        case '*':
            {
                alert(`The mutliplication of 2 numbers is: ${number1*number2}`);
                break;
            }
        case '/':
            {
                alert(`The div of the 2 numbers is: ${number1/number2}`);
                break;
            }
        default:{
            alert("No operator is selected !");
            break;
        }
    }
}