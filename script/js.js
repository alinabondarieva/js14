// Реалізувати можливість зміни колірної теми користувача.Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

// Технічні вимоги:
// Взяти будь-яке готове домашнє завдання з HTML/CSS.
// Додати на макеті кнопку "Змінити тему".
// При натисканні на кнопку - змінювати колірну гаму сайту (кольори кнопок, фону тощо) на ваш розсуд.
//  При повторному натискання - повертати все як було спочатку - начебто для сторінки доступні дві колірні теми.
// Вибрана тема повинна зберігатися після перезавантаження сторінки

const btn = document.querySelector("#btn")
function init(){
    const locale = localStorage.getItem("style")
    if(!locale){
     const dom = document.querySelector("#stylesheet");
     localStorage.setItem("style", dom.getAttribute("href"))
    } else{
    const dom = document.querySelector("#stylesheet");
    dom.setAttribute("href", locale)
    }
}
init()

btn.addEventListener("click", function(event){
    const dom = document.querySelector("#stylesheet")
    const att = dom.getAttribute("href")
if(att === "./style/style.css"){
    dom.setAttribute("href", "./style/stylebl.css")
    localStorage.setItem("style", "./style/stylebl.css")
} else {
    console.log(btn)
    dom.setAttribute("href", "./style/style.css")
    localStorage.setItem("style", "./style/style.css")
}    
})