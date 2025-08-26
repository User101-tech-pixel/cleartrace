
// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Super-basic $0 form handler: opens the user's email client prefilled (no backend needed).
function handleSubmit(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const subject = encodeURIComponent('Free Exposure Check Request');
  const body = encodeURIComponent(
    `Name: ${data.name || ''}\nEmail: ${data.email || ''}\nLocation: ${data.location || ''}\n\nPlease scan and send my free exposure summary.`
  );
  window.location.href = `mailto:hello@quietshield.example?subject=${subject}&body=${body}`;
  return false;
}
