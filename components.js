document.addEventListener('DOMContentLoaded', function () {
  var page = window.location.pathname.split('/').pop() || 'index.html';

  var navItems = [
    { label: 'Services', href: 'services.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Contact', href: 'contact.html' }
  ];

  var navLinks = navItems.map(function (item) {
    var activeClass = page === item.href ? ' class="active"' : '';
    return '<li><a href="' + item.href + '"' + activeClass + '>' + item.label + '</a></li>';
  }).join('');

  var headerHTML =
    '<header>' +
      '<a href="index.html" class="logo-link"><img src="logo.png" alt="Logo"></a>' +
      '<nav>' +
        '<button class="hamburger" aria-label="Menu"><i class="fa-solid fa-bars"></i></button>' +
        '<ul>' + navLinks + '</ul>' +
      '</nav>' +
    '</header>';

  var footerHTML =
    '<footer>' +
      '<div class="social-icons">' +
        '<a href="mailto:editorial@wyntermiller.com" aria-label="Email"><i class="fa-regular fa-envelope"></i></a>' +
        '<a href="https://instagram.com/wynterkmiller" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>' +
        '<!--<a href="#" aria-label="Bluesky"><i class="fa-brands fa-bluesky"></i></a>' +
        '<a href="#" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>-->' +
      '</div>' +
    '</footer>';

  var headerEl = document.getElementById('site-header');
  var footerEl = document.getElementById('site-footer');

  if (headerEl) headerEl.outerHTML = headerHTML;
  if (footerEl) footerEl.outerHTML = footerHTML;

  var hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('open');
    });
  }
});
