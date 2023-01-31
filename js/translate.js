//Анимация
let box = document.querySelectorAll('h1')
box.forEach(function(elem){
  elem.addEventListener("click", function() {
    parent = elem.parentNode.parentNode
    border = parent.querySelectorAll('.border')
    border.forEach(function(el){
      el.classList.add('box_rotate')
    })
  })
})
let div = document.querySelectorAll('.border')
div.forEach(function(elem){
  elem.addEventListener("animationend", function(){
    elem.classList.remove('box_rotate')
  })
})

//Перевод
const translateElements = document.querySelectorAll('h1')
for (let i = 0; i < translateElements.length; i++){
  translateElements[i].onclick = function() {
    let section = translateElements[i].parentNode.parentNode
    let child = section.querySelectorAll('.text')
    SwapText(child)
  }
}

function SwapText(child){
  child.forEach(function (el) {
    for (let i = 0; i < enText.length; i++){
      if (el.innerHTML == enText[i]){
        el.innerHTML = ruText[i]
      } else if (el.innerHTML == ruText[i]) {
        el.innerHTML = enText[i]
      }
    }
  })
}

enText = [
  "Markov Andrei Valerievich",
  "male",
  "Nov 1, 1993",
  "PHP Back-end Developer",

  "Republic of Belarus",
  "Minsk",
  "Oktyabrsky",
  "L.Levina",

  "The State Forestry Institution<br>\"Cherikovsky Forestry\"",
  "Forest master",
  "April 2016 - May 2018<br>(2 years 2 months)",
  "1. Active participation in the elimination of windbreaks in the Cherven and Smolevichi districts in 2017",

  "Mobile TeleSystems, JLLC",
  "Customer service manager",
  "September 2018 - October 2018<br>(2 months)",
  
  "BURSHTAT",
  "Marketer",
  "April 2019 - June 2019<br>(3 ​​months)",

  "Hunting Republician Unitary Enterprise<br>\"BELGOSOKHOTA\"",
  "Hunting management and research engineer",
  "October 2019 - February 2023<br>(3 years 4 months)",
  "1. Merch design development;<br>2. Software setup when moving to a remote location (due to Covid-19);<br>3. Development of guidelines for work in the department;<br>4. Training and adaptation of new employees in the department",

  "Secondary School #1",
  "Cherikov",

  "Belarusian State Agricultural Academy",
  "Gorki",
  "Ecologist",

  "Republican Center for Advanced Training of Managers and Forestry Specialists",
  "Zhdanovichi",

  "Belarusian State Technological University",
  "Forestry engineer",

  "My IT School",

  "Native",
  "Pre-Intermediate",
  "Elementary",

  "The ability to listen",
  "Clear speech",
  "Responsibility",
  "Basic time management",
  "Work for the result",
  "Multitasking",
  "Critical thinking",
  "Trust",
  "Patience",
  "Honesty",
  "Eagerness to learn",

]

ruText = [
  "Марков Андрей Валерьевич",
  "мужской",
  "1 ноября 1993",
  "PHP Бэкенд Разработчик",

  "Республика Беларусь",
  "Минск",
  "Октябрьский",
  "Л.Левина",

  "Государственное лесохозяйственное учреждение<br>\"Чериковский лесхоз\"",
  "Мастер леса",
  "Апрель 2016 - Май 2018<br>(2 года 2 месяца)",
  "1. Активное участие в ликвидации бурелома в Червенском и Смолевичском районах в 2017 году",

  "СООО \"МТС\"",
  "Специалист по работе с клиентами",
  "Сентябрь 2018 - Октябрь 2018<br>(2 месяца)",
  
  "ЧТУП \"БУРШТАТ\"",
  "Маркетолог",
  "Апрель 2019 - Июнь 2019<br>(3 месяца)",
  
  "Охотохозяйственное республиканское унитарное предприятие<br>\"Белгосохота\"",
  "Инженер охотоустройства и научно-исследовательских работ",
  "Октябрь 2019 - Февраль 2023<br>(3 года 4 месяца)",
  "1. Разработка дизайна мерча;<br>2. Настройка ПО для удаленной работы (из-за Covid-19);<br>3. Разработка методических указаний для работы в отделе;<br>4. Обучение и адаптация новых сотрудников в отделе",

  "Средняя школа №1",
  "Чериков",

  "Белорусская государственная сельскохозяйственная академия",
  "Горки",
  "Эколог",

  "Республиканский центр повышения квалицификации руководящих работников и специалистов лесного хозяйства",
  "Ждановичи",

  "Белорусский государственный тесхнологический университет",
  "Инженер лесного хозяйства",

  "Моя IT школа",

  "Родной",
  "Ниже среднего",
  "Начальный",

  "Умение слушать",
  "Чистая речь",
  "Ответственность",
  "Базовый тайм-менеджмент",
  "Работа на результат",
  "Мультизадачность",
  "Критическое мышление",
  "Доверие",
  "Терпеливость",
  "Честность",
  "Стремление к новым знаниям",
]