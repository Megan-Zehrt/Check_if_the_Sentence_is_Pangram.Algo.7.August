// 1832. Check if the Sentence is a Pangram



// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if the sentence is a pangram, or false otherwise.








/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    
    let alphabet = new Map([
        ['a', 1],
        ['b', 1],
        ['c', 1],
        ['d', 1],
        ['e', 1],
        ['f', 1],
        ['g', 1],
        ['h', 1],
        ['i', 1],
        ['j', 1],
        ['k', 1],
        ['l', 1],
        ['m', 1],
        ['n', 1],
        ['o', 1],
        ['p', 1],
        ['q', 1],
        ['r', 1],
        ['s', 1],
        ['t', 1],
        ['u', 1],
        ['v', 1],
        ['w', 1],
        ['x', 1],
        ['y', 1],
        ['z', 1]
    ])

    let sMap = new Map()

    for(let i = 0; i < sentence.length; i++){

        if(sMap.has(sentence[i])){
            let count = sMap.get(sentence[i])
            sMap.set(sentence[i], count+1)
        }else{
            sMap.set(sentence[i], 1)
        }
    }

    for(let [letter, count] of alphabet){

        if(!sMap.has(letter)){
            return false
        }
    }

    return true
};