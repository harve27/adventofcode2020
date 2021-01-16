var num = [/*...*/]; //see day1input.txt

for(var i=0; i < num.length; i++) { 
    for(var j=0; j<num.length; j++) {

            for(var q=0; q<num.length; q++) {
                if(num[i] + num[j] + num[q] === 2020) {
                    console.log(num[i]);
                    console.log(num[j]);
                    console.log(num[q]);
                    console.log(num[i] * num[j] * num[q]);
                    break;
                }
            }
        }
        
    }
