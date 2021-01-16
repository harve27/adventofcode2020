//UNFINISHED

var rules = []; //see day7input.txt

var store = [];
var idxValues = [];

function getTermsandQuant(str) {

    if(str.includes('no other bags')) {
        return [-1];
    }

    //change to incorporate no bags
    var x = str.split(' ');
    var inter = [];
    var termQuant = [];
    var contain = x.indexOf('contain');
    var count = 0;

    for(var j=0; j<x.length; j++) {

        if(Number.isInteger(parseInt(x[j]))) {

            if(count > 0) {
                inter = inter.join('');
                termQuant.push(inter.trim());
                inter = [];
                inter.push(x[j]);
                inter.push(' ');
            } else {
                count++;
                inter.push(x[j]);
                inter.push(' ');
            }

        } else {
            if(j > contain && x[j].includes('bag') === false) {
                inter.push(x[j]);
                inter.push(' ');
            } 

            if(x[j].substring(x[j].length - 1) === '.') {
                inter = inter.join('');
                termQuant.push(inter.trim());
                inter = [];
            }

        }
    }

    return termQuant; //returns ['4 drab blue']
}

function isolateTerm(arr) {
    var lazy = [];
    for(var f=0; f<arr.length; f++) {
        lazy.push(arr[f].substring(2));
    }

    return lazy;
}

function getIdxInArrs(keyword, tree) {
    var indexes = [];

    for(var c=0; c<tree.length; c++) {
        //var leng = tree[c].length;
        if(tree[c][tree[c].length - 1].includes(keyword)) {
            indexes.push(c);
        }
    }

    return indexes;
}

function duplicateTerms(example, parent, querms) {

    var cont = -1;
    var ar2;
    store = [];

    for(j=0; j<querms.length-1; j++) {
        cont++;

        if(cont % 2 === 0) {
            ar2 = [];
            for (var a = 0, len = example.length; a < len; a++) {
                ar2[a] = example[a].slice();
            }
            ar2.push(parent);
            store.push(ar2.length-1);
            //console.log('The program pushed ' + parent);
            //console.log('The program log: ' + store);

        } else {
            example = [];
            for (var b=0, len = ar2.length; b < len; b++) {
                example[b] = ar2[b].slice();
            }
            example.push(parent);
            store.push(example.length-1);
            //console.log('The program pushed ' + parent);
            //console.log('The program log: ' + store);
        }
    }

    if(cont === -1) {
        return example;
    }
    else if(cont % 2 === 0) {
        return ar2;
    } else {
        return example;
    }
}

function isolateConvertQuant(rool) {
    var num = rool.substring(0,1);
    return parseInt(num);
}

function getAndSumQuant(aarr) {
    var sums = [];
    var real_sum = 0;
    for(var h=0; h<aarr.length; h++) {
        sums.push(isolateConvertQuant(aarr[h]));
    }

    for(var m=0; m<sums.length; m++) {
        real_sum += sums[m];
    }
}

var workingBags = ['drab blue', 'posh purple', 'drab silver', 'wavy turquoise'];

var list = [];
var newList = []; 
var arrs = [
    ['4 drab blue'],
    ['4 posh purple'],
    ['2 drab silver'],
    ['4 wavy turquoise']
];
var mainIdx = [];
var counter = 0;
var total_quant;

//iterates through workingBags
for(var k=0; k<workingBags.length; k++) {

    //counter++;

    //iterates through each rule in "rules"
    for(var i=0; i<rules.length; i++) {

        //checks if specific rule has workingBags[k] term
        if(rules[i].indexOf(workingBags[k]) === 0) {

            list = getTermsandQuant(rules[i]);

            if(list[0] === -1) {
                break;
            } else {
                newList = isolateTerm(list);
            }
            
            total_quant = getAndSumQuant(list); 

            mainIdx = getIdxInArrs(workingBags[k],arrs); 
            var p1 = arrs[mainIdx];
            var arg = p1;

            idxValues = [];

            for(var f=0; f<mainIdx.length; f++) {
                var p1 = arrs[mainIdx[f]];
                var arg = p1;    
                arrs = duplicateTerms(arrs, arg, list); 
                idxValues.push(store);
            }

            for(var l=0; l<mainIdx.length; l++) {
                idxValues[l].unshift(mainIdx[l]);
            }

            for(var g=0; g < idxValues.length; g++) {
                for(var h=0; h < idxValues[g].length; h++) {
                    arrs[idxValues[g][h]].push(list[h]);
                }
            }

            workingBags = workingBags.concat(newList);

        }
    }

    /*
    if(counter === 9) {
        break;
    }
    */

}

console.table(arrs);
