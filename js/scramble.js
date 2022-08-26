// const wordText = document.querySelector(".word");





const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)]; 
    console.log(randomObj);
    
}
//getting random objects from words
    // let wordArray = randomObj.word.split(''); //splitting each letter of random word

    // for(let i = wordArray.length - 1; i > 0; i--) {
    //   let j = math.floor(Math.random() * (i + 1)); //getting random numbers
    //   [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    // }
    // wordText.innerText = wordArray
    // console.log(wordArray, randomObj.word);