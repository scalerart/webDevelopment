/*
JavaScript Error Checklist
    ✔ Error types
    ✔ try/catch/finally
    ✔ throw custom error
    ✔ Optional chaining
    ✔ Async error handling
    ✔ Silent bug prevention

JavaScript Error কী?
    =>  Error মানে program চলার সময় সমস্যা, যার জন্য code ঠিকমতো execute হয় না।

JavaScript-এ মূলত ২ ধরনের error আছে:
    1.  Syntax Error (JS নিজেই দেখায়)
        if (x > 5 {   // missing )
    2.  Runtime Error (Exception)
        let x = y + 5; // y not defined

=>  JavaScript Error Types
    1.  ReferenceError
        =>  Variable পাওয়া যায় না
            console.log(a); // a is not defined

    2.  TypeError
        =>  ভুল type-এর উপর কাজ
            let x = 10;
            x(); // TypeError

    3.  TypeError
        =>  ভুল type-এর উপর কাজ
            let x = 10;
            x(); // TypeError

    4.  SyntaxError
        =>  ভুল syntax
            JSON.parse("{name: 'a'}");

    5.  URIError
        =>  encode/decode ভুল
            decodeURI("%");

    6.  URIError
        =>  encode/decode ভুল
            decodeURI("%");

=>  Silent Errors (JS দেখায় না)
    =>  এইগুলোই তুমি বলেছো
        1.  Undefined vs Null mistake
        2.  Logical mistake
        2.  Condition ভুল
        3.  API data assume করা
        4.  NaN issue
            if (user.age > 18) { } // age undefined → silent bug

=>  Error Handle করার মূল অস্ত্র
    try...catch
    try {
        let data = JSON.parse(badJSON);
    } catch (error) {
        console.log("Error:", error.message);
    }
    1.  Program crash করে না
    2.  Controlled error
*/