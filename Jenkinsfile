pipeline {
    agent {
        docker {
            image 'node:18-alpine' 
            args '-u root:root' 
        }
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
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: "aws credentials",
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
                ]]) {
                    sh "aws s3 sync build/ s3://weatherapplicationbyocean"
                }
                
            }
        }
    }
}
