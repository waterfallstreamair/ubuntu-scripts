#!/bin/bash
###############################################################################
# This script removes unneeded files and libraries, including log files and snaps.
# I originally created it to combat the /var directory filling up (when on a
# seperate partition). I know there is redundency with apt vs apt-get commands,
# but I alsways seem to have more drive space after running both!
#
# I created this for Ubuntu 18.04 (Desktop), but it should run on other distros
# based on Ubuntu without issue.
#
# To run this script from anywhere, place it in your /usr/local/bin directory
#
# To list your partition sizes run: df -Th | sort
###############################################################################

# Remove apt / apt-get files
apt clean -y
apt -s clean -y
apt clean all -y
apt autoremove -y
apt-get clean -y
apt-get -s clean -y
apt-get clean all -y
apt-get autoclean -y

#Remove Old Log Files
rm -f /var/log/*gz

# Remove Thumbnail Cache
rm -rf ~/.cache/thumbnails/*
