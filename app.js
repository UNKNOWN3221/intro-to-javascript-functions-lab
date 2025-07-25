
    const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}


console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

 function isAdult(num){
    if (num >=18){
        return 'Adult';
    } else {
        return 'Minor';
    }
   
}
 console.log('Exercise 2 Result:', isAdult(21));

 function isCharAVowel(char){
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ){
        return true;
    } else {
        return false;
    }
 }
 console.log('Exercise 3 Result:', isCharAVowel("a"));
 
 function generateEmail(name, domain) {
    let gmail = name + '@' + domain
    return gmail
 }
 console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
 function greetUser(name, time){
  if (time == 'morning'){
    return `Good morning, ${name}!`
  }else if (time == 'afternoon'){
    return `Good afternoon, ${name}!`
  } else {
    return `evening, ${name}!`
  }
 }
 console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
 
 function maxOfThree(num1, num2, num3){
  if(num1>num2 && num1>num3){
    return num1
  } else if (num2>num1 && num2>num3){
    return num2
  }else if (num3>num1 && num3>num2){
    return num3
  }
 }
 console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

 function calculateTip(bill, tip){
   let total = bill*(tip/100)
   return total
 }
 console.log('Exercise 7 Result:', calculateTip(50, 20));
 function convertTemperature(temp, scale){
  if (scale == 'C'){
    return (temp*9/5)+32
  } else if (scale =='F'){
    return (temp -32)*5/9
  }
 }

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

function basicCalculator(n1,n2,op){
  if (op == 'add'){
    return n1+n2
  } else if (op == 'subtract'){
    return n1-n2
  } else if (op == 'multiply'){
    return n1*n2
  } else if (op == 'divide'){
    return n1/n2
  }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

function calculateGrade(n){
 if (n>=90 && n<=100){
  return 'A'
 } else if (n<90 && n>=80){
  return 'B'
 } else if (n<80 && n>=70){
  return 'C'
 } else if (n<70 && n>=60){
  return 'D'
 }else if (n<60 && n>=0){
  return 'F'
 }
}
console.log('Exercise 10 Result:', calculateGrade(85));

function createUsername(first, last){

  return first.slice(0,3)+last.slice(0,3)+(first.length+last.length);
}
console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));