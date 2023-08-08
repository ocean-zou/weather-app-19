pipeline {
    agent {
        docker {
            image 'node:18' 
            args '-u root:root' 
        }
    }
    environment{
        AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
    }
    
    stages {
        stage('install') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Build') { 
            steps {
                sh 'npm run build' 
            }
        }
        stage('Setup AWS CLI') {
            steps {
                
                sh '''
                apk add --update python3 py3-pip
                pip3 install awscli
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh "aws s3 sync build/ s3://weatherapplicationbyocean"
            }
        }
    }
}