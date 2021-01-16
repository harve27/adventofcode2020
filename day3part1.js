var treeline = [/*...*/]; //see day3input.txt

var iter = 0; //tracks index of each # or . 
var amt_of_trees = 0; //finds amount of trees 
var not_tree = 0;

//loops through each array treeline (path of toboggan - down 1)
for(var i=0; i<treeline.length; i++) {

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

    //follows path of toboggan (3 to the right )
    iter += 3;
}

console.log(amt_of_trees);

/**
 * NOTES:
 * Definitely the hardest solved so far. Maybe 4 hours?
 * Original solution was correct but inefficient, could not compute.
 * Difficult to determine how to do "out of bounds" ones
 * Next solution seemed correct, but one small error ruined it.
 * Caved in, searched up number answer (not code). 
 * But then I saw what was wrong with my code and it was same as number.
 * Solved 12/4/2020
 */