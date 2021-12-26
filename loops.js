/**
 * 
 * In this function, you will have to draw a vertical line with `n` length
 * for example `drawVLine(5) should print out 
  # 
  # 
  # 
  # 
  # 
 */
function drawVLine(n) {

for (let i = 0; i < n; i++) {
  console.log("#");
}

}
//drawVLine(5);


/**
 *
 * In this function, you will have to draw a horizontal line with `n` length
 * for example `drawHLine(5) should print out # # # # # (there are spaces here!)
 */
function drawHLine(n) {

for (let i = 0; i < n; i++) {
  Print("#");
}
console.log("");

}
//drawHLine(5);
/**
 * 
 * In this function, you will have to draw a square with a length of `n` 
 * for example `drawSquare(5) should print out 
 
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #

 */
function drawSquare(n) {
  const squareArray = [];
  let result;
  for (let i = 0; i < n; i++) {
    result = "";
    for (let j = 0; j < n; j++) {
      result += "#  ";
    }
    squareArray.push(result);
  }
  return squareArray.join("\n");
}
//drawSquare(5);


/**
 * 
 * In this function, you will have to draw a triangle with a length of `n` 
 * for example `drawLeftTriangle(5) should print out 
 
  #  
  #  #  
  #  #  #  
  #  #  #  #  
  #  #  #  #  #

 */
function drawLeftTriangle(n) {
  for (let r = 0; r < n; r++) {
    
    for (let c = 0; c < n; c++) {
      process.stdout.write("#  ");
    }
    console.log();
  }
}
drawLeftTriangle(5);
/**
 * 
 * In this function, you will have to draw a tree with a length of `n` 
 * for example `drawTree(5) should print out 
 
     #   
    # #   
   # # # 
  # # # # 
     #

 */
function drawTree(n) {
  for (let r = 0; r < n; r++) {
    for (let s = 0; s > r; s++) {
      console.log(" ");  
      for (let c = 0; c <= r; c++) {
        console.log("#  ");
      }
      console.log();
    }
    console.log();
  }
  for (let i = 0; i < n; i++) {
    console.log("#");
    
  }
}
/**
 *
 * In this example, you will create 4 arrays, `yellowCards`, `greenCards`, `redCards`, `blueCards`
 * (BONUS) Try to optimize the code with doing it with one gigantic loop
 */
function fillUnoDeck() {
  let greenCards = [];
  let yellowCards = [];
  let redCards = [];
  let blueCards = [];
  
    for (let i = 0; i < 10; i++) {
      
      for (let j = 0; j < 2; j++) {
        greenCards.push(i);
        redCards.push(i);
        yellowCards.push(i);
        blueCards.push(i);
      } 
    }
console.log(greenCards,redCards,yellowCards,blueCards);
}

