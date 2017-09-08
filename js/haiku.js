export class Haiku {


isVowel (letter){
  const vowels = ["a","e","i","o","u","y"];
  let check = 0;
  vowels.forEach(function(vowel) {
    if (letter === vowel) {
      check += 1;
    }
  });
  return (check > 0);
}

getNumberOfSyllablesInAWord(word){
  let wordSplit = word.split("");
  let syllables = 0;
  let length = wordSplit.length;

  //pop off "LE" at end of word condition
    if ( wordSplit[length-2] === "l" && wordSplit[length -1]=== "e"){
      console.log("DEBUG,---LE condition ");
       syllables += 1;
      wordSplit.pop();
      wordSplit.pop();
  // pop off silent "E" at end of word condition
    } else if(wordSplit[length - 1] === "e"){
      console.log("DEBUG,---Silent e ");
              wordSplit.pop();
    }
    //look for vowel-vowel /vowel-consonant combinations
    for (let i = 0; i < wordSplit.length; i++ ){
        if ( (i === (wordSplit.length - 1)) && this.isVowel(wordSplit[i])) {
            syllables += 1;
        }  else {
            //increment +1 if VC OR VV
            let vv = this.isVowel(wordSplit[i]) && this.isVowel(wordSplit[i + 1]);
            let vc = this.isVowel(wordSplit[i]) && !this.isVowel(wordSplit[i + 1]);
            if (vv ) {
              syllables += 1;
              console.log("DEBUG,---syllables plus VV ");
              i++;
            } else if ( vc )  {
              syllables += 1;
              console.log("DEBUG,---syllables plus VC ");
            }
        }//else (not last letter)
      }//for
  return syllables;
}

// getNumberOfSyllablesInALine(line){
//   let words = line.split(" ");
//   console.log("DEBUG---->"+words[0]+words[1]);
//   let syllablesForLine = 0;
//   words.forEach(function(word) {
//     console.log("DEBUG---->"+word);
//     var count = this.isVowel('a');
//   });
//   return syllablesForLine;
// }


}//haiku
