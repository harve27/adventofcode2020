var batch = ""; //see day4input.txt


function cleanCode(str) {
    var x = str.split(" ");
    var newArr = [];

    for(var i=0; i < x.length; i++) {
        var d = x[i].replace(/\n/g, " ");
        newArr.push(d);
    }

    return (newArr.join(' ')).split(' ');
}

var i;
var valid = 0;
var indiv_pass = [];
var passport = cleanCode(batch);

for(i=0; i<passport.length; i++) {

    if(passport[i] === '') {

        if(indiv_pass.includes("cid") === false) {
            indiv_pass.push("cid");
        }

        if(
            indiv_pass.includes("byr") && indiv_pass.includes("iyr") && indiv_pass.includes("eyr") && indiv_pass.includes("hgt") && indiv_pass.includes("hcl")
            && indiv_pass.includes("ecl") && indiv_pass.includes("pid") && indiv_pass.includes("cid")
        ) {
            valid++;
        }

        indiv_pass = [];
    } else {
        field = passport[i].substring(0,3);
        indiv_pass.push(field);
    }
}

console.log(valid);

/**
 * NOTES:
 * Took much longer than the other one, worked two days to finish
 * Found a simple solution at the end, then solved
 * Challenge to get input into code (found solution with ``)
 * At the start I was checking spaces and double spaces, really bad work
 * Then I realized using join and split at last minute
 * Day: 12/6/2020
 */
