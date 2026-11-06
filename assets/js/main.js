/* ==========================================================================
   PORTFOLIO - LOGIQUE D'AFFICHAGE ET INTERACTIONS
   Ce fichier lit window.CV_DATA (assets/js/content.js) et construit la page.
   Aucune donnée n'est écrite ici : tout est dans content.js.
   ========================================================================== */
(function () {
  'use strict';

  var DATA = window.CV_DATA;
  if (!DATA) {
    console.error('CV_DATA introuvable : vérifiez assets/js/content.js');
    return;
  }

  /* ------------------------------------------------------------------ */
  /* Utilitaires                                                          */
  /* ------------------------------------------------------------------ */
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  function esc(value) {
    if (value === null || value === undefined) return '';
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /** Construit un élément DOM depuis une chaîne HTML. */
  function html(strings) {
    var tpl = document.createElement('template');
    tpl.innerHTML = strings.trim();
    return tpl.content.firstElementChild;
  }

  /* ------------------------------------------------------------------ */
  /* Jeu d'icônes SVG (inline, aucune dépendance externe)                   */
  /* ------------------------------------------------------------------ */
  var ICONS = {
    mail: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/><path d="m2.5 6.5 9.5 6.5 9.5-6.5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 9.5h5.2V21H2.4V9.5Zm7.6 0h4.98v1.57h.07c.69-1.24 2.38-2.55 4.9-2.55 5.24 0 6.2 3.3 6.2 7.6V21h-5.2v-4.9c0-1.17-.02-2.67-1.7-2.67-1.7 0-1.96 1.26-1.96 2.58V21h-5.18V9.5h.87Z"/>',
    github: '<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>',
    building: '<path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 10h.01M9 14h.01M15 10h.01M15 14h.01"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M10 2v4M14 2v4M10 18v4M14 18v4M2 10h4M2 14h4M18 10h4M18 14h4"/>',
    code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>',
    layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    cloud: '<path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.2 10.2 4 4 0 0 0 7 19h10.5Z"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 0 1-4-4Z"/><path d="m14.7 6.3-3-3 2.6-2.6 3 3Z"/>',
    graduation: '<path d="m12 3 10 5-10 5L2 8l10-5Z"/><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="m8.2 14-1.4 7 5.2-2.6 5.2 2.6-1.4-7"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0V4Z"/><path d="M16 5h3v2a3 3 0 0 1-3 3M8 5H5v2a3 3 0 0 0 3 3M12 13v4M9 21h6M10 17h4"/>'
  };

  function icon(name, size) {
    var path = ICONS[name] || ICONS.chip;
    var s = size || 20;
    return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s +
      '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true">' + path + '</svg>';
  }

  function iconSolid(name, size) {
    var path = ICONS[name] || ICONS.chip;
    var s = size || 20;
    return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s +
      '" fill="currentColor" aria-hidden="true">' + path + '</svg>';
  }

  /* ------------------------------------------------------------------ */
  /* 1. Identité : en-tête, hero, pied de page                           */
  /* ------------------------------------------------------------------ */
  function renderIdentity() {
    var id = DATA.identity;

    $('#brandMark').textContent = id.initials;
    $('#brandName').textContent = id.fullName;
    $('#brandRole').textContent = 'Génie Informatique · IoT';

    $('#heroName').textContent = id.fullName;
    $('#heroRole').innerHTML = esc(id.title) +
      '<span class="hero__role-sub">' + esc(id.subtitle) + '</span>';
    $('#heroAvailabilityText').textContent = id.availability;
    $('#heroPhoto').src = id.photo;
    $('#heroPhoto').alt = 'Portrait de ' + id.fullName;

    var lead = DATA.profile.paragraphs[0];
    $('#heroLead').textContent = lead;

    var cvBtn = $('#heroCvBtn');
    cvBtn.href = id.cvFile;
    cvBtn.setAttribute('download', '');
    $('#heroCvLabel').textContent = id.cvLabel;

    $('#heroLinkedin').href = id.linkedin;
    $('#heroGithub').href = id.github;

    $('#footerName').textContent = id.fullName;
    $('#currentYear').textContent = new Date().getFullYear();

    // Statistiques calculées à partir des données (rien d'inventé)
    var stats = [
      { value: DATA.experience.length, label: 'Stages' },
      { value: DATA.projects.length, label: 'Projets' },
      { value: DATA.certifications.length, label: 'Certifs' },
      { value: DATA.skills.length, label: 'Domaines' }
    ];
    $('#heroStats').innerHTML = stats.map(function (s) {
      return '<div><dt>' + esc(s.value) + '</dt><dd>' + esc(s.label) + '</dd></div>';
    }).join('');

    // Coordonnées cliquables dans le hero
    var links = [
      { icon: 'mail', label: id.email, href: 'mailto:' + id.email },
      { icon: 'phone', label: id.phoneLabel, href: 'tel:' + id.phoneHref },
      { icon: 'pin', label: id.location, href: null },
      { icon: 'linkedin', label: 'LinkedIn', href: id.linkedin, external: true },
      { icon: 'github', label: 'GitHub', href: id.github, external: true }
    ];
    $('#heroContact').innerHTML = links.map(function (l) {
      var inner = (l.icon === 'linkedin' || l.icon === 'github')
        ? iconSolid(l.icon, 17) : icon(l.icon, 17);
      var body = '<span>' + inner + '</span><span>' + esc(l.label) + '</span>';
      if (!l.href) return '<li class="chip">' + body + '</li>';
      var attrs = l.external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return '<li><a class="chip" href="' + esc(l.href) + '"' + attrs + '>' + body + '</a></li>';
    }).join('');

    // Pied de page
    $('#footerLinks').innerHTML = [
      { label: 'LinkedIn', href: id.linkedin, external: true },
      { label: 'GitHub', href: id.github, external: true },
      { label: 'E-mail', href: 'mailto:' + id.email },
      { label: 'Télécharger le CV', href: id.cvFile, download: true }
    ].map(function (l) {
      var attrs = (l.external ? ' target="_blank" rel="noopener noreferrer"' : '') +
        (l.download ? ' download' : '');
      return '<li><a href="' + esc(l.href) + '"' + attrs + '>' + esc(l.label) + '</a></li>';
    }).join('');
  }

  /* ------------------------------------------------------------------ */
  /* 2. Profil                                                            */
  /* ------------------------------------------------------------------ */
  function renderProfile() {
    $('#profileText').innerHTML = DATA.profile.paragraphs.map(function (p) {
      return '<p>' + esc(p) + '</p>';
    }).join('');

    $('#profileHighlights').innerHTML = DATA.profile.highlights.map(function (h) {
      return '<li>' + icon(h.icon, 18) + '<span>' + esc(h.label) + '</span></li>';
    }).join('');
  }

  /* ------------------------------------------------------------------ */
  /* 3. Expériences                                                       */
  /* ------------------------------------------------------------------ */
  function renderExperience() {
    $('#experienceList').innerHTML = DATA.experience.map(function (e) {
      var tasks = e.tasks.map(function (t) {
        return '<li>' + esc(t) + '</li>';
      }).join('');

      return '' +
        '<li class="tl-item reveal">' +
          '<article class="tl-card">' +
            '<div class="tl-card__head">' +
              '<h3 class="tl-card__role">' + esc(e.role) + '</h3>' +
              '<span class="tl-card__company">' + esc(e.company) + '</span>' +
            '</div>' +
            '<p class="tl-card__meta">' +
              '<span>' + icon('calendar', 14) + esc(e.period) + '</span>' +
              '<span>' + icon('pin', 14) + esc(e.location) + '</span>' +
            '</p>' +
            '<ul class="tl-card__list">' + tasks + '</ul>' +
          '</article>' +
        '</li>';
    }).join('');
  }

  /* ------------------------------------------------------------------ */
  /* 4. Projets                                                           */
  /* ------------------------------------------------------------------ */
  function renderProjects() {
    $('#projectList').innerHTML = DATA.projects.map(function (p) {
      var tasks = p.tasks.map(function (t) {
        return '<div class="card__task"><strong>' + esc(t.label) + '</strong>' + esc(t.text) + '</div>';
      }).join('');

      var prize = p.highlight
        ? '<span class="card__prize">' + icon('trophy', 16) + esc(p.kind) + '</span>'
        : '<span class="card__kind">' + esc(p.kind) + '</span>';

      return '' +
        '<article class="card reveal' + (p.highlight ? ' card--prize' : '') + '">' +
          '<div class="card__icon">' + icon('chip', 22) + '</div>' +
          prize +
          '<h3 class="card__title">' + esc(p.name) + '</h3>' +
          '<p class="card__meta">' + esc(p.org) + ' · ' + esc(p.location) + ' · ' + esc(p.period) + '</p>' +
          '<div class="card__tasks">' + tasks + '</div>' +
          '<span class="card__badge">' + esc(p.badge) + '</span>' +
        '</article>';
    }).join('');
  }

  /* ------------------------------------------------------------------ */
  /* 5. Formation                                                         */
  /* ------------------------------------------------------------------ */
  function renderEducation() {
    $('#educationList').innerHTML = DATA.education.map(function (e) {
      var badge = e.current
        ? '<span class="tl-card__badge">' + icon('graduation', 14) + 'En cours</span>'
        : '';

      return '' +
        '<li class="tl-item reveal">' +
          '<article class="tl-card' + (e.current ? ' tl-card--current' : '') + '">' +
            '<div class="tl-card__head">' +
              '<h3 class="tl-card__role">' + esc(e.degree) + '</h3>' +
              badge +
            '</div>' +
            '<p class="tl-card__company" style="margin-bottom:.35rem">' + esc(e.school) + '</p>' +
            '<p class="tl-card__meta">' +
              '<span>' + icon('calendar', 14) + esc(e.period) + '</span>' +
              '<span>' + icon('pin', 14) + esc(e.location) + '</span>' +
            '</p>' +
            (e.detail ? '<p class="card__text">' + esc(e.detail) + '</p>' : '') +
          '</article>' +
        '</li>';
    }).join('');
  }

  /* ------------------------------------------------------------------ */
  /* 6. Compétences                                                      */
  /* ------------------------------------------------------------------ */
  function renderSkills() {
    $('#skillsList').innerHTML = DATA.skills.map(function (s) {
      var tags = s.items.map(function (i) {
        return '<span class="tag">' + esc(i) + '</span>';
      }).join('');

      return '' +
        '<article class="card reveal">' +
          '<div class="skill-card__title">' + icon(s.icon, 19) + '<span>' + esc(s.category) + '</span></div>' +
          '<div class="tags">' + tags + '</div>' +
        '</article>';
    }).join('');
  }

  /* ------------------------------------------------------------------ */
  /* 7. Certifications & activités associatives                           */
  /* ------------------------------------------------------------------ */
  function renderCertifications() {
    $('#certList').innerHTML = DATA.certifications.map(function (c) {
      return '' +
        '<li>' + icon('check', 17) +
          '<span><strong>' + esc(c.name) + '</strong> · <span>' + esc(c.detail) + '</span></span>' +
        '</li>';
    }).join('');

    $('#assocList').innerHTML = DATA.associations.map(function (a) {
      return '' +
        '<li>' + icon('award', 17) +
          '<span><strong>' + esc(a.name) + '</strong> · <span>' + esc(a.detail) + ' (' + esc(a.period) + ')</span></span>' +
        '</li>';
    }).join('');
  }

  /* ------------------------------------------------------------------ */
  /* 8. Langues                                                           */
  /* ------------------------------------------------------------------ */
  function renderLanguages() {
    $('#langList').innerHTML = DATA.languages.map(function (l, i) {
      var pct = Math.round((l.level / 5) * 100);
      return '' +
        '<li>' +
          '<span class="langs__name">' + esc(l.name) + '</span>' +
          '<span class="langs__bar"><span class="langs__fill" data-width="' + pct + '"></span></span>' +
          '<span class="langs__label">' + esc(l.label) + '</span>' +
        '</li>';
    }).join('');
  }

  /* ------------------------------------------------------------------ */
  /* 9. Contact                                                           */
  /* ------------------------------------------------------------------ */
  function renderContact() {
    var id = DATA.identity;
    var subject = encodeURIComponent(DATA.contact.emailSubject);

    $('#contactIntro').textContent = DATA.contact.intro;

    $('#contactMailBtn').href = 'mailto:' + id.email + '?subject=' + subject;
    $('#contactMailLabel').textContent = id.email;
    $('#contactPhoneBtn').href = 'tel:' + id.phoneHref;
    $('#contactPhoneLabel').textContent = id.phoneLabel;
    $('#contactLinkedin').href = id.linkedin;
    $('#contactGithub').href = id.github;

    var items = [
      { icon: 'mail', label: id.email, sub: 'E-mail', href: 'mailto:' + id.email + '?subject=' + subject },
      { icon: 'phone', label: id.phoneLabel, sub: 'Téléphone', href: 'tel:' + id.phoneHref },
      { icon: 'pin', label: id.location, sub: 'Ville', href: null },
      { icon: 'linkedin', label: 'LinkedIn', sub: 'Profil professionnel', href: id.linkedin, external: true },
      { icon: 'github', label: 'GitHub', sub: 'Code & projets', href: id.github, external: true }
    ];

    $('#contactList').innerHTML = items.map(function (i) {
      var ic = (i.icon === 'linkedin' || i.icon === 'github') ? iconSolid(i.icon, 19) : icon(i.icon, 19);
      var inner = ic + '<span>' + esc(i.label) + '<small>' + esc(i.sub) + '</small></span>';
      if (!i.href) return '<li><div class="contact__row">' + inner + '</div></li>';
      var attrs = i.external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return '<li><a href="' + esc(i.href) + '"' + attrs + '>' + inner + '</a></li>';
    }).join('');
  }

  /* ------------------------------------------------------------------ */
  /* 10. Métadonnées & données structurées (SEO)                         */
  /* ------------------------------------------------------------------ */
  function renderMeta() {
    var id = DATA.identity;
    document.title = id.fullName + ' · ' + id.title + ' · IoT & Robotique';

    var desc = DATA.profile.paragraphs.join(' ');
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', document.title);

    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', desc);

    var jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: id.fullName,
      jobTitle: id.title,
      description: desc,
      email: 'mailto:' + id.email,
      telephone: id.phoneHref,
      address: { '@type': 'PostalAddress', addressLocality: 'Sousse', addressCountry: 'TN' },
      url: document.querySelector('link[rel="canonical"]') ? document.querySelector('link[rel="canonical"]').href : '',
      sameAs: [id.linkedin, id.github],
      alumniOf: DATA.education.map(function (e) {
        return { '@type': 'EducationalOrganization', name: e.school };
      }),
      knowsAbout: DATA.skills.reduce(function (acc, s) { return acc.concat(s.items); }, [])
    };

    var ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(ld);
  }

  /* ------------------------------------------------------------------ */
  /* 11. Interactions : menu mobile, scroll-spy, révélations, progress    */
  /* ------------------------------------------------------------------ */
  function initNav() {
    var toggle = $('#navToggle');
    var nav = $('#primaryNav');
    var header = $('#siteHeader');

    function closeMenu() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Ouvrir le menu');
      document.body.classList.remove('is-locked');
    }

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
      document.body.classList.toggle('is-locked', open);
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 780) closeMenu();
    });

    // Ombre de l'en-tête + barre de progression
    var progress = $('#scrollProgress');
    function onScroll() {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initScrollSpy() {
    var links = $$('.nav__link');
    var map = {};
    var sections = [];
    links.forEach(function (link) {
      var id = link.getAttribute('href').replace('#', '');
      var section = document.getElementById(id);
      if (section) { map[id] = link; sections.push(section); }
    });

    if (!('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('is-active'); });
          var active = map[entry.target.id];
          if (active) active.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }

  function initReveal() {
    var items = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (i) { i.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (i) { observer.observe(i); });
  }

  function initLanguageBars() {
    var fills = $$('.langs__fill');
    if (!('IntersectionObserver' in window)) {
      fills.forEach(function (f) { f.style.width = f.dataset.width + '%'; });
      return;
    }
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.width + '%';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    fills.forEach(function (f) { observer.observe(f); });
  }

  /* ------------------------------------------------------------------ */
  /* Initialisation                                                        */
  /* ------------------------------------------------------------------ */
  function init() {
    renderMeta();
    renderIdentity();
    renderProfile();
    renderExperience();
    renderProjects();
    renderEducation();
    renderSkills();
    renderCertifications();
    renderLanguages();
    renderContact();

    initNav();
    initScrollSpy();
    initReveal();
    initLanguageBars();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
