# #!/bin/sh
nginx -t

echo 'start.sh '
nginx  & \
npm start & \
wait 

echo 'after'
