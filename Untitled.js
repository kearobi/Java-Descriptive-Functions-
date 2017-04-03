function greaterNum(num1, num2) {
  if (num1 > num2){
    console.log(num1)
  } else {
    console.log(num2)
  }
}

function helloWorld (lang) {
  // var lang = "language";
  if (lang === "jm" ) {
  alert ("Hola mon")
} else if(lang === "es") {
  alert ("Hola mundo")
} else {
  alert ("helloWorld")
}
}

function assignGrade (grade) {
  if (grade >= 90) {
    alert ("A")
  } else if (grade >= 80) {
    alert ("B")
  } else
    alert ("C")

}

function pluralize (noun, number){
  if (number < 2) {
    console.log(noun)
  } else (number>=2)
    console.log(noun + "s")
}

function integer(number){
  if (number % 2 == 0 ) {/* 1 is odd*/
    console.log(number + " is even")
  } else{
    console.log(number + " is odd")
  }
}

for (x=1; x <= 100; x++){
    if( x % 3 == 0 ){
        console.log("Fizz")
    }
    if( x % 5 == 0 ){
        console.log("Buzz")
    }
    if( ( x % 3 != 0 ) && ( x % 5 != 0 ) ){
        console.log("FizzBuzz")
    }
}


function guess(){
  var random = Math.floor(Math.random() * 3)
  var number= prompt("Guess a number")
  var limit= 1
  while (limit< 3 && number!=random) {
    if (number< random) {
      number= prompt("Too low, try again")
      limit = limit + 1
    }
    else if (number> random) {
      number= prompt("Too high, try again")
      limit = limit + 1
    }
    else if (number== random){
      alert ("WINNER WINNER WEINER DINNER")
    }
    else {
      alert ("Game over loser")
    }
  }

}
