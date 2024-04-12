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
}
}
