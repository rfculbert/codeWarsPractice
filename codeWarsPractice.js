// function disemvowel(str){
//     if(str.includes(a) || str.includes(e) || str.includes(i) || str.includes(o) || str.includes(u) || str.includes(A)|| str.includes(E) || str.includes(I) || str.includes(O) || str.includes(U)){

//     }
// }

// console.log(disemvowel())


// function disembowel(str) {
//     let newStr = str.replace(/[aeiou]/gi, '')
//     return newStr
// }

// console.log(disembowel('hello there, my name is robert'))

// In a small town the population is p0 = 1000 at the beginning of a year. 
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants?


// function nbYear(p0, percent, aug, p) {
//     let years = 0
//     while (p0 < p) {
//         p0 += p0 * (percent / 100) + aug
//         p0 = Math.floor(p0)
//         years += 1
//     }
//     return years;
// };

// console.log(nbYear(1000, 2, 50, 1200))

console.log('-------')

// function uniq(str){
//     for (let i = 0; i < str.length; i++){
//         for (let j = i + 1; j < str.length; j++){
//             if (str[i] === str[j]){
//                 return false;
//             } 
//         }
//     }
//     return true;
// }

// console.log(uniq('Bob'))
// console.log(uniq('bob'))

// function findUnique(str){
//     let unique = ''
//     for (let i = 0; i < str.length; i++){
//         if(unique.includes(str[i]) === false){
//             unique += str[i]
//         }
//     } return unique.size === str.length
// }
// console.log('------')
// console.log(findUnique('Boarde'))


// console.log('------')

// function hasUniqueChars(word) {
//     let uniqueChars = new Set([])
//     for (let i = 0; i < word.length; i++) {
//       uniqueChars.add(word[i])
//     }
//     return uniqueChars.size === word.length
//   }

const isPalindrome = (str) => {
    for (let i = 0; i < str.length; i++){
        for (let j = str.length -1; j >= 0; j--){
            if (str[j] === str[i]){
                i++
            } else {
                return false;
            }
        }
    } 
    return true;
}

console.log(isPalindrome('racecar'))

const isPalindromeTwo = (str) => {
    for (let i = 0; i < str.length; i++) {
      if(str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    } 
    return true;
}

console.log(isPalindromeTwo('racecar'))

const isPalindromeThree = (str) => {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
      console.log(str[i], str[str.length - 1 - i]);
      if(str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    } 
    return true;
}