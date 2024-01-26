import { expect } from "chai";
import { sum } from "./sumNumbers.js";

describe("Sum numbers", () => {
  it("should return 0 if an empty array is given", () => {
    //Arrange
    const inputArray = [];

    //Act
    const result = sum(inputArray);

    //Assert
    expect(result).to.equals(0);
  });

  it("should return the single element as a sum if a single element array is given", () => {
    //Arrange
    const inputArray = [33];

    //Act
    const result = sum(inputArray);

    //Assert
    expect(result).to.equals(33);
  });
  it("should return the the total sum of an array if a multi value array is given", () => {
    //Arrange
    const inputArray = [12, 3, 1];

    //Act
    const result = sum(inputArray);

    //Assert
    expect(result).to.equals(16);
  });
});
