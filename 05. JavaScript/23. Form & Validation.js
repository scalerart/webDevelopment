/*
Form & Validation Checklist
    ✔ input.value
    ✔ form submit
    ✔ preventDefault
    ✔ simple validation
    
=>  Form কী?
    Form ব্যবহার করে user থেকে data নেওয়া হয়
    যেমন—
    1.  name
    2.  email
    3.  password
    4.  message

1.  Input Value নেওয়া (Very Important)
        let nameInput = document.getElementById("name");
        console.log(nameInput.value);
    =>  .value ছাড়া input-এর লেখা পাওয়া যায় না
    =>  submit / keyup / change event-এ বেশি ব্যবহার হয়

2.  Form Submit Handle করা
    =>  Default Behavior
        Form submit করলে page reload হয়

    =>  Correct Way
        let form = document.getElementById("myForm");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            console.log("Form submitted");
        });

3.  Simple Validation (Core Concept)
    Goal: User ভুল input দিলে
    1.  form submit হবে না
    2.  error message দেখাবে

    =>  Example: Empty Field Check
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let name = nameInput.value;
            if (name === "") {
                alert("Name is required");
                return;
            }
            console.log("Success");
        });        

4.  Email Validation (Basic)
    let emailInput = document.getElementById("email");
    if (!emailInput.value.includes("@")) {
        alert("Invalid email");
    }
    =>  Beginner level validation

5.  Password Length Check
    if (password.value.length < 6) {
        alert("Password must be 6 characters");
    }

6.  Multiple Validation একসাথে
    form.addEventListener("submit", e => {
        e.preventDefault();
        if (name.value === "") {
            alert("Name required");
        } else if (!email.value.includes("@")) {
            alert("Email invalid");
        } else {
            console.log("Form valid");
        }
    });

7.  Real-Life Example (Complete)
    <form id="loginForm">
        <input id="email" type="text" placeholder="Email">
        <input id="password" type="password" placeholder="Password">
        <button>Login</button>
    </form>

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value;

    if (email === "" || pass === "") {
        alert("All fields required");
        return;
    }

    if (!email.includes("@")) {
        alert("Invalid email");
        return;
    }

    if (pass.length < 6) {
        alert("Password too short");
        return;
    }

    alert("Login successful");
    });

=>  Common Mistakes
    1.  preventDefault() ভুলে যাওয়া
    2.  .value না নেওয়া
    3.  trim() না করা
    4.  error দেখিয়ে submit চালু রাখা
    5.  client validation = security মনে করা

=>  Best Practice (Industry Style)
    1.  .trim() ব্যবহার
    2.  clear error message
    3.  validation function আলাদা করা
    4.  user-friendly feedback
    5.  submit disable during validation

=>  Practice Tasks (Must Do)
    1.  Signup form (name, email, password)
    2.  Empty field validation
    3.  Password length check
    4.  Email format check
    5.  Error message DOM-এ দেখাও (alert না)
*/