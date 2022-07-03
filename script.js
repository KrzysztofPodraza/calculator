const sin = document.getElementById("sin");
const cos = document.getElementById("cos");
const tg = document.getElementById("tg");
const ctg = document.getElementById("ctg");
const AC = document.getElementById("AC");
const plus_minus = document.getElementById("+/-");
const percent = document.getElementById("%");
const divide = document.getElementById("divide");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const times = document.getElementById("x");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const minus = document.getElementById("-");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const plus = document.getElementById("+");
const zero = document.getElementById("0");
const dot = document.getElementById(",");
const equals = document.getElementById("=");
const result_html = document.querySelector(".result");

let equation="";
let current_number="";
let current_sign = "";

AC.addEventListener("click",()=>{
    equation = "";
    current_number="";
    result_html.innerHTML=0;
})
plus_minus.addEventListener("click",()=>{
    if(current_number[0]==="-"){
        current_number=current_number.substring(1);
        current_number = "+" + current_number;
    }
    else if(current_number[0]==="+"){
        current_number=current_number.substring(1);
        current_number = "-" + current_number;
    }
    else if(current_number[0]!=="+" || current_number!=="-"){
        current_number = "-" + current_number;
    }
    result_html.innerHTML=current_number;
})
percent.addEventListener("click",()=>{})
divide.addEventListener("click",()=>{
    equation+=current_number;
    current_number="";
    equation+="/";
    result_html.innerHTML = "÷";
})
seven.addEventListener("click",()=>{
    current_number+="7";
    result_html.innerHTML = current_number;
    
})
eight.addEventListener("click",()=>{
    current_number+="8";
    result_html.innerHTML = current_number;
})
nine.addEventListener("click",()=>{
    current_number+="9";
    result_html.innerHTML = current_number;
})
times.addEventListener("click",()=>{
    equation+=current_number;
    current_number="";
    equation+="*";
    result_html.innerHTML = "*";
})
four.addEventListener("click",()=>{
    current_number+="4";
    result_html.innerHTML = current_number;
})
five.addEventListener("click",()=>{
    current_number+="5";
    result_html.innerHTML = current_number;
})
six.addEventListener("click",()=>{
    current_number+="6";
    result_html.innerHTML = current_number;
})
minus.addEventListener("click",()=>{
    equation+=current_number;
    current_number="-";
    result_html.innerHTML = "-";
})
one.addEventListener("click",()=>{
    current_number+="1";
    result_html.innerHTML = current_number;
})
two.addEventListener("click",()=>{
    current_number+="2";
    result_html.innerHTML = current_number;
})
three.addEventListener("click",()=>{
    current_number+="3";
    result_html.innerHTML = current_number;
})
plus.addEventListener("click",()=>{
    equation+=current_number;
    current_number="+";
})
zero.addEventListener("click",()=>{   
    if(equation[equation.length-1]==="/")
    {
        alert("You cant divide by 0");
    }
    else{
        current_number+="0";
        result_html.innerHTML = current_number;
    }
})
dot.addEventListener("click",()=>{
    current_number+=".";
    result_html.innerHTML = current_number;
})
equals.addEventListener("click",()=>{
    equation+=current_number;
    
    let result = eval(equation);
    result_html.innerHTML = result;
    current_number = "";
    equation = "";
})

sin.addEventListener("click",()=>{
const rad = parseInt(current_number) *(Math.PI/180);
const sinus = Math.sin(rad);
result_html.innerHTML="sin("+current_number+")="+Math.floor(sinus*10000)/10000;
})
cos.addEventListener("click",()=>{
    const rad = parseInt(current_number) *(Math.PI/180);
    const cosinus = Math.cos(rad)
    
    result_html.innerHTML="cos("+current_number+")="+Math.floor(cosinus*10000)/10000;
})
tg.addEventListener("click",()=>{
    const rad = parseInt(current_number) *(Math.PI/180);
    const tanges = Math.tan(rad)
    result_html.innerHTML="tg("+current_number+")="+Math.floor(tanges*10000)/10000;
})
ctg.addEventListener("click",()=>{
    const rad = parseInt(current_number) *(Math.PI/180);
    const cotanges = 1/Math.tan(rad)
    result_html.innerHTML="ctg("+current_number+")="+Math.floor(cotanges*10000)/10000;
})