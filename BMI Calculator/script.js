const btnE1 =document.getElementById("btn")
const BMIinputE1 =document.getElementById ("bmi-result")
const WeightConditionE1 = document.getElementById("Weight-Condition")

function calulateBMI()
{
const heightvalue = document.getElementById("height").value/100
const weightvalue = document.getElementById("Weight").value

const valuebmi = weightvalue/(heightvalue*heightvalue)

BMIinputE1.value = valuebmi

if(valuebmi < 18.5)
{
  WeightConditionE1.innerText ="Under Weight"
}
else if (valuebmi > 18.5 && valuebmi <= 24.9 )
{
    WeightConditionE1.innerText ="Normal Weight"
}
else if (valuebmi >= 25 && valuebmi <=29.9)
{
    WeightConditionE1.innerText ="Over Weight"
}
else if (valuebmi >=30)
{
    WeightConditionE1.innerText ="Obesity"
}

}
btnE1.addEventListener("click",calulateBMI)
