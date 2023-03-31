# webpack2023
multipages webpack bundle

To add new html file (page) you need:
1. Create file in src folder.
2. Edit webpack.config.js: plugins --> in CopyPlugin --> add one more pattern to copy html file from src to dist folder
3. Add import of new html-file to index.js file.

# Important
1. If you forgot how to manage webpack see package.json file --> script settings.

2. Browsers list is placed in package.json browserslist.

3. Not all of files copy to dist folder. For example, if you don't use some font or img somewhere(in html,css or js files), they will not copy to the dist folder.