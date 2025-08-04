const { Octokit, App } = require("octokit");

console.log(`TOKEN: ${process.env.GH_TOKEN}` )

const octokit = new Octokit({
  auth: process.env.GH_TOKEN
})

octokit.request('GET /repos/{owner}/{repo}/git/matching-refs/{ref}', {
  owner: 'mstanislawczyk',
  repo: 'Github-Examples',
  ref: 'refs/heads/sdksjs',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})