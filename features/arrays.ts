const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with Inference when extracting values
const carharhar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map' and others in regards to autocomplete
carMakers.map((car: string) => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), "2030-10-10"];
