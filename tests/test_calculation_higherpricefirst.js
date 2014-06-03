loadTests([
{
  description: "Calculation - \"Higher price first\" policy",
  starting_list: [
    Comic('medaka box #21', 4.40),
    Comic('wolf children #2', 6.50),
    Comic('aku no hana #4', 4.50)
  ],
  max_price: 15, 
  expected: [
      3, 2
  ], //we don't care about the order 
  options: {"policy": "higherpricefirst"}
},
{
  description: "Calculation - \"Higher price first\" policy - No items " ,
  starting_list: [
  ],
  max_price: 15, 
  expected: [
  ],
  options: {"policy": "higherpricefirst"}
},
{
  description: "Calculation - \"Higher price first\" policy - 2high4me " ,
  starting_list: [
    Comic('Complete Evangelion Box', 40.40),
    Comic('The quotable Sandman', 60.50),
    Comic('Ctrl+T Inio Asano artbook', 25.50)
  ],
  max_price: 15, 
  expected: [
  ],
  options: {"policy": "higherpricefirst"}
}
]
);