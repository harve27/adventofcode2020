var manifest = []; //see day5input.txt

var split;
var row_list;
var final_row = [];
var final_column = [];
var seatID_arr = [];

function createRowList() {
    var arr = [];
    for(var i=0; i<128; i++) {
        arr.push(i);
    }
    return arr;
}

function convertInt(single) {
    var x = single.toString();
    return parseInt(x);
}


//getting rows

for(var j=0; j<manifest.length; j++) {
    row_list = createRowList();
    split = manifest[j].split("");

    for(var q=0; q<7; q++) { //8 refers to just for row

        var val = row_list[0] + row_list[row_list.length - 1];
        var imp_num = (val-1)/2;
        var imp_index = row_list.indexOf(imp_num);
    
        //deleting array so only back 
        if(split[q] === "F") {
            row_list.splice(imp_index+1, row_list.length-1);
        }
    
        //deleting array so only front 
        if(split[q] === "B") {
            row_list.splice(0, imp_index+1);
        }
    
    }

    final_row.push(convertInt(row_list));
}


//getting columns 

var column_arr;

for(var r=0; r<manifest.length; r++) {
    split = manifest[r].split("");
    column_arr = [0,1,2,3,4,5,6,7]

    for(var j=7; j<10; j++) { //8 refers to just for row

        var val = column_arr[0] + column_arr[column_arr.length - 1];
        var imp_num = (val-1)/2;
        var imp_index = column_arr.indexOf(imp_num);
    
        //deleting array so only back 
        if(split[j] === "L") {
            column_arr.splice(imp_index+1, column_arr.length-1);
        }
    
        //deleting array so only front 
        if(split[j] === "R") {
            column_arr.splice(0, imp_index+1);
        }
    
    }

    final_column.push(convertInt(column_arr));
}

//calculating seat ID and pushing to array
for(var a=0; a < final_row.length; a++) {
    seatID_arr.push(
        (final_row[a] * 8) + final_column[a]
    );
}

var sorted = seatID_arr.sort(function(a, b){return a - b});
console.log(sorted[sorted.length-1]);

/**
 * NOTES:
 * Difficult but less so than Day 4 and 3
 * Took roughly 90 minutes to finish part 1
 * Very inefficient and un-abstracted code, but it works
 * Maybe...come back later and clean it up?
 * Day completed: 12/7? or 12/8 I guess, at 12:30 am
 */

