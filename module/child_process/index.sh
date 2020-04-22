file="./index.js"
if [ -f "$file" ]; then
  cat $file   
fi

IPS=`hostname -I`
echo $IPS
