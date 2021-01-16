var arr = [/*... */]; //see day2input.txt

var str;
var place1, place2;
var password;
var iter;
var main_iter = 0;
var char;

for(str in arr) {
    iter = 0;
    if(arr[str].indexOf(":") === 5) {
        place1 = arr[str].substring(0,1);
        place2 = arr[str].substring(2,3);
        password = arr[str].substring(7);
        main_letter = arr[str].substring(4,5);
        
        place1 = parseInt(place1);
        place2 = parseInt(place2);
        password = password.split("");

        for(var i=0; i<password.length; i++) {

            if(password[i] === main_letter) {
                iter++;
            }
        }

        if(iter >= place1 && iter <= place2) {
            console.log(arr[str]);
            main_iter++;
        } /*else {
            console.log(arr[str] + "-----WRONG!");
        }*/
        
    } else if (arr[str].indexOf(":") === 6) {
        place1 = arr[str].substring(0,1);
        place2 = arr[str].substring(2,4);
        password = arr[str].substring(8);
        main_letter = arr[str].substring(5,6);
        
        place1 = parseInt(place1);
        place2 = parseInt(place2);
        password = password.split("");

        for(var i=0; i<password.length; i++) {

            if(password[i] === main_letter) {
                iter++;
            }
        }

        if(iter >= place1 && iter <= place2) {
            console.log(arr[str]);
            main_iter++;
        }/* else {
            console.log(arr[str] + "-----WRONG!");
        }*/

    } else if (arr[str].indexOf(":") === 7) {

        place1 = arr[str].substring(0,2);
        place2 = arr[str].substring(3,5);
        password = arr[str].substring(9);
        main_letter = arr[str].substring(6,7);
        
        place1 = parseInt(place1);
        place2 = parseInt(place2);
        password = password.split("");

        for(var i=0; i<password.length; i++) {

            if(password[i] === main_letter) {
                iter++;
            } 
        }

        if(iter >= place1 && iter <= place2) {
            console.log(arr[str]);
            main_iter++;
        } /*else {
            console.log(arr[str] + "-----WRONG!");
        }*/

    } else {
        console.log("err");
    }
}

console.log(main_iter);

