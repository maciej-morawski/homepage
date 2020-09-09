const firstName = "Maciek";
const age = 28;

console.log(firstName);
console.log(age);
console.log(`Siema, nazywam się ${firstName} i mam ${age} lat.`);

const heading = document.querySelector(".main__heading--js");

heading.innerHTML = `Siema, nazywam się ${firstName} i mam ${age} lat.`;

const emptyParagraph = document.querySelector(".week-summary__description--js");

emptyParagraph.innerHTML = "Nawet uzupełniłem treść javascriptem!";
