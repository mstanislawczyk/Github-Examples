require 'octokit'

client = Octokit::Client.new(access_token: ENV['GH_TOKEN'])

repo = "mstanislawczyk/Github-Examples"
new_branch_name = "sdks"
base_branch = "main"

# Get the latest commit SHA of the base branch
sha_latest_commit = client.commits(repo, base_branch).first.sha

# Create the new branch
client.create_ref(repo, "refs/heads/#{new_branch_name}", sha_latest_commit)