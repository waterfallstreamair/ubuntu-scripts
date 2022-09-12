cd /var/www/backups/aws-ec2-instance-1

#cp -r /var/www/scripts www
rm -r www/companies
cp -r /var/www/companies www
cp -r /root/.ssh root
cp -r /root/.vnc root
cp -r ~/.ssh home
cp -r ~/.vnc home
cp -r ~/Downloads home
cp -r ~/Desktop home
cp -r ~/Pictures home
cp /root/.profile root
cp /root/.bashrc root
cp -r ~/.config/xfce4 home/.config

#git add .
#git commit -m "Add backup."
#git push
