/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        var arr = s.split("");
        arr.reverse();
        arr = arr.join("");
        console.log(arr);
    } catch (e) {
        console.log(e.message);
        console.log(s);
    }
}