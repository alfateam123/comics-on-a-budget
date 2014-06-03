/*
{
  description: "Calculation - \"Lower price first\" policy",
  starting_list: [
    Comic('medaka box #21', 4.40),
    Comic('wolf children #2', 6.50),
    Comic('aku no hana #4', 4.50)
  ],
  max_price: 15, 
  expected: [
      1, 3
  ],
  options: {"policy": "lowerpricefirst"}
}*/
test( "Calculation - Lower price first policy", function() { 
  //test data
  var comiclist = new ComicList();
  comiclist.addComic(new Comic('medaka box #21', 4.40));
  comiclist.addComic(new Comic('wolf children #2', 6.50));
  comiclist.addComic(new Comic('aku no hana #4', 4.50));
  var max_price = 15;
  var options = {policy: "lowerpricefirst"};

  //test it!
  deepEqual(
    [1, 3],
    comiclist.whatICanBuy(max_price)
  );
});

/*
{
  description: "Calculation - \"Lower price first\" policy - No items " ,
  starting_list: [
  ],
  max_price: 15, 
  expected: [
  ],
  options: {"policy": "lowerpricefirst"}
}*/
test( "Calculation - Lower price first policy", function() { 
  //test data
  var comiclist = new ComicList();
  var max_price = 15;
  var options = {policy: "lowerpricefirst"};

  //test it!
  deepEqual(
    [],
    comiclist.whatICanBuy(max_price)
  );
});

/*
{
  description: "Calculation - \"Lower price first\" policy - 2high4me " ,
  starting_list: [
    Comic('Complete Evangelion Box', 40.40),
    Comic('The quotable Sandman', 60.50),
    Comic('Ctrl+T Inio Asano artbook', 25.50)
  ],
  max_price: 15, 
  expected: [
  ],
  options: {"policy": "lowerpricefirst"}
}
*/
test( "Calculation - Lower price first policy", function() { 
  //test data
  var comiclist = new ComicList();
  comiclist.addComic(new Comic('Complete Evangelion Box', 40.40));
  comiclist.addComic(new Comic('The Quotable Sandman', 60.50));
  comiclist.addComic(new Comic('Ctrl+T Inio Asano artbook', 25.50));
  var max_price = 15;
  var options = {policy: "lowerpricefirst"};

  //test it!
  deepEqual(
    [],
    comiclist.whatICanBuy(max_price)
  );
});