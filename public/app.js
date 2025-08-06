const style = document.createElement("style");

style.textContent = `
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider::before {
    position: absolute;
    content: "";
    height: 26px; width: 26px;
    left: 4px; bottom:4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  .switch input:checked + .slider {
      background-color: #4caf50;
    }

    .switch input:checked + .slider::before {
      transform: translateX(26px);
    }

    .status {
      margin-left: 15px;
      font-family: sans-serif;
      font-size: 1.2em;
    }
`;

document.head.appendChild(style);

const container = document.querySelectorAll('.toggle-container');

container[0].style.visibility = 'hidden';

container.forEach((container, index) => {
  const label = document.createElement("label");
  label.className = "switch";

  const input = document.createElement('input');
  input.type = "checkbox";
  input.id = `toggle-${index}`;

  const slider = document.createElement('span');
  slider.className = "slider";
  
  label.appendChild(input);
  label.appendChild(slider);
  container.appendChild(label);
  
  const prices = document.getElementById(`price${index}`);

  const setUpPrices = ['$199 <span class="heading-style-h5-6">/mo</span>', '$579 <span class="heading-style-h5-6">/mo</span>', 'Talk To Sales '];
  const basedPrices = ['$59 <span class="heading-style-h5-6">/mo</span>', '$329 <span class="heading-style-h5-6">/mo</span>', '$899 <span class="heading-style-h5-6">/mo</span>'];

  input.addEventListener("change", () => {
      if(prices){
        prices.innerHTML = input.checked ? setUpPrices[index-1] + ' ' : basedPrices[index-1] + ' ';
      }
  })
})

const detailsButton = document.querySelectorAll('.see-details_button').forEach((button)=>{
  button.addEventListener('click', () => {

      setTimeout(()=>{
          const navHeight = document.querySelector('.w-nav').clientHeight;
          const target = document.querySelector('.pricing22_top-row');

          if(target){
            const targetPos = target.getBoundingClientRect().top + window.scrollY;
                  const offset = targetPos - navHeight;
                  window.scroll({
                    top: offset,
                    behavior: 'smooth'
                  });
          }
        }, 300)
      })
})

const getADemo = document.getElementById('basic');
getADemo.href = 'https://edge01.shipedge.com/payment/request/BLGXCATALOG';
getADemo.target = '_blank';

// const detailsButton = document.querySelectorAll('.see-details_button').forEach(element => {
//   element.addEventListener('click', () => {
//     console.log('testing this fet')
//
//     const navHeight = document.querySelector('.w-nav').clientHeight;
//     const target = document.getElementById('pricing22_top-row');
//
//      if(target) {
//          const targetPos = target.getBoundingClientRect().top + window.scrollY;
//                  const offset = targetPos - navHeight;
//                  window.scroll({
//                      top: offset,
//                      behavior: 'smooth'
//                  });
//      }
//  }
// setTimeout(()=>{
 //     smoothFunction()
 // }, 600)




// document.addEventLiastener('DOMContentLoaded', function () {
//
//   const menus = {
//     tier_1: [
//       { text: 'Active Products: 500',  onClick: () =>{console.log('tier_1')} },
//       { text: 'Users Accounts: 2',  onClick: () =>{console.log('tier_1')} },
//     ],
//     tier_2: [
//       { text: 'Active Products: 5000', onClick: () =>{console.log('tier_2')} },
//       { text: 'Users Accounts: 10',  onClick: () =>{console.log('tier_2')} },
//     ],
//     tier_3: [
//       { text: 'Active Products: Unlimited',  onClick: () =>{console.log('tier_3')} },
//       { text: 'Users Accounts: 30',  onClick: () =>{console.log('tier_3')} },
//     ]
//
//   };
//
//
//   document.querySelectorAll('.dropdown').forEach(dropdown => {
//     const type = dropdown.dataset.menu;
//     const toggle = dropdown.querySelector('.dropdown-toggle');
//     const links = menus[type] || [];
//
//
//     const menu = document.createElement('div');
//     menu.className = 'dropdown-menu';
//
//     links.forEach(link => {
//       const a = document.createElement('a');
//       a.textContent = link.text;
//
//       a.addEventListener('click', (e)=> {
//         e.preventDefault(),
//         link.onClick?.()
//       })
//       menu.appendChild(a);
//     });
//
//     dropdown.appendChild(menu);
//
//
//     toggle.addEventListener('click', (e) => {
//       e.stopPropagation(); // prevent closing on same click
//       dropdown.classList.toggle('open');
//     });
//   });
//
//
//   document.addEventListener('click', (e) => {
//     document.querySelectorAll('.dropdown').forEach(d => {
//       if (!d.contains(e.target)) {
//         d.classList.remove('open');
//       }
//     });
//   });
// });
//


  // Create and insert menu (same logic as before)
  // const dropdownMenu = document.createElement('div');
  // dropdownMenu.className = 'dropdown-menu';

  // const links = [
  //   { text: 'Active Unique Products: 500' },
  //   { text: 'User accounts: 2' },
  // ];

  // links.forEach(link => {
  //   const a = document.createElement('a');

  //   a.textContent = link.text;
  //   dropdownMenu.appendChild(a);
  // });

  // dropdown.appendChild(dropdownMenu);

  // // Toggle dropdown
  // toggle.addEventListener('click', () => {
  //   dropdown.classList.toggle('open');
  // });

  // // Close when clicking outside
  // document.addEventListener('click', (e) => {
  //   if (!dropdown.contains(e.target)) {
  //     dropdown.classList.remove('open');
  //   }
  // });
