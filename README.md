github timeline editor

1. generate a `timeline.json` with the [GUI](https://r1vn.github.io/gte) and save it to a blank directory
2. save [gte.js](https://raw.githubusercontent.com/r1vn/gte/master/gte.js) to the same directory
3. `cd` into the directory, run `node gte` and wait
4. run: <br>
   `git remote add origin https://github.com/USER/REPO.git` <br>
   `git push -u origin master --force`
   

## importing own data

1. set `USER` and `YEAR` in the url [github.com/users/USER/contributions?to=YEAR-12-31](https://github.com/users/USERNAME/contributions?to=YEAR-12-31) and save the page
2. import it via `import .html` button in the GUI