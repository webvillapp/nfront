import '../scss/source.scss';
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

document.addEventListener("DOMContentLoaded", function () {

	/* === slider === */
	tns({
		container: '.my-slider',
		mode: 'carousel',
		axis: 'vertical',
		items: 1,
		gutter: 0,
		edgePadding: 0,
		fixedWidth: false,
		slideBy: 1,
		controls: true,
		controlsText: ['&#8673', '&#8675;'],
		controlsContainer: false,
		nav: true,
		navContainer: '.slider-navigation',
		navAsThumbnails: false,
		arrowKeys: false,
		speed: 500
	  });


	/* === responsive navigation === */
	const navToggler = document.querySelector('.nav-toggler');
	const mainNav = document.querySelector('.main-nav');
	const navIcon = document.querySelector('.navicon');

	navToggler.addEventListener('click', e => {
		if (navToggler.classList.contains('expanded')) {
			navToggler.classList.remove('expanded');
			navToggler.setAttribute('aria-expanded', 'false');
			navIcon.classList.remove('open');
			mainNav.classList.remove('open');
		} else {
			navToggler.classList.add('expanded');
			navToggler.setAttribute('aria-expanded', 'true');
			navIcon.classList.add('open');
			mainNav.classList.add('open');
		}
	})
});