//      SLIDER - LOGIC

const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const sliderWrapper = document.querySelector(".image-slider-wrapper");
const slider = document.querySelector("#image_slider");
const last = document.querySelector(".last");
const cont = document.querySelector(".container");

btnLeft.addEventListener("click", () => {
	cont.scroll({
		top: 0,
		left: -230,
		behavior: "smooth",
	});
	btnRight.style.opacity = "1";
	if (cont.scrollLeft < 10) {
		btnLeft.style.opacity = "0";
	}
});
btnRight.addEventListener("click", (e) => {
	btnLeft.style.opacity = "1";

	cont.scrollBy({
		top: 0,
		left: 280,
		behavior: "smooth",
	});
	if (cont.scrollLeft >= last.clientWidth + cont.scrollLeft - 105) {
		btnRight.style.opacity = "0";
	}
});

/* basic scroll */

var root = document.getElementsByTagName("HTML")[0];

cont.addEventListener("scroll", () => {
	if (cont.scrollLeft > 5) {
		btnLeft.style.opacity = "100%";
	} else {
		btnLeft.style.opacity = "0";
	}
	if (cont.scrollLeft <= cont.scrollWidth - cont.clientWidth - 5) {
		btnRight.style.opacity = "100%";
	} else {
		btnRight.style.opacity = "0";
	}

	//	console.log(cont.scrollLeft, cont.scrollWidth, cont.clientWidth);
});

/* resize scroll */
window.onload = function windowSize() {
	if (cont.scrollWidth - cont.clientWidth <= 0) {
		btnLeft.style.display = "none";
		btnRight.style.display = "none";
		btnRight.style.opacity = "0";
	} else {
		btnLeft.style.display = "flex";
		btnRight.style.opacity = "1";
		btnRight.style.display = "flex";
	}
};

function sliderScroll() {
	if (cont.scrollWidth - cont.clientWidth <= 0) {
		btnLeft.style.display = "none";
		btnRight.style.display = "none";
		sliderWrapper.style.justifyContent = "center";
	} else {
		btnLeft.style.display = "flex";
		btnRight.style.opacity = "1";
		btnRight.style.display = "flex";
		sliderWrapper.style.justifyContent = "unset";
	}
}

//

/* 			NAV */

const menuIcon = document.querySelector(".ham");
const menu = document.querySelector(".menu");
const icon = document.querySelector(".ri-menu-5-line");

menuIcon.addEventListener("click", () => {
	if (icon.classList.contains("ri-menu-5-line")) {
		menu.style.transform = "translateY(0)";
		menu.style.position = "absolute";
		icon.classList.remove("ri-menu-5-line");
		icon.classList.add("bx");
		icon.classList.add("bx-x");
		document.body.classList.add("body-scroll");
		root.classList.add("scroll");
		root.classList.add("scroll-2");
	} else {
		menu.style.position = "absolute";

		menu.style.transform = "translateY(-110%)";
		icon.classList.remove("bx", "bx-x");
		icon.classList.add("ri-menu-5-line");
		document.body.classList.remove("body-scroll");
		root.classList.remove("scroll-2");
		root.classList.remove("scroll");
	}
});

/* nav add */

window.addEventListener("resize", () => {
	breackPoint();
	sliderScroll();
});
function breackPoint() {
	if (window.innerWidth > 768) {
		menu.style.transition = "none";
	}
	if (window.innerWidth < 768) {
		menu.style.transition = "0.65s ease-out";
	}
}

/*  FOOTER */

const plus = document.querySelectorAll(".footer-nav div p");

plus.forEach((plus) =>
	plus.addEventListener("click", (e) => {
		/* get menu */

		if (!e.path[0].children[0].classList.contains("rotate")) {
			e.path[1].children[1].style.position = "relative";
			e.path[1].children[1].style.transform = "translateY(0)";
			e.path[1].children[1].style.visibility = "visible";
			e.path[1].children[1].style.zIndex = "10";
			e.path[1].children[1].style.transition = " 0.4s ease";
			e.path[1].children[1].style.pointerEvents = "unset";

			/* icon rotate */
			e.path[0].children[0].classList.add("rotate");
		} else {
			e.path[1].children[1].style.position = "absolute";

			e.path[1].children[1].style.transform = "translateY(-110%)";
			e.path[1].children[1].style.visibility = "hidden";
			e.path[1].children[1].style.zIndex = "-300";
			e.path[1].children[1].style.transition = "none";
			e.path[1].children[1].style.pointerEvents = "none";

			e.path[0].children[0].classList.remove("rotate");
		}
	})
);
