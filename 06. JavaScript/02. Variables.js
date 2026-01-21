/*
Master Checklist
    ✔ var, let, const difference
    ✔ Variable naming

=>  Variable কী?
    Variable হলো ডেটা রাখার একটি পাত্র (Container)।
    যেমন:
        1.  একটা বোতলে পানি রাখা →
        2.  Variable-এ Data রাখা

=>  Variable Declaration
    keyword variableName = value;

=>  Types of Variables
    1.  var (পুরোনো পদ্ধতি)
        var name = "ABDUL KADIR";
        1.  Same variable আবার declare করা যায়
        2.  Scope সমস্যা (Block মানে না)

    2.  let (Modern & Recommended)
        let age = 24;
        1.  Same variable আবার declare করা যায় না
        2.  Block scope মানে

    3.  const (Fixed value)
        const country = "Bangladesh";
        1.  Value change করা যায় না
        2.  Must assign value

=>  Variable Naming Rules
    Right Way
    1.  Letter দিয়ে শুরু করা
    2.  Number পরে ব্যবহার করা
    3.  _ ও $ ব্যবহার করা
    Wrong Way
    1.  Number দিয়ে শুরু করা
    2.  Space দেওয়া
    3.  Keyword ব্যবহার করা
*/

var i = 0;
i = 5;
console.log(i);

let j = 10;
j = 5;
j = 15;
console.log(j);

const k = 20;
console.log(k);

