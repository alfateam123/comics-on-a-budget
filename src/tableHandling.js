/*
The add/remove/highlight of rows in the items table
will be handled in this js module.
*/

HTMLTableElement.prototype.replaceRow = function(index, newrow) {
	this.deleteRow(index);
	this.insertRow(index, newrow);
};

var Table = function(){
	this.comiclist = new ComicList();
}

Table.prototype.addRow = function(comicData){
	this.comiclist.addComic(comicData);
	var ctable = document.getElementById("comictable");
	if(ctable){
		var newrow = this.generateRow(
			ctable.childNodes.length,
			comicData
			);
		ctable.appendChild(newrow);
	}
	else{
		this.generateTable(false);
	}
}

Table.prototype.removeRow = function(rowNumber){
	this.comiclist.removeComicByIndex(rowNumber-1);
	var ctable = document.getElementById("comictable");
	if(ctable.childNodes.length > 2){
		ctable.deleteRow(rowNumber);
		/*for(var i=rowNumber; i<ctable.childNodes.length; i++){
			ctable.rows[i].id='comic'+(i);
			for(var j=0; j<ctable.rows[i].childNodes.length; j++){
				if(j != (ctable.rows[i].childNodes.length-1) )
					ctable.rows[i].childNodes[j].id = (["name", "price", "necessary"])[j]+(i);
				else
					ctable.rows[i].childNodes[j].childNodes[0].onclick = "onRemoveItemClick("+(i)+")";
			}
		}*/
		for(var i=rowNumber-1; i<this.comiclist.getAllComics().length; i++){
			/*ctable.rows[i] = this.generateTable(
				i-1,
				this.comiclist.getAllComics()[i-1]
				);
			*/
			ctable.replaceRow(i, this.generateTable(i-1, this.comiclist.getAllComics()[i-1]));
		}
	}
	else{
		//just for the "no comics!!!1!!!" items
		this.generateTable(false);
	}
}

Table.prototype.resetTable = function(){
	this.generateTable(false);
}

Table.prototype.toggleRowSelection = function(index){
	this.comiclist.toggleComicSelectionByIndex(index-1);
	this.generateTable(false);
}

Table.prototype.generateRow = function(index, comicData){
	var row = document.createElement("tr");
	row.id = 'comic'+index;
	row.className = comicData.necessary?"comic-selected":'comic-normal';
	for(key in comicData){
		var td = document.createElement("td");
		/*if(key === 'necessary')
			td.innerHTML = "<input type=checkbox onclick='onNecessaryClick("+index+")' checked="+(comicData.necessary)+" />";
		else*/
			td.innerHTML = comicData[key];
		td.id = key+index;
		row.appendChild(td);
	}
	//adding the "remove row" button
	if(!isNaN(index)){
		var deleteItButton = document.createElement("td");
		deleteItButton.innerHTML = "<input class=\"btn btn-default\" type=\"button\" value=\"&#10006;\" onclick=\"onRemoveItemClick("+index+");\" />";
		row.appendChild(deleteItButton);
	}
	return row;
}

Table.prototype.generateHeader = function(){
	var thead = document.createElement("thead");
	thead.appendChild(this.generateRow('head',
		{'Comic': '<b>Comic</b>', "Price": "<b>Price</b>", "Necessary": "<b>Necessary</b>", "Remove": "<b>Remove</b>"}
		)
	)
	return thead;
}

Table.prototype.generateTable = function(highlight_whattobuy){
	//cleaning the table
	document.getElementById("comiclist").innerHTML = "";

    //calculate
	var comics=this.comiclist.getAllComics(), indexesToHighlight=[];
	var maxprice = Number(document.getElementById('maxprice').value); 
	if(highlight_whattobuy){
		indexesToHighlight = this.comiclist.whatICanBuy(maxprice);	
		console.log("highlight_whattobuy, indexesToHighlight:", indexesToHighlight);
	}
	if(this.comiclist.getAllComics().length){
		var table = document.createElement("table");
		table.id = 'comictable';
		table.className = 'table table-bordered';
		table.appendChild(this.generateHeader());
		for (var i = 0; i < comics.length; i++) {
			var row_ = this.generateRow(i+1, comics[i]);
			console.log(row_);
			table.appendChild(row_);
		}
	}
	else
	{
		var table= document.createElement("p");
		table.style = 'text-align: center';
		table.innerHTML = "No comics here! <br />Insert a new one by clicking \"New Comic\" button!";
	}

	document.getElementById("comiclist").appendChild(table);
}
