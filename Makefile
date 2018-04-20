install:
	npm install

start:
	npm run babel-node -- src/bin/brain-even.js

tmp:
	npm run babel-node -- tmp
	
publish:
	npm publish

lint:
	npm run eslint .
