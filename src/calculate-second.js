function calculate_median(arr) {
    var result = [];
    for(var i =0;i < arr.length; i++){
        if(i%2 === 1){
            result.push(arr[i]);
        }
    }

    result.sort(function(a, b) {
        return a - b;
    });

    if(result.length%2 === 1){
        return result[(result.length-1)/2];
    } else {
        return (result[result.length/2]+result[result.length/2-1])/2;
    }

}
