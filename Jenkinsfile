pipeline{
  agent any
  parameters {
      string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description: "Enter the script path to execute")
      choice(name: 'BROWSER', choices: ['chrome', 'elecron', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
  }
tools {
  nodejs "nodejs"
  }
stages
{
  stage('Building'){
    steps{
      echo "Building the application"
    }
  }
  stage('Testing')
  {
    steps{
      echo "Running tests"
      bat 'npm i'
      bat 'npm i --save-dev cypress-mochawesome-reporter'
      bat 'npm run cy.run -browser ${BROWSER} --spec ${SPEC}'
    }
  }
  stage('Deploying'){
    steps{    
      echo "Deploying the application"
    }
  }
}
 post{
   always{
     publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: '\\cypress\\reports\\html', reportFiles: 'index.html', reportName: 'Cypress Report', reportTitles: '', useWrapperFileDirectly: true])
     echo "Testing is finished"
   }
 }
}
