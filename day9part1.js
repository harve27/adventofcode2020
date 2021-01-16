var xmas = []; //see day9input.txt 

//goal: iterate through each value of xmas[] and check if the number is any of the sum of the 25 numbers before it...

function checkSum(arr, int, idx) {

    //let's pretend it inputs (xmas, 6, 25)

    for(var j=idx-25; j < idx; j++) {
        for(var k=idx-25; k<idx; k++) {
            if(arr[j] + arr[k] === int && xmas[j] !== xmas[k]) {
                return true;
            }
        }
    }

    return false;

}

for(var i=25; i<xmas.length; i++) {
    if(checkSum(xmas, xmas[i], i) === false) {
        console.log(xmas[i]);
        console.log(i);
        break;
    }
}

/**
 * Right on the first try!
 * Less than 20 minutes to finish. closer to 15
 * Easy - no console.log necessary
 * Date of completion: 12/17/2020 (very behind as you can see)
 */
