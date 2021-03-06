echo $(python3 StaticCheck.py)
if [ $(python3 StaticCheck.py) = 0 ]; then
	echo 'config not present'
	exit 2
fi
echo 'config check passed'

echo $(python3 StartOfTSFileCheck.py)
if [ $(python3 StartOfTSFileCheck.py) = 0 ]; then
	echo 'Test failed. \n You need to place your name and ID at the top of each .ts file.'
	exit 2
fi
echo 'typescript file comment test past'


#npm install
npm run build
cd src/__tests__
#jest
npm run test
cd ../../../

echo 'about to add files'
git add assets/pipeline.sh
git add assets/StartOfTSFileCheck.py
git add assets/src/
git add assets/package-lock.json
git add assets/package.json

echo 'about to commit'
git commit -m $1
echo 'about to push'
git push origin master
echo 'show status'
git status
echo 'done!'