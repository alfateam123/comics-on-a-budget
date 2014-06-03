test( "Calculation - Low Budget", function() { 
  //test data
  var comiclist = new ComicList();
  comiclist.addComic(new Comic('medaka box #21', 4.40));
  comiclist.addComic(new Comic('wolf children #2', 6.50));
  comiclist.addComic(new Comic('aku no hana #4', 4.50));
  //testing what you can buy if you can't even buy a Goleador.
  var max_price = 0.1; 

  //test it!
  deepEqual(
    comiclist.whatICanBuy(max_price),
    new Array(),
    "even if no policy if specified, you can't afford a comic."
  );
});

test( "Calculation - Low Budget - No Items", function() {
  //test data
  var comiclist = new ComicList();
  var max_price = 0.1;

  //test it!
  deepEqual(
    comiclist.whatICanBuy(max_price),
    comiclist.comics
  );
});

test( "Calculation - Low Budget - Lower first", function() {
  //test data
  var comiclist = new ComicList();
  comiclist.addComic(new Comic('medaka box #21', 4.40));
  comiclist.addComic(new Comic('wolf children #2', 6.50));
  comiclist.addComic(new Comic('aku no hana #4', 4.50));
  var max_price = 0.1;
  var options = {policy: "lowerpricefirst"};

  //test it!
  deepEqual(
    comiclist.whatICanBuy(max_price, options),
    new Array()
  );
});

test( "Calculation - Low Budget - Higher first", function() {
  //test data
  var comiclist = new ComicList();
  comiclist.addComic(new Comic('medaka box #21', 4.40));
  comiclist.addComic(new Comic('wolf children #2', 6.50));
  comiclist.addComic(new Comic('aku no hana #4', 4.50));
  var max_price = 0.1;
  var options = {policy: "higherpricefirst"};

  //test it!
  deepEqual(
    comiclist.whatICanBuy(max_price, options),
    new Array()
  );
});

/*loadTests([
{
  description: "Calculation - Little budget",
  starting_list: [
    Comic('medaka box #21', 4.40),
    Comic('wolf children #2', 6.50),
    Comic('aku no hana #4', 4.50)
  ],
  max_price: 0.1, 
  expected: [
  ],
  options: null
},
{
  description: "Calculation - Little budget - No items",
  starting_list: [
  ],
  max_price: 0.1, 
  expected: [
  ],
  options: null
}
]
);*/