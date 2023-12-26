// app.js - Main file importing shape functions

// Importing shape module
import * as shapes from "./shape.js";

// Using the imported functions
const circleArea = shapes.circle.calculateCircleArea(5);
console.log("Circle Area:", circleArea); // Outputs: Circle Area: <calculated value>

const squareArea = shapes.square.calculateSquareArea(4);
console.log("Square Area:", squareArea); // Outputs: Square Area: <calculated value>

const triangleArea = shapes.triangle.calculateTriangleArea(3, 6);
console.log("Triangle Area:", triangleArea); // Outputs: Triangle Area: <calculated value>
