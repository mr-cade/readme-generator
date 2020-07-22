// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.license}

## Description
${data.description}

## Table of Contents
1. [Instructions](#Instructions)
2. [Contributing](#Contribution)
3. [Testing](#Testing)
4. [Questions](#Questions)
    
### Instructions
* Installation: ${data.install}
* Usage: ${data.usage}

### Contribution 
\`\`\`
${data.contributing}
\`\`\`

### Testing 
\`\`\`
${data.tests}
\`\`\`

### Questions 
\`\`\`
Please contact me via email at <${data.email}>
View source code on my github at [${data.github}](https://github.com/${data.github})
\`\`\`
`;
}
// sends function to index.js
module.exports = generateMarkdown;
