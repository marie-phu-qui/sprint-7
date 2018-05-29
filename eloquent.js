//Find smallest occurence out of two number

function min(a, b){
    return Math.min(a, b);
    };
console.log(min(0, 10));
console.log(min(0, -10));


// Recursive isEven function, not working for negative number
function isEven(N) {
    function zeroOrOne(N) {
      if (N == 0) {
        return N % 2 == 0;
      } else if (N == 1) {
        return N % 2 == 0;
      } else {
        return zeroOrOne(N - 2);
      }
    }
    return zeroOrOne(N);
  }

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-3)); 

//Recursive isEven Function, works for whole number positive and negative
function isEven(N) {
    if (N>0){
    function zeroOrOne(N) {
      if (N == 0) {
        return N % 2 == 0;
      } else if (N == 1) {
        return N % 2 == 0;
      } else {
        return zeroOrOne(N - 2);
      }
    }
    return zeroOrOne(N);
    }
    else {  function zeroOrOne(N) {
      if (N == 0) {
        return N % 2 == 0;
      } else if (N == 1) {
        return N % 2 == 0;
      } else {
        return zeroOrOne(N + 2);
      }
    }
    return zeroOrOne(N);
    }   
  }

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1)); 

// Counting number of 'B' occurence in string
/*
    function countBs(str) {
        let count = 0;
        for(i=0; i<str.length; i++) {
        if(str[i] == 'B') {
            count ++;
        }
        else {
        };
        };
        return count;
    };
*/
function countBs(str) {
    return countChar(str, "B");
}

// Counting number of chosen occurence in string
function countChar (string, a){
    let count = 0;
    let aLength = a.length;
    for(i=0; i<string.length; i++) {
    	var stringCuts = string.slice(i, i + aLength);
        if(stringCuts == a) {
          count ++;
        }
        else {
        };
    };
    return count;
};   
      
    console.log(countBs("BBC"));
    // → 
    console.log(countChar("kakkerlak", "k"));
    // →4