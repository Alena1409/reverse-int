module.exports = function reverse (n) {
    let result = '';
    let a = String(n);

    if (a[0] == '-') {
        i = 1;
        while (i < a.length) {
            result = a[i] + result;
            i = i + 1;
        }
    } else {
        i = 0;
        while (i < a.length){
            result = a[i] + result;
            i = i + 1;
        }
    }
    return result;
}