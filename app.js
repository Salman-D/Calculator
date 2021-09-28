var screenvalue = ' ';
var screen = document.getElementById('screen');

buttons = document.querySelectorAll('button');
for (item  of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('this is button text',buttonText)

            //Clear
            if(buttonText == 'C'){
                screenvalue = '';
                screen.value = screenvalue;
            }
            //percentage
            else if(buttonText=='%'){
                buttonText = '%';
                screenvalue += buttonText;
                screen.value = screenvalue;
            }// multiply
            else if(buttonText=='X'){
                buttonText = '*';
                screenvalue += buttonText;
                screen.value = screenvalue;
            }//minus
            else if(buttonText=='-'){
                buttonText = '-';
                screenvalue += buttonText;
                screen.value = screenvalue;
            }//Plus
            else if(buttonText=='+'){
                buttonText = '+';
                screenvalue += buttonText;
                screen.value = screenvalue;
            }//Divide
            else if(buttonText=='/'){
                buttonText = '/';
                screenvalue += buttonText;
                screen.value = screenvalue;
            }//Equal
            else if(buttonText == '='){
                screen.value = eval(screenvalue);
            }
            else{
                screenvalue += buttonText;
                screen.value = screenvalue;
            }
    })
}