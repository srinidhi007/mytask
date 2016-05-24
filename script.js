     //function to calculate Age

function calculateAge()
    {
        
        
        var birthYear=document.getElementById("birth").value;
        var today=new Date();
        var thisYear=today.getFullYear();

        var currentYear=thisYear;
       
            document.getElementById("age1").innerHTML="ANS: You are either "+(currentYear-birthYear)+" or "+(currentYear-birthYear-1);
                  
    }
    
    //function to calculate liftime supply
    
    function calculateSupply(){
        var age=document.getElementById("age").value;
        var amt=document.getElementById("amt").value;
        
        var maxage=100;
        
        var years=maxage-age;
        var today=new Date();
        var thisYear=today.getFullYear();
        var totyrs=thisYear + years;
        var leapcount=0;
        for(var i=thisYear; i<=totyrs; i++)
            {

                if(i%400===0 || i%4===0 ){
                    leapcount++;

                }


            }



        var lifetime= maxage- age;
        document.getElementById("ans2").innerHTML="ANS: Your lifetime supply is "+lifetime *(365+leapcount)*amt;


        
        
    }
    
     //function to calculate calculate circumference

      function calculatecircumference(){
            
        var radius=document.getElementById("R").value;
        
        var circumference= 2*3.142*radius;
        document.getElementById("ans3").innerHTML="ANS: The circumference is "+circumference;

        }
    
        //function to calculate Area

    function calculatearea(){
     var radius=document.getElementById("R").value;
     var area= 3.142*radius*radius;
     document.getElementById("ans3").innerHTML="ANS: The area is "+area;

    }
    
    //function to calculate fahrenheit To Celsius

    
    function fahrenheitToCelsius(){
    var fahrenheit=document.getElementById("C").value;
    document.getElementById("ans4").innerHTML="ANS: The celsius is "+(fahrenheit-32)*5/9;


    }
    //function to calculate celsius To Fahrenheit

    
    function celsiusToFahrenheit(){
      var celsius=document.getElementById("C").value;
      document.getElementById("ans4").innerHTML="ANS: The Fahrenheit is "+(celsius+32)*9/5;
  

    }
    
    
