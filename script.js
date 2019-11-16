var numItem = 0
numItem = document.getElementById("numInput").value
var itemCost = document.getElementById("itemCostSelect").value
var arra = []
// main function 
function orderItem()
{

    var numItem = document.getElementById("numInput").value
    var pele = document.createElement('h3')
    var row2 = document.getElementById('divTemp')
    row2.appendChild(pele);
    var item = document.getElementById("itemCostSelect").value
    var amount = cost(item)
    var series = document.querySelectorAll("#divTemp > h3")
    var seriesNo = series.length
    for ( i = 0; i< series.length ; i++){   // For styling rows
        if ( i%2 == 0) {
            series[i].style.background = "rgb(150, 150, 150)"
        }
    }                                                               //data to appended child
    pele.innerHTML ="<pre>"+seriesNo +"              "+ item +"                  "+amount+ "          "+"x"+" "+numItem+ "                     "+amount * numItem + "</pre>"
    arra.push(amount*numItem)
    console.log(arra)
    var sum = arra.reduce(function (a,b){
        return a+b
    })
        discount(sum)
    
}
    //cost caluculation

function cost(item){                
    var itemArra = ["Idly","Plain Dosa","Masala Dosa","Onion Dosa","Ravva Dosa","Utappam","Poori","Doas 70mm",
    "Vada","Moong dal Dosa","Coffee/Tea","Soft Drink","Bourvita/Horlics","Mineral Water",
    "Lassi","Cold Coffee","Mango Lassi","Fresh Lime Soda","Butter Milk","Fruit Punch"]
    var costArray = [50,60,70,70,70,60,60,80,50,80,30,40,40,40,40,40,40,40,40,40]
        var amount = 0
        for ( i = 0 ; i< costArray.length ; i++){
            if ( item == itemArra[i])
            {
                amount = costArray[i]
            } 
        }
        return amount
    }
    //clear items one by one
function orderClear () {
    var rowClear = document.getElementById("divTemp")
    var rowtemp = document.querySelector("#divTemp > h3")
        rowClear.removeChild(rowtemp)
}

// function sumItems (sum) {
//     var total = 0
//      total = total + sum
//     return total
// }

            // discount and tax caluculation
function discount(sum) {
    var beforeDis = document.getElementById("cost")
    beforeDis.innerHTML = "<pre>Total :             "+sum +"</pre>" 
    var tax = 0
    var finalSum = 0
    var discountValue = 0
            if ( sum > 200) {
                discountValue = 0.1 * sum
                sum = sum - discountValue
            }
    var discount = document.getElementById("discount")
    discount.innerHTML = "<pre>Discount :          -"+discountValue+"</pre>"
    tax = sum * 0.05 
    var taxout = document.getElementById("taxValue")
    taxout.innerHTML ="<pre>5% of Tax :          +"+tax+"</pre>"
    finalSum = sum + tax 
    console.log(finalSum)
    var newH1 = document.getElementById("finalOut")
    newH1.innerHTML = "<pre>Grand Total "+finalSum
}

                // clearing items and total displayed amount
function clearCount () {
    var beforeDis = document.getElementById("cost")
    beforeDis.innerHTML = "<pre>Total :             "+0+"</pre>"
    var discount = document.getElementById("discount")
    discount.innerHTML = "<pre>Discount :         -"+0+"</pre>"
    var taxout = document.getElementById("taxValue")
    taxout.innerHTML ="<pre> 5% of Tax :           +"+0+"</pre>"
    var newH1 = document.getElementById("finalOut")
    newH1.innerHTML = "<pre>Grand Total "+0
    arra = []
    var rowClear = document.getElementById("divTemp")
    var rowtemp = document.querySelectorAll("#divTemp > h3")
    for(i = 0 ; i < rowtemp.length ; i++){
        rowClear.removeChild(rowtemp[i])
    }
}
    //animation

var order = document.getElementById ("orderMenuDiv")
order.addEventListener("click",zoomIt)
function zoomIt (){
    order.style.color = "blue";
    order.style.background = "url('resources/neworder.jpeg')";
    order.style.backgroundSize = "cover";
    order.style.borderColor = "orange" 
}
