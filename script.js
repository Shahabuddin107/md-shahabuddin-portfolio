const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.querySelector('.menu').addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute'; nav.style.top = '76px'; nav.style.right = '5vw';
  nav.style.flexDirection = 'column'; nav.style.padding = '18px';
  nav.style.background = '#101218'; nav.style.border = '1px solid #242832'; nav.style.borderRadius = '12px';
});