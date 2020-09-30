//Variables
const calcDisplay = document.getElementById("display");
const point = document.getElementById('point');
let calcEntry1 = null;
let calcEntry2 = null;
let calcOperator = null;
let arguments=[parseFloat(calcEntry1),calcOperator,parseFloat(calcEntry2)];
let total;

//Clear
const clearBtn = (val) => {
    if (val == null){
        calcDisplay.textContent = '';
        total = 0;
        calcEntry1 = null
        calcEntry2 = null;
        calcOperator = null;
    };
};


// Adds numbers and values to display and saves inputs as new variables.
const enterNum = (num) => {
    if (num == null){ 
        calcDisplay.textContent = '';
    } else if (typeof num == 'number' && calcOperator == null){
        calcEntry1 = calcDisplay.textContent += num
        calcEntry1.toString();
    } else if (calcEntry1 == null && num == '+-' && calcOperator == null){
        calcEntry1 = calcDisplay.textContent += '-'
        calcEntry1.toString();
    } else if (calcEntry1 == '-' && num == '+-' && calcOperator == null){
        calcEntry1 = calcDisplay.textContent = null
        calcEntry1.toString();
    } else if (typeof num == 'string' && num == '+-' && calcOperator == null){
        calcEntry1 = calcDisplay.textContent = (calcEntry1 *-1)
        calcEntry1.toString();
    } else if (typeof num == 'string' && num == '.' && calcOperator == null){
        calcEntry1 = calcDisplay.textContent += num
        calcEntry1.toString();
        point.disabled = true
    } else if (typeof num == 'number' && calcOperator !== null){
        calcEntry2 = calcDisplay.textContent += num
        calcEntry2.toString()
    } else if (calcEntry2 == null && num == '+-' && calcOperator !== null){
        calcEntry2 = calcDisplay.textContent += '-'
        calcEntry2.toString();
    } else if (typeof num == 'string' && num == '+-' && calcOperator !== null){
        calcEntry2 = calcDisplay.textContent = (calcEntry2 *-1)
        calcEntry2.toString();
    } else if (typeof num == 'string' && calcOperator !== null && num == '.'){
        calcEntry2 = calcDisplay.textContent += num
        calcEntry2.toString();
        point.disabled = true
    } else if (typeof num == 'string' && num!== '.'){
        calcDisplay.textContent = ''
        calcOperator = num;
    };
};

//Operations
const add = (a,c) => {
    total = Number.parseFloat(a) + Number.parseFloat(c);
    total = (Math.round(total*10000) / 10000)
    return total
};

const subtract = (a,c) =>{
    total = Number.parseFloat(a) - Number.parseFloat(c);
    total = (Math.round(total*10000) / 10000)
    return total
};

const multiply = (a,c) => {
    total = Number.parseFloat(a) * Number.parseFloat(c);
    total = (Math.round(total*10000) / 10000)
    return total
};

const divide = (a,c) => {
    total = Number.parseFloat(a) / Number.parseFloat(c);
    total = (Math.round(total*10000) / 10000)
    return total
};

//Enable decimal
const decimal = () =>{
    point.disabled = false
};

//EQUALS
const operator = (a,b,c)=>{
    calcDisplay.textContent = ''
    if (b == '+'){
        add(a,c);
        calcDisplay.textContent = total;
        calcEntry1 = total;
    } else if (b == '-'){
        subtract(a,c);
        calcDisplay.textContent = total;
        calcEntry1 = total;
    } else if (b == '*'){
        multiply(a,c);
        calcDisplay.textContent = total;
        calcEntry1 = total;
    } else if (b == '/'){
        divide(a,c);
        calcDisplay.textContent = total;
        calcEntry1 = total;
    }
    
};

console.log('Will you hire me?')
