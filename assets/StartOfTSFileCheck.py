from pathlib import Path
import sys
for path in Path('src').rglob('*.ts'):
	
	if path.name.endswith('.ts'):
		f = open(path, "r")
		#if it does not start with the string then fail
		if not (f.read().startswith('/* sawyer klegr 1516595 */')):
			print('0')
			sys.exit(0)
		

print('1')
sys.exit(0)
