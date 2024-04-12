pipeline{
  
  agent any

tools {
  nodejs "nodejs"
  }
stages
{
  stage('Build')
  {
    steps{
      echo 'Installing & Initializing NPM '
      bat 'npm i'
    }
  }
  stage('Test on Electron')
  {
    steps{
      echo 'Executing tests on Electron browser'
      bat 'npm run cy.electron'
    }
  }
    stage('Test on Chrome')
  {
    steps{
      echo 'Executing tests on Chrome browser'
      bat 'npm run cy.chrome'
    }
  }
}
}
