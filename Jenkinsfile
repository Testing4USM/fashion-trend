pipeline {
    agent any
    environment {
        CHROME_BIN = '/usr/bin/google-chrome'
        CHROME_DRIVER = '/usr/local/bin/chromedriver'
    }
    tools {
        nodejs "NodeJS" 
    }
    stages {
        stage('Setup Environment') {
            steps {
                script {
                    if (isUnix()) {
                        sh '''
                            # Ensure wget is installed
                            if ! [ -x "$(command -v wget)" ]; then
                                echo "wget not found, installing wget"
                                brew install wget
                            fi

                            # Ensure curl is installed
                            if ! [ -x "$(command -v curl)" ]; then
                                echo "curl not found, installing curl"
                                brew install curl
                            fi

                            # Install Chrome
                            if ! [ -x "$(command -v google-chrome)" ]; then
                                echo "Installing Google Chrome"
                                brew install --cask google-chrome
                            fi

                            # Install ChromeDriver
                            CHROME_DRIVER_VERSION=$(curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE)
                            wget -N http://chromedriver.storage.googleapis.com/$CHROME_DRIVER_VERSION/chromedriver_mac64.zip
                            unzip chromedriver_mac64.zip -d /usr/local/bin
                            rm chromedriver_mac64.zip
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
}

