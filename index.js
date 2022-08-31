import shell from 'shelljs'
import moment from 'moment'

const daily = async () => {
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
        sh git-user-data.sh
    `)
    
    shell.exec('echo Waiting 3 seconds...')
}

(async () => {
    setInterval(daily, 1000 * 3)
})()