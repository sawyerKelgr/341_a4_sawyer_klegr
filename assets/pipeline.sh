#echo $(python3 StaticCheck.py)
#if [ $(python3 StaticCheck.py) = 0 ]; then
#	echo 'config not present'
#	exit 2

#fi
#echo 'config check passed'
#npm install
#npm run build
cd src/_test_
#jest
#npm run test
cd ../../../
echo 'about to add .'
git add .
echo 'about to commit'
git commit -m $1
echo 'about to push'
git push origin master
echo 'show status'
git status
echo 'done!'