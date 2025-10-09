// Problem 10: Check Vowel or Consonant

let ch ='o';

ch = ch.toLocaleLowerCase();

if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
    console.log("Vowel");
}else {
    console.log("Consonant");
}

// const Vowel = ["a","e","i","o","u"]

// function countVowels(sentence){
//     let count = 0;
//     const letters = Array.from(sentence);

//     letters.forEach(function(Value){
//         if(Vowel.includes(Value)){
//             count++;
//         }
//     })
//     return count;
// }

// console.log(countVowels("i love bangledesh"))