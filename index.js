console.log("JS Activity");

const mail = document.getElementById("mailid");
const pass = document.getElementById("pass");
const msg1 = document.getElementById("message1");
const msg2 = document.getElementById("message2");
const submit = document.getElementById("btn1");
const verified = document.getElementById("ver");
let validem = false;
let validpass = false;

let hemail = "nik@bhosale.com";
let hpass = "asdf123";

// console.log(mail);
// console.log(pass);

mail.addEventListener(
    "blur",
    function(){
        console.log("Email Tasting");
        let reg = /^([0-9a-zA-Z]+)@([0-9a-zA-Z]+)\.([a-zA-Z]){2,10}$/;
        let str = mail.value;
        console.log(reg,str);
        if ( reg.test(str) && hemail != str) {
            validem = true;
        }
        else{
            msg1.textContent = "email id is invalid";
            mail.style.borderColor = "red";
            msg1.style.color = "red";
            validem = false;
        }


    }
);

pass.addEventListener(
    "blur",
    function(){
        console.log("Pass blurred");
        let reg = /^([a-zA-Z0-9!@#$%^&*]){6,10}$/;
        let str = pass.value;
        console.log(reg,str);
        if (reg.test(str) && hpass == str) {
            console.log("password Valid");
            validpass = true;
        }
        else{
            console.log("Invalid");
            msg2.textContent = "Password is invalid";
            pass.style.borderColor = "red";
            msg2.style.color = "red";
            validpass = false;
        }


    }
);

submit.addEventListener('click', () => {
    

    console.log('You clicked on submit');
    console.log(validem, validpass);

    // Submit your form here
    if (validem && validpass) {
        

        console.log('Phone, email and user are valid. Submitting the form');
        

    }
    else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
            msg1.textContent = "email id is invalid";
            verified.style.display = "block"; 
            mail.style.borderColor = "red";
            msg1.style.color = "red";
        
        
        
    }



})

// ----------------------------------------------------------------------------



