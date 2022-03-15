function validate() {
    var telephone_number = document.getElementById("input").value;
    let allowed_numbers =  /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    let just_numbers = /\d/;
    let telephone_array=[];
    
    for(let c in telephone_number) {
        if(telephone_number[c].match(just_numbers)) {
            telephone_array.push(telephone_number[c]);
        }
    }
    if(telephone_array.length !=10 && telephone_array.length !=11) {
        document.getElementById("output").innerHTML = 'Invalid Number';
    } else if(allowed_numbers.test(telephone_number)) {
        document.getElementById("output").innerHTML ='Valid Number';
    } else {
        document.getElementById("output").innerHTML = 'Invalid Number';
    }
}





