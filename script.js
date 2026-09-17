const header = document.querySelector('.header');

const revealTargets = document.querySelectorAll(
  '.service-card, .about-copy, .stat, .approach-item, .skill-card, .soft-list article, .project-card, .archive-card, .learning-list div, .contact-main'
);

revealTargets.forEach((item) => item.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealTargets.forEach((item) => observer.observe(item));

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});
