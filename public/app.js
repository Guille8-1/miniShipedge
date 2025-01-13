const breadContainer = document.getElementById('bread');
const title = document.title.toLowerCase()

const breadAnchor = document.createElement('a')
const urlBreadStyle = breadAnchor.setAttribute('class', 'bread-crumb_base')
breadAnchor.innerHTML = `${title}`

breadContainer.appendChild(breadAnchor);
const baseURL= 'https://shipedge.com/blog/company/';
const url = new URL(baseURL, baseURL);

console.log(url);
// const date = new Date()
// const date1 = new Date().toISOString()


// console.log(date)
// console.log(date1)

// const navButtons = document.querySelectorAll('#nav-bar a');
// const navHeight = document.querySelector('.w-nav').clientHeight;
// const homeButton = document.querySelector('.navbar-brand');
// homeButton.setAttribute('href', 1);

// homeButton.addEventListener('click', (e) => {
//     e.preventDefault();
//         const targetId = homeButton.getAttribute('href');
//         const target = document.getElementById(targetId);
//         if (target) {
//             const targetPos = target.getBoundingClientRect().top + window.scrollY;
//             const offset = targetPos - navHeight;
//             window.scroll({
//                 top: offset,
//                 behavior: 'smooth'
//             });
//         }
// });

// let aElement = 0;
// navButtons.forEach((button) => {
//     button.removeAttribute('herf')
//     button.setAttribute('href', ++aElement);

//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = button.getAttribute('href');
//         const target = document.getElementById(targetId);
//         if (target) {
//             const targetPos = target.getBoundingClientRect().top + window.scrollY;
//             const offset = targetPos - navHeight;
//             window.scroll({
//                 top: offset,
//                 behavior: 'smooth'
//             });
//         }
//     });
// })

// //xenvio behavior

// const faqButtons = document.querySelector(".faq-questions");
// const answerSection = document.createElement("div");
// answerSection.setAttribute("class", "question");

// const faqButton = faqButtons.querySelectorAll(".question");
// const answers = document.querySelectorAll('.answer')
// answers.forEach(answer => answer.classList.add('center-answer'))
// console.log(answers)

// faqButton.forEach((button) => {
//   button.addEventListener("click", () => {
//     const answer = button.nextElementSibling;
//     answer.classList.toggle("visible");
//   });
// });
// const dateHeader = new Date().getMonth();

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const headerMonth = document.getElementById("month")
// headerMonth.innerHTML = `${months[dateHeader]}`

// const headerYear = document.getElementById('year')
// headerYear.innerHTML = `${new Date().getFullYear()}`

// const closerSection = document.getElementById('banner');
// const createCloser = document.createElement('button');

// createCloser.setAttribute('class', 'bannercloser')
// createCloser.setAttribute('id', 'newcloser')
// closerSection.prepend(createCloser);
// createCloser.innerHTML = 'X'

// const formerCloser = document.getElementById('close');
// formerCloser.style.display = 'none'

// createCloser.addEventListener('click', (e)=> {
//     e.preventDefault();
//     closerSection.style.display = 'none'
// })
// const consultation = document.querySelector('.button-11');
// consultation.setAttribute('target','_blank')
// consultation.setAttribute('href','https://shipedge.as.me/schedule/d46133fe/appointment/21163325/calendar/any')

// const data =
// [
//             "shipedge-achieves-premium-usability-2018-rising-star",
//             "promat-and-automate-2019-trade-show-highlights",
//             "shipedge-honored-as-one-of-the-best-e-commerce-software-on-goodfirms",
//             "shipedge-is-iso-27001-2013-certified-by-nqa",
//             "enabling-implementation-success-with-your-new-wms-2024"
// ];

// const searchHolder = document.getElementById('search');
// const input = document.createElement('input');
// const ulisted = document.createElement('ul');
// searchHolder.appendChild(input);
// searchHolder.appendChild(ulisted);
// ulisted.style.display = "none"

// ulisted.setAttribute('class','results-holder')
// ulisted.setAttribute('id','results')

// input.setAttribute('class','input-query');
// input.setAttribute('id','input');
// input.setAttribute('placeholder','Search Blogs');
// const query = document.getElementById('input');

// query.addEventListener('input',()=>{
//     const request = input.value.toLowerCase();
//     ulisted.textContent = ""

//     if(![...ulisted.children].some(element => element.textContent === request)){
//         const matches = data.filter(item => item.toLowerCase().includes(request));
//         matches.forEach(match => {
//             const anchor = document.createElement('a');
//             anchor.setAttribute('id','post')
//             anchor.textContent = match;
//             anchor.href = match;
//             ulisted.style.display = "block"
//             ulisted.appendChild(anchor);
//             if (input.value === ){

//             }
//         })
//     } else {
//         ulisted.textContent = ""
//         ulisted.style.display = "none"

//     }
// })

// const blogTags = document.querySelectorAll(".text-block-13")
// blogTags[2].setAttribute('class','tagsBlog')

// document.addEventListener("DOMContentLoaded", ()=>{

//

//     const input = document.getElementById("search")
//     const suggestions = document.getElementById("suggestions");
//     const viewLink = document.getElementById("viewLink");

//     const baseURL = ""

//     //suggestions

//     input.addEventListener('input', () => {
//         const query = input.value.toLowerCase();
//         //suggestions.innerHTML= ""

//         if(query) {
//             const matches = data.filter(item => item.toLowerCase().includes(query));
//             matches.forEach(match =>{
//                 const li = document.createElement('a');
//                 const constructUrl = `${baseURL}${match}`
//                 li.textContent = match;
//                 li.href = constructUrl
//                 li.addEventListener("click", (e) =>{
//                     input.value = match;
//                     suggestions.style.display = "block"

//                 });
//                 suggestions.appendChild(li)
//             })
//         }
//     })

// document.addEventListener("click",(e)=> {
//     if(!e.target.closest(".suggestion-input")){
//         suggestions.innerHTML = "";
//     }
// })
//})
