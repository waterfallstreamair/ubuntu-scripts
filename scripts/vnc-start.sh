vncserver -kill :99
echo “Delay 3 sec...”
sleep 3
echo "Delay ended"
vncserver -depth 24 -geometry 1024x768 :99

