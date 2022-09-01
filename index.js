import shell from 'shelljs'
import moment from 'moment'

const interval = async () => {
    const dt = moment().format()
    shell.exec(`
        echo hello
        echo Date/Time: ${dt}
        pwd
        cd "/var/www/ubuntu-scripts"
        pwd
        git add .
        git commit -m "Update scripts."
        git push
        cd scripts
        sh git-user-data.sh
    `)
    shell.exec('echo Waiting for 1 hour...')
}

(async () => {
    interval()
    setInterval(interval, 1000 * 60 * 60)
})()