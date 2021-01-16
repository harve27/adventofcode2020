var rules = []; //see day7input.txt
    
function getLeadingTerm(str) {
    var x = str.indexOf("bags");
    return str.substring(0, x-1);
}

var workingBags = ["shiny gold"];
    
for(var k=0; k<workingBags.length; k++) {
    for(var i=0; i<rules.length; i++) {
        if(rules[i].includes(workingBags[k]) && rules[i].indexOf(workingBags[k]) !== 0) {
            var term = getLeadingTerm(rules[i]);

            //what I figured out was wrong
            if(workingBags.includes(term) === false) {
            workingBags.push(term);

            }
        }
    }
}


console.log(workingBags.length-1);

/**
 * NOTES:
 * Took a suspicious amount of time to solve
 * First time using recursive technique (adds to array as it goes)
 * I got the general part of the problem very fast, less than 30 mins
 * But the number I got kept not working - I was stumped
 * Came back next day - and finally figured it out
 * Took a very long time to think through it though
 * Date of completion: 12/9/2020
 */

    
    
    