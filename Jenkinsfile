pipeline{
  agent any

tools(nodejs "nodejs")
  stages{
    stage('dependencies'){
      steps{
        sh 'npm i'
      }
    }
  stages{
    stage('e2e tests'){
      steps{
        sh 'npm run cy.run'
      }
    }    
    
  }
}
