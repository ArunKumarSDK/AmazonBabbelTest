pipeline{
  agent any

tools {
  nodejs "nodejs"
  }
stages
{
  stage('dependencies')
  {
    steps{
      bat 'npm i'
    }
  }
  stage('Running test on Electron')
  {
    steps{
      bat 'npm run cy.electron'
    }
  }
  stage('Running test on Chrome')
  {
    steps{
      bat 'npm run cy.chrome'
    }
  }
  stage('Running test on Firefox')
  {
    steps{
      bat 'npm run cy.firefox'
    }
  } 
}
}
