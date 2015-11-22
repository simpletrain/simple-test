function single_element(arr) {
    var middle = [];
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            middle.push(arr[i]);
        }
    }

    for (var x = 0; x < middle.length; x++) {
        if (middle.indexOf(middle[x]) === middle.lastIndexOf(middle[x])) {
            result.push(middle[x]);
        }
    }

    return result;
}
