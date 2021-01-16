var form = ""; //see day6input.txt

var alphabet  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function cleanCode(str) {
    var x = str.split(" ");
    var newArr = [];

    for(var j=0; j < x.length; j++) {
        var d = x[j].replace(/\n/g, " ");
        newArr.push(d);
    }

    return (newArr.join(' ')).split(' ');
}

function getCommonLetter(arr, group) {

    var count = 0;
    var final_count = 0;

    for(var k=0; k < alphabet.length; k++) {
        for(var p=0; p < arr.length; p++) {
            if(alphabet[k] === arr[p]) {
                count++;
            }
        }

        if(count === group) {
            final_count++;
        }

        count = 0;
    }

    return final_count;
}



var customs = cleanCode(form); //reused cleanCode from day4
var yes = [];
var total_count = [];
var char_amt = 0;
var split;

for(var i=0; i<customs.length; i++) {

    if(customs[i] === '') {
        total_count.push(getCommonLetter(yes, char_amt));
        yes = [];
        char_amt = 0;
    } else {
    char_amt++;
    split = customs[i].split(""); 
    yes = yes.concat(split);
}
}


var sum = 0;

for(var q=0; q<total_count.length; q++) {
    sum += total_count[q];
}

console.log(sum);

/**
 * NOTES: 
 * Much harder to finish than Day 1
 * Took about 60 minutes
 * A bit difficult to reason through how to do getCommonLetter()
 * Figured out best way was with alphabet (prob not, but whatever)
 * Stupid mistakes cost me a lot of time - need to check before doing console.log
 * Date of completion: 12/8/2020
 */