install:
	npm install

bc:
	npm run babel-node -- src/bin/brain-calc.js

gcd:
	npm run babel-node -- src/bin/brain-gcd.js

tmp:
	npm run babel-node -- tmp

publish:
	npm publish

lint:
	npm run eslint .
