const form= document.querySelector('form')
//if we right value of height outsidde the form, thn it will give empty value because vo load hojayga n height=0 rkhlega
form.addEventListener('submit',function(e){
    e.preventDefault() //form jb submit hota h to uski values server per jati hai but here we are not doing that. so we have stop it

    const height=parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height)){  //Nan= not a number if true means height is a num else not a num
         results.innerHTML =`Please give a valid height ${height}`;
    }else if (weight === '' || weight<0 || isNaN(weight))
    {
        results.innerHTML=`Please give a valid weight ${weight}`;
    }
    else{
        const bmi=(weight/ ((height*height)/10000)).toFixed(2)
        
        if(bmi<18.6){
            results.innerHTML= `<span>BMI: ${bmi}.You are under weight</span>`;
    
        }
        else if(bmi>=18.6 && bmi<=24.9){
            results.innerHTML= `<span>BMI: ${bmi}.You are normal weight</span>`;
        }
        else{
            results.innerHTML= `<span>BMI: ${bmi}.You are under weight</span>`;
        }
    }
})