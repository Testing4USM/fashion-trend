pipeline {
    agent any
    environment {
        CHROME_BIN = '/usr/bin/google-chrome'
        CHROME_DRIVER = '/usr/local/bin/chromedriver'
    }
    tools {
        nodejs "NodeJS"  // Aquí utiliza el nombre que configuraste para la instalación de Node.js
    }
    stages {
        stage('Setup Environment') {
            steps {
                script {
                    if (isUnix()) {
                        sh '''
                            # Install Chrome
                            wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
                            echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | sudo tee /etc/apt/sources.list.d/google-chrome.list
                            sudo apt-get update
                            sudo apt-get install -y google-chrome-stable

                            # Install ChromeDriver
                            CHROME_DRIVER_VERSION=$(curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE)
                            wget -N http://chromedriver.storage.googleapis.com/$CHROME_DRIVER_VERSION/chromedriver_linux64.zip
                            unzip chromedriver_linux64.zip -d /usr/local/bin
                            rm chromedriver_linux64.zip
                        '''
                    }
                }
            }
        }
        stage('Checkout') {
            steps {
                git 'https://github.com/Testing4USM/fashion-trend.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm run test'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**/results/*', allowEmptyArchive: true
            junit 'results/**/*.xml'
        }
        failure {
            mail to: 'you@example.com',
                 subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                 body: "Something is wrong with ${env.JOB_NAME}."
        }
    }
}
