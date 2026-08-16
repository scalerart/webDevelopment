class User {
  // কনস্ট্রাক্টর মেথড
  constructor(name, email) {
    this.name = name; // অবজেক্টের প্রপার্টি সেট করা
    this.email = email;
  }

  // একটি সাধারণ মেথড
  displayInfo() {
    console.log(`User: ${this.name}, Email: ${this.email}`);
  }
}

// নতুন অবজেক্ট তৈরি (Instance Creation)
const user1 = new User('Rahim', 'rahim@example.com');
const user2 = new User('Karim', 'karim@example.com');

console.log(user1, user2);
user1.displayInfo(); // Output: User: Rahim, Email: rahim@example.com
user2.displayInfo(); // Output: User: Karim, Email: karim@example.com
