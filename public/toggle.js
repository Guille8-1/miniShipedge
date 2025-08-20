const style = document.createElement("style");
style.textContent = `
    .toggle {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 180px;
      height: 40px;
      background: #EAF0F6;
      border-radius: 25px;
      cursor: pointer;
      font-family: sans-serif;
      font-size: 14px;
      font-weight: bold;
      overflow: hidden;
      border: solid 0.8px;
      border-color: #15DEF9;
      padding: 10px;
    }
    .toggle-std {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 215px;
      height: 40px;
      background: #EAF0F6;
      border-radius: 25px;
      cursor: pointer;
      font-family: sans-serif;
      font-size: 14px;
      font-weight: bold;
      overflow: hidden;
      border: solid 0.8px;
      border-color: #15DEF9;
      padding: 10px;
    }

    .toggle-table {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 180px;
      height: 40px;
      background: #EAF0F6;
      border-radius: 25px;
      cursor: pointer;
      font-family: sans-serif;
      font-size: 14px;
      font-weight: bold;
      overflow: hidden;
      border: solid 0.8px;
      border-color: #15DEF9;
      padding: 10px;
    }
    .toggle-table-std {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 215px;
      height: 40px;
      background: #EAF0F6;
      border-radius: 25px;
      cursor: pointer;
      font-family: sans-serif;
      font-size: 14px;
      font-weight: bold;
      overflow: hidden;
      border: solid 0.8px;
      border-color: #15DEF9;
      padding: 10px;
    }
    .toggle .circle {
      padding: 5px;
      position: absolute;
      top: auto;
      left: -10px;
      width: 85px;
      height: 40px;
      background: white;
      border-radius: 25px;
      transition: transform 0.3s ease;
      z-index: 1;
    }
    .toggle-std .circle-std {
      padding: 5px;
      position: absolute;
      top: auto;
      left: 0;
      width: 100px;
      height: 40px;
      background: white;
      border-radius: 25px;
      transition: transform 0.3s ease;
      z-index: 1;
    }

    .toggle-table .circle-table {
      padding: 5px;
      position: absolute;
      top: auto;
      left: -10px;
      width: 85px;
      height: 40px;
      background: white;
      border-radius: 25px;
      transition: transform 0.3s ease;
      z-index: 1;
    }

    .toggle-table-std .circle-table-std {
      padding: 5px;
      position: absolute;
      top: auto;
      left: 0;
      width: 100px;
      height: 40px;
      background: white;
      border-radius: 25px;
      transition: transform 0.3s ease;
      z-index: 1;
    }

    .toggle.active .circle {
      transform: translateX(105px);
    }

    .toggle-std.active-std .circle-std {
      transform: translateX(115px);
    }

    .toggle-table.active-table .circle-table {
      transform: translateX(105px);
    }
  
    .toggle-table-std.active-table-std .circle-table-std {
      transform: translateX(115px);
    }


    .toggle span {
      flex: 1;
      text-align: center;
      z-index: 2;
      transition: color 0.3s ease;
    }
    .toggle-std span {
      flex: 1;
      text-align: center;
      z-index: 2;
      transition: color 0.3s ease;
    }
    .toggle-table span {
      flex: 1;
      text-align: center;
      z-index: 2;
      transition: color 0.3s ease;
    }
    .toggle-table-std span {
      flex: 1;
      text-align: center;
      z-index: 2;
      transition: color 0.3s ease;
    }
    .toggle .option1 {
      margin-left: 3px;
      color: #0060a8;
      font-size: 16px;
    }

    .toggle-std .option3 {
      margin-left: 3px;
      color: #0060a8;
      font-size: 16px;
    }
    .toggle-table .option5 {
      margin-left: 3px;
      color: #0060a8;
      font-size: 16px;
    }

    .toggle-table-std .option7 {
      margin-left: 3px;
      color: #0060a8;
      font-size: 16px;
    }
    .toggle .option2 {
      color: gray;
      margin-left: 4px;
      font-size: 16px;
    }
    .toggle-std .option4 {
      color: gray;
      margin-left: 4px;
      font-size: 16px;
    }
    .toggle-table .option6 {
      color: gray;
      margin-left: 4px;
      font-size: 16px;
    }
    .toggle-table-std .option8 {
      color: gray;
      margin-left: 4px;
      font-size: 16px;
    }

    .toggle.active .option1 {
      color: gray;
    }
    .toggle-std.active-std .option3 {
      color: gray;
    }
    .toggle-table.active-table .option5 {
      color: gray;
    }
    .toggle-table-std.active-table-std .option7 {
      color: gray;
    }
    .toggle.active .option2 {
      color: #0060a8;
    }

    .toggle-std.active-std .option4 {
      color: #0060a8;
    }

    .toggle-table.active-table .option6 {
      color: #0060a8;
    }

    .toggle-table-std.active-table-std .option8 {
      color: #0060a8;
    }

    
`
document.head.appendChild(style);

