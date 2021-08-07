console.log("Faizan Ali , Assignment # 4");
console.log("-----------------Question # 1---------------------");
console.log("What values do the following expressions evaluate to, console the results?");
console.log("false || (true && false) ",false || (true && false));
console.log("true || (1 + 2) ",true || (1 + 2));
console.log("(1 + 2) || true ",(1 + 2) || true);
console.log("true && (1 + 2) ",true && (1 + 2));
console.log("(1 + 2) && true ",(1 + 2) && true);
console.log("false && (1 + 2) ",false && (1 + 2));
console.log("(1 + 2) && false) ",(1 + 2) && false);
console.log("(32 * 4) >= 129 ",(32 * 4) >= 129);
console.log("false !== !true ",false !== !true);
console.log("true === 4 ",true === 4);
console.log("false === (847 === '847') ",false === (847 === '847'));
console.log("false === (847 == '847') ",false === (847 == '847'));
console.log("(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false ",(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);



console.log("-----------------Question # 2---------------------");
console.log("Add a validation check to ensure that, a number is an integer. If it isn't, then issue an error message and console it.");
let key = 20;
let checkInt = Number.isInteger(key);
if(checkInt){
    console.log("--------Value is integer--------");
}
else{
    console.log("--------Error message, your value is not integer---------");
}




console.log("-----------------Question # 3---------------------");
console.log("Write a js program to find maximum between two numbers.");
let x = 10;
let y = 20;
console.log(x);
console.log(y);
if(x>y){
    console.log("X is greater than Y");
}
else{
    console.log("Y is greater than X");
}




console.log("-----------------Question # 4---------------------");
console.log(" Write a js program to find maximum between three numbers.");
let a = 10;
let b = 20;
let c = 30;
console.log(a);
console.log(b);
console.log(c);
if(a>b){
    if(a>c){
        console.log("a is the greatest"); 
    }else{
        console.log("c is the greatest");
    }
   
}
else{
    if(b>c){
        console.log("b is the greatest"); 
    }else{
        console.log("c is the greatest");
    }
}




console.log("-----------------Question # 5---------------------");
console.log("Write a js program to check whether a number is negative, positive or zero.");
let a1 = 10;
console.log(a1);
if(a1>0){
    console.log("number is positive");
}
else if(a1<0){
    console.log("number is negative");
}
else{
    console.log("number is equal to zero");
}



console.log("-----------------Question # 6--------------------");
console.log("Write a js program to check whether a number is divisible by 5 and 11 or not.");
let valueNumber = 20;
console.log(valueNumber);
if( valueNumber % 5 == 0 ||  valueNumber % 11 == 0){
    console.log("Number is divisible by 5 or 11");
}
else{
    console.log("Number is not divisible by 5 or 11");
}



console.log("-----------------Question # 7---------------------");
console.log("Write a js program to check whether a number is even or odd.");
let checkEvenOdd = 20;
if(checkEvenOdd % 2 == 0){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd");
}




console.log("-----------------Question # 8---------------------");
console.log("Write a js program to check whether character is an alphabet or not");

  
  let alphabetLetter = 'a';
  let check = checkAlphabet(alphabetLetter);

  if(check){
      console.log("letter is alphabet");
  }
  else{
      console.log("letter is not alphabet");
  }

// definition of function.
  function checkAlphabet(inputChar)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputChar.match(letters))
     {
      return true;
     }
   else
     {
     return false;
     }
  }

  





