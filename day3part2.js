var treeline = [/*...*/]; //see day3input.txt

var iter = 0; //tracks index of each # or . 
var amt_of_trees = 0; //finds amount of trees 

var down_level = 2;
var right_level = 1;

//loops through each array treeline (path of toboggan - down down_level)
for(var i=0; i<treeline.length; i += down_level) {

    var x = treeline[i].length;

    //checks if index value 'iter' is greater than length of array (out of bounds)
    if(iter > (x - 1)) {
        iter -= 31;
    } 

    sep = treeline[i].split(""); //separates treeline into array 

    //checks if value at index location 'iter' of array sep is a tree (#)
    if(sep[iter] === "#") {
        amt_of_trees++;
    }

    //follows path of toboggan (right_level to the right )
    iter += right_level;
}

console.log(amt_of_trees);
   
/**
 * NOTES:
 * Much easier, accomplished in less than 30 minutes
 * Found pattern that each did -31
 * Solved first try
 */