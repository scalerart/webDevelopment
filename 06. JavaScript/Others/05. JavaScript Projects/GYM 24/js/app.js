const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
})

// close navlinks when clicked
document.querySelectorAll('.nav-link a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    })
})

// navigation smooth scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', (e) => {
//         e.preventDefault();

//         const targetId = anchor.getAttribute('href');
//         document.querySelector(targetId).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');

        if (targetId === '#') return;
        e.preventDefault();

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// add background when scrolling
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#000000';
        header.style.transition = 'background-color 0.3s ease'
    } else {
        header.style.backgroundColor = 'transparent';
    }
})
