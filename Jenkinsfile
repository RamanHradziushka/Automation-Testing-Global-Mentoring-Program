pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                withSonarQubeEnv('SonarQube')
                sh 'sonar-scanner'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('WDIO Tests') {
            steps {
                sh 'npm run api'
            }
        }
        stage('Cucumber Tests') {
            steps {
                sh 'npm run api'
            }
        }
        stage('API Tests') {
            steps {
                sh 'npm run api'
            }
        }
    }

    triggers {
        cron('H H * * *')
        pollSCM('H/5 * * * *')
    }
}