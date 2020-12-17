// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## Description :
    ${data.description}

  ## Table of Contents :
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Qeustions](#qeustions)
  
  ## Installation :
   ${data.installation}

   ## Usage :
    ${data.usage}

  ## License :
  This application is covered by the ${data.license} license.
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## Contributing :
   ${data.contributing}

  ## Tests :
   ${data.tests}
   
  ## Questions :
   ${data.questions} 
   
   - Find me on GitHub: [${data.username}](https://github.com/${data.username})

   - Email me if you have any questions: [${data.email}](https://moussanm2014@gmail.com)

   _This README was generated with ❤️ by [Professional-README-generator](https://github.com/Mnm1506/Professional-README-generator)_
  `;
}

module.exports = generateMarkdown;