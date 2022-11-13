import "core-js/stable";
import "regenerator-runtime/runtime";
//Load the translation data
import translationObj from "../resources/data/translate.json";
import placeholderTranslationObj from "../resources/data/placeholder-translate.json";

//Helper function for selecting DOM elements
const selectEl = function (DOMEl) {
	return document.querySelector(DOMEl);
};

//Open Modal for Download cv button
const btnOpenModalDownloadCV = selectEl("#tr-download-cv");
// Download cv modal
const downloadCVModal = selectEl("#download-cv-modal");
// Get the <span> element that closes the modal
const closeModalBtn = selectEl(".close-modal");

//Translation buttons
const btnGreek = selectEl(".btn-greek");
const btnEnglish = selectEl(".btn-english");

//Arrays to store the DOM elements that will be traslated
const elementsForTranslation = [];
const elementsForPlaceholderTranslation = [];

//DOM elemtents for translation are pushed in the corresponding arrays
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
elementsForTranslation.push(selectEl("#tr-experience-4"));
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
elementsForTranslation.push(selectEl("#tr-skills-1"));
elementsForTranslation.push(selectEl("#tr-skills-2"));
elementsForTranslation.push(selectEl("#tr-skills-3"));
elementsForTranslation.push(selectEl("#tr-contact-1"));
elementsForTranslation.push(selectEl("#tr-contact-2"));
elementsForTranslation.push(selectEl("#tr-close"));
elementsForTranslation.push(selectEl("#download-1"));
elementsForTranslation.push(selectEl("#download-2"));
elementsForTranslation.push(selectEl("#download-3"));

elementsForPlaceholderTranslation.push(selectEl("#tr-contact-placeholder-1"));
elementsForPlaceholderTranslation.push(selectEl("#tr-contact-placeholder-2"));

//Boolean variable to indicate the language that is displayed
let isGreek = true;

//Function to alter the innerHTML (and placeholder) attribute of the
//selected DOM elements so the translation is implemented
const translateTo = async function (language) {
	try {
		elementsForTranslation.forEach(
			(elementForTranslation, index) =>
				(elementForTranslation.innerHTML = translationObj.translations[index][language])
		);
		elementsForPlaceholderTranslation.forEach(
			(elementForTranslation, index) =>
				(elementForTranslation.placeholder = placeholderTranslationObj.translations[index][language])
		);
	} catch (err) {
		console.error(err);
	}
};

//Function to display the message that the cv is not yet ready
const pdfCVNotReady = async function () {
	try {
		alert(
			translationObj.translations[translationObj.translations.length - 1][isGreek ? "greek" : "english"]
		);
	} catch (err) {
		console.error(err);
	}
};

//Listener for the download cv modal
// When the user clicks on the button, open the modal
btnOpenModalDownloadCV.addEventListener("click", function () {
	this.blur();
	// location.href = "#contact";
	downloadCVModal.style.display = "grid";
});

//Listener for the close modal button
closeModalBtn.addEventListener("click", function () {
	this.blur();
	downloadCVModal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == downloadCVModal) {
		downloadCVModal.style.display = "none";
	}
};

//Function to implement the greek translation
const greekTranslation = function () {
	if (isGreek) return;

	translateTo("greek");
	isGreek = true;
	btnGreek.classList.toggle("tr-btn-selected");
	btnEnglish.classList.toggle("tr-btn-selected");
};

//Function to implement the english translation
const englishTranslation = function () {
	if (!isGreek) return;

	translateTo("english");
	isGreek = false;
	btnEnglish.classList.toggle("tr-btn-selected");
	btnGreek.classList.toggle("tr-btn-selected");
};

//Liteners for the translation buttons
btnGreek.addEventListener("click", greekTranslation);
btnEnglish.addEventListener("click", englishTranslation);

//Listner for the esc button in keyboard
//Toggles the language displayed
document.addEventListener("keydown", keyEventObj => {
	if (keyEventObj.key === "Escape") {
		if (isGreek) {
			englishTranslation();
			return;
		}
		greekTranslation();
	}
});
