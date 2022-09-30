// A map of deployment environments.
// Each element is a map with the following keys:
//  - host: The host url in format user@some.server.com
//  - credentials: Name of credentials to use for ssh
//  - folder: The folder where the app is located on server
def deployBranches = [
    master: [
        host: 'admin@ripex2-web.racom.eu',
        credentials: 'admin_ripex2-web.racom.eu',
        folder: '/var/www/racom.eu/rades',
    ],
]

node {
    try {
        stage('Checkout code') {
           checkout scm
        }

        stage("Build ${env.BRANCH_NAME}") {
            sh 'docker-compose run --rm mkdocs bash -c "sh /root/init-container.sh /workspace && su node -c \'npm ci --legacy-peer-deps && npm test && npm run build\'"'
        }

        if (deployBranches.containsKey(env.BRANCH_NAME)) {
            stage('Deploy') {
                def deployBranch = deployBranches[env.BRANCH_NAME]
                dir('site') {
                    sshagent (credentials: [deployBranch.credentials]) {
                        sh "rsync --archive --compress --force --delete --progress ./ ${deployBranch.host}:${deployBranch.folder}"
                    }
                }
            }
        }
    } catch (err) {
        currentBuild.result = 'FAILURE'
        echo "DEPLOY ERROR: ${err.toString()}"
    } finally {
        stage('Cleanup') {
            sh 'docker-compose stop'
            sh 'docker-compose rm --all --force'
        }
    }
}
