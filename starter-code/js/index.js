console.log("hola");



console.log("HE pasado por aqui");

function deleteItem(e){
  console.log("in delete item");
  var divCol5Delete=e.currentTarget.parentNode;
  console.log(divCol5Delete);
  var itemToDelete=divCol5Delete.parentNode;
  console.log(itemToDelete);
  var parentOfItenToDelete=itemToDelete.parentNode;
  parentOfItenToDelete.removeChild(itemToDelete);
}

function getPriceByProduct(itemNode){
 var itemCost=itemNode.querySelector('#total').innerHTML;
 var itemCostInteger=parseInt(itemCost.substr(1));
 return itemCostInteger;
}

function updatePriceByProduct(productPrice, index){

}

function writeTotalPrice(totalPrice){
  var wTotalPrice=document.getElementsByClassName('total-price')[0];
  console.log(wTotalPrice);
  wTotalPrice.querySelector('span').innerHTML='$'+totalPrice;
}

function getTotalPrice(){
  var items=document.getElementsByClassName('item');
  console.log(items);
  console.log(items.length);
  var precioTotal=0;
  for (i=0;i<items.length;i++){
      console.log(items[i]);
      var itemsNumber=document.getElementsByTagName('input')[i];
      console.log(itemsNumber.value);
      var pricePerUnit = items[i].querySelector('#cost').innerHTML;
      console.log(pricePerUnit);
      var pricePerUnitInteger=parseInt(pricePerUnit.substr(1));
      console.log(pricePerUnitInteger);
      precioTotal=pricePerUnitInteger*itemsNumber.value;
      console.log(precioTotal);
      var totalPrice=items[i].querySelector('#total');
      totalPrice.innerHTML='$'+precioTotal;
    }
    var sumPrices=0;
  for (j=0;j<items.length;j++){
    sumPrices+=getPriceByProduct(items[j]);
  }
 console.log(sumPrices);
 writeTotalPrice(sumPrices);
}
/* old function getTotalPrice only for one item
function getTotalPrice() {
  var input=document.getElementsByTagName('input')[0];
  var precioTotal=0;

  var costDOM = document.getElementById('cost');
  //console.log("DOM de coste sera: ");
  //console.log(costDOM);
  //console.log("Y la cadena interior de valor del coste sera");
  var costNumbericString = document.getElementById('cost').innerHTML;
  //console.log(costNumbericString);
  //console.log("Y el valor de coste en numero entero:");
  var costInteger = parseInt(costNumbericString.substr(1));
  console.log(costInteger);  //este es un factor


  //console.log("input.value deberia ser:");
  //console.log(input.value);
  //console.log("ha salido?");
  //console.log("El coste total de esta adquisición sería");
  //console.log(input.value*costInteger);
  precioTotal=input.value*costInteger;
  precioTotal.toString();
  //console.log(precioTotal);
  document.getElementById('total').innerHTML='$'+precioTotal;
}
*/

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){



  //declaraciones originales
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementsByClassName('item')[0];
  var deleteButtons = document.getElementsByClassName('delete');
  //var calculatePriceButton = document.getElementsByTagName('button')[1];
  console.log("DOM calculatepriceboton: ");
  console.log(calculatePriceButton); //es un elemento DOM
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

console.log(deleteButtons);

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
