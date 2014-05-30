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
  var newComic = Comic(newComicName, Number(newComicPrice));
  console.log("this is the new comic!", newComic);
  Table.addRow(newComic);
}