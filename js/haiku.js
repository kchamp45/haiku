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
  for (let i = 0; i < length; i++ ){
    //take care of when i == (length -1) =last letter check
    if ( wordSplit[length-2] === "l" && wordSplit[length -1]=== "e"){
        syllables += 1;
    } else {
        if ( i === length - 1 ) {
          if(this.isVowel(wordSplit[i]) && wordSplit[i] !== "e"){
            console.log("lastletter check, not e");
            syllables += 1;
           }
        } else {
        //increment +1 if VC OR VV
            let vv = this.isVowel(wordSplit[i]) && this.isVowel(wordSplit[i + 1]);
            let vc = this.isVowel(wordSplit[i]) && !this.isVowel(wordSplit[i + 1]);
            // console.log("DEBUG, else  vv--->"+vv+"letter is  "+wordSplit[i]);
            // console.log("DEBUG, else  vc--->"+vc+"nextletter is  "+wordSplit[i + 1]);
            if (vv ) {
              syllables += 1;
              i++;
            } else if ( vc )  {
              syllables += 1;
            }
        }//else (not last letter)
      }
  }//for
  return syllables;
}

}//haiku
