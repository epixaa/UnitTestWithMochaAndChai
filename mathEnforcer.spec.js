import { expect } from "chai";
import { mathEnforcer } from "./mathEnforcer.js";

describe("mathEnforcer", () => {
  describe("addFive", () => {
    it("should return undefined when pass string as input", () => {
      //Arrange
      const params = "someString";
      //Act
      const result = mathEnforcer.addFive(params);
      //Assert
      expect(result).to.be.undefined;
    });
    it("should return correct result with a non-number parameter", () => {
      //Arrange
      const params = "5";
      //Act
      const result = mathEnforcer.addFive(params);
      //Assert
      expect(result).to.be.undefined;
    });
    it("should return correct result with a non-number parameter", () => {
      //Arrange
      const params = true;
      //Act
      const result = mathEnforcer.addFive(params);
      //Assert
      expect(result).to.be.undefined;
    });
    it("should return correct result with a non-number parameter", () => {
      //Arrange
      const params = undefined;
      //Act
      const result = mathEnforcer.addFive(params);
      //Assert
      expect(result).to.be.undefined;
    });
    it("should return correct result with a number parameter", () => {
      //Arrange
      const params = 5;
      //Act
      const result = mathEnforcer.addFive(params);
      //Assert
      expect(result).to.equals(10);
    });
    it("should return correct result with a number parameter", () => {
      //Arrange
      const params = 5.2;
      //Act
      const result = mathEnforcer.addFive(params);
      //Assert
      expect(result).to.be.closeTo(10.2, 0.01);
    });
    it("should return correct result with a negative number parameter", () => {
      //Arrange
      const params = -5;
      //Act
      const result = mathEnforcer.addFive(params);
      //Assert
      expect(result).to.equals(0);
    });
  });

  describe("subtractTen", () => {
    it("should return correct result with a non-number parameter", () => {
      //Arrange
      const params = "5";
      //Act
      const result = mathEnforcer.subtractTen(params);
      //Assert
      expect(result).to.be.undefined;
    });
    it("should return correct result with a non-number parameter", () => {
      //Arrange
      const params = undefined;
      //Act
      const result = mathEnforcer.subtractTen(params);
      //Assert
      expect(result).to.be.undefined;
    });
    it("should return correct result with a number parameter", () => {
      //Arrange
      const params = 15;
      //Act
      const result = mathEnforcer.subtractTen(params);
      //Assert
      expect(result).to.equals(5);
    });
    it("should return correct result with a number parameter", () => {
      //Arrange
      const params = 1.01;
      //Act
      const result = mathEnforcer.subtractTen(params);
      //Assert
      expect(result).to.be.closeTo(-8.99, 0.01);
    });
    it("should return correct result with a number parameter", () => {
      //Arrange
      const params = 1.0000001;
      //Act
      const result = mathEnforcer.subtractTen(params);
      //Assert
      expect(result).to.be.closeTo(-8.99, 0.01);
    });
    it("should return correct result with a number parameter", () => {
      //Arrange
      const params = -5;
      //Act
      const result = mathEnforcer.subtractTen(params);
      //Assert
      expect(result).to.equals(-15);
    });
  });
  describe("sum", () => {
    it("should return correct result with a non-number parameter", () => {
      //Arrange
      const params = ("hello", 5);
      //Act
      const result = mathEnforcer.sum(params);
      //Assert
      expect(result).to.be.undefined;
    });
    it("should return correct result with a non-number parameter", () => {
      //Arrange
      const params = (true, 5);
      //Act
      const result = mathEnforcer.sum(params);
      //Assert
      expect(result).to.be.undefined;
    });
    it("should return correct result with a non-number parameter", () => {
      //Arrange
      const params = (5, "hello");
      //Act
      const result = mathEnforcer.sum(params);
      //Assert
      expect(result).to.be.undefined;
    });
    it("should return correct result with a number parameter", () => {
      //Arrange
      const params = 5;
      const params2 = 10;
      //Act
      const result = mathEnforcer.sum(params, params2);
      //Assert
      expect(result).to.equals(15);
    });
    it("should return correct result with a number parameter", () => {
      //Arrange
      const params = 5.5;
      const params2 = 10.5;
      //Act
      const result = mathEnforcer.sum(params, params2);
      //Assert
      expect(result).to.equals(16);
    });
    it("should return correct result with a number parameter", () => {
      //Arrange
      const params = -5;
      const params2 = -10;
      //Act
      const result = mathEnforcer.sum(params, params2);
      //Assert
      expect(result).to.equals(-15);
    });
  });
});
