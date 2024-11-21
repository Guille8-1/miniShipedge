//elements to get li in table of contents
const blogTitles = document.querySelectorAll('h4');
const navHeight = document.querySelector('.navigation').clientHeight;

let count = 0;
blogTitles.forEach((title)=>{
    title.setAttribute('id',`title${++count}`)
})


let titleHeaders = '';
const tableMain = document.querySelector('.toc')
tableMain.setAttribute('id', 'toc')
const liElements = document.querySelectorAll("#toc a");
let aCount = 0
let titleCount = 0
liElements.forEach(aelement => {
    aelement.removeAttribute('herf')
    aelement.setAttribute('href', `title${++aCount}`)

    aelement.addEventListener('click',(e)=>{
        e.preventDefault();
        const targetId = aelement.getAttribute('href')
        const targetTitle = document.getElementById(targetId)

        if(targetTitle){
            const targetPosition = targetTitle.getBoundingClientRect().top + window.scrollY;
            const offSet = targetPosition - navHeight
            window.scroll({
                top: offSet,
                behavior:'smooth'
            })
        }
    })
});


const urlSend = document.getElementById("send-url")
const inputElement = document.getElementById("warehouse");

inputElement.addEventListener('input',(e)=>{
    const urlShipedge = e.target.value;
    urlSend.href = `https://${urlShipedge}.shipedge.com`;
});

const navHeight1 = document.querySelector('.navigation').clientHeight
const anchorsHead = document.querySelectorAll('#main-ids a');
const anchorsHeadSide = document.querySelectorAll('#main-ids1 a');
const listHeads = document.querySelectorAll('#main-text a');
let texts = 0;
listHeads.forEach((list)=>{
    list.setAttribute('id', `title${++texts}`);
})
let heads = 0;
anchorsHead.forEach((anchor)=>{
    anchor.setAttribute('href', `title${++heads}`);

    anchor.addEventListener('click',(e)=>{
        e.preventDefault();
        const targetId = anchor.getAttribute('href')
        const titleTarget = document.getElementById(targetId)

        if(titleTarget) {
            const targetPos = titleTarget.getBoundingClientRect().top + window.scrollY;
            const offSet = targetPos - navHeight

            window.scroll({
                top: offSet,
                behavior: 'smooth'
            })
        }
    })
});

let sides = 0;

anchorsHeadSide.forEach((side)=>{
    side.setAttribute('href', `title${++sides}`)
    

    side.addEventListener('click', (e)=>{
        e.preventDefault();
        
        const targetId = side.getAttribute('href');
        const titleTarget = document.getElementById(targetId);
        
        if(titleTarget){
            const targetPos = titleTarget.getBoundingClientRect().top + window.scrollY;
            const offset = targetPos - navHeight;
    
            window.scroll({
                top: offset,
                behavior:'smooth'
            })
        }
    })
});
