/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.swiperr')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.swiperr', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},

			// Події
			on: {

			}
		});
	}

	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.projects__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.projects__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},


			// Брейкпоінти
			// breakpoints: {
			// 	640: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 0,
			// 	},
			// 	768: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 0,
			// 	},
			// 	992: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 0,
			// 	},
			// 	// 1268: {
			// 	// 	slidesPerView: 4.9,
			// 	// 	spaceBetween: 0,
			// 	// },
			// 	1500: {
			// 		slidesPerView: 5,
			// 		spaceBetween: 0,
			// 	},
			// },

			// Події
			on: {

			}
		});
	}

	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.features__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.features__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 0,
			//autoHeight: true,
			speed: 3000,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			autoplay: {
				delay: 0,
				disableOnInteraction: false,
			},
			// Події
			on: {

			}
		});
	}

	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.about-photos__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.about-photos__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1.75,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},

			// Брейкпоінти
			breakpoints: {
				600: {
					slidesPerView: 2.75,
					spaceBetween: 0,
				},
				1400: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
			},

			// Події
			on: {

			}
		});
	}

	if (window.innerWidth < 992) {
		// Перевіряємо, чи є слайдер на сторінці
		if (document.querySelector('.testimonials__slider')) { // Вказуємо склас потрібного слайдера
			// Створюємо слайдер
			new Swiper('.testimonials__slider', { // Вказуємо склас потрібного слайдера
				// Підключаємо модулі слайдера
				// для конкретного випадку
				modules: [Autoplay, Pagination],
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 20,
				//autoHeight: true,
				speed: 800,

				//touchRatio: 0,
				//simulateTouch: false,
				loop: true,
				//preloadImages: false,
				//lazy: true,

				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},

				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},

				// Брейкпоінти
				breakpoints: {
					640: {
						slidesPerView: 1,
						spaceBetween: 0,
						autoHeight: true,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
				},

				// Події
				on: {

				}
			});
		}
	}


}


window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});