loadTests([
{
  description: "Calculation - High budget",
  starting_list: [
    Comic('medaka box #21', 4.40),
    Comic('wolf children #2', 6.50),
    Comic('aku no hana #4', 4.50)
  ],
  max_price: 1000, 
  expected: [
    1,2,3
  ],
  options: null
},
{
  description: "Calculation - High budget - No Items",
  starting_list: [
  ],
  max_price: 1000, 
  expected: [
  ],
  options: null
}
]
);