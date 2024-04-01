function titleCase(str){
    //splits the string into individual words at every space
    //maps through thr splited words and returns the words each having a lowercase lettter at character at (0)
    //slices the returned words at (1) thus returning the rest of the word from index (1) and later changes it to upperCase
    let titleCasedWords=str.split(' ').map(splitedWord=>{
        return splitedWord.charAt(0).toLowerCase() + splitedWord.slice(1).toUpperCase()
    });
    //returns the titleCasedwords after they have been splitted,mapped through and changed to upper and lowercases
    //joins the words(titleCasedWords) back into a sentence and jois them at every space(' ')
    return titleCasedWords.join(' ')
}
console.log(titleCase("a quick brown fox"))