const optionCt1 = document.getElementById('tog-ct-1');
optionCt1.className = 'toggle';

const opt1 = document.createElement('div');
opt1.className = 'text option1';
opt1.textContent = 'Starter';
opt1.style.zIndex = '1'

const opt2 = document.createElement('div');
opt2.className = 'text option2';
opt2.textContent = 'Starter +';
opt2.style.zIndex = '1';

const circle = document.createElement('div');
circle.className = 'circle';
circle.style.zIndex = '0';

const input = document.createElement('input')
input.type = 'checkbox';
input.style.display = 'none';

optionCt1.appendChild(opt1);
optionCt1.appendChild(opt2);
optionCt1.appendChild(circle);

//variables changing style
const starter1 = document.querySelector('.starter-user');
const starter2 = document.querySelector('.starter-users-no');
const starter3 = document.querySelector('.sku-number');
const actSkus1 = document.querySelector('.ac_skus')
const starterTitle = document.querySelector('.starter');
const priceStarter = document.querySelector('.pirce_starter');

const starterButton = document.getElementById('starter');

starterButton.href = 'https://edge01f.shipedge.com/payment/request/A1'
starterButton.target = '_blank';

optionCt1.addEventListener('click',() => {
  optionCt1.classList.toggle('active');
  input.click();

  starter1.style.color = input.checked ? '#0060a8':'#00032A';
  starter1.textContent = input.checked ? '2 ':'1 ';
  starter2.style.color = input.checked ? '#0060a8':'#00032A';
  starter2.textContent = input.checked ? 'users' : 'user';
  starter3.textContent = input.checked ? '500 ':'100 ';
  actSkus1.style.color = input.checked ? '#0060a8':'#00032A';
  starter3.style.color = input.checked ? '#0060a8':'#00032A';

  starterTitle.style.color = input.checked ? '#0060a8':'#00032A';
  starterTitle.textContent = input.checked ? 'Starter +':'Starter';

  priceStarter.textContent = input.checked ? '$199':'$55';
  starterButton.href = input.checked ? 'https://edge01f.shipedge.com/payment/request/A2':'https://edge01f.shipedge.com/payment/request/A1'

})

const optionCt2 = document.getElementById('tog-ct-2');
optionCt2.className = 'toggle-std';

const opt1Std = document.createElement('div');
opt1Std.className = 'text option3';
opt1Std.textContent = 'Standard';
opt1Std.style.zIndex = '1';

const opt2Std = document.createElement('div');
opt2Std.className = 'text option4';
opt2Std.textContent = 'Standard +';
opt2Std.style.zIndex = '1';

const circleStd = document.createElement('div');
circleStd.className = 'circle-std';
circleStd.style.zIndex = '0';

const inputStd = document.createElement('input');
inputStd.type = 'checkbox';
inputStd.style.display = 'none';

optionCt2.appendChild(opt1Std);
optionCt2.appendChild(opt2Std);
optionCt2.appendChild(circleStd);

//variables changing content html
const standardTitle = document.querySelector('.standard');
const stdPrices = document.querySelector('.std-prices');
const stdUsers = document.querySelector('.standard-users');
const stdUsersNo = document.querySelector('.standard-users-no')
const actSkusStandard = document.querySelector('.std-number');
const buttonStandard = document.getElementById('standard');
const stdSkusCard = document.querySelector('.std-skus')

buttonStandard.href = 'https://edge01f.shipedge.com/payment/request/B1';
buttonStandard.target = '_blank';

optionCt2.addEventListener('click',() => {
  optionCt2.classList.toggle('active-std');
  inputStd.click();

  standardTitle.textContent = inputStd.checked ? 'Standard +':'Standard';
  standardTitle.style.color = inputStd.checked ? '#0060a8' : '#00032A';
  stdPrices.textContent = inputStd.checked ? '$579':'$329';

  stdUsers.style.color = inputStd.checked ? '#0060a8':'#00032A';
  stdUsers.textContent = inputStd.checked ? '10':'5';

  stdUsersNo.style.color = inputStd.checked ? '#0060a8':'#00032A';
  actSkusStandard.textContent = inputStd.checked ? '5000 ':'2500 ';
  actSkusStandard.style.color = inputStd.checked ? '#0060a8':'#00032A';
  stdSkusCard.style.color = inputStd.checked ? '#0060a8':'#00032A';
  buttonStandard.href = inputStd.checked ? 'https://edge01f.shipedge.com/payment/request/B2':'https://edge01f.shipedge.com/payment/request/B1';

})

const basicButton = document.getElementById('basic');
basicButton.href = 'https://edge01f.shipedge.com';
basicButton.target = '_blank';

const proButton = document.getElementById('profesional');
proButton.href = 'http://edge01f.shipedge.com/payment/request/C1';
proButton.target = '_blank';

const detailsButton = document.querySelectorAll('.see-details_button').forEach((button)=>{
  button.addEventListener('click', () => {

      setTimeout(()=>{
          const navHeight = document.querySelector('.w-nav').clientHeight + 35;
          const target = document.querySelector('.pricing22_top-row');

          if(target){
            const targetPos = target.getBoundingClientRect().top + window.scrollY;
                  const offset = targetPos - navHeight;
                  window.scroll({
                    top: offset,
                    behavior: 'smooth'
                  });
          }
        }, 200)
      })
})

const optionCt3 = document.getElementById('tg-ct_3');
optionCt3.className = 'toggle-table';

const option1Table = document.createElement('div');
option1Table.className = 'text option5';
option1Table.textContent = 'Starter';
option1Table.style.zIndex = '1';

const option2Table = document.createElement('div');
option2Table.className = 'text option6';
option2Table.textContent = 'Starter +';
option2Table.style.zIndex = '1';

const circleTable = document.createElement('div');
circleTable.className = 'circle-table';
circleTable.style.zIndex = '0';

const inputTable = document.createElement('input');
inputTable.type = 'checkbox';
inputTable.style.display = 'none';

optionCt3.appendChild(option1Table);
optionCt3.appendChild(option2Table);
optionCt3.appendChild(circleTable);

const starterTable = document.querySelector('.starter-table-user');
const starterPriceTable = document.querySelector('.starterprice');
const starterTableTitle = document.querySelector('.starter-table');
const starteUsrs = document.querySelector('.starter-table-no');
const starterActSkus = document.querySelector('.table-usr-head');
const tableButtonStarter = document.getElementById('starter1');
const skusTableHead = document.querySelector('.table-head-skus');
const stickyStrtPrice = document.querySelector('.sticky-strt');
const titleChStrt = document.querySelector('.st-sticky');


tableButtonStarter.href = 'http://edge01f.shipedge.com/payment/request/A1';
tableButtonStarter.target = '_blank';

optionCt3.addEventListener('click',() => {
  optionCt3.classList.toggle('active-table');
  inputTable.click();

  starterTable.style.color = inputTable.checked ? '#0060a8' : '#00032A';
  starterTable.textContent = inputTable.checked ? '2':'1';
  
  starterPriceTable.textContent = inputTable.checked ? '$199':'$55';
  stickyStrtPrice.textContent = inputTable.checked ? '$199':'$55';

  starterTableTitle.textContent = inputTable.checked ? 'Starter +' : 'Starter';
  starterTableTitle.style.color = inputTable.checked ? '#0060a8':'#00032A';
  titleChStrt.textContent = inputTable.checked ? 'Starter +' : 'Starter';

  starteUsrs.style.color = inputTable.checked ? '#0060a8':'#00032A';
  starteUsrs.textContent = inputTable.checked ? 'users' : 'user';

  starterActSkus.style.color = inputTable.checked ? '#0060a8':'#00032A';
  starterActSkus.textContent = inputTable.checked ? '500 ' : '100 ';

  skusTableHead.style.color = inputTable.checked ? '#0060a8':'#00032A';

  tableButtonStarter.href = inputTable.checked ? 'http://edge01f.shipedge.com/payment/request/A2':'http://edge01f.shipedge.com/payment/request/A1';

})

const optionCt4 = document.getElementById('tg-ct_4');
optionCt4.className = 'toggle-table-std';

const opt1TableStd = document.createElement('div');
opt1TableStd.className = 'text option7';
opt1TableStd.textContent = 'Standard';
opt1TableStd.style.zIndex = '1'

const opt2TableStd = document.createElement('div');
opt2TableStd.className = 'text option8';
opt2TableStd.textContent = 'Standard +';
opt2TableStd.style.zIndex = '1';

const circleTableStd = document.createElement('div');
circleTableStd.className = 'circle-table-std';
circleTableStd.style.zIndex = '0';

const inputTableStd = document.createElement('input');
inputTableStd.type = 'checkbox';
inputTableStd.style.display = 'none'

optionCt4.appendChild(opt1TableStd);
optionCt4.appendChild(opt2TableStd);
optionCt4.appendChild(circleTableStd);


const standardTableTitle = document.querySelector('.standard-table');
const stdTablePrice = document.querySelector('.standardprice');
const stdUsr = document.querySelector('.standard-table_user');
const stdUsrNo = document.querySelector('.standard_users-no');
const actSkuStd = document.querySelector('.std-number-table');
const stdSkus = document.querySelector('.std-skus-table');
const stickyStdPrice = document.querySelector('.sticky-std-price');
const titleChStd = document.querySelector('.std-sticky');

const standardTableButton = document.getElementById('standard1');
standardTableButton.href = 'http://edge01f.shipedge.com/payment/request/B1';
standardTableButton.target = '_blank';

optionCt4.addEventListener('click',() => {
  optionCt4.classList.toggle('active-table-std');
  inputTableStd.click();
  
  standardTableTitle.textContent = inputTableStd.checked ? 'Standard +':'Standard';
  standardTableTitle.style.color = inputTableStd.checked ? '#0060a8':'#00032A';

  titleChStd.textContent = inputTableStd.checked ? 'Standard +':'Standard';
  
  stdTablePrice.textContent = inputTableStd.checked ? '$579':'$329';
  stickyStdPrice.textContent = inputTableStd.checked ? '$579':'$329';

  stdUsr.textContent = inputTableStd.checked ? '10':'5';
  stdUsr.style.color = inputTableStd.checked ? '#0060a8':'#00032A';
  stdUsrNo.textContent = inputTableStd.checked ? 'users':'user';
  stdUsrNo.style.color = inputTableStd.checked ? '#0060a8':'#00032A';

  actSkuStd.textContent = inputTableStd.checked ? '5000 ':'2500 ';
  actSkuStd.style.color = inputTableStd.checked ? '#0060a8':'#00032A';

  stdSkus.style.color = inputTableStd.checked ? '#0060a8':'#00032A';

  standardTableButton.href = inputTableStd.checked ? 'http://edge01f.shipedge.com/payment/request/B2':'http://edge01f.shipedge.com/payment/request/B1';


})

const tableHeaderSticky = document.getElementById('sticky-table');
const stickyHeader = document.getElementById('id-header');


window.addEventListener('scroll',() => {
  const tableReact = tableHeaderSticky.getBoundingClientRect();
  
  if(tableReact.top < 0){
    stickyHeader.style.display = 'flex';
    stickyHeader.style.top = '75px';    

  }else {
    stickyHeader.style.display = 'none'
  }

})






