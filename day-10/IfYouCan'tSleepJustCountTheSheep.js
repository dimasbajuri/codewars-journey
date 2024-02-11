// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num) {
    let result = [];

    for (let i = 1; i <= num; i++) {
        sheepCounter = i + ' sheep...';
        result.push(sheepCounter);
    }

    return result.join('');
}

console.log(countSheep(2))