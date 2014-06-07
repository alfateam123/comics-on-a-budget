/*
The add/remove/highlight of rows in the items table
will be handled in this js module.
*/

var Table = function(){
	this.comiclist = new ComicList();
}

Table.prototype.addRow = function(comicData){
	this.comiclist.addComic(comicData);
	this.generateTable(false);
}

Table.prototype.removeRow = function(rowNumber){
	this.comiclist.removeComicByIndex(rowNumber-1);
	this.generateTable(false);
}

Table.prototype.resetTable = function(){
	this.generateTable(false);
}

Table.prototype.toggleRowSelection = function(index){
	this.comiclist.toggleComicSelectionByIndex(index-1);
	//this.generateTable(false);
}

Table.prototype.generateRow = function(index, comicData){
	var row = document.createElement("tr");
	row.id = 'comic'+index;
	//row.className =comicData.selected?"comic-selected":'comic-normal';
	for(key in comicData){
		var td = document.createElement("td");
		if(key === 'selected'){
			td.innerHTML = "<input type=checkbox onclick='onSelectedComicClick("+index+")' />";
			td.children[0].checked = comicData.selected;
		}
		else
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
		table.className = 'table table-bordered';
		table.appendChild(this.generateHeader());
		for (var i = 0; i < comics.length; i++) {
			var row_ = this.generateRow(i+1, comics[i]);
			if(indexesToHighlight.indexOf(i+1) != -1)
				row_.className = 'comic-selected';
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
