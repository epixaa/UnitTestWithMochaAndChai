import { expect } from "chai";
import { isOddOrEven } from "./isOddOrEven.js";

describe("isOddOrEven", () => {
  it("should return undefined if the type is different than string", () => {
    //Arrange
    //Act
    const numberType = isOddOrEven(12321);
    //Assert
    expect(numberType).to.be.undefined;
  });
  it("should return undefined if the type is different than string", () => {
    //Arrange
    //Act
    const booleanType = isOddOrEven(true);
    //Assert
    expect(booleanType).to.be.undefined;
  });
  it("should return the text even when the length of string is even", () => {
    //Arrange
    const evenLength = "test";
    //Act
    const result = isOddOrEven(evenLength);
    //Assert
    expect(result).to.equals("even");
  });
  it("should return the odd even when the length of string is even", () => {
    //Arrange
    const oddLength = "tes";
    //Act
    const result = isOddOrEven(oddLength);
    //Assert
    expect(result).to.equals("odd");
  });
});
