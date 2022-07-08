function calculateEMI(){
    var P = document.getElementById("principalAmount").value;
    
    var r = document.getElementById("interestRate").value;
    var R = (r/100.0) / 12.0;
    var N = document.getElementById("tenure").value;
    
    var EMI = P * R * (Math.pow(1+R, N) / (Math.pow(1+R, N) - 1) );
    // var EMI = 100.1234;
    var output=document.getElementById("result");
    output.innerHTML="EMI is Rs."+EMI.toFixed(2);
    return false;
}

