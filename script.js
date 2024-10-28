// Cookie function to check and set a "visited" cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Check if the user is a returning visitor
document.addEventListener("DOMContentLoaded", function() {
  // Check if the "visited" cookie is set; if not, welcome the new visitor
  if (!document.cookie.includes("visited=true")) {
    setCookie("visited", "true", 30); // Set cookie for 30 days
    console.log("Welcome, new visitor!");
  } else {
    console.log("Welcome back!");
  }

  // Code for fading in sections
  const sections = document.querySelectorAll('.fade-in');
  const options = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });

  // Smooth scroll to top on footer link click
  document.querySelector('.footer-bottom a').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
