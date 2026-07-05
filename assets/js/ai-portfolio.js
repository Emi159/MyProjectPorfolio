(function () {
	'use strict';

	var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	/* Sticky header shadow on scroll */
	var header = document.querySelector('.site-header');
	var backToTop = document.querySelector('.back-to-top');
	function onScroll() {
		var scrolled = window.scrollY > 12;
		if (header) header.classList.toggle('is-scrolled', scrolled);
		if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > 600);
	}
	document.addEventListener('scroll', onScroll, { passive: true });
	onScroll();

	if (backToTop) {
		backToTop.addEventListener('click', function () {
			window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
		});
	}

	/* Mobile nav toggle */
	var navToggle = document.querySelector('.nav-toggle');
	var navMobile = document.querySelector('.nav-mobile');
	if (navToggle && navMobile) {
		navToggle.addEventListener('click', function () {
			var isOpen = navMobile.classList.toggle('is-open');
			navToggle.setAttribute('aria-expanded', String(isOpen));
			navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
			document.body.style.overflow = isOpen ? 'hidden' : '';
		});
		navMobile.querySelectorAll('a').forEach(function (link) {
			link.addEventListener('click', function () {
				navMobile.classList.remove('is-open');
				navToggle.setAttribute('aria-expanded', 'false');
				navToggle.setAttribute('aria-label', 'Open menu');
				document.body.style.overflow = '';
			});
		});
	}

	/* Scroll reveal */
	var revealEls = document.querySelectorAll('.reveal');
	if ('IntersectionObserver' in window && !reduceMotion) {
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
		revealEls.forEach(function (el) { observer.observe(el); });
	} else {
		revealEls.forEach(function (el) { el.classList.add('is-visible'); });
	}

	/* Active nav link on scroll (scrollspy) */
	var sections = document.querySelectorAll('main section[id]');
	var navLinks = document.querySelectorAll('.nav-desktop a, .nav-mobile a');
	if ('IntersectionObserver' in window && sections.length) {
		var spy = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					var id = entry.target.getAttribute('id');
					navLinks.forEach(function (link) {
						link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
					});
				}
			});
		}, { rootMargin: '-45% 0px -50% 0px' });
		sections.forEach(function (s) { spy.observe(s); });
	}
})();
