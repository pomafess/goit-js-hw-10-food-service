const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const checkForm = document.querySelector('#theme-switch-toggle');
document.body.classList.add(Theme.LIGHT);
checkForm.addEventListener('change', onCheckBoxChange);

localCheck()

function onCheckBoxChange(e) {
    const check = document.body.classList.toggle(Theme.DARK);
    localStorage.setItem('check-value', check);
};
function localCheck() {
    if (localStorage.getItem('check-value') === "true") {
        document.body.classList.replace(Theme.LIGHT, Theme.DARK);
        checkForm.checked = "true";
    };
};
