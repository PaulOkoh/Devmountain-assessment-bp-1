// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Implementation
// Design
// Maintain
// Analysis of Requirements
// Testing & Integration
// Planning
/**
 * Steps in order:
 * Planning
 * Analysis of Requirements
 * Design
 * Implementation
 * Testing & Integration
 * Maintain
 */

let sdlcSteps = [
  "Planning",
  "Analysis of Requirements",
  "Design",
  "Implementation",
  "Testing & Integration",
  "Maintain",
];

console.log(sdlcSteps);

//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning =
  "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added.";
console.log(planning);

const analysisAndRequirements =
  "In this step,user requirements are analyzed and documented";

console.log(analysisAndRequirements);

const design =
  "A design is developed to provide solutions to that will satisfy the requirements";

const implementation =
  "Code is constructed and reviewed by the team of developers in order to catch any bugs or problems early";

const testingAndIntegration =
  "Tests are performed with preplanned test cases or scenarios";

const maintain =
  "In this phase, the project is managed and measured to maintain quality and delivery througout the lifecyle of the application";
console.log(maintain);
