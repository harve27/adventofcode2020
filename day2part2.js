var arr = [/*...*/]; //see day2input.txt

var str;
var place1, place2;
var password;
var main_iter = 0;
var char;
var index1,index2;

for(str in arr) {

    if(arr[str].indexOf(":") === 5) {
        place1 = arr[str].substring(0,1); //4 
        place2 = arr[str].substring(2,3); //5
        password = arr[str].substring(7); //['c','c','c','h','c']
        main_letter = arr[str].substring(4,5); // c
        
        place1 = parseInt(place1);
        place2 = parseInt(place2);
        password = password.split("");

        index1 = password[place1 - 1];
        index2 = password[place2 - 1];

        if((index1 === main_letter && index2 !== main_letter) || (index1 !== main_letter && index2 === main_letter)) {
            main_iter++;
        }

        
    } else if (arr[str].indexOf(":") === 6) {
        place1 = arr[str].substring(0,1);
        place2 = arr[str].substring(2,4);
        password = arr[str].substring(8);
        main_letter = arr[str].substring(5,6);
        
        place1 = parseInt(place1);
        place2 = parseInt(place2);
        password = password.split("");

        index1 = password[place1 - 1];
        index2 = password[place2 - 1];

        if((index1 === main_letter && index2 !== main_letter) || (index1 !== main_letter && index2 === main_letter)) {
            main_iter++;
        }


    } else if (arr[str].indexOf(":") === 7) {

        place1 = arr[str].substring(0,2);
        place2 = arr[str].substring(3,5);
        password = arr[str].substring(9);
        main_letter = arr[str].substring(6,7);
        
        place1 = parseInt(place1);
        place2 = parseInt(place2);
        password = password.split("");

        index1 = password[place1 - 1];
        index2 = password[place2 - 1];

        if((index1 === main_letter && index2 !== main_letter) || (index1 !== main_letter && index2 === main_letter)) {
            main_iter++;
        }

    } else {
        console.log("err");
    }
}

console.log(main_iter);