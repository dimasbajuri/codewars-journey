// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
// function rgb(r: number, g: number, b: number): string {
//     let result: string[] = [];
//     let draft: number[] = [r, g, b];
//     draft.map((value: number) => {
//         let couple: (number | string)[] = [];
//         let sixteen: number = Math.floor(value / 16);
//         if (sixteen === 10) {
//             couple.push("A");
//         } else if (sixteen === 11) {
//             couple.push("B");
//         } else if (sixteen === 12) {
//             couple.push("C");
//         } else if (sixteen === 13) {
//             couple.push("D");
//         } else if (sixteen === 14) {
//             couple.push("E");
//         } else if (sixteen === 15 || sixteen > 15) {
//             couple.push("F");
//         } else {
//             couple.push(sixteen);
//         }
//         let remainder: number = value - (sixteen * 16);
//         if (remainder === 10) {
//             couple.push("A");
//         } else if (remainder === 11) {
//             couple.push("B");
//         } else if (remainder === 12) {
//             couple.push("C");
//         } else if (remainder === 13) {
//             couple.push("D");
//         } else if (remainder === 14) {
//             couple.push("E");
//         } else if (remainder >= 15) {
//             couple.push("F");
//         } else if (Number.isNaN(remainder)) {
//             couple.push(value);
//         } else {
//             couple.push(remainder);
//         }
//         result.push(couple.join(""))
//     })
//     return result.join('');
// }
function rgb(r, g, b) {
    function toHex(value) {
        if (value >= 0 && value <= 9) {
            return value.toString();
        }
        else if (value === 10) {
            return "A";
        }
        else if (value === 11) {
            return "B";
        }
        else if (value === 12) {
            return "C";
        }
        else if (value === 13) {
            return "D";
        }
        else if (value === 14) {
            return "E";
        }
        else if (value >= 15) {
            return "F";
        }
        else if (value < 0) {
            return '0';
        }
    }
    var result = [];
    var draft = [r, g, b];
    draft.forEach(function (value) {
        var first = Math.floor(value / 16);
        var second = value - first >= 0 ? (first * 16) : 0;
        var conlusion = toHex(first) + toHex(second);
        result.push(conlusion);
    });
    return result.join('');
}
console.log(rgb(173, 255, 47));
