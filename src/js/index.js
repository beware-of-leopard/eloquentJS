// Javascript Entry Point


////Ch 2 


console.log("chapter 2 exercise: add a '#' to the variable with every loop until there are seven of them");

    let hashtags = "";

	for (var i=0; i<7; i++)
	  console.log(hashtags+="#");

////FizzBuzz

for(let i=1; i<=100; i++){

  if (i%3===0 && i%5===0)
    console.log("FizzBuzz")
  else if(i%3===0)
    console.log("Fizz")
  else if(i%5===0)
    console.log("Buzz");
  else
    console.log(i);

}

///FizzBuzz with recursion

let FizzBuzzArray = [];

function fizzBuzz(n){

  if(n>=101){
    console.log(FizzBuzzArray)
    return;
  }
    
  if (n%3===0 && n%5===0)
    FizzBuzzArray.push("FizzBuzz");
  else if(n%3===0)
    FizzBuzzArray.push("Fizz")
  else if(n%5===0)
    FizzBuzzArray.push("Buzz");
  else
    FizzBuzzArray.push(n);
  
  fizzBuzz(n+1);
}

fizzBuzz(1);


////Chess Board grid creator

let gridLength;
let grid = [];


///first function creates the entire grid with the spaces and hashtags
function gridMaker(n){
  
    gridLength = n*n;
    
    for(var i=0;i<gridLength;i++){
      
      if (i%2===0){
        
        grid.push('#')
        
      }else{
        
        grid.push(' ');
        
      }
      
      
    }
    
    gridDivider(n, grid);
  
}

gridMaker(8);

///second function divides the grid into lines
function gridDivider(n, grid){
  
  let newLine;
  
  for(let i=0;i<n;i++){
    
    //account for even number bug
    if (n%2===0 && i%2===0){

      newLine = grid.splice(0,n);
      console.log(newLine.reverse());
      
    }else{
  
      newLine = grid.splice(0,n);
      console.log(newLine);
    }
  }
  
}