// import "core-js/stable";
// import "regenerator-runtime/runtime";
// import data from "../resources/data/translate.json";
// const btnDownloadCV = document.querySelector(".downloadCV");
const btnGreek = document.querySelector(".btn-greek");
const btnEnglish = document.querySelector(".btn-english");
const elementsForTranslation = [];
// console.log(data);
//Helper function
const selectEl = function(DOMEl) {
    return document.querySelector(DOMEl);
};
//DOM elemtents for translation
elementsForTranslation.push(selectEl(".menu-item-1"));
elementsForTranslation.push(selectEl(".menu-item-2"));
elementsForTranslation.push(selectEl(".menu-item-3"));
elementsForTranslation.push(selectEl(".menu-item-4"));
elementsForTranslation.push(selectEl(".menu-item-5"));
elementsForTranslation.push(selectEl(".menu-item-6"));
// elementsForTranslation.push(selectEl(".h-el1"));
// elementsForTranslation.push(selectEl(".h-el2"));
// elementsForTranslation.push(selectEl(".h-el3"));
// elementsForTranslation.push(selectEl(".h-el6"));
// elementsForTranslation.push(selectEl("#personal-info"));
// elementsForTranslation.push(selectEl("#personal-info1"));
// elementsForTranslation.push(selectEl("#personal-info2"));
// elementsForTranslation.push(selectEl("#personal-info3"));
// elementsForTranslation.push(selectEl("#summary"));
// elementsForTranslation.push(selectEl("#summary1"));
// elementsForTranslation.push(selectEl("#education"));
// elementsForTranslation.push(selectEl("#education1"));
// elementsForTranslation.push(selectEl("#education2"));
// elementsForTranslation.push(selectEl("#education3"));
// elementsForTranslation.push(selectEl("#education4"));
// elementsForTranslation.push(selectEl("#education5"));
// elementsForTranslation.push(selectEl("#knowledge"));
// elementsForTranslation.push(selectEl("#work"));
// elementsForTranslation.push(selectEl("#work1"));
// elementsForTranslation.push(selectEl("#my-link"));
// elementsForTranslation.push(selectEl(".modal-title"));
// elementsForTranslation.push(selectEl("#cellphone"));
console.log(elementsForTranslation);
let isGreek = true;
const fetchTranslations = async function() {
    try {
        return fetch("../resources/data/translate.json").then((responce)=>{
            response = responce.json();
            console.log(response);
            return response;
        }).then((translations)=>{
            console.log(translations);
            return translations;
        });
    } catch (error) {
        console.error(`Custom Error: ${error}`);
    }
};
const translateTo = async function(language) {
    try {
        const translationObj = await fetchTranslations();
        console.log(translationObj);
        elementsForTranslation.forEach((elementForTranslation, index)=>elementForTranslation.innerHTML = translationObj.translations[index][language]);
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
btnGreek.addEventListener("click", function() {
    this.blur();
    if (isGreek) return;
    translateTo("greek");
    isGreek = true;
    this.classList.toggle("tr-btn-selected");
    btnEnglish.classList.toggle("tr-btn-selected");
});
btnEnglish.addEventListener("click", function() {
    this.blur();
    if (!isGreek) return;
    translateTo("english");
    isGreek = false;
    this.classList.toggle("tr-btn-selected");
    btnGreek.classList.toggle("tr-btn-selected");
});

//# sourceMappingURL=index.0d9702cf.js.map
