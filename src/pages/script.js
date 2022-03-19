const englishButton = document.querySelector('.header__lang-link_en');
const russiaButton = document.querySelector('.header__lang-link_ru');
const englishLanguage = document.querySelectorAll('.language_en');
const russiaLanguage = document.querySelectorAll('.language_ru');
import './index.css'

function switchLanguageButton (a , b) {
  b.classList.remove('header__lang-link_underline');
  a.classList.add('header__lang-link_underline');
};

function checkLanguage(a, selector) {
  a.forEach(i =>
  i.classList.add(selector))
}

function hiddenLanguage(a) {
  a.forEach(i =>
    i.classList.remove('language_on'))
}

englishButton.addEventListener('click', () => {
  switchLanguageButton(englishButton, russiaButton)
  checkLanguage(russiaLanguage, 'language_none')
  checkLanguage(englishLanguage, 'language_on')
  hiddenLanguage(russiaLanguage)
});

russiaButton.addEventListener('click', () => {
  switchLanguageButton(russiaButton, englishButton)
  hiddenLanguage(englishLanguage)
  checkLanguage(englishLanguage, 'language_none')
  checkLanguage(russiaLanguage, 'language_on')
});
