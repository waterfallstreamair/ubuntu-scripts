import shell from 'shelljs'
import moment from 'moment'

const getCachedFiles = async (path) => {
    const { stdout } = shell.exec(`
        cd ${path}
        git diff --name-only --cached
    `)
    return stdout.split('\n').filter(e => e).join(', ')
}

const interval = async () => {
    const dt = moment().format()
    shell.exec(`
        echo hello
        echo Date/Time: ${dt}
    `)
    shell.exec(`
        cd "/var/www/ubuntu-scripts"
        
        git add .
        git commit -m "Update Scripts: ${await getCachedFiles('/var/www/ubuntu-scripts')}."
        git push
        
        cd /var/www/ubuntu-scripts/scripts
        
        sh git-user-data.sh
        cd /var/www/backups
        
        git add .
        git commit -m "Update Backups: ${await getCachedFiles('/var/www/backups')}."
        git push
        
        sh cleanup.sh
    `)
    shell.exec('echo "Waiting for 1 hour..."')
}

(async () => {
    interval()
    //setInterval(interval, 1000 * 60 * 60)
})()