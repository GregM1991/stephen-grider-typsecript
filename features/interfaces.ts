interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drinks = {
  color: "brown",
  carbonated: true,
  sugaer: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugaer`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

printSummary(oldCivic);
printSummary(drinks);
