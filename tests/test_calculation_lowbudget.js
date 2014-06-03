loadTests([
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
);