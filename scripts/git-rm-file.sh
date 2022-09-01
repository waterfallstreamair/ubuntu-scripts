git filter-branch --tree-filter \
    'rm -f aws-ec2-instance-1/home/Downloads/*.tar.xz' -- \
    --all