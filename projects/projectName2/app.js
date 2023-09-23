


function getAge(){
   let dob = new Date(document.getElementById("dob").value); //getting value from input tag
   calcAge(dob);
}

function calcAge(dob)
{ 
    //get date of birth
   let dobDate = dob.getDate();
   let dobYear = dob.getFullYear();
   let dobMonth = dob.getMonth();
   
   //get current system date
    const currentDate = new Date(); // return current date in yyyy-mm-dd format
    let currentDay =currentDate.getDate();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

    //calculating year
    let yearAge = currentYear - dobYear;
    let monthAge;
    let dayAge;
    

    //calculating month
    if(currentMonth < dobMonth)
    {
      yearAge = yearAge - 1;
      monthAge = 12 + (currentMonth - dobMonth);
    }

    else 
    {
      monthAge = currentMonth - dobMonth;
    }

    //calculating days
    if(currentDay < dobDate)
    {
      monthAge = monthAge - 1;
      dayAge = 31 + (currentDay - dobDate);
    }

    else 
    {
      dayAge = currentDay - dobDate;
    }

    displayAge(yearAge,monthAge,dayAge);
  
}
function displayAge(yearAge,monthAge,dayAge)
{
  document.getElementById("years").innerHTML = yearAge;
  document.getElementById("months").innerHTML = monthAge;
  document.getElementById("days").innerHTML = dayAge;
    
}

