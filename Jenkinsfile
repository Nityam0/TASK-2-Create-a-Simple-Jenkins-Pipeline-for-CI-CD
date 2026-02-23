pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t simple-node-app .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run --rm simple-node-app npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop simple-container || true
                docker rm simple-container || true
                docker run -d -p 3000:3000 --restart always --name simple-container simple-node-app
                '''
            }
        }
    }
}
