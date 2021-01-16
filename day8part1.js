var boot_code = []; //see day8input.txt 

function isolateQuant(str) {
    if(str.includes("-")) {
        var idx = str.indexOf("-");
        return parseInt(str.substring(idx));
    } else {
        var idx = str.indexOf("+");
        return parseInt(str.substring(idx+1));   
    }
}


var acc = 0;
var finished_code = [];

for(var a=0; a<boot_code.length; a++) {

    if(finished_code.includes(a)) {
        finished_code.push(a);
        console.log(acc);
        break;
    }

    if(boot_code[a].indexOf("acc") === 0) {

        acc+= isolateQuant(boot_code[a]);
        finished_code.push(a);
    } 

    if(boot_code[a].indexOf("nop") === 0) {
        finished_code.push(a);
    }

    if(boot_code[a].indexOf("jmp") === 0) {
        finished_code.push(a);
        a = (a-1) + isolateQuant(boot_code[a]);
    }

}

/**
 * NOTES: Relatively easy, took less than 30 minutes
 * Still taking a break from day 7 part 2, which will take a while
 * Date of completion: 12/15/2020
 */

