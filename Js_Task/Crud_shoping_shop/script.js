
let card_butons = document.getElementsByClassName('btn btn-primary')
let table_data = document.getElementsByTagName('tbody')[0];
let card_inp = document.getElementsByClassName( 'no');
let delet_btn = document.getElementsByClassName('btn btn-danger');

for(let i = 0; i < card_butons.length; i++){
card_butons[i].addEventListener('click',addcard)
}
function addcard(event){
let table_item_container = document.createElement('tr');
let btn = event.target;
let tabel_main_parent = btn.parentElement.parentElement;
let btn_parent = btn.parentElement;
let table_item_img = tabel_main_parent.children[0].src;
let table_item_name = btn_parent.children[0].innerHTML;
let table_item_price = btn_parent.children[1].innerText;
table_item_container.innerHTML=`
<td><input type="checkbox"></td>
<td class='table-img'><img src="${table_item_img}" class="rounded rounded-circle" style="width: 60px; height: 60px; alt=""</td>
<h4 ${table_item_name}></h4>
<td id="Total" class="item-price"><h4>${table_item_price}</h4></td>
<td><input type="number" id="no" value = '1'></td>
<td class="total-price"><h4>${table_item_price}</h4></td>
<td></td>
<td><button class="btn btn-danger" id="fbtn">Remove</button></td>
`
table_data.append(table_item_container)

/*Table in inputa Tag in loop*/
for(let i=0;i<card_inp.length;i++)
{
card_inp[i].addEventListener('change',totalCost)
}

/*Remove button loop*/
for(let i = 0; i < delet_btn.length; i++){
delet_btn[i].addEventListener('click',remove)
}
}
/*Tabal inputa Tag in data*/
function totalCost(event){
let qty = event.target;
qtyparent = qty.parentElement.parentElement;
itemPrice = qtyparent.getElementsByClassName('item-price')[0];
totalPrice = qtyparent.getElementsByClassNamea('total-price')[0];
itemPrice = itemPrice.innerText.replace('$',' ');
totalPrice.children[0].innerText = '$' + qty.value * itemPrice;
}
/*Remove Table data*/
function remove(event){
delet_btns = event.target;
delete_parent_btn = delet_btns.parentElement.parentElement;
delete_parent_btn.remove();
}