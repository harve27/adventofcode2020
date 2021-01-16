var form = ""; //see day6input.txt

function cleanCode(str) {
    var x = str.split(" ");
    var newArr = [];

    for(var i=0; i < x.length; i++) {
        var d = x[i].replace(/\n/g, " ");
        newArr.push(d);
    }

    return (newArr.join(' ')).split(' ');
}

var customs = cleanCode(form); //reused cleanCode from day4
var yes = [];
var total_count = [];
var split;

for(var i=0; i<customs.length; i++) {
    
    if(customs[i] === '') {
        total_count.push(yes.length);
        yes = [];
    } else {

    split = customs[i].split('');
    
    for(var j=0; j<split.length; j++) {
        if(yes.includes(split[j]) === false) {
            yes.push(split[j])
        }
    }

    }

}

var sum = 0;
//summing them
for(var q=0; q<total_count.length; q++) {
    sum += total_count[q];
}

console.log(sum);

/**
 * NOTES:
 * Easier than others in the past. Finished in roughly 30 mins.
 * Was able to reuse some strategies from others and things like cleanCode()
 * Went much smoother than the others. Gold star first try.
 * Date of completion: 12/8/2020
 */