// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

function zero(x) {
    return x ? x(0) : 0;
}
function one(x) {
    return x ? x(1) : 1;
}
function two(x) {
    return x ? x(2) : 2;
}
function three(x) {
    return x ? x(3) : 3;
}
function four(x) {
    return x ? x(4) : 4;
}
function five(x) {
    return x ? x(5) : 5;
}
function six(x) {
    return x ? x(6) : 6;
}
function seven(x) {
    return x ? x(7) : 7;
}
function eight(x) {
    return x ? x(8) : 8;
}
function nine(x) {
    return x ? x(9) : 9;
}

function plus(y) {
    return function (x) {
        return x + y;
    }
}
function minus(y) {
    return function (x) {
        return x - y;
    }
}
function times(y) {
    return function (x) {
        return x * y;
    }
}
function dividedBy(y) {
    return function (x) {
        return parseInt(x / y);
    }
}
