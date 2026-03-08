// 3! = 1X2X3
// 4! = 1X2X3X4
// 5! = 1X2X3X4X5
function factorial (n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
var result = factorial(50)
console.log(result);

/*
🔹  Factorial কী?
    Factorial মানে হলো একটি সংখ্যার সাথে তার নিচের সব সংখ্যাকে গুণ করা।
    👉 Symbol: n!
    উদাহরণ:
    1.  5! = 5 × 4 × 3 × 2 × 1 = 120
    2.  4! = 4 × 3 × 2 × 1 = 24
    3.  0! = 1 (এটা নিয়ম অনুযায়ী সবসময় 1 হবে)

🔹  JavaScript এ Factorial বের করার কোড
1️⃣  Using for loop
        function factorial(num) {
            let result = 1;
            for (let i = 1; i <= num; i++) {
                result *= i;  // result = result * i
            }
            return result;
        }

        console.log(factorial(5)); // Output: 120
        console.log(factorial(0)); // Output: 1    

2️⃣  Using while loop
    function factorial(num) {
        let result = 1;
        let i = 1;
        while (i <= num) {
            result *= i;
            i++;
        }
        return result;
    }
    console.log(factorial(6)); // Output: 720        

3️⃣  Using Recursion (Function নিজেকে আবার কল করবে)
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    console.log(factorial(5)); // Output: 120

    👉 Recursion পদ্ধতিতে function নিজে নিজেকে ডাকে যতক্ষণ না base case (n === 0 বা 1) এ পৌঁছায়।    

🎯  সারসংক্ষেপ
    1.  Factorial হলো সংখ্যার গুণফল n × (n-1) × (n-2) … × 1
    2.  Loop দিয়েও বের করা যায়, recursion দিয়েও বের করা যায়।    
*/