//});

// const getStarted = document.querySelectorAll('#client-form')
// const clientForm = document.getElementById('client')
// const firstElement = clientForm.children[0]


// getStarted.forEach((button)=>{
//   button.addEventListener('click', () => {
//     firstElement.children[0].click()
//   })
//   button.addEventListener('click',()=>{
//       const iframe = document.querySelector('.fillout-embed-iframe-container');
//       iframe.style.width = '30vw';
//   })
// })

// const getStarted = document.querySelectorAll('#client-form')
// const clientForm = document.getElementById('client')
// const firstElement = clientForm.children[0]

// getStarted.forEach((button)=>{
//   button.addEventListener('click', () => {
//     firstElement.children[0].click()
//   })
//   button.addEventListener('click',()=>{
//     const iframe = document.querySelector('.fillout-embed-iframe-container');
//     iframe.style.width = '30vw';
//   })
// })

// const getStartedButton = document.querySelectorAll(".button-shelfter-2");
// const clientForm = document.getElementById("client");

// getStartedButton.forEach((button) => {
//   button.addEventListener("click", () => {
//     clientForm.children[0].click()
//   });
// });

// const noFound = document.getElementById("no-results");

// noFound.addEventListener("click", () => {
//   const navHeight = document.querySelector(".w-nav").clientHeight;
//   const target = document.getElementById("email-form");
//   const email = document.getElementById("name-2");
//   setTimeout(() => {
//     email.focus();
//   }, 500);

//   if (target) {
//     const targetPos = target.getBoundingClientRect().top + window.scrollY;
//     const offset = targetPos - navHeight;
//     window.scroll({
//       top: offset,
//       behavior: "smooth",
//     });
//   }
// });

// const searchHolder = document.querySelector('.div-block-139');
// const createSearch = document.createElement('input');

// createSearch.setAttribute('class','filter_search-field');
// createSearch.setAttribute('placeholder','Serach Integrations');
// createSearch.setAttribute('type','text');
// createSearch.setAttribute('id','search-value');
// createSearch.classList.add('border-green');

// searchHolder.append(createSearch)

// const integrationList = document.querySelectorAll('.collection-item-3')
// const searchValue = document.getElementById('search-value');

// const integrationData = Array.from(integrationList).map((integration)=> ({
//      element: integration,
//      text: integration.textContent.toLowerCase()
// }))
// let noResultsMessage = document.getElementById("no-results");

// const collectionList = document.querySelector('.content_collection-list ')

//if (!noResultsMessage) {
  //noResultsMessage = document.createElement("div");
  //noResultsMessage.id = "no-results";
  //noResultsMessage.textContent = "No integrations found";
  //noResultsMessage.style.display = "none";
  //noResultsMessage.style.textAlign = "center";
  //noResultsMessage.style.marginTop = "10px";
  //noResultsMessage.style.width = "250px";
  //integrationData[0]?.parentElement.appendChild(noResultsMessage);
//}

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
//     noResultsMessage.style.position = 'absolute';
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
