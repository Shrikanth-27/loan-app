document.getElementById("loan-form").addEventListener('submit',function(e){
    document.getElementById("result").style.display="none";
    document.getElementById("loading").style.display="block";
    setTimeout(calculate,2000);
    e.preventDefault();
});
function calculate(e){
    const amount=document.getElementById("loan-amount");
    const interest=document.getElementById("interest");
    const yp=document.getElementById("years");
    
    const MonthlyAmount=document.getElementById("monthly_amount");
    const TotalAmount=document.getElementById("total_amount");
    const TotalInterest=document.getElementById("total_payement");

    const principal=parseFloat(amount.value);
    const interest1=parseFloat(interest.value)/100/12;
    const yp2=parseFloat(yp.value)*12;
    const x=Math.pow(1+interest1,yp2);
    const monthly=(principal*x*interest1)/(x-1);

    if(isFinite(monthly)){
        MonthlyAmount.value=monthly.toFixed(2);
        TotalAmount.value=(monthly*yp2).toFixed(2);
        TotalInterest.value=(monthly*yp2-principal).toFixed(2);
        
        document.getElementById("result").style.display="block";
        document.getElementById("loading").style.display="none";
    }
    else{
        showError("Please enter the right numbers");
        
    }
    
    e.preventDefault();

}
function showError(error){
    const errorDiv=document.createElement('div');
    errorDiv.className='alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    const card=document.querySelector('.card');
    const heading=document.querySelector(".header");
    card.insertBefore(errorDiv,heading);
    document.getElementById("loading").style.display="none";

    
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}