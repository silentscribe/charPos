// This function is designed to give the index locations for each letter in a string,
// specifically using objects.

var countLetters = function(sentence) {
  var arr = sentence
              .toString()
              .replace(/\s/g, "")
              .toLowerCase()
              .split("");
              
  var letterPos = {};

  for (let i = 0; i < arr.length; i++){
    var current = arr[i];

    // letterPos[current] = !letterPos[current] ? [i] : letterPos[current].concat([i]) // another way to do this
    if (!letterPos[current]){
      letterPos[current] = [];
    }
    letterPos[current].push(i);  
  }

  return letterPos;
};

// console.log(countLetters(9998877));
console.log(countLetters("Lighthouse in the House"));
