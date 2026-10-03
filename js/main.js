/* To send the form to your inbox instead of WhatsApp:
   1. create a free form at https://formspree.io
   2. paste the form id below (e.g. "xdorbgqw") and the form will POST there. */
var FORMSPREE_ID = "";

(function () {
  var els = document.querySelectorAll('[data-fr]');
  var buttons = document.querySelectorAll('.lang button');
  function apply(lang) {
    els.forEach(function (el) {
      var t = el.getAttribute('data-' + lang);
      if (t === null) return;
      el.innerHTML = t.split('|').join('<br>');
    });
    document.documentElement.lang = lang;
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
  }
  buttons.forEach(function (b) { b.addEventListener('click', function () { apply(b.dataset.lang); }); });
  apply('fr');

  var form = document.getElementById('joinForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target;
    if (FORMSPREE_ID) {
      fetch('https://formspree.io/f/' + FORMSPREE_ID, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(f)
      }).then(function () {
        f.innerHTML = '<p style="color:var(--band-fg);margin:0">Merci ! Nous vous rappelons sous 48 heures.</p>';
      });
      return;
    }
    var msg = 'Bonjour Hooli Academie, je souhaite inscrire mon enfant.\n'
      + 'Nom : ' + f.nom.value + '\n'
      + 'Annee de naissance : ' + f.annee.value + '\n'
      + 'Categorie : ' + f.cat.value + '\n'
      + 'Telephone : ' + f.tel.value;
    window.open('https://wa.me/971524387667?text=' + encodeURIComponent(msg), '_blank');
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var el = document.querySelector(a.getAttribute('href'));
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  });
})();
