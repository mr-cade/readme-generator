// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
    
### Instructions for ${data.title}
* Installation: ${data.install}
* Usage: ${data.usage}

### License for ${data.title}
\`\`\`
Type of license: ${data.license}
\`\`\`

### Contribution Guidelines
\`\`\`
${data.contributing}
\`\`\`

### Testing Details
\`\`\`
${data.tests}
\`\`\`

### For Questions
\`\`\`
Please contact me via email at ${data.email}
View source code on my github at ${data.github}
\`\`\`
`;
}

module.exports = generateMarkdown;
