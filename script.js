document.addEventListener("DOMContentLoaded", function() {
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
});
  document.querySelector('.footer-bottom a').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });



  