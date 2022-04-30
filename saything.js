function saything() {
    // To set two dates to two variables 
 var today = new Date;
 var date1 = new Date(today.getMonth()+1+'/'+(today.getDate())+'/'+today.getFullYear()); 

 var date2 = new Date("05/26/2022"); 
    
      
  // To calculate the time difference of two dates 
    
 var Difference_In_Time = date2.getTime() - date1.getTime(); 
    
      
 // To calculate the no. of days between two dates 
    
 var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
     // Subtract two weekend days for every week in between
     var weeks = Math.floor(Difference_In_Days / 7);
     Difference_In_Days = Difference_In_Days - (weeks * 2);
 
 
     // Remove weekend not previously removed.   
     if (date1 - date2 > 1)         
         Difference_In_Days = Difference_In_Days - 2;      
 
     // Remove start day if span starts on Sunday but ends before Saturday
     if (date1 == 0 && date2 != 6)
         Difference_In_Days = Difference_In_Days - 1  
 
     // Remove end day if span ends on Saturday but starts after Sunday
     if (date2 == 6 && date1 != 0)
         Difference_In_Days = Difference_In_Days - 1  
 
 console.log(date1);
 console.log(Difference_In_Time);
 console.log(Difference_In_Days);
 document.getElementById("daysleft").innerHTML = "There are " + Difference_In_Days + " school days left";
}