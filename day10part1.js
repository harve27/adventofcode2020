var messy_jolts = []; //see day10input.txt

function joltCounter(stead) {
    if(stead === 1) {
        one++;
    } 
    
    if (stead === 3) {
        three++;
    } 
}

var er = 0;
var one = 0;
var three = 0;
var inc = 1;

//goal: find the ones and threes

for(var i=0; i<jolts.length; i++) {

    if(jolts[i] === er + inc) {

        joltCounter(inc);
        er = jolts[i];
        i = -1;
        inc = 1;
        continue;
    }
    
    //on the last one 
    if(jolts.length - 1 === i) {
        i = -1;
        inc++;

        if(inc > 3) {
            console.log('wtf');
            break;
        }
    }
}

console.log(one);
console.log(three+1); 

/**
 * NOTES: Pretty easy
 * Got it on second try, just needed
 * simple remedying of mistake.
 * Date of completion: 12/18/2020
 */

