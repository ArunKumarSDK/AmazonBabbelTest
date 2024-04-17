pipeline{
  agent any
  parameters {
      string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description: "Enter the script path to execute")
      choice(name: 'BROWSER', choices: ['chrome', 'elecron', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
  }
  
 options {
    ansiColor('xterm')
 }  
tools {
  nodejs "nodejs"
  }
stages
{
  stage('Building){
      echo '--------****Building the application****-----------'
  }
  stage('Testing')
  {
    steps{
      echo '--------****Installing & Initializing NPM****-----------'
      bat 'npm i'
      bat 'npm run cy.run -browser ${BROWSER} --spec ${SPEC}'
    }
  }
  stage('Deploying){
      echo '--------****Deploying the application****-----------'
  }
 post{
   always{
     publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
   }
 }
}
}
