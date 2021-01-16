//CODE does not return answer

var xmas = []; //see day9input.txt 

//goal: iterate through each value of xmas[] and check if there is "contiguous set" which adds to 14144619

function getSum(arr, startIdx, endIdx) {
    var sum = 0;
    for(var k=startIdx; k<endIdx+1; k++) {
        sum += arr[k];
    }

    return sum;
}


for(var i=0; i < 504; i++) {
    for(var k= i+1; k < 504; k++) { //fix nums later
        if(getSum(xmas, i, k) === 14144619) {
            console.log(xmas[i]);
            console.log(xmas[k]);
        }
    } 
}

//needed to find sum of largest and smallest number, didn't write code

/**
 * Bit disappointed with this one. (see right above)
 * Took around 30 minutes to solve.
 * Had some trouble with infinite answers, simple mistake solved
 * See above for part I didn't do in code, but just by looking 
 * Overall not too bad though in terms of difficulty
 * Date of completion: 12/17/2020
 */