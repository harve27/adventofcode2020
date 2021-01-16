var boot_code = []; //see day8input.txt

const boot_code_copy = []; //""


function isolateQuant(str) {
    if(str.includes("-")) {
        var idx = str.indexOf("-");
        return parseInt(str.substring(idx));
    } else {
        var idx = str.indexOf("+");
        return parseInt(str.substring(idx+1));   
    }
}

function changeInstruc(input) {
    if(input.indexOf("nop") === 0) {
        return "jmp" + input.substring(3);
    } else if(input.indexOf("jmp") === 0) {
        return "nop" + input.substring(3);
    } else {
        return input;
    }
}

function replaceArr(arr1, arr2) {
    arr1 = [];
    return arr1.concat(arr2);
}

var acc = 0;
var finished_code = [];
var jmpnop = [];


//pushes indexes of every 'jmp' and 'nop' into jmpnop[]
for(var b=0; b<boot_code.length; b++) {
    if(boot_code[b].indexOf("nop") === 0) {
        jmpnop.push(b);
    }

    if(boot_code[b].indexOf("jmp") === 0) {
        jmpnop.push(b);
    }
}


for(var a=0; a<boot_code.length; a++) {

    //if it is neverending loop
    if(finished_code.includes(a)) {
      
        boot_code = replaceArr(boot_code, boot_code_copy);

        boot_code[jmpnop[0]] = changeInstruc(boot_code[jmpnop[0]]);
        jmpnop.shift();

        finished_code = [];
        a = -1;
        acc = 0;

        continue;
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
        if(a != 0) {
        a = (a-1) + isolateQuant(boot_code[a]);
        } 
    }
    
}

console.log(acc);

/**
 * Took a bit longer than day 1, but not too hard.
 * Just a bit of debugging, some console.logs, then done
 * Didn't work on the 16th and most of the 17th
 * Date of completion: 12/17/2020
 */




