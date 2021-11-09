const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkButton=document.querySelector("#check-button");
const outputBox=document.querySelector("#output-box");

function checkBirthdayIsLucky(){
    const dob=dateOfBirth.value;
    const sum=calculateSum(dob);
    compareValues(sum,luckyNumber.value)
}

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum= sum + Number(dob.charAt(i));
    }
    return sum;
}

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0)
    {
        outputBox.innerText="Your Birthday is a lucky number!!";
    }
    else
    {
        outputBox.innerText= "Your birthday is not a lucky number😔";
    }
}
checkButton.addEventListener("click", checkBirthdayIsLucky);