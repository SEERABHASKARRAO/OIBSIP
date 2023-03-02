
function convertto(){
     var num=document.getElementById('Temp').value;
     var result=document.getElementById('res');
  
// celcius to Fehrenhait
     if(document.getElementById('opt').value=="celcius"){
         if(document.getElementById('to').value=="fehrenhait"){
             let y=(num*(9/5))+32;
             result.value=y.toFixed(2);
         }
     }

// Celcius to Kelvin
     if(document.getElementById('opt').value=="celcius"){
         if(document.getElementById('to').value=="kelvin"){
             let t=273.15+parseFloat(num)
             result.value=t.toFixed(2);
         }
     }
     //  if they are equal

     if(document.getElementById('opt').value==document.getElementById('to').value){
       result.value=num;
     }

     // Kelvin to celcius

if(document.getElementById('opt').value=="kelvin"){
         if(document.getElementById('to').value=="celcius"){
             let y=(num-273.15);
             result.value=y.toFixed(2);
         }
     }


 // Fehrenhait to celcius
     if(document.getElementById('opt').value=="fehrenhait"){
         if(document.getElementById('to').value=="celcius"){
             let y=parseFloat(5/9)*(num-32);
             result.value=y.toFixed(2);
         }
     }

     // Fehrenhait to Kelvin

     if(document.getElementById('opt').value=="fehrenhait"){
         if(document.getElementById('to').value=="kelvin"){
             let y=(num-32)*(5/9)+273.15;
             result.value=y.toFixed(2);
         }
     }

         //  Kelvin to Fehrenhait
     if(document.getElementById('opt').value=="kelvin"){
         if(document.getElementById('to').value=="fehrenhait"){
             let y=parseFloat((num-273.15)*(9/5)+32);
             result.value=y.toFixed(2);
         }
     }


     }
