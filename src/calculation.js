/*
The calculation functions are in this file.
*/

var Comic = function(comic_name, comic_price, selected){
    //return {name: comic_name, price: comic_price};
    this.name = comic_name;
    this.price = comic_price;
    this.selected = typeof(selected)!=='undefined' ? selected : false;
};

var ComicList =function(comics){
    this.comics = comics || [];
};

ComicList.prototype.addRawComic = function(name, price) {
    this.comics.push(new Comic(name, price));
};

ComicList.prototype.addComic = function(newcomic){
    this.comics.push(newcomic);
};

ComicList.prototype.removeComic = function(name){
    this.comics = this.comics.filter(function(comic){return comic.name !== name});
};

ComicList.prototype.removeComicByIndex = function(indexToRemove){
    this.comics = this.comics.filter(function(comic, index){return indexToRemove !== index});
};

ComicList.prototype.getAllComics = function(){
    return this.comics;
};

ComicList.prototype.toggleComicSelectionByIndex = function(indexToSelect){
    this.comics[indexToSelect].selected = !this.comics[indexToSelect].selected;
}

ComicList.prototype.totalPrice = function() {
    return this.comics.reduce(function(sum_, comic){return sum_+comic.price;}, 0);
};

ComicList.prototype.selectedPrice = function() {
    return this.comics.reduce(function(sum_, comic){return sum_+(comic.selected?comic.price:0);}, 0);
};

ComicList.prototype.whatICanBuy = function(maxPrice, options){
    //RETURNS: a list of indexes [0, comics.length)
    if(!options){
        //retrieve options
        return this.whatICanBuy(
            maxPrice,
            {
                policy: "nopolicy"
            }
            );
    }

    var comicsWithIndex = function(comics){
        var cwi = new Array();
        for (var i = 0; i < comics.length; i++) {
            cwi.push( {index: i+1, comic: comics[i]} );
        };
        //console.log("[comicsWithIndex]", cwi);
        return cwi;
    }

    var comicIndexes = new Array();
    var clist = comicsWithIndex(this.comics);
    if(options && options.policy){
        if(options.policy === "lowerpricefirst")
            clist.sort(function(a_comic, b_comic){
                return a_comic.comic.price - b_comic.comic.price;
            });
        else if(options.policy === "higherpricefirst")
            clist.sort(function(a_comic, b_comic){
                return b_comic.comic.price - a_comic.comic.price;
            });
    }

    //console.log("[whatICanBuy] clist = ", clist)
    for (var i = 0; i < clist.length; i++) {
        //console.log("[whatICanBuy] clist["+i+"]", clist[i]);
        if(maxPrice - clist[i].comic.price >= 0){
            maxPrice -= clist[i].comic.price;
            comicIndexes.push(clist[i].index);
            //console.log("[whatICanBuy] oh, we added a comic!", clist[i], maxPrice);
        }
    };

    //console.log("[whatICanBuy] comicIndexes", comicIndexes);
    return comicIndexes;
}

