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

function createQuantityNode(){
  var col3=document.createElement('div');
  col3.setAttribute('class','col3');
  var col3label=document.createElement('label');
  col3label.setAttribute('for','cantidad');
  col3label.innerHTML='QTY ';
  col3.appendChild(col3label);
  var col3input=document.createElement('input');
  col3input.setAttribute('type','text');
  col3input.setAttribute('name','cantidad');
  col3input.setAttribute('value','0');
  col3.appendChild(col3input);
  //console.log(col3);
  return col3;

}

function createDeleteButton(){
  var col5=document.createElement('div');
  col5.setAttribute('class','col5');
  var col5button=document.createElement('button');
  col5button.setAttribute('class','delete');
  col5button.innerHTML='Delete';
  col5.appendChild(col5button);
  //console.log(col5);
  return col5;
}

function createUnitCostNode(itemUnitPrice){
  var col2=document.createElement('div');
  col2.setAttribute('class','col2');
  var col2Span=document.createElement('span');
  col2Span.setAttribute('id','cost');
  col2Span.innerHTML='$'+itemUnitPrice;
  col2.appendChild(col2Span);
  //console.log(col2);
  return col2;
}

function createItemNode(itemData){
 var col1=document.createElement('div');
 col1.setAttribute('class','col1');
 var col1Span=document.createElement('span');
 col1Span.setAttribute('id','name');
 col1Span.innerHTML=itemData;
 col1.appendChild(col1Span);
 //console.log(col1);
 return col1;
}

function createTotalCostNode(){
  var col4=document.createElement('div');
  col4.setAttribute('class','col4');
  var col4Span=document.createElement('span');
  col4Span.setAttribute('id','total');
  col4Span.innerHTML='$0';
  col4.appendChild(col4Span);
  //console.log(col4);
  return col4;
}

function createNewItemRow(itemName, itemUnitPrice){

  console.log(itemName);
  console.log(itemUnitPrice);

  var item=document.createElement('div');
  item.setAttribute('class','item');
  console.log(item);
  var newItemName=createItemNode(itemName);
  var newItemCost=createUnitCostNode(itemUnitPrice);
  var newItemQtty=createQuantityNode();
  var newItemTotalCost=createTotalCostNode();
  var newDeleteButton=createDeleteButton();

  item.appendChild(newItemName);
  item.appendChild(newItemCost);
  item.appendChild(newItemQtty);
  item.appendChild(newItemTotalCost);
  item.appendChild(newDeleteButton);

  console.log(item.children);
  console.log(item.firstChild);
  console.log(item.firstElementChild);


  var parentOfItem=document.getElementsByClassName('products')[0];
  parentOfItem.insertBefore(item,document.getElementsByClassName('new-item')[0]);

  console.log(item.parentNode);
  console.log(item.parentElement);

}

function createNewItem(){
   console.log("in function createNewItem");
   var newItemName=document.getElementsByClassName('new-item')[0].
                      querySelector('#new-product-name').value;

   var newItemCost=document.getElementsByClassName('new-item')[0].
                      querySelector('#new-price-per-unit').value;

  console.log(newItemName);
  console.log(newItemCost);
  createNewItemRow(newItemName,newItemCost);

  //se incluye aqui esta funcion para generar nuevos botones activos de delete
  var deleteButtons2 = document.getElementsByClassName('delete');
  console.log(deleteButtons2);
  for(var i = 0; i<deleteButtons2.length ; i++){
    deleteButtons2[i].onclick = deleteItem;
  }

}

window.onload = function(){



  //declaraciones originales
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-button');
  var deleteButtons = document.getElementsByClassName('delete');
  //var calculatePriceButton = document.getElementsByTagName('button')[1];
  console.log("DOM calculatepriceboton: ");
  console.log(calculatePriceButton); //es un elemento DOM
  calculatePriceButton.onclick = getTotalPrice;
  console.log(createItemButton);
  createItemButton.onclick = createNewItem;

  console.log(deleteButtons);

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
