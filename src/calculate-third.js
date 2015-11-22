function even_group_calculate_average(arr) {
    var middle = [];
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 1 && arr[i] % 2 === 0) {
            middle.push(arr[i]);
        }
    }

    if (middle.length === 0) {
        return [0];
    } else {
        middle.sort(function (a, b) {
            return a - b;
        });

        var max_number = middle[middle.length - 1];
        var max_units = calculate_order_of_units(max_number);

        for (var x = 0; x < max_units; x++) {
            var middle_arr = [];

            for (var y = 0; y < middle.length; y++) {
                if (calculate_order_of_units(middle[y]) === x + 1) {
                    middle_arr.push(middle[y]);
                } else if (calculate_order_of_units(middle[y]) > x + 1) {
                    break;
                }
            }
            if (middle_arr.length !== 0) {
                var average = middle_arr.reduce(function (a, b) {
                        return a + b;
                    }) / middle_arr.length;

                result.push(average);
            }
        }

        return result;
    }
}

function calculate_order_of_units(number) {
    return number.toString().length;
}
