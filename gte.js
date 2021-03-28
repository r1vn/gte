'use strict' // 2021-03-10 23.27

const rl = require('readline')
const cp = require('child_process')
const fs = require('fs')

process.chdir(__dirname)
const timeline = require('./timeline.json')
fs.rmSync(`.git`, { recursive: true, force: true })
cp.execSync(`git init; git config gc.auto 0`)
fs.writeFileSync(`.gitignore`, `*.js*\n\\.*`)

let n = 1
const t = Object.values(timeline).reduce((t, v) => t + v, 0)

for (const [day, count] of Object.entries(timeline))
{
    for (let i = 0; i < count; i++)
    {
        rl.cursorTo(process.stdout, 0)
        process.stdout.write(`${ n }/${ t }`)
        fs.writeFileSync(`./README.txt`, n.toString())
        cp.execSync(`git add .; git commit -m "${ n++ }" --date "${ day } 12:00:00"`)
    }
}

console.log(`
done (${ process.uptime().toFixed(2) }s) 
now run:
    git remote add origin https://github.com/USER/REPO.git
    git push -u origin master --force`
)