function compute()
/*Compute gathers the principal, interest rate and year(s) values
and calculates the amount to be receivved in a specfic year */
{
    var principal = document.getElementById("principal").value; //amount
    //checks that a positive number is input
    if (principal < 1){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value; 
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    //the innerhtml text displays the calculated reults
    document.getElementById("result").innerHTML = "\<br><br>\If you deposit $<b>" +
    principal + "</b>, <br>at an interest rate of <b>" + rate +
     "</b>%. \<br>\You will receive an amount of $<b>" + 
    interest + "</b>, <br>in the year <b>" + year + "</b><br>"
}

function updateRate()
//updates the interest rate when the slide bar moves
{
    //taken from the span id in the range slider
    var rateval = document.getElementById("rate").value;
    //displays the new interest rate via the innertext
    document.getElementById("rateval").innerText=rateval;
}