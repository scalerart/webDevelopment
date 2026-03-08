/*
Asynchronous JavaScript Checklist
    ✔ setTimeout / clearTimeout
    ✔ Callback
    ✔ Callback hell
    ✔ Promise
    ✔ then / catch / chaining
    ✔ async / await
    ✔ Error handling

1.  JavaScript কেন Asynchronous দরকার?
    JavaScript হলো Single-threaded মানে এক সময়ে একটাই কাজ করে

    =>  তাহলে সমস্যা কোথায়?
        console.log("Start");
        setTimeout(() => {
            console.log("Async Task");
        }, 2000);
        console.log("End");
    =>  Output:
        Start
        End
        Async Task

    =>  দীর্ঘ কাজ (API, timer, file) background-এ পাঠানো হয়
    =>  main thread block হয় না

2.  setTimeout()
    =>  নির্দিষ্ট সময় পরে code চালায়
        setTimeout(() => {
            console.log("Hello after 2s");
        }, 2000);

    =>  Important Notes
        delay minimum time, exact না

    =>  sync function
        clearTimeout()
            let timer = setTimeout(() => {
            console.log("Run");
        }, 3000);
        clearTimeout(timer);

3.  Callback Function
    কোনো function আরেকটা function-কে argument হিসেবে নেয়
    কাজ শেষ হলে তাকে call করে

    =>  Simple Callback
        function greet(name, callback) {
            console.log("Hello", name);
            callback();
        }

        greet("Abdul", () => {
            console.log("Welcome!");
        });

    =>  Async Callback Example
        function fetchData(callback) {
            setTimeout(() => {
            callback("Data loaded");
            }, 2000);
        }

        fetchData(data => {
            console.log(data);
        });

4.  Promise
    Promise মানে = ভবিষ্যতে কোনো একটা result আসবে
    Promise-এর ৩টা State
        1.  pending
        2.  fulfilled
        3.  rejected

    =>  Create Promise
        let promise = new Promise((resolve, reject) => {
        let success = true;

        if (success) {
            resolve("Task success");
        } else {
            reject("Task failed");
        }
        });

    =>  Consume Promise
        promise
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });

    =>  Promise with setTimeout
        function getData() {
        return new Promise(resolve => {
            setTimeout(() => {
            resolve("Data received");
            }, 2000);
        });
        }
        getData().then(data => console.log(data));

5.  Promise Chaining
        getData()
        .then(data => {
            console.log(data);
            return "Next step";
        })
        .then(step => {
            console.log(step);
        })
        .catch(err => console.log(err));
    =>  callback hell থেকে মুক্তি

6.  async / await (Modern Way)
    Promise-এর উপর clean syntax

    =>  Basic Example
        async function loadData() {
        let data = await getData();
            console.log(data);
        }
        loadData();
    =>  code looks synchronous
    =>  easier to read

    =>  async + try/catch (Must Know)
        async function loadData() {
        try {
            let data = await getData();
            console.log(data);
        }
        catch (err) {
            console.log("Error:", err);
        }
        }

7.  Real Example (API Simulation)
    function fetchUser() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve({ name: "Abdul", age: 25 });
            }, 2000);
        });
    }

    async function showUser() {
    let user = await fetchUser();
    console.log(user.name);
    }

    showUser();

8.  Parallel Async (Advanced)
    Promise.all([
        fetchUser(),
    getData()
        ]).then(results => {
    console.log(results);
    });
    =>  multiple async একসাথে

=>  Common Mistakes (Very Important)
    1.  async function এ await না ব্যবহার
    2.  error handle না করা
    3.  callback + promise mix করা
    4.  promise return না করা

=>  Practice Tasks (Must Do)
    1.  setTimeout দিয়ে loader বানাও
    2.  callback দিয়ে data load simulate করো
    3.  Promise দিয়ে success/fail handle করো
    4.  async/await দিয়ে same কাজ করো
    5.  try/catch দিয়ে error ধরো
*/