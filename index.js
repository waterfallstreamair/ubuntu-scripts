import shell from 'shelljs'

const daily = async () => {
    shell.echo()
    shell.exec(`
        echo hello
        echo Date/Time:
        echo date +%y%m%d-%H_%M_%S
        pwd
        cd "/var/www/scripts"
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