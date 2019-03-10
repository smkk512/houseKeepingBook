//수입, 지출 버튼
const category = document.querySelector('.category'),
    btn_withDraw = category.querySelector('.withdraw'),
    btn_deposit = category.querySelector('.deposit');

//금액, 정보 입력
const frm_info = document.querySelector('.submit-info'),
    money_info = frm_info.querySelector('.input-money'),
    desc_info = frm_info.querySelector('.input-desc');

//월 수입 지출 정보
const month_info = document.querySelector('.month-info'),
    withdraw_money = month_info.querySelector('.withdraw-money'),
    deposit_money = month_info.querySelector('.deposit-money'),
    total_money = month_info.querySelector('.total-money');

//히스토리
const table = document.querySelector('.history table');

var isWithDraw = true;

var monthWithdraw = 0, 
    monthDeposit = 0, 
    monthTotal = 0;

btn_withDraw.addEventListener('click', event =>{
    isWithDraw = true;
})
btn_deposit.addEventListener('click', event=>{
    isWithDraw = false;
})

const handleSumbit = event => {
    event.preventDefault();
    const money = Number(money_info.value);
    const desc = desc_info.value;
    let type = '';
    if(money.length !== 0){
        isWithDraw ? type = '수입' : type = '지출';
        printHistory(type, desc, money);
        calMonthMoney(type, money);
    }
}

const printHistory = (_type,_desc, _money) =>{
    const tr = document.createElement('tr');
    const date = document.createElement('td'),
        whom = document.createElement('td'), 
        type = document.createElement('td'), 
        desc = document.createElement('td'), 
        money = document.createElement('td');
    const objValue = {
        date:'test',
        whom:'test',
        type:_type,
        desc:_desc,
        money:_money,
    };
    date.innerText = objValue.date;
    whom.innerText = objValue.whom;
    type.innerText = objValue.type;
    desc.innerText = objValue.desc;
    money.innerText = objValue.money;

    tr.appendChild(date);
    tr.appendChild(whom);
    tr.appendChild(type);
    tr.appendChild(desc);
    tr.appendChild(money);
    
    table.appendChild(tr);
}

const calMonthMoney = (_type, _value) =>{
    _type === '수입' ? monthWithdraw += _value : monthDeposit += _value;
    monthTotal = monthWithdraw - monthDeposit;
    withdraw_money.innerHTML = monthWithdraw;
    deposit_money.innerHTML = monthDeposit;
    total_money.innerHTML = monthTotal;
}

function Init(){
    frm_info.addEventListener('submit', handleSumbit);
}

Init();