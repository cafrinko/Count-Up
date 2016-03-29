$(document).ready(function() {

//     var sentence = "How ir?"
//     var vowels = ["a","e","i","o","u"]
//     var sentenceEdits = sentence.split("");
//
//     for (var i = 0; i < sentenceEdits.length; i++ ) {
//       for (var x = 0; x < vowels.length; x++) {
//         if (sentenceEdits[i] === vowels[x]) {
//           sentenceEdits[i] = "-";
//           //alert(sentenceEdits);
//         }
//       }
//     }
//     var str = sentenceEdits.join("");
//     $("#stringEdit").text(str);
//     $(".output").show();
// });
//




    var sent = "What's up?";
    var sentSplit = sent.split("");
    //var result = sentSplit.replace("-");

    for (var i = 0; i < sentSplit.length; i++) {
      if (sentSplit[i] = ('a') || sentSplit[i] = ('e') || sentSplit[i] = ('i') || sentSplit[i] = ('o') || sentSplit[i] = ('u')) {
        sentSplit[i] = "-";
      }
      }

      var stringBack = sentSplit.join("");
          $("#stringEdit").text(stringBack);
          $(".output").show();
      });
//       $("#stringEdit").text(result);
//       $(".output").show();
//
//   });
//
//
//    $(".string").val();
//
//     $(".string").submit(function(event) {
//       event.preventDefault();
//
// });
//
// console.log("cool");

//
// var newSentence = sentenceEdits.map(function(sentenceEdit) {
//   sentenceEdits.replace(vowels,'-');
//   alert(newSentence);
//   return newSentence;
