// Complete the solution so that the function will break up camel casing, using a space between words.

// ```
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// ```

function solution(string) {
    if (string === "") {
        return "";
    } else {
        let result = string[0]
        for (let i = 1; i < string.length; i++) {
            result += string[i] == string[i].toUpperCase() ? ` ${string[i]}` : string[i];
        }
        
        return result;
    }
}

// Done