document.getElementById('kitkat-btn').addEventListener('click',function(){
    // for chocolate
    const kitkatInputField=getInputFieldValue('kitkat-input-field');
    const chocolateTotalPrice=parseInt(kitkatInputField)*200;
    setInnerText('chocolate-total-price',chocolateTotalPrice);
    total();
   
})
document.getElementById('rose-btn').addEventListener('click',function(){
    // for chocolate
    const roseInputField=getInputFieldValue('rose-input-field');
    const roseTotalPrice=parseInt(roseInputField)*100;
    setInnerText('rose-total-price',roseTotalPrice);
    total();
})
//   for dairy
document.getElementById('dairy-btn').addEventListener('click',function(){
    // for chocolate
    const dairyInputField=getInputFieldValue('dairy-total-input');
    const dairyTotalPrice=parseInt(dairyInputField)*100;
    setInnerText('dairy-total-price',dairyTotalPrice); 
    total();
})

// set the value
function setInnerText(id,value){
    document.getElementById(id).innerText=value;
}
// get the value
function getInputFieldValue(id){
   const value= document.getElementById(id).value;
   return parseInt(value);
}
function total(){
    const chocolate=document.getElementById('chocolate-total-price').innerText;
    const rose=document.getElementById('rose-total-price').innerText;
    const dairy=document.getElementById('dairy-total-price').innerText;
    const sum=parseInt(chocolate)+parseInt(rose)+parseInt(dairy);
    setInnerText('total',sum);
}
document.getElementById('apply-btn').addEventListener('click',function(){
   const promoCode=getInputFieldValue('promo-code');
   if(promoCode === 101){
    const total=document.getElementById('total').innerText;
    const result=total-parseInt(total)*0.1;
    setInnerText('all-cost',result);
   }
   else{
    alert("please valid promocode");
   }
})