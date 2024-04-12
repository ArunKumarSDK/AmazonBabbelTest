pipeline{
  agent any

tools{ NodeJS "nodejs"}
  stages{
    stage('dependencies'){
      steps{
        sh 'npm i'
      }
    }
    stage('e2e tests'){
      steps{
        sh 'npm run cy.run'
    }
    }
    
  }
}
