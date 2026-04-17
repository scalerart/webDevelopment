const Products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,

    title: [
        "Complete Web Development Bootcamp",
        "React Developer Course",
        "JavaScript Mastery",
        "Full Stack MERN Course",
        "HTML CSS Complete Guide",
        "Next.js Bootcamp",
        "Node.js API Development",
        "Frontend Developer Course",
        "Backend Development with Node",
        "Advanced JavaScript Projects"
    ][i % 10] + ` ${i + 1}`,

    instructor: [
        "Angela Yu",
        "Colt Steele",
        "Maximilian Schwarzmüller",
        "Brad Traversy",
        "Jonas Schmedtmann"
    ][i % 5],

    rating: (4.5 + (i % 4) * 0.1).toFixed(1),
    price: `$${(9.99 + (i % 10)).toFixed(2)}`,

    // guaranteed working images
    image: `https://picsum.photos/seed/course${i}/480/270`,
    link: "https://www.udemy.com/courses/development/web-development/"
}));

export default Products