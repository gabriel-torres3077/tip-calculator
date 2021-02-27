    var total = 0
function calculate(){
    var price = document.getElementById("price").value;
    var peopleSharing = document.getElementById("peopleSharing").value;
    var rating = document.getElementById("foodRate").value;

    if (billAmt + peopleAmt == 0){
        alert("Please insert an value");
    }else{
    total = (price * rating) / peopleSharing;
    total = total.toFixed(2);
    document.getElementById("resultDiv").style.display="block";
    document.getElementById("resultSpan").textContent=total;
    }
}