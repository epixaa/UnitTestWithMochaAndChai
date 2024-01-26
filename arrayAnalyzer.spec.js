import { expect } from "chai";
import { analyzeArray } from "./arrayAnalyzer.js";

describe("analyzeArray", () => {
  it("should return undefined when pass non-array as input", () => {
    //Arrange
    const nonArrayInput = "someString";
    //Act
    const result = analyzeArray(nonArrayInput);
    //Assert
    expect(result).to.be.undefined;
  });
  it("should return undefined when pass empty array as input", () => {
    //Arrange
    const emptyArrayInput = [];
    //Act
    const result = analyzeArray(emptyArrayInput);
    //Assert
    expect(result).to.be.undefined;
  });
  it("should return correct value when pass array with different numbers as input", () => {
    //Arrange
    const ArrayInput = [3, 5, -2, 4, 1];
    //Act
    const result = analyzeArray(ArrayInput);
    //Assert
    expect(result).to.deep.equal({ min: -2, max: 5, length: 5 });
  });
  it("should return correct value when pass array with single element as input", () => {
    //Arrange
    const ArrayInput = [3];
    //Act
    const result = analyzeArray(ArrayInput);
    //Assert
    expect(result).to.deep.equal({ min: 3, max: 3, length: 1 });
  });
  it("should return correct value when pass array with same elements as input", () => {
    //Arrange
    const ArrayInput = [7, 7, 7];
    //Act
    const result = analyzeArray(ArrayInput);
    //Assert
    expect(result).to.deep.equal({ min: 7, max: 7, length: 3 });
  });
});
