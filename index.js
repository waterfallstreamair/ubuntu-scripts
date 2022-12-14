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
        pwd
        git status
        git add .
        git status
    `)
    const scriptsFiles = await getCachedFiles('/var/www/ubuntu-scripts')
    console.log({ scriptsFiles })
    shell.exec(`
        cd "/var/www/ubuntu-scripts"
        git commit -m "Update Scripts: ${scriptsFiles}."
        git push
    `)
    
    shell.exec(`
        cd /var/www/ubuntu-scripts/scripts
        sh git-user-data.sh
        cd /var/www/backups
        git status
        git add .
        git status
    `)
    const backupsFiles = await getCachedFiles('/var/www/backups')
    shell.exec(`
        cd /var/www/backups
        git commit -m "Update Backups: ${backupsFiles}."
        git push
    `)
   
    shell.exec(`
        cd /var/www/ubuntu-scripts/scripts
        sh cleanup.sh
    `)
   
    //shell.exec('echo "Waiting for 3 hours..."')
    shell.exec('echo "Exit..."')
}

(async () => {
    interval()
    //setInterval(interval, 1000 * 60 * 60 * 3)
})()