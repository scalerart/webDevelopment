/*
Web Storage Checklist
    ✔ localStorage
    ✔ sessionStorage
    ✔ JSON stringify/parse
    ✔ real-life use
    ✔ storage event

=>  Web Storage কী?
    =>  Browser–এর ভিতরে data save করার জায়গা
    =>  page refresh হলেও data থাকে

    =>  দুই প্রকার
        1.  localStorage
        2.  sessionStorage

1.  localStorage
    =>  বৈশিষ্ট্য
        1.  data permanent
        2.  browser/tab বন্ধ করলেও থাকে
        3.  manual clear না করা পর্যন্ত থাকে

    1.  Data Set
        localStorage.setItem("name", "Abdul");

    2.  Data Get
        let name = localStorage.getItem("name");

    3.  Data Remove
        localStorage.removeItem("name");

    4.  Clear All
        localStorage.clear();

2.  sessionStorage
    =>  বৈশিষ্ট্য
        1.  tab/session পর্যন্ত থাকে
        2.  tab close করলে delete
        3.  sensitive data এর জন্য ভালো

    =>  Use same methods
        sessionStorage.setItem("token", "123");
        sessionStorage.getItem("token");

3.  String Only (Very Important)
        Storage string ছাড়া কিছু রাখে না

    =>  Wrong
        localStorage.setItem("user", { name: "Abdul" });

    =>  Correct
        localStorage.setItem("user", JSON.stringify({ name: "Abdul" }));

    =>  Get back
        let user = JSON.parse(localStorage.getItem("user"));

4.  Real-Life Use Cases
    1.  Theme (dark/light)      localStorage
    2.  Login token             localStorage
    3.  Form draft              sessionStorage
    4.  Cart                    localStorage
    5.  OTP step                sessionStorage

5.  Example: Theme Save
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
    }

    function setTheme(mode) {
        localStorage.setItem("theme", mode);
    }

6.  Storage Event (Advanced)
    =>  অন্য tab–এ change detect
        window.addEventListener("storage", e => {
            console.log(e.key, e.newValue);
        });

7.  localStorage vs sessionStorage
    1.  Lifetime        Permanent       Tab
    2.  Size            ~5MB	        ~5MB
    3.  Shared tab      Yes             No
    4.  Auto clear      ❌              ✔

=>  Common Mistakes
    1.  object stringify না করা
    2.  sensitive data blindly রাখা
    3.  clear() accidental use
    4.  undefined store করা

=>  Interview Tips
    ✔ cookie vs localStorage
    ✔ storage size
    ✔ security risk
    ✔ XSS attack concept

=>  Practice Tasks
    1.  username save & load
    2.  theme toggle save
    3.  login flag store
    4.  cart item store
    5.  clear button add
*/