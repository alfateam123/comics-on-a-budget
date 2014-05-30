/*
The add/remove/highlight of rows in the items table
will be handled in this js module.
*/

var Table = {

	addRow: function(comicData){
		ComicList.addComic(comicData);
		this.generateTable(false);
	},

	removeRow: function(rowNumber){
	},

	highlightRow: function(rowNumber){
		document.getElementById("comic"+rowNumber).className = 'comic-chosen';
	},

    resetTable: function(){
    	this.generateTable(false);
    },

    generateRow: function(index, comicData){
    	var row = document.createElement("tr");
    	row.id = 'comic'+index;
    	row.className = 'comic-normal';
    	for(key in comicData){
    		var td = document.createElement("td");
    		td.innerHTML = comicData[key];
    		td.id = key+index;
    		row.appendChild(td);
    	}
    	return row;
    },

	generateTable: function(highlight_chosen){
		//cleaning the table
		document.getElementById("comiclist").innerHTML = "";
		document.getElementById("comiclist").className = "comiclist";
		document.getElementById("inputform").className = "inputform-hidden";

        //calculate
		var comics=ComicList.getAllComics(), indexesToHighlight=[];
		if(highlight_chosen){
			indexesToHighlight = ComicList.whatCanIBuy(Number(document.getElementById('maxprice').value));	
		}

		var table = document.createElement("table");

		for (var i = 0; i < comics.length; i++) {
			table.appendChild(this.generateRow(i, comics[i]));
			if(indexesToHighlight.indexOf(i)!=-1)
				this.highlightRow(i);
		};

		document.getElementById("comiclist").appendChild(table);
	}

}