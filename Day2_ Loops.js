/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {

    var vowels = "aeiou";

    for (var letter in s) {
        let n = vowels.indexOf(s[letter]);

        if (n > -1) {
            console.log(s[letter]);
        }
        
    }

    for (var letter in s) {
        let n = vowels.indexOf(s[letter]);

        if (n == -1) {
            console.log(s[letter]);
        }

    }
}