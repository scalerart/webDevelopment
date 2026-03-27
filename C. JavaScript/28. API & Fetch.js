/*
API & Fetch Checklist
    ✔ API concept
    ✔ JSON
    ✔ fetch
    ✔ Status code
    ✔ GET / POST
    ✔ Error handling
    ✔ async / await

1.  API কী? (Very Important)
    =>  API = Application Programming Interface
    =>  দুইটা সফটওয়্যার/সিস্টেমের মধ্যে কথা বলার রাস্তা
        1.  ATM → Bank server
        2.  Mobile app → Backend server
        3.  Frontend → Database (via API)

    =>  Web API Example
        https://api.example.com/users
        1.  তুমি request পাঠাও
        2.  server response দেয় (data)

2.  JSON কী?
    =>  JavaScript Object Notation
    =>  data আদান–প্রদানের standard format
    =>  JSON Example
        {
            "name": "Abdul",
            "age": 25,
            "isStudent": true
        }
    =>  Rules
        1.  key/value
        2.  double quote
        3.  no function
    =>  Convert JS ↔ JSON
        let obj = { name: "Abdul" };
        let json = JSON.stringify(obj);
        let back = JSON.parse(json);

3.  fetch()
    =>  browser built-in API
    =>  HTTP request পাঠাতে ব্যবহার হয়
        Basic fetch (GET)
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));

    =>  fetch Working Flow
        1.  request পাঠানো
        2.  server response
        3.  response → JSON
        4.  data use

4.  fetch with async / await (Best Practice)
    async function loadUsers() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
        }
    }
    loadUsers();

5.  HTTP Status Codes (Very Important)
    =>  Server কী অবস্থা জানাচ্ছে
        1.  200         Success
        2.  201         Created
        3.  400         Bad request
        4.  401         Unauthorized
        5.  403         Forbidden
        6.  404         Not found
        7.  500         Server error
    if (res.status === 404) {
        console.log("Not Found");
    }    

6.  HTTP Methods (Must Know)
    1.  Method      কাজ
    2.  GET         data আনা
    3.  POST    	data পাঠানো
    4.  PUT         update
    5.  DELETE      delete

    =>  POST Example
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Hello",
                body: "Post body"
            })
        });

7.  Error Handling (Very Important)
    =>  Common Mistake
        fetch(url)
            .then(res => res.json()) // status check নাই

    =>  Proper Error Handling   
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Request failed");
                }
                return res.json();
            })
            .then(data => console.log(data))
            .catch(err => console.log(err.message));

        async / await Error Handling
        try {
            let res = await fetch(url);

            if (!res.ok) {
                throw new Error("HTTP Error");
            }

            let data = await res.json();
        } catch (err) {
            console.log(err);
        }

8.  Network vs Logical Error  
    1.  Network     internet off
    2.  HTTP        404, 500
    3.  Logical     wrong data

9.  Real Project Example (User List)
    async function showUsers() {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await res.json();

          users.forEach(user => {
            console.log(user.name);
        });
    }

=>  Common Mistakes (Interview Favorite)
    1.  fetch error auto throw করে মনে করা
    2.  res.json() না করা
    3.  async function ভুলে await না দেওয়া
    4.  CORS error বুঝতে না পারা

=>  Interview Questions
    ✔ fetch vs axios
    ✔ JSON.stringify কেন দরকার
    ✔ HTTP status code
    ✔ async/await vs then

=>  Practice Tasks (Must Do)
    1.  public API থেকে data load করো
    2.  error handle করো
    3.  POST request পাঠাও
    4.  JSON parse/stringify test করো
    5.  UI–তে data show করো
*/