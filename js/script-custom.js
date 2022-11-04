import "core-js/stable";
import "regenerator-runtime/runtime";
import translationObj from "../resources/data/translate.json";

// const btnDownloadCV = document.querySelector(".downloadCV");

const btnGreek = document.querySelector(".btn-greek");
const btnEnglish = document.querySelector(".btn-english");

// const experienceDateDiv = document.querySelector("#tr-experience-date");

const elementsForTranslation = [];

//Helper function
const selectEl = function (DOMEl) {
	return document.querySelector(DOMEl);
};

//DOM elemtents for translation
elementsForTranslation.push(selectEl("#tr-menu-item-1"));
elementsForTranslation.push(selectEl("#tr-menu-item-2"));
elementsForTranslation.push(selectEl("#tr-menu-item-3"));
elementsForTranslation.push(selectEl("#tr-menu-item-4"));
elementsForTranslation.push(selectEl("#tr-menu-item-5"));
elementsForTranslation.push(selectEl("#tr-menu-item-6"));
elementsForTranslation.push(selectEl("#tr-name"));
elementsForTranslation.push(selectEl("#tr-download-cv"));
elementsForTranslation.push(selectEl("#tr-about-1"));
elementsForTranslation.push(selectEl("#tr-about-2"));
elementsForTranslation.push(selectEl("#tr-about-3"));
elementsForTranslation.push(selectEl("#tr-about-3-1"));
elementsForTranslation.push(selectEl("#tr-about-4"));
elementsForTranslation.push(selectEl("#tr-about-5"));
elementsForTranslation.push(selectEl("#tr-about-6"));
elementsForTranslation.push(selectEl("#tr-about-6-1"));
elementsForTranslation.push(selectEl("#tr-about-7"));
elementsForTranslation.push(selectEl("#tr-about-8"));
elementsForTranslation.push(selectEl("#tr-education-1"));
elementsForTranslation.push(selectEl("#tr-education-2"));
elementsForTranslation.push(selectEl("#tr-education-3"));
elementsForTranslation.push(selectEl("#tr-education-4"));
elementsForTranslation.push(selectEl("#tr-education-5"));
elementsForTranslation.push(selectEl("#tr-education-6"));
elementsForTranslation.push(selectEl("#tr-education-7"));
elementsForTranslation.push(selectEl("#tr-education-8"));
elementsForTranslation.push(selectEl("#tr-education-9"));
elementsForTranslation.push(selectEl("#tr-education-10"));
elementsForTranslation.push(selectEl("#tr-education-11"));
elementsForTranslation.push(selectEl("#tr-experience-1"));
elementsForTranslation.push(selectEl("#tr-experience-2"));
elementsForTranslation.push(selectEl("#tr-experience-3"));
elementsForTranslation.push(selectEl("#tr-projects-1"));
elementsForTranslation.push(selectEl("#tr-projects-2"));
elementsForTranslation.push(selectEl("#tr-projects-3"));
elementsForTranslation.push(selectEl("#tr-projects-4"));
elementsForTranslation.push(selectEl("#tr-projects-5"));
elementsForTranslation.push(selectEl("#tr-projects-6"));
elementsForTranslation.push(selectEl("#tr-projects-7"));
elementsForTranslation.push(selectEl("#tr-projects-8"));
elementsForTranslation.push(selectEl("#tr-projects-9"));
elementsForTranslation.push(selectEl("#tr-projects-10"));
elementsForTranslation.push(selectEl("#tr-projects-11"));
elementsForTranslation.push(selectEl("#tr-projects-12"));
elementsForTranslation.push(selectEl("#tr-projects-13"));
elementsForTranslation.push(selectEl("#tr-projects-14"));
elementsForTranslation.push(selectEl("#tr-projects-15"));
elementsForTranslation.push(selectEl("#tr-projects-16"));

console.log(elementsForTranslation);

let isGreek = true;

const translateTo = async function (language) {
	try {
		// const translationObj = await fetchTranslations();
		elementsForTranslation.forEach(
			(elementForTranslation, index) =>
				(elementForTranslation.innerHTML = translationObj.translations[index][language])
		);
	} catch (err) {
		console.error(err);
	}
};

// const pdfCVNotReady = async function () {
// 	try {
// 		const translationObj = await fetchTranslations();
// 		alert(
// 			translationObj.translations[translationObj.translations.length - 1][isGreek ? "greek" : "english"]
// 		);
// 	} catch (err) {
// 		console.error(err);
// 	}
// };

// btnDownloadCV.addEventListener("click", function () {
// 	this.blur();
// 	pdfCVNotReady();
// });

const greekTranslation = function () {
	this.blur();
	if (isGreek) return;

	translateTo("greek");
	isGreek = true;
	btnGreek.classList.toggle("tr-btn-selected");
	btnEnglish.classList.toggle("tr-btn-selected");

	// console.log(experienceDateDiv.attributes);
	// experienceDateDiv.setAttribute("data-date", "Ιούλιος 2021 – Αύγουστος 2021");

	// $this.find(".vtimeline-content").each(function () {
	// 	var date = $(this).data("date");
	// 	if (date) {
	// 		// Prepend if exists
	// 		$(this)
	// 			.parent()
	// 			.prepend('<span class="vtimeline-date">' + date + "</span>");
	// 	}
	// });
};

const englishTranslation = function () {
	this.blur();
	if (!isGreek) return;

	translateTo("english");
	isGreek = false;
	btnEnglish.classList.toggle("tr-btn-selected");
	btnGreek.classList.toggle("tr-btn-selected");

	// console.log(experienceDateDiv.attributes);
	// experienceDateDiv.setAttribute("data-date", "July 2021 – August 2021");

	// $this.find(".vtimeline-content").each(function () {
	// 	var date = $(this).data("date");
	// 	if (date) {
	// 		// Prepend if exists
	// 		$(this)
	// 			.parent()
	// 			.prepend('<span class="vtimeline-date">' + date + "</span>");
	// 	}
	// });
};

btnGreek.addEventListener("click", greekTranslation);
document.addEventListener("keydown", keyEventObj => {
	if (keyEventObj.key == "g" || keyEventObj.key == "ε") greekTranslation();
});

btnEnglish.addEventListener("click", englishTranslation);
document.addEventListener("keydown", keyEventObj => {
	if (keyEventObj.key == "e" || keyEventObj.key == "α") englishTranslation();
});
