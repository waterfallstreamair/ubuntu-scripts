import shell from 'shelljs'

const daily = async () => {
   
    shell.exec(`
        echo hello
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
    setInterval(daily, 10000)
})()