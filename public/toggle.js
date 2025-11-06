const actionHldr = document.getElementById("assets");
const pdfHldr = document.createElement("div");
const mp3Hldr = document.createElement("div");
pdfHldr.classList = "pdf-holder";
pdfHldr.textContent = "Download PDF Version";
mp3Hldr.classList = "mp3-holder";
mp3Hldr.textContent = "Get The Audio Blog";

actionHldr.appendChild(pdfHldr);
actionHldr.appendChild(mp3Hldr);

const style = document.createElement("style");
const pdfContent = document.getElementById("id-pdf");

style.textContent = `
  .pdf-holder {
    background-color: #0c7ac9;
    color: white;
    text-align: center;
    cursor: pointer;
    margin: 0 auto;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
  }

  .mp3-holder {
    background-color: #0c7ac9;
    /*  */color: white;
    text-align: center;
    cursor: pointer;
    margin: 0 auto;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    display: none;
  }
  p, h4, li {
    page-break-inside: avoid;
    break-inside: avoid;
  }
`;
document.head.appendChild(style);

//script to get the mp3 file in this matter
const mp3Button = document.querySelector(".mp3-holder");
mp3Button.addEventListener("click", () => {
  async function getMp3File() {
    const response = await fetch("https://example.com/audio.mp3");
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "audio.mp3";
    a.click();
    URL.revokeObjectURL(url);
  }
});

function dowloadFile() {
  const options = {
    margin: [30, 10, 10, 10],
    filename: `${document.title} blog.pdf`,
    image: {
      type: [
        "jpeg",
        "png",
        "webp",
        "svg",
        "bmp",
        "gif",
        "tiff",
        "ico",
        "jpg",
        "jpeg",
      ],
      quality: 0.98,
    },
    html2canvas: { scale: 2, useCORS: true, scrollY: 0, allowTaint: true },
    jsPDF: { unit: "mm", format: [210, 297], orientation: "portrait" },
    pageBreak: { mode: ["avoid-all", "css", "legacy"] },
  };
  html2pdf()
    .set(options)
    .from(pdfContent)
    .toPdf()
    .get("pdf")
    .then((pdf) => {
      const totalPages = pdf.internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(10);
        pdf.text(`Page ${i} of ${totalPages}`, 105, 290, {
          align: "center",
        });
      }
      pdf.setPage(1);
      pdf.setFontSize(15);
      pdf.text(
        `${document.querySelector(".ecomtitile").textContent}`,
        106.5,
        10,
        {
          align: "center",
        },
      );
    })
    .save(`${document.title} blog.pdf`);
}

const dialog = document.createElement("dialog");
dialog.id = "lead";
dialog.style.overflow = "hidden";
dialog.style.padding = "50px 55px";
dialog.style.width = "50rem"

const generalContent = document.getElementsByTagName("body");
generalContent.forEach((nth) => {
  nth.appendChild(dialog);
});

const openDialog = document.querySelector(".pdf-holder");
openDialog.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("click", () => {
  const rect = dialog.getBoundingClientRect();
  const isInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.bottom &&
    rect.left <= event.clientX &&
    event.clientX <= rect.right;
  if (!isInDialog) {
    dialog.close();
  }
});

const leadTitle = document.createElement("h2");
leadTitle.className = "dialog__title";
leadTitle.textContent = `👋 We hope you enjoy this content!`;
leadTitle.style.marginBottom = "40px";
const mainLead = document.createElement("section");
const leadForm = document.createElement("form");
leadForm.method = "dialog";
const frstRow = document.createElement("div");
frstRow.className = "client__data";
const nameHolder = document.createElement("input");
nameHolder.type = "text";
nameHolder.name = "lead__name";
nameHolder.style.padding = "10px";
nameHolder.style.width = "50%";
nameHolder.style.borderRadius = "10px";
nameHolder.placeholder = "Name";

const lastNameHolder = document.createElement("input");
lastNameHolder.type = "text";
lastNameHolder.name = "lead__lastname";
lastNameHolder.style.padding = "10px";
lastNameHolder.style.width = "50%";
lastNameHolder.style.borderRadius = "10px";
lastNameHolder.placeholder = "Last Name";

const lastDiv = document.createElement("div");

const emailHolder = document.createElement("input");
emailHolder.type = "email";
emailHolder.name = "lead__email";
emailHolder.style.padding = "10px";
emailHolder.style.width = "100%";
emailHolder.style.borderRadius = "10px";
emailHolder.style.marginTop = "1.5rem";
emailHolder.placeholder = "🖂 email";

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.id = "submit__lead";
submitBtn.textContent = "Download PDF";
submitBtn.style.backgroundColor = "#3FA9E9";
submitBtn.style.borderRadius = "10px";
submitBtn.style.marginTop = "1.5rem";
submitBtn.style.color = "#FFF";
submitBtn.style.padding = "10px";
submitBtn.style.fontWeight = "500";

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const nameLead = nameHolder.value;
  const lastNameLead = lastNameHolder.value;
  const emailLead = emailHolder.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[A-Za-z]+$/

  if (
    nameLead.length >= 3 &&
    nameRegex.test(nameLead) &&
    emailLead.length >= 7 &&
    lastNameLead.length > 3 &&
    nameRegex.test(lastNameLead) &&
    emailRegex.test(emailLead) 
  ) {
    //closing the dialog
    setTimeout(() => {
      clsBtn.click();
      dowloadFile();
    }, 2500);
    Toastify({
      text: "Downloading PDF, please wait...",
      duration: 2500,
      close: true,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      selector: dialog,
      style: {
        background: "#41C04A",
        zIndex: 10,
      },
    }).showToast();
    const newLead = {
      name: nameLead.toLowerCase(),
      lastName: lastNameLead.toLocaleLowerCase(),
      email: emailLead.toLocaleLowerCase(),
    };
    const urlLead =
      "https://script.google.com/macros/s/AKfycbx5bjixzJdwn3z_KS1uOthYDS9AfNAikibrUZze6dpQo25NezdEXQ7fl_73CyrA9b_MwQ/exec";
    fetch(urlLead, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      redirect: "follow",
      body: JSON.stringify(newLead),
    })
      .then((res) => res.json())
      .then(console.log)
      .then(console.error);
  } else {
    Toastify({
      text: "Name or Email Not Valid",
      duration: 1500,
      close: true,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      selector: dialog,
      style: {
        background: "#DC143C",
        zIndex: 10,
      },
    }).showToast();
  }
});

const clsBtn = document.createElement("button");
clsBtn.className = "close__dialog";
clsBtn.style.paddingTop = "7px";
clsBtn.style.paddingBottom = "7px";
clsBtn.style.paddingRight = "10px";
clsBtn.style.paddingLeft = "10px";
clsBtn.textContent = "X";
clsBtn.style.color = "white";
clsBtn.style.backgroundColor = "#DC143C";
clsBtn.style.position = "absolute";
clsBtn.style.right = "0";
clsBtn.style.top = "0px";
clsBtn.style.fontWeight = "500";
clsBtn.style.borderRadius = "10px";
clsBtn.style.zIndex = "99";

clsBtn.addEventListener("click", () => {
  dialog.close();
});

lastDiv.appendChild(emailHolder);

leadForm.appendChild(frstRow);
leadForm.appendChild(lastDiv);
leadForm.appendChild(submitBtn);

frstRow.appendChild(nameHolder);
frstRow.appendChild(lastNameHolder);

dialog.appendChild(leadTitle);
dialog.appendChild(mainLead);
dialog.appendChild(clsBtn);
mainLead.appendChild(leadForm);

// const dialogHeader = document.querySelector(".dialog__header");
// const btnClose = document.createElement("button");
// btnClose.classList = "dialog__close";

// dialogHeader.appendChild(btnClose);

// class Dialog {
//   constructor(dialogElement) {
//     this.dialog = dialogElement;
//     this.overlay = this.dialog.querySelector(".dialog__overlay");
//     this.closeButton = this.dialog.querySelector(".dialog__close");
//     this.open = false;

//     this.init();
//   }

//   init() {
//     this.overlay.addEventListener("click", () => {
//       this.close();
//     });

//     this.closeButton.addEventListener("click", () => {
//       this.close();
//     });

//     document.addEventListener("keydown", (e) => {
//       if (e.key === "Escape" && this.isOpen) {
//         this.close();
//       }
//     });

//     this.dialog
//       .querySelector(".dialog__content")
//       .addEventListener("click", (e) => {
//         e.stopPropagation();
//       });
//   }

//   open() {
//     this.dialog.setAttribute("aria-hidden", false);
//     this.isOpen = true;

//     this.trapFocus();

//     document.body.style.overflow = "hidden";
//   }

//   close() {
//     this.dialog.setAttribute("aria-hidden", true);
//     this.open = false;

//     document.body.style.overflow = "";
//   }

//   trapFocus() {
//     const focusElement = this.dialog.querySelectorAll(
//       'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
//     );

//     const firstElement = focusElement[0];
//     const lastElement = focusElement[focusElement.length - 1];

//     if (firstElement) {
//       firstElement.focus();
//     }

//     this.dialog.addEventListener("keydown", (e) => {
//       if (e.key !== "Tab") return;

//       if (e.shiftKey) {
//         if (document.activeElement === firstElement) {
//           lastElement.focus();
//           e.preventDefault();
//         }
//       } else {
//         if (document.activeElement === lastElement) {
//           firstElement.focus();
//           e.preventDefault();
//         }
//       }
//     });
//   }
// }
// document.addEventListener("DOMContentLoaded", () => {
//   const dialogHeader = document.querySelector(".dialog__header");

//   const testContet = document.createElement("p");
//   testContet.textContent = "this is a testing string";

//   dialogHeader.appendChild(testContet);

//   const dialogFooter = document.querySelector(".dialog__footer");
//   const submitBtn = document.createElement("button");
//   submitBtn.textContent = "Send Information";
//   submitBtn.type = "submit";

//   dialogFooter.appendChild(submitBtn);

//   const dialogElement = document.getElementById("myDialog");
//   const dialog = new Dialog(dialogElement);

//   const openDialogBtn = document.querySelector(".pdf-holder");

//   const closeBtn = document.querySelector(".cancelBtn");
//   const confirmBtn = document.querySelector(".confirmBtn");

//   openDialogBtn.addEventListener("click", () => {
//     console.log("testing");
//     dialog.open();
//   });
// });

// const pdfButton = document.querySelector(".pdf-holder");

// pdfButton.addEventListener("click", () => {
//     console.log('testing a new testing');
// });

// function startWidgetDom() {
//   const formAction = document.querySelector(".ant-space-item");
//   const downloadPdf = formAction.children[0];

//   downloadPdf.addEventListener("click", () => {
//     console.log("testing fn to download pdf");
//     console.log(downloadPdf);
//   });
// }

// const allContact = document.querySelectorAll(".contact-button");
// const actualForm = document.querySelector(".code-embed-2");
// const firstElement = actualForm.children[0];

// allContact.forEach((button) => {
//   button.addEventListener("click", () => {
//     firstElement.children[0].click();
//   });
//   button.addEventListener("click", () => {
//     const iframe = document.querySelector(".fillout-embed-iframe-container");
//     iframe.style.width = "30vw";
//   });
// });

// const options = document.querySelectorAll(".option");
// const track = document.querySelector(".carousel-track");
// const slides = document.querySelectorAll(".carousel-item");
// let currentIndex = 1; // Start centered on the 2nd panel
//
// function goToSlide(index) {
//   if (index < 0) index = 0;
//   if (index > slides.length - 1) index = slides.length - 1;
//   if (index === 2) {
//     options.forEach((o) => o.classList.remove("active"));
//     slides.forEach((s) => s.classList.remove("active"));
//     options[index].classList.add("active");
//     slides[index].classList.add("active");
//
//     const gap = parseFloat(getComputedStyle(track).gap) || 0;
//     const slideWidth = slides[0].getBoundingClientRect().width + gap;
//
//     const offset =
//       slideWidth * index - (window.innerWidth / 2 - slides[0].offsetWidth / 2);
//
//     const trackStyle = getComputedStyle(track);
//     const paddingLeft = parseFloat(trackStyle.paddingLeft) || 0;
//     const paddingRight = parseFloat(trackStyle.paddingRight) || 0;
//
//     const maxOffset =
//       track.scrollWidth - window.innerWidth + paddingRight - paddingLeft;
//
//     const finalOffset = Math.max(0, Math.min(offset, maxOffset)) + 400;
//
//     track.style.transform = `translateX(-${finalOffset}px)`;
//
//     currentIndex = index;
//
//     return;
//   }
//
//   if (index === 0) {
//     options.forEach((o) => o.classList.remove("active"));
//     slides.forEach((s) => s.classList.remove("active"));
//     options[index].classList.add("active");
//     slides[index].classList.add("active");
//
//     const gap = parseFloat(getComputedStyle(track).gap) || 0;
//     const slideWidth = slides[0].getBoundingClientRect().width + gap;
//
//     const offset =
//       slideWidth * index - (window.innerWidth / 2 - slides[0].offsetWidth / 2);
//
//     const trackStyle = getComputedStyle(track);
//     const paddingLeft = parseFloat(trackStyle.paddingLeft) || 0;
//     const paddingRight = parseFloat(trackStyle.paddingRight) || 0;
//
//     const maxOffset =
//       track.scrollWidth - window.innerWidth + paddingRight - paddingLeft;
//
//     const finalOffset = Math.max(0, Math.min(offset, maxOffset));
//
//     track.style.transform = `translateX(-${finalOffset + 1}px)`;
//
//     currentIndex = index;
//
//     return;
//   }
//
//   options.forEach((o) => o.classList.remove("active"));
//   slides.forEach((s) => s.classList.remove("active"));
//   options[index].classList.add("active");
//   slides[index].classList.add("active");
//
//   const gap = parseFloat(getComputedStyle(track).gap) || 0;
//   const slideWidth = slides[0].getBoundingClientRect().width + gap;
//
//   const offset =
//     slideWidth * index - (window.innerWidth / 2 - slides[0].offsetWidth / 2);
//
//   const trackStyle = getComputedStyle(track);
//   const paddingLeft = parseFloat(trackStyle.paddingLeft) || 0;
//   const paddingRight = parseFloat(trackStyle.paddingRight) || 0;
//
//   const maxOffset =
//     track.scrollWidth - window.innerWidth + paddingRight - paddingLeft;
//
//   const finalOffset = Math.max(0, Math.min(offset, maxOffset));
//
//   track.style.transform = `translateX(-${finalOffset}px)`;
//
//   currentIndex = index;
// }
//
// window.addEventListener("load", () => {
//   goToSlide(currentIndex);
// });
// window.addEventListener("resize", () => goToSlide(currentIndex));
//
// options.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     goToSlide(i);
//   });
// });

// const actButton = document.getElementById('ac-button');
// const visibleAction = document.querySelector('.action-call');
// const firstChild = actButton.children[0]

// visibleAction.addEventListener('click', () => {
//    firstChild.children[0].click();
// })

// const crmButtons = document.querySelectorAll('.card-button');
// const crmForm = document.querySelector('.embed');
// const actForm = crmForm.firstChild;
// const buttonTg = actForm.firstChild;

// crmButtons.forEach((button)=>{
//    button.addEventListener('click', ()=>{
//       buttonTg.click();
//    })
//    button.addEventListener('click', ()=>{
//       const styleFr = document.querySelector('.fillout-embed-iframe-container');
//       styleFr.style.width = '30vw';
//    })
// })

// const tableBtns = document.querySelectorAll('.button-18');

// tableBtns.forEach((button)=>{
//    button.addEventListener('click', () => {
//       buttonTg.click();
//    })
//    button.addEventListener('click', () => {
//       const styleFr = document.querySelector('.fillout-embed-iframe-container');
//       styleFr.style.width = '30vw';
//    })
// })
// const headBtn = document.querySelector('.button-2')
// headBtn.addEventListener('click', () => {
//    buttonTg.click()
// })

// headBtn.addEventListener('click', () => {
//    const styleFr = document.querySelector('.fillout-embed-iframe-container');
//    styleFr.style.width = '30vw';
// })

// const getStarted = document.querySelectorAll('.button-2');
// const formAct = document.querySelector('.embed');

// const frstElement = formAct.firstChild;
// const frstBtn = frstElement.firstChild;

// getStarted.forEach((getStartedBtn)=>{
//    getStartedBtn.addEventListener('click',()=>{
//       console.log('testing');
//       frstBtn.click();
//   })
//   getStartedBtn.addEventListener('click', ()=>{
//      const styleFr = document.querySelector('.fillout-embed-iframe-container');
//     styleFr.style.width = '30vw';
//   })
// })
// const overlay1 = document.querySelector('.overlay-content');
// const spanClose = document.createElement('span');
// spanClose.className = 'close';
// spanClose.id = 'closeoverlay';
// spanClose.innerHTML= '&times;';
//
// const iframeEle = document.createElement('iframe');
// iframeEle.id = 'videoframe'
//
// iframeEle.width = '980'
// iframeEle.height = '620'
// iframeEle.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
// iframeEle.allowFullscreen
// overlay1.append(spanClose);
// overlay1.appendChild(iframeEle);
//
// const playerTrig = document.getElementById('videop');
// const overlay = document.getElementById('videooverlay');
// const overIframe = document.getElementById('videoframe');
// const closeVid = document.getElementById('closeoverlay');
//
// const videoUrl ='https://www.youtube.com/embed/hI_QnQrAofs?autoplay=1'
//https://www.youtube.com/embed/w5iOVYKkXUA?autoplay=1
//
// playerTrig.addEventListener('click', ()=>{
//   overIframe.src = videoUrl;
//   overlay.style.display = 'flex'
// })
//
// closeVid.addEventListener('click', ()=>{
//   overIframe.src = '';
//   overlay.style.display = 'none'
// })

