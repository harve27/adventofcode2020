var batch = ""; //see day4input.txt

var phabet = ['g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function cleanCode(str) {
    var x = str.split(" ");
    var newArr = [];

    for(var i=0; i < x.length; i++) {
        var d = x[i].replace(/\n/g, " ");
        newArr.push(d);
    }

    return (newArr.join(' ')).split(' ');
}

function checkValues(cod, val) {
    switch(cod) {
        case 'byr':
            if(val >= 1920 && val <= 2002) {
                return true;
            } else {
                return false;
            }
        
        case 'iyr': 
            if(val >= 2010 && val <= 2020) {
                return true;
            } else {
                return false;
            }
        
        case 'eyr':
            if(val >= 2020 && val <= 2030) {
                return true;
            } else {
                return false;
            }
        
        case 'hgt': 
            var indexOfUnit, inter, height;
            if(val.includes("cm")) {
                indexOfUnit = val.indexOf("cm");
                inter = val.substring(0, indexOfUnit);
                height = parseInt(inter);
                
                if(height >= 150 && height <= 193) {
                    return true;
                } else {
                    return false;
                }

            } else if (val.includes("in")) {
                indexOfUnit = val.indexOf("in");
                inter = val.substring(0, indexOfUnit);
                height = parseInt(inter);

                if(height >= 59 && height <= 76) {
                    return true;
                } else {
                    return false;
                }

            } else {
                return false;
            }

        case 'hcl':
            var spl = val.split("");
            var a,b;
            if(val.includes("#")) {
                if(val.length < 8) {
                    for(a=0; a<spl.length; a++) {
                        for(b=0; b<phabet.length; b++) {
                            if(spl[a] === phabet[b]) {
                                return false;
                            }
                        }
                    }

                } else {
                    return false;
                }

                return true; 

            } else {
                return false;
            }

        case 'ecl':
            if(val === "amb" || val === "blu" || val === "brn" || val === "gry" || val === "grn" || val === "hzl" || val === "oth") {
                return true;
            } else {
                return false;
            }
        
        case 'pid':
            var arr = val.split('');
            if(!arr.some(isNaN)) {
                if(val.length === 9) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }

        case 'cid':
            return true;
    }
}

var i;
var valid = 0;
var indiv_pass = [];
var passport = cleanCode(batch);
var field, value;

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
        value = passport[i].substring(4);

        if(checkValues(field, value) === true) {
            indiv_pass.push(field);
        }

    }
}

console.log(valid);

/**
 * NOTES: 
 * Hardest part 2 done yet
 * Took upwards of 30-40 minutes
 * took a while to create checkValues()
 * problems identified throught console.log (like always)
 * little errors in both
 * Date of completion: 12/6/2020
 */



