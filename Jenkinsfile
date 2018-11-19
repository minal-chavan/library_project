pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
		echo "Multiline shell steps works too"
                sh 'npm --version'
            }
        }
    }
}