// const style = document.createElement("style");
// style.textContent = `
//     .toggle {
//       position: relative;
//       display: inline-flex;
//       align-items: center;
//       justify-content: space-between;
//       width: 180px;
//       height: 40px;
//       background: #EAF0F6;
//       border-radius: 25px;
//       cursor: pointer;
//       font-family: sans-serif;
//       font-size: 14px;
//       font-weight: bold;
//       overflow: hidden;
//       border: solid 0.8px;
//       border-color: #15DEF9;
//       padding: 10px;
//     }
//     .toggle-std {
//       position: relative;
//       display: inline-flex;
//       align-items: center;
//       justify-content: space-between;
//       width: 215px;
//       height: 40px;
//       background: #EAF0F6;
//       border-radius: 25px;
//       cursor: pointer;
//       font-family: sans-serif;
//       font-size: 14px;
//       font-weight: bold;
//       overflow: hidden;
//       border: solid 0.8px;
//       border-color: #15DEF9;
//       padding: 10px;
//     }
//
//     .toggle-table {
//       position: relative;
//       display: inline-flex;
//       align-items: center;
//       justify-content: space-between;
//       width: 180px;
//       height: 40px;
//       background: #EAF0F6;
//       border-radius: 25px;
//       cursor: pointer;
//       font-family: sans-serif;
//       font-size: 14px;
//       font-weight: bold;
//       overflow: hidden;
//       border: solid 0.8px;
//       border-color: #15DEF9;
//       padding: 10px;
//     }
//     .toggle-table-std {
//       position: relative;
//       display: inline-flex;
//       align-items: center;
//       justify-content: space-between;
//       width: 215px;
//       height: 40px;
//       background: #EAF0F6;
//       border-radius: 25px;
//       cursor: pointer;
//       font-family: sans-serif;
//       font-size: 14px;
//       font-weight: bold;
//       overflow: hidden;
//       border: solid 0.8px;
//       border-color: #15DEF9;
//       padding: 10px;
//     }
//     .toggle .circle {
//       padding: 5px;
//       position: absolute;
//       top: auto;
//       left: -10px;
//       width: 85px;
//       height: 40px;
//       background: white;
//       border-radius: 25px;
//       transition: transform 0.3s ease;
//       z-index: 1;
//     }
//     .toggle-std .circle-std {
//       padding: 5px;
//       position: absolute;
//       top: auto;
//       left: 0;
//       width: 100px;
//       height: 40px;
//       background: white;
//       border-radius: 25px;
//       transition: transform 0.3s ease;
//       z-index: 1;
//     }
//
//     .toggle-table .circle-table {
//       padding: 5px;
//       position: absolute;
//       top: auto;
//       left: -10px;
//       width: 85px;
//       height: 40px;
//       background: white;
//       border-radius: 25px;
//       transition: transform 0.3s ease;
//       z-index: 1;
//     }
//
//     .toggle-table-std .circle-table-std {
//       padding: 5px;
//       position: absolute;
//       top: auto;
//       left: 0;
//       width: 100px;
//       height: 40px;
//       background: white;
//       border-radius: 25px;
//       transition: transform 0.3s ease;
//       z-index: 1;
//     }
//
//     .toggle.active .circle {
//       transform: translateX(105px);
//     }
//
//     .toggle-std.active-std .circle-std {
//       transform: translateX(115px);
//     }
//
//     .toggle-table.active-table .circle-table {
//       transform: translateX(105px);
//     }
//
//     .toggle-table-std.active-table-std .circle-table-std {
//       transform: translateX(115px);
//     }
//
//
//     .toggle span {
//       flex: 1;
//       text-align: center;
//       z-index: 2;
//       transition: color 0.3s ease;
//     }
//     .toggle-std span {
//       flex: 1;
//       text-align: center;
//       z-index: 2;
//       transition: color 0.3s ease;
//     }
//     .toggle-table span {
//       flex: 1;
//       text-align: center;
//       z-index: 2;
//       transition: color 0.3s ease;
//     }
//     .toggle-table-std span {
//       flex: 1;
//       text-align: center;
//       z-index: 2;
//       transition: color 0.3s ease;
//     }
//     .toggle .option1 {
//       margin-left: 3px;
//       color: #0060a8;
//       font-size: 16px;
//     }
//
//     .toggle-std .option3 {
//       margin-left: 3px;
//       color: #0060a8;
//       font-size: 16px;
//     }
//     .toggle-table .option5 {
//       margin-left: 3px;
//       color: #0060a8;
//       font-size: 16px;
//     }
//
//     .toggle-table-std .option7 {
//       margin-left: 3px;
//       color: #0060a8;
//       font-size: 16px;
//     }
//     .toggle .option2 {
//       color: gray;
//       margin-left: 4px;
//       font-size: 16px;
//     }
//     .toggle-std .option4 {
//       color: gray;
//       margin-left: 4px;
//       font-size: 16px;
//     }
//     .toggle-table .option6 {
//       color: gray;
//       margin-left: 4px;
//       font-size: 16px;
//     }
//     .toggle-table-std .option8 {
//       color: gray;
//       margin-left: 4px;
//       font-size: 16px;
//     }
//
//     .toggle.active .option1 {
//       color: gray;
//     }
//     .toggle-std.active-std .option3 {
//       color: gray;
//     }
//     .toggle-table.active-table .option5 {
//       color: gray;
//     }
//     .toggle-table-std.active-table-std .option7 {
//       color: gray;
//     }
//     .toggle.active .option2 {
//       color: #0060a8;
//     }
//
//     .toggle-std.active-std .option4 {
//       color: #0060a8;
//     }
//
//     .toggle-table.active-table .option6 {
//       color: #0060a8;
//     }
//
//     .toggle-table-std.active-table-std .option8 {
//       color: #0060a8;
//     }
//
//
// `
// document.head.appendChild(style);
//
// const optionCt1 = document.getElementById('tog-ct-1');
// optionCt1.className = 'toggle';
//
// const opt1 = document.createElement('div');
// opt1.className = 'text option1';
// opt1.textContent = 'Starter';
// opt1.style.zIndex = '1'
//
// const opt2 = document.createElement('div');
// opt2.className = 'text option2';
// opt2.textContent = 'Starter +';
// opt2.style.zIndex = '1';
//
// const circle = document.createElement('div');
// circle.className = 'circle';
// circle.style.zIndex = '0';
//
// const input = document.createElement('input')
// input.type = 'checkbox';
// input.style.display = 'none';
//
// optionCt1.appendChild(opt1);
// optionCt1.appendChild(opt2);
// optionCt1.appendChild(circle);
//
// //variables changing style
// const starter1 = document.querySelector('.starter-user');
// const starter2 = document.querySelector('.starter-users-no');
// const starter3 = document.querySelector('.sku-number');
// const actSkus1 = document.querySelector('.ac_skus')
// const starterTitle = document.querySelector('.starter');
// const priceStarter = document.querySelector('.pirce_starter');
//
// const starterButton = document.getElementById('starter');
//
// starterButton.href = 'https://edge01f.shipedge.com/payment/request/A1'
// starterButton.target = '_blank';
//
// optionCt1.addEventListener('click',() => {
//   optionCt1.classList.toggle('active');
//   input.click();
//
//   starter1.style.color = input.checked ? '#0060a8':'#00032A';
//   starter1.textContent = input.checked ? '2 ':'1 ';
//   starter2.style.color = input.checked ? '#0060a8':'#00032A';
//   starter2.textContent = input.checked ? 'users' : 'user';
//   starter3.textContent = input.checked ? '500 ':'100 ';
//   actSkus1.style.color = input.checked ? '#0060a8':'#00032A';
//   starter3.style.color = input.checked ? '#0060a8':'#00032A';
//
//   starterTitle.style.color = input.checked ? '#0060a8':'#00032A';
//   starterTitle.textContent = input.checked ? 'Starter +':'Starter';
//
//   priceStarter.textContent = input.checked ? '$199':'$55';
//   starterButton.href = input.checked ? 'https://edge01f.shipedge.com/payment/request/A2':'https://edge01f.shipedge.com/payment/request/A1'
//
// })
//
// const optionCt2 = document.getElementById('tog-ct-2');
// optionCt2.className = 'toggle-std';
//
// const opt1Std = document.createElement('div');
// opt1Std.className = 'text option3';
// opt1Std.textContent = 'Standard';
// opt1Std.style.zIndex = '1';
//
// const opt2Std = document.createElement('div');
// opt2Std.className = 'text option4';
// opt2Std.textContent = 'Standard +';
// opt2Std.style.zIndex = '1';
//
// const circleStd = document.createElement('div');
// circleStd.className = 'circle-std';
// circleStd.style.zIndex = '0';
//
// const inputStd = document.createElement('input');
// inputStd.type = 'checkbox';
// inputStd.style.display = 'none';
//
// optionCt2.appendChild(opt1Std);
// optionCt2.appendChild(opt2Std);
// optionCt2.appendChild(circleStd);
//
// //variables changing content html
// const standardTitle = document.querySelector('.standard');
// const stdPrices = document.querySelector('.std-prices');
// const stdUsers = document.querySelector('.standard-users');
// const stdUsersNo = document.querySelector('.standard-users-no')
// const actSkusStandard = document.querySelector('.std-number');
// const buttonStandard = document.getElementById('standard');
// const stdSkusCard = document.querySelector('.std-skus')
//
// buttonStandard.href = 'https://edge01f.shipedge.com/payment/request/B1';
// buttonStandard.target = '_blank';
//
// optionCt2.addEventListener('click',() => {
//   optionCt2.classList.toggle('active-std');
//   inputStd.click();
//
//   standardTitle.textContent = inputStd.checked ? 'Standard +':'Standard';
//   standardTitle.style.color = inputStd.checked ? '#0060a8' : '#00032A';
//   stdPrices.textContent = inputStd.checked ? '$579':'$329';
//
//   stdUsers.style.color = inputStd.checked ? '#0060a8':'#00032A';
//   stdUsers.textContent = inputStd.checked ? '10':'5';
//
//   stdUsersNo.style.color = inputStd.checked ? '#0060a8':'#00032A';
//   actSkusStandard.textContent = inputStd.checked ? '5000 ':'2500 ';
//   actSkusStandard.style.color = inputStd.checked ? '#0060a8':'#00032A';
//   stdSkusCard.style.color = inputStd.checked ? '#0060a8':'#00032A';
//   buttonStandard.href = inputStd.checked ? 'https://edge01f.shipedge.com/payment/request/B2':'https://edge01f.shipedge.com/payment/request/B1';
//
// })
//
// const basicButton = document.getElementById('basic');
// basicButton.href = 'https://edge01f.shipedge.com';
// basicButton.target = '_blank';
//
// const proButton = document.getElementById('profesional');
// proButton.href = 'http://edge01f.shipedge.com/payment/request/C1';
// proButton.target = '_blank';
//
// const detailsButton = document.querySelectorAll('.see-details_button').forEach((button)=>{
//   button.addEventListener('click', () => {
//
//       setTimeout(()=>{
//           const navHeight = document.querySelector('.w-nav').clientHeight + 35;
//           const target = document.querySelector('.pricing22_top-row');
//
//           if(target){
//             const targetPos = target.getBoundingClientRect().top + window.scrollY;
//                   const offset = targetPos - navHeight;
//                   window.scroll({
//                     top: offset,
//                     behavior: 'smooth'
//                   });
//           }
//         }, 200)
//       })
// })
//
// const optionCt3 = document.getElementById('tg-ct_3');
// optionCt3.className = 'toggle-table';
//
// const option1Table = document.createElement('div');
// option1Table.className = 'text option5';
// option1Table.textContent = 'Starter';
// option1Table.style.zIndex = '1';
//
// const option2Table = document.createElement('div');
// option2Table.className = 'text option6';
// option2Table.textContent = 'Starter +';
// option2Table.style.zIndex = '1';
//
// const circleTable = document.createElement('div');
// circleTable.className = 'circle-table';
// circleTable.style.zIndex = '0';
//
// const inputTable = document.createElement('input');
// inputTable.type = 'checkbox';
// inputTable.style.display = 'none';
//
// optionCt3.appendChild(option1Table);
// optionCt3.appendChild(option2Table);
// optionCt3.appendChild(circleTable);
//
// const starterTable = document.querySelector('.starter-table-user');
// const starterPriceTable = document.querySelector('.starterprice');
// const starterTableTitle = document.querySelector('.starter-table');
// const starteUsrs = document.querySelector('.starter-table-no');
// const starterActSkus = document.querySelector('.table-usr-head');
// const tableButtonStarter = document.getElementById('starter1');
// const skusTableHead = document.querySelector('.table-head-skus');
// const stickyStrtPrice = document.querySelector('.sticky-strt');
// const titleChStrt = document.querySelector('.st-sticky');
//
//
// tableButtonStarter.href = 'http://edge01f.shipedge.com/payment/request/A1';
// tableButtonStarter.target = '_blank';
//
// optionCt3.addEventListener('click',() => {
//   optionCt3.classList.toggle('active-table');
//   inputTable.click();
//
//   starterTable.style.color = inputTable.checked ? '#0060a8' : '#00032A';
//   starterTable.textContent = inputTable.checked ? '2':'1';
//
//   starterPriceTable.textContent = inputTable.checked ? '$199':'$55';
//   stickyStrtPrice.textContent = inputTable.checked ? '$199':'$55';
//
//   starterTableTitle.textContent = inputTable.checked ? 'Starter +' : 'Starter';
//   starterTableTitle.style.color = inputTable.checked ? '#0060a8':'#00032A';
//   titleChStrt.textContent = inputTable.checked ? 'Starter +' : 'Starter';
//
//   starteUsrs.style.color = inputTable.checked ? '#0060a8':'#00032A';
//   starteUsrs.textContent = inputTable.checked ? 'users' : 'user';
//
//   starterActSkus.style.color = inputTable.checked ? '#0060a8':'#00032A';
//   starterActSkus.textContent = inputTable.checked ? '500 ' : '100 ';
//
//   skusTableHead.style.color = inputTable.checked ? '#0060a8':'#00032A';
//
//   tableButtonStarter.href = inputTable.checked ? 'http://edge01f.shipedge.com/payment/request/A2':'http://edge01f.shipedge.com/payment/request/A1';
//
// })
//
// const optionCt4 = document.getElementById('tg-ct_4');
// optionCt4.className = 'toggle-table-std';
//
// const opt1TableStd = document.createElement('div');
// opt1TableStd.className = 'text option7';
// opt1TableStd.textContent = 'Standard';
// opt1TableStd.style.zIndex = '1'
//
// const opt2TableStd = document.createElement('div');
// opt2TableStd.className = 'text option8';
// opt2TableStd.textContent = 'Standard +';
// opt2TableStd.style.zIndex = '1';
//
// const circleTableStd = document.createElement('div');
// circleTableStd.className = 'circle-table-std';
// circleTableStd.style.zIndex = '0';
//
// const inputTableStd = document.createElement('input');
// inputTableStd.type = 'checkbox';
// inputTableStd.style.display = 'none'
//
// optionCt4.appendChild(opt1TableStd);
// optionCt4.appendChild(opt2TableStd);
// optionCt4.appendChild(circleTableStd);
//
//
// const standardTableTitle = document.querySelector('.standard-table');
// const stdTablePrice = document.querySelector('.standardprice');
// const stdUsr = document.querySelector('.standard-table_user');
// const stdUsrNo = document.querySelector('.standard_users-no');
// const actSkuStd = document.querySelector('.std-number-table');
// const stdSkus = document.querySelector('.std-skus-table');
// const stickyStdPrice = document.querySelector('.sticky-std-price');
// const titleChStd = document.querySelector('.std-sticky');
//
// const standardTableButton = document.getElementById('standard1');
// standardTableButton.href = 'http://edge01f.shipedge.com/payment/request/B1';
// standardTableButton.target = '_blank';
//
// optionCt4.addEventListener('click',() => {
//   optionCt4.classList.toggle('active-table-std');
//   inputTableStd.click();
//
//   standardTableTitle.textContent = inputTableStd.checked ? 'Standard +':'Standard';
//   standardTableTitle.style.color = inputTableStd.checked ? '#0060a8':'#00032A';
//
//   titleChStd.textContent = inputTableStd.checked ? 'Standard +':'Standard';
//
//   stdTablePrice.textContent = inputTableStd.checked ? '$579':'$329';
//   stickyStdPrice.textContent = inputTableStd.checked ? '$579':'$329';
//
//   stdUsr.textContent = inputTableStd.checked ? '10':'5';
//   stdUsr.style.color = inputTableStd.checked ? '#0060a8':'#00032A';
//   stdUsrNo.textContent = inputTableStd.checked ? 'users':'user';
//   stdUsrNo.style.color = inputTableStd.checked ? '#0060a8':'#00032A';
//
//   actSkuStd.textContent = inputTableStd.checked ? '5000 ':'2500 ';
//   actSkuStd.style.color = inputTableStd.checked ? '#0060a8':'#00032A';
//
//   stdSkus.style.color = inputTableStd.checked ? '#0060a8':'#00032A';
//
//   standardTableButton.href = inputTableStd.checked ? 'http://edge01f.shipedge.com/payment/request/B2':'http://edge01f.shipedge.com/payment/request/B1';
//
// })
//
// const tableHeaderSticky = document.getElementById('sticky-table');
// const stickyHeader = document.getElementById('id-header');
//
//
// window.addEventListener('scroll',() => {
//   const tableReact = tableHeaderSticky.getBoundingClientRect();
//
//   if(tableReact.top < 0){
//     stickyHeader.style.display = 'flex';
//     stickyHeader.style.top = '75px';
//
//   }else {
//     stickyHeader.style.display = 'none'
//   }
//
// })
//
// const freeTrial = document.getElementById('starter0');
//
// freeTrial.href = 'http://edge01f.shipedge.com';
// freeTrial.target = '_blank';
//
//
// const proButtonHeader = document.getElementById('pro01');
// proButtonHeader.href = 'http://edge01f.shipedge.com/payment/request/C1';
// proButtonHeader.target = '_blank';
//
