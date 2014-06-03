/*
Every event that can be raised from the view (index.html, CoaB is a single page app)
will be handled in this file.
*/

var table = new Table();

var onAddItemClick = function(){
  document.getElementById("comiclist").className='comiclist-hidden';
  document.getElementById("inputform").className='inputform';
}

var onRemoveItemClick = function(itempos){
  alert("wanna remove the item "+itempos);
}

var onHighligthItemsClick = function(){
  alert("starting calculation. why not going on wikipedia and reading about Turing machines?");
}

var onInsertComicClick = function(){
  console.log("inserting a new comic!");
  var newComicName = document.getElementById("comicname").value;
  var newComicPrice = document.getElementById("comicprice").value;
  var newComic = new Comic(newComicName, Number(newComicPrice));
  console.log("this is the new comic!", newComic);
  table.addRow(newComic);
}

var onInsertBackClick = function(){
  document.getElementById("comiclist").className = 'table-responsive';
  document.getElementById("inputform").className = 'inputform-hidden';
}