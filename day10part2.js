//UNFINISHED

var messy_jolts = []; //see day10input.txt

var jolts = messy_jolts.sort((a,b) => a - b);

var main_log = [1]; //change for real thing
var log = [];

function returnElgNum(arr, keynum) {
    if(arr.includes(keynum+1)) {
        log.push(keynum+1);
    } 
    
    if(arr.includes(keynum+2)) {
        log.push(keynum+2);
    } 
    
    if(arr.includes(keynum+3)) {
        log.push(keynum+3);
    }
    
    if(keynum === arr[arr.length - 1]) {
        log.push(keynum);
    }
    
    /*else {
        log.push(keynum);
    }*/

    
}

for(var i=0; i<main_log.length; i++) {
    returnElgNum(jolts, main_log[i]);

    if(i+1 === main_log.length && log.length > 0) {

        if(main_log.every((val, i, main_log) => val === main_log[0]) && main_log.length > 1) {
            break;
        }

        main_log = log.splice(0);
        log = [];
        i = -1;
    }

}

console.log(main_log.length);






//ILOG
/**
 * for loop from main_log:
 * Put in 1, it pushes 2, 3, 4,  ==> log = [2, 3, 4]
 * Put in 2, it pushes 3, 4 ==> log = [2, 3, 4, 3, 4]
 * Put in 3, it pushes, 4 => log = [2, 3, 4, 3, 4]
 * replace all main_log numbers with log, delete all values of log
 * main_log = [2,3,4,3,4], log = []
 * Now iterate through each value of main_log and insert into log, then do switch
 * main_log = [3,4,4,7,4,7,7], log = []
 */

/*

var log = [];

function returnElgNum(arr, keynum) {
    var oths = [];
    if(arr.includes(keynum + 1)) {
        oths
    }
}

 for(var i=0; i<jolts.length; i++) {
    returnElgNum(jolts, jolts[i]);
 }


 /**
 * Right off the bat this is really hard.
 * How do I do it - but in an efficient way?
 * this will be very tough. ok let's think about it.
 * 
 * 
 * Iteration 1: (3 posibilities)
 * 1
 * 2
 * 3
 * 
 * Iteration 2: (6 posibilities)
 * 
 * 1, 2
 * 1, 3
 * 1, 4
 * 
 * 2, 3
 * 2, 4
 *  
 * 3, 4
 * 
 * Iteration 3: (7 posibilties)
 * 
 * 1, 2, 3
 * 1, 2, 4
 * 
 * 1, 3, 4
 * 
 * 1,4,7
 * 
 * 2,3,4
 * 
 * 2,4,7
 * 
 * 3,4,7
 * 
 * 
 * so how do I do this?
 */
