import { expect } from "chai";
import { lookupChar } from "./charLookUp.js";

describe("lookupChar", () => {
  it("should return undefined if first parameter is not a string or second parameter is not a number", () => {
    //Arrange
    //Act
    const exitCondition1 = lookupChar(321312, 5);
    //Assert
    expect(exitCondition1).to.be.undefined;
  });
  it("should return error if both parameters are correct type, but the value of index is incorrect", () => {
    //Arrange
    //Act
    const exitCondition2 = lookupChar("test", 5);
    //Assert
    expect(exitCondition2).to.equals("Incorrect index");
  });
  it("should return error if index are floating-point", () => {
    //Arrange
    //Act
    const exitCondition3 = lookupChar("test", 5.2);
    //Assert
    expect(exitCondition3).to.be.undefined;
  });
  it("should return error if index are boolean", () => {
    //Arrange
    //Act
    const exitCondition3 = lookupChar("abc", true);
    //Assert
    expect(exitCondition3).to.be.undefined;
  });
  it("should return error if index are string", () => {
    //Arrange
    //Act
    const exitCondition3 = lookupChar("abc", "0");
    //Assert
    expect(exitCondition3).to.be.undefined;
  });
  it("should return error if index are negative number", () => {
    //Arrange
    //Act
    const exitCondition3 = lookupChar("test", -2);
    //Assert
    expect(exitCondition3).to.equals("Incorrect index");
  });
  it("should return correct character at the specified index", () => {
    //Arrange
    //Act
    const exitCondition4 = lookupChar("test", 3);
    //Assert
    expect(exitCondition4).to.equals("t");
  });
  it("should return correct character at the specified index", () => {
    //Arrange
    //Act
    const exitCondition4 = lookupChar("test", 2);
    //Assert
    expect(exitCondition4).to.equals("s");
  });
});
