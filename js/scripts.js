var separateWords = function(sentence){
  sentence.split(" ");
};

var separateLetters = function(words) {
  words.split("");
};

var pigify = function(words, letters) {
  for (var i=0; i<lengthofcurrentword.length; i++) {
    var wordNow = words[i];
    var first = letters[0]
  };
  // if (first letter = vowel) {
  // if () {
  //   add ay to the end
  // }
  // var letters = words[i].split("");
};

$(document).ready(function() {
  $("#formInput").submit(function(event) {
    event.preventDefault();
    var sentenceInput = $("#userInput").val();

    console.log(words);
    var result = pigify(sentenceInput);
    $("#result").text(result);
  });

});


// var first = letters[0] = /[aeiou]/gi;



//   $("#inputForm").submit(function(event) {
//     event.preventDefault();
//
//     var vowel= /[aeiou]/gi;
//     var baseInp2= $("#userInput").val();
//     var varTotal = baseInp2.match(vowel).length;
//     alert(varTotal);
//   });
// });


// $(document).ready(function() {
//   $("#inputForm").submit(function(event){
//     event.preventDefault();
//     var capVowels =/[aeiou]/gi
//     var baseInput = $("#userInput").val();
//     var vowelCount = baseInput.match(capVowels).length;
//     alert(vowelCount);
//   });
// });
