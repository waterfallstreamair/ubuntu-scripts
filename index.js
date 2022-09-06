import shell from 'shelljs'
import moment from 'moment'

const getCachedFiles = async (path) => {
    const { stdout } = shell.exec(`
        cd ${path}
        git add .
        git diff --name-only --cached
    `)
    return stdout.split('\n').filter(e => e).join(', ')
}

const gitScriptsCachedFiles = async () => {
    const files = await getCachedFiles('/var/www/ubuntu-scripts')
    console.log({ files })
    return files
}

const gitBackupsCachedFiles = async () => {
    const files = await getCachedFiles('/var/www/backups')
    console.log({ files })
    return files
}

const interval = async () => {
    const scriptsFiles = await gitScriptsCachedFiles()
    shell.exec(`
        
    `)
    const backupsFiles = await gitBackupsCachedFiles()
    
    const dt = moment().format()
    shell.exec(`
        echo hello
        echo Date/Time: ${dt}
        pwd
        
        cd "/var/www/ubuntu-scripts"
        pwd
        git add .
        git commit -m "Update Scripts: ${await getCachedFiles('/var/www/ubuntu-scripts')}."
        git push
        
        cd /var/www/ubuntu-scripts/scripts
        pwd
        sh git-user-data.sh
        cd /var/www/backups
        pwd
        git add .
        git commit -m "Update Backups: ${await getCachedFiles('/var/www/backups')}."
        git push
        
        pwd
        sh cleanup.sh
    `)
    shell.exec('echo Waiting for 1 hour...')
}

(async () => {
    interval()
    //setInterval(interval, 1000 * 60 * 60)
})()