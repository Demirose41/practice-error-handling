// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}



try{
  let res = sum(null);
  console.log(res);
} catch (error) {
  if (error instanceof TypeError ){
    console.error(error.name + ': ' + error.message + " Loser...");
  }
}

// 2.
// tests
// sayName("Alex");
// sayName(1);
function sayName(name){
  if (name !== "string"){
    throw Error("Invalid name! Must be a string! \n Loser...");
  } else {
    console.log(name);
  }
}

try{
sayName("Alex");
sayName(1);
} catch (error){
  console.error(error.message);
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet(null);
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Hello World!")
}
