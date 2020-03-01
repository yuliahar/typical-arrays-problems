
exports.min = function min (array) {
    let min;
    if (array === undefined || array.length == 0)
        return 0;
    else {
        min = array[0];
        array.forEach(elem => {
            if (elem < min) min = elem;
        })
    }
    return min;
}

exports.max = function max (array) {
    let max;
    if (array === undefined || array.length == 0)
        return 0;
    else {
        max = array[0];
        array.forEach(elem => {
            if (elem > max) max = elem;
        })
    }
    return max;
}

exports.avg = function avg (array) {
    let avg;
    if (array === undefined || array.length == 0)
        return 0;
    else {
        let sum = 0;
        array.forEach(elem => {
            sum += elem;
        })
        avg = sum / array.length;
    }
    return avg;
}
