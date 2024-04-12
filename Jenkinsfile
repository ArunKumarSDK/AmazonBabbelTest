pipeline{
  agent any

tools {nodejs "nodejs"}
  stages{
    stage('dependencies'){
      steps{
        bat 'npm i'
      }
    }
    stage('e2e tests'){
      steps{
        bat 'npm run cy.run'
    }
    }
    
  }
}
