/*Task

First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.
*/
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    
    let vowels = ["a", "e", "i", "o", "u"];

    for(let el of s){
        if(vowels.includes(el)){
            console.log(el)
        }
    }
       for(let el of s){
        if(!vowels.includes(el)){
            console.log(el)
        }
    }
        
   
    
    }