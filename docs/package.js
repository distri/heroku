(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2014 distri\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "heroku\n======\n\nClient side heroku app management\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "Clientside Heroku App Management\n================================\n\nFirst we need an auth token to make requests against the Heroku API.\n\nWe'll want to list all the apps that are running.\n\nCreate and run a new app from a Github hosted git repo at a specific revision.\n\nStop a heroku app.\n\nUpdate an app to a newer git revision.\n\nTesting API\n-----------\n\n    herokuKey = btoa(\":\" + localStorage.herokuToken + \"\\n\")\n\n    $.ajax\n      headers:\n        Accept: \"application/vnd.heroku+json; version=3\"\n        Authorization: herokuKey\n      dataType: \"json\"\n      url: \"https://api.heroku.com/account\"\n      success: (data) ->\n        console.log data\n      error: ({responseText}) ->\n        console.error JSON.parse responseText\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.1.0\"\nremoteDependencies: [\n  \"https://code.jquery.com/jquery-1.10.1.min.js\"\n]\n",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  var herokuKey;\n\n  herokuKey = btoa(\":\" + localStorage.herokuToken + \"\\n\");\n\n  $.ajax({\n    headers: {\n      Accept: \"application/vnd.heroku+json; version=3\",\n      Authorization: herokuKey\n    },\n    dataType: \"json\",\n    url: \"https://api.heroku.com/account\",\n    success: function(data) {\n      return console.log(data);\n    },\n    error: function(_arg) {\n      var responseText;\n      responseText = _arg.responseText;\n      return console.error(JSON.parse(responseText));\n    }\n  });\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.0\",\"remoteDependencies\":[\"https://code.jquery.com/jquery-1.10.1.min.js\"]};",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "version": "0.1.0",
  "entryPoint": "main",
  "remoteDependencies": [
    "https://code.jquery.com/jquery-1.10.1.min.js"
  ],
  "repository": {
    "id": 15913462,
    "name": "heroku",
    "full_name": "distri/heroku",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/heroku",
    "description": "Client side heroku app management",
    "fork": false,
    "url": "https://api.github.com/repos/distri/heroku",
    "forks_url": "https://api.github.com/repos/distri/heroku/forks",
    "keys_url": "https://api.github.com/repos/distri/heroku/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/heroku/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/heroku/teams",
    "hooks_url": "https://api.github.com/repos/distri/heroku/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/heroku/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/heroku/events",
    "assignees_url": "https://api.github.com/repos/distri/heroku/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/heroku/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/heroku/tags",
    "blobs_url": "https://api.github.com/repos/distri/heroku/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/heroku/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/heroku/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/heroku/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/heroku/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/heroku/languages",
    "stargazers_url": "https://api.github.com/repos/distri/heroku/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/heroku/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/heroku/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/heroku/subscription",
    "commits_url": "https://api.github.com/repos/distri/heroku/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/heroku/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/heroku/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/heroku/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/heroku/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/heroku/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/heroku/merges",
    "archive_url": "https://api.github.com/repos/distri/heroku/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/heroku/downloads",
    "issues_url": "https://api.github.com/repos/distri/heroku/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/heroku/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/heroku/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/heroku/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/heroku/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/heroku/releases{/id}",
    "created_at": "2014-01-14T19:53:17Z",
    "updated_at": "2014-01-14T19:55:48Z",
    "pushed_at": "2014-01-14T19:55:48Z",
    "git_url": "git://github.com/distri/heroku.git",
    "ssh_url": "git@github.com:distri/heroku.git",
    "clone_url": "https://github.com/distri/heroku.git",
    "svn_url": "https://github.com/distri/heroku",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 2,
    "branch": "master",
    "defaultBranch": "master"
  },
  "dependencies": {}
});