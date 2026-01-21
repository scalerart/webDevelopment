/*
Condition Checklist
    ✔ if
    ✔ if-else
    ✔ else if
    ✔ Nested if
    ✔ Logical operator with condition
    ✔ Truthy & Falsy
    ✔ Ternary operator
    ✔ switch
    ✔ break & default

=>  Condition কী?
    Condition মানে হলো— “যদি এটা হয়, তাহলে এটা করো; না হলে অন্যটা করো।”
    JavaScript-এ Condition ব্যবহার হয় Decision নেওয়ার জন্য।

1.  if Statement
    =>  Syntax
        if (condition) {
            condition true হলে এই কোড চলবে
        }

    =>  Example
        let age = 20;
        if (age >= 18) {
            console.log("You are adult");
        }
    =>  Condition অবশ্যই true বা false হতে হবে

2.  if_else Statement
    =>  Syntax
        if (condition) {
            true হলে
        } else {
            false হলে
        }

    =>  Example
        let isLogin = false;
        if (isLogin) {
            console.log("Welcome user");
        }
        else {
            console.log("Please login first");
        }

3.  if…else if…else (Multiple Condition)
    =>  Syntax
        if (condition1) {
            code true হলে
        }
        else if (condition2) {
            code true হলে
        }
        else {
            default false হলে
        }

    =>  Example (Result System)
        let marks = 75;
        if (marks >= 80) {
            console.log("A+");
        }
        else if (marks >= 70) {
            console.log("A");
        }
        else if (marks >= 60) {
            console.log("A-");
        }
        else {
            console.log("Fail");
        }
    =>  প্রথম যেটা true হবে—সেটাই execute হবে

4.  Nested if (if এর ভিতরে if)
    let age = 20;
    let hasID = true;
    if (age >= 18) {
        if (hasID) {
            console.log("You can enter");
    }
    else {
        console.log("ID required");
        }
    }
    =>  Complex logic-এ ব্যবহার হয়

5.  Logical Operator + Condition (Very Important)
    let age = 22;
    let hasTicket = true;
    if (age >= 18 && hasTicket) {
        console.log("You can watch movie");
    }

6.  Truthy & Falsy
    =>  Falsy values
        1.  false
        2.  0
        3.  ""
        4.  null
        5.  undefined
        6.  NaN

    =>  Truthy
        1.  এগুলোর বাইরে সবই truthy

7.  Ternary Operator (Short if-else)
    =>  Syntax
        condition ? trueCode : falseCode;

    =>  Example
        let age = 16;
        let result = age >= 18 ? "Adult" : "Child";
        console.log(result);
    =>  Simple decision-এ ব্যবহার করো

=>  switch Statement
    switch কেন দরকার?
    যখন অনেকগুলো else if থাকে, তখন code clean রাখার জন্য switch ব্যবহার করা হয়।

    =>  Syntax
        switch (expression) {
            case value1:
                code
            break;

            case value2:
                code
            break;

            default:
                code
        }

    =>  Example
        let day = 3;
        switch (day) {
            case 1:
                console.log("Saturday");
                break;
            case 2:
                console.log("Sunday");
                break;
            case 3:
                console.log("Monday");
                break;
            default:
                console.log("Invalid day");
        }
        =>  break না দিলে পরের case-এ ঢুকে যাবে (fall-through)

=>  switch vs if-else
    বিষয়        if-else         switch
    Condition   Complex logic   Fixed value
    Comparison  Range, logical  Exact match
    Readability Medium          Clean
*/

// ✔ if
let myAge = 24;
if (myAge >= 18) {
    console.log('✔ if:', "I'm Adult");
}

// ✔ if-else
let age = 24;
if (age >= 25) {
    console.log('✔ if-else:', "You can get married.");
} else {
    console.log('✔ if-else:', "You can't get married.");
}

//✔ else if
let banglaMarks = 83;
if (banglaMarks >= 80) {
    console.log('✔ else if:', "A+");
} else if (banglaMarks >= 70) {
    console.log('✔ else if:', 'A');
} else if (banglaMarks >= 60) {
    console.log('✔ else if:', 'A-');
} else {
    console.log('✔ else if:', 'Fail');
}

//Nested if
let age1 = 20;
let hasID = true;
if (age1 >= 18) {
    if (hasID) {
        console.log("You can enter");
    }
    else {
        console.log("ID required");
    }
}

// Ternary Operator (Short if-else)
let hasTicket = false;
let watchMovie = hasTicket === true ? "You can watch movie" : "You can't watch movie";
console.log('✔ Ternary Operator:', watchMovie);

// switch Statement
let englishMarks = 80;
switch (englishMarks) {
    case 80:
        console.log('A+');
        break;

    case 70:
        console.log('A');
        break

    case 60:
        console.log('A-');
        break

    default:
        console.log('Fail');
}