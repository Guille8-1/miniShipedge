const noFound = document.getElementById("no-results");

noFound.addEventListener("click", () => {
  const navHeight = document.querySelector(".w-nav").clientHeight;
  const target = document.getElementById("email-form");
  const email = document.getElementById("name-2");
  setTimeout(() => {
    email.focus();
  }, 500);

  if (target) {
    const targetPos = target.getBoundingClientRect().top + window.scrollY;
    const offset = targetPos - navHeight;
    window.scroll({
      top: offset,
      behavior: "smooth",
    });
  }
});

// const searchHolder = document.querySelector('.inte-search_icon');
// const createSearch = document.createElement('input');

// createSearch.setAttribute('class','search-input');
// createSearch.setAttribute('placeholder','Serach Integrations');
// createSearch.setAttribute('type','text');
// createSearch.setAttribute('id','search-value');

// searchHolder.append(createSearch)

// const integrationList = document.querySelectorAll('.collection-item-7')
// const searchValue = document.getElementById('search-value');

// const integrationData = Array.from(integrationList).map((integration)=> ({
//      element: integration,
//      text: integration.textContent.toLowerCase()
// }))
// let noResultsMessage = document.getElementById("no-results");

// if (!noResultsMessage) {
//   noResultsMessage = document.createElement("div");
//   noResultsMessage.id = "no-results";
//   noResultsMessage.textContent = "No integrations found";
//   noResultsMessage.style.display = "none";
//   noResultsMessage.style.textAlign = "center";
//   noResultsMessage.style.marginTop = "10px";
//   noResultsMessage.style.width = "250px";
//   integrationData[0]?.parentElement.appendChild(noResultsMessage);
// }

// searchValue.addEventListener('input',(e)=> {
//     const value = e.target.value.toLowerCase().trim()
//     let integrationsFound = 0
//     integrationData.forEach(({element, text})=>{
//         if(value === '' || text.includes(value)){
//             element.style.display = '';
//             integrationsFound++
//         } else {
//             element.style.display = 'none';
//         }
//     })
//     noResultsMessage.style.display = integrationsFound === 0 ? 'block' : 'none';
// })

// const search = document.getElementById('search');
// const createSearch = document.createElement('input');

// search.appendChild(createSearch);

// const integrationsElements = document.querySelectorAll('.collection-item');

// let url
// const urlSend = document.getElementById("login-form")
// const inputElement = document.getElementById("warehouse");
// const urlClient = () => {
//     inputElement.addEventListener('input',(e)=>{
//     const urlShipedge = e.target.value;
//     url = `https://${urlShipedge}.shipedge.com`;
//     });
//     window.location.href = url
// }

// const video = document.querySelector(".embedly-embed");
// video.setAttribute('loading', 'lazy')
// console.log(video);
// console.log('made for webflow')

// const sendUrl = document.getElementById('send-url')
// const warehouse = document.getElementById('warehouse')
// let shipedgeUrl;
// const valid = /^[A-Za-z\s]+$/;
// warehouse.addEventListener('input', (e) => {
//     shipedgeUrl = e.target.value;
// })
// sendUrl.addEventListener('click',(event)=>{
//     event.preventDefault();

//     if(!valid.test(shipedgeUrl) || shipedgeUrl.length < 3) {
//         alert("Please enter a valid Url")
//         return
//     }

//     window.location.href = `https://${shipedgeUrl}.shipedge.com`
// })
// const form = document.getElementById('login-form')
// form.addEventListener('submit', (event)=> {
//     event.preventDefault();

//     if(!valid.test(shipedgeUrl) || shipedgeUrl.length < 3) {
//         alert("Please enter a valid Url")
//         return
//     }

//     window.location.href = `https://${shipedgeUrl}.shipedge.com`
// })

// const redirectUrl = (e) => {
//     e.preventDefault();
//     const input = document.getElementById('warehouse').value
//     if(input) {
//         window.location.href = input.startsWith('/') ? input : `https://${urlShipedge}.shipedge.com`
//     } else {
//         alert('Please enter a Valid Url')
//     }
// }
// const year = document.getElementById('year');
// console.log(year)

// const bannerShow = () => {
//     const banner = document.getElementById("banner");
//     banner.style.display = 'block'
// }

// setTimeout(()=>{
//     console.log('delayed')
//     bannerShow()
// },7000)

// const smoothFunction = () => {
//     const navHeight = document.querySelector('.w-nav').clientHeight;
//     const target = document.getElementById('email-form');

//     if(target) {
//         const targetPos = target.getBoundingClientRect().top + window.scrollY;
//                 const offset = targetPos - navHeight;
//                 window.scroll({
//                     top: offset,
//                     behavior: 'smooth'
//                 });
//     }
// }
// setTimeout(()=>{
//     smoothFunction()
// }, 600)

// const url = document.URL
// const pageName = url.split("/")[3]

// const pageBread = document.getElementById('ecombread')
// const urlParent = url.split('/').slice(0,3)[2]
// pageBread.setAttribute('href',`https://${urlParent}/blogs/${pageName}`)
// pageBread.setAttribute('target','_blank')
// pageBread.innerHTML = pageName

// const breadContainer = document.getElementById('bread');
// const title = document.title.toLowerCase()

// const breadAnchor = document.createElement('a')
// const urlBreadStyle = breadAnchor.setAttribute('class', 'bread-crumb_base')
// breadAnchor.innerHTML = `${title}`

// breadContainer.appendChild(breadAnchor);
// const baseURL= 'https://shipedge.com/blog/company/';
// const url = new URL(baseURL, baseURL);

// console.log(url);
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
