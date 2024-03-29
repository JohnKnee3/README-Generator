// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown.js");

// An array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your projects title? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your projects title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project. (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please describe your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Provide installation instructions. (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide installation instructions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Provide usage information. (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide usage information!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contribution",
      message: "Provide contribution guidelines. (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide contribution guidelines!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "test",
      message: "Provide test instructions. (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide test instructions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Provide your gitHub profile name. (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide your github profile name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Provide your email address. (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide your email address!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "Select a license to use.",
      choices: ["MIT", "Apache", "None"],
    },
  ]);
};

// writes the README
const writeFile = (pageItUp) => {
  console.log("Did we make it?");
  fs.writeFile("./dist/README.md", pageItUp, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(
      "Page created! Check out README.md in the dist directory to see it!"
    );
  });
};

//Call to start the code
promptUser()
  .then((answers) => {
    return generateMarkdown(answers);
  })
  .then((pageContent) => {
    return writeFile(pageContent);
  })
  .catch((err) => {
    console.log(err);
  });

//Notes

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

//9.1.4 Made my first first console log by creating app.js and using gitbash to call it by being in it's directory and calling it with "node app.js" which will then print the console.log string.
//9.1.5 Introduced to const and how you can not update it directly.  But if the const is referencing an array or an object you are allowed to tweak with anything inside of them.
//9.1.6 Introduced let which keeps things functionally scoped but will not mess with globals like var does.  Introduced writing functions with arrows like this const printProfileData = profileDataArr => {};.  Also introduced using arrows to make .forEach for loops like this profileDataArr.forEach(profileItem => console.log(profileItem));.
//9.2.4 Used template literals to pull input data from an array and set each to it's own variable.  Then assigned those variable to the HTML.  Also used the term interpolation which is the act of changing a string to a variable?
//9.2.5 Learned about fs = require('fs') to include the node.js fs module.  Then used the fs.writeFile to create an HTML file on our PC.
//9.2.6 created a new JS to handle the generate HTML function and pasted it in.  I then used mudule.exports = generatePage (the funcs name) to send it out.  Then in the app.js I used const generatePage = require('./src/page-template.js'); to catch it and set it to the var generatePage.
//9.3.4 Used npm init to give my code access to the npm files.   Then selected the inquirer file from there website and installed it using the code npm install inquirer.  We are one step away from using it in app.js.  Lots of good info explaining the basics.
//9.3.5 Made questions with inquirer.prompt and followed it's format.  Then got weird with adding the ability to make the questions again if chosen.  Everything gets console.log'd still.  Very DENSE STUFF.
//9.3.6 Adds Validates to make sue you don't accidentally skip fields.  Also used a when to only display if a previous question returns a true.
//9.4.3 Introduces object destructuring which is how to pull things from an by name instead of location like with array destructruing.  Also deep dives on Spread Operator and Rest Operator.
//9.4.4 Adds the newly dustructured data const { projects, about, ...header } = templateData; into the HTML like so ${header.name}.  Then applied it to the HTML with fs.write.File.
//9.4.5 Adds a function that checks if about section was created and then if yes creates an HTML section for it.  Then in the HTML we call this function.
//9.4.6 Introduction to .Map and .Filter.  Used .filter to find which array spot selected feature or not feature and then used .map to get the data for each array in the object and apply it to the HTML.  Will need to read this module again, huge refractor involved.
//9.5.3 Met the fs.copyFile to move the CSS from the root to the dist folder.  Made a dist folder to store the end product and changed app.js to send things to the dist folder.  Mad refactoring yet again.  May need to read this.
//9.5.4 Created our first promise to write the page in the newly created util folder.  Doesn't function yet, still waiting for it's call.
//9.5.5 Created our second promise this time for fs.copyFile.  Still waiting all the call, both 9.5.4 and 9.5.5 are in the new generate-site.js
//9.5.6 Added the calls to look like this module.exports = { writeFile, copyFile }; in the generate-sire.js and at the top of the app.js added this ogject destructuring const { writeFile, copyFile } = require("./utils/generate-site.js"); to grab them and use them here.
