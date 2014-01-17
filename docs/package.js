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
      "content": "Clientside Heroku App Management\n================================\n\n    require \"./setup\"\n\nFirst we need an auth token to make requests against the Heroku API.\n\nWe'll want to list all the apps that are running.\n\nCreate and run a new app from a Github hosted git repo at a specific revision.\n\nStop a heroku app.\n\nUpdate an app to a newer git revision.\n\nTesting API\n-----------\n\n    herokuKey = btoa(\":\" + localStorage.herokuToken + \"\\n\")\n    url = \"account\"\n\n    ApiGenerator = require \"./api_generator\"\n    {extend} = require \"./utils\"\n\n    root = \"https://api.heroku.com/\"\n\n    template = require \"./templates/apps\"\n\nIf our request is absolute we use that url, otherwise we get the base url from\nour root and append the path. This allows us to follow HATEOS resource urls more\neasily.\n\n    {get, api} = ApiGenerator (options) ->\n      options = extend\n        dataType: \"json\"\n        headers:\n          Accept: \"application/vnd.heroku+json; version=3\"\n          Authorization: herokuKey\n        type: \"GET\"\n      , options\n\n      path = options.url\n      unless path.match /^http/\n        options.url = \"#{root}/#{path}\"\n\n      $.ajax(options)\n\n    get(\"apps\")\n    .then (data) ->\n      console.log data\n\n      $(\"body\").append template(apps: data)\n\n    , ({responseText}) ->\n      console.error JSON.parse responseText\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.1.0\"\nremoteDependencies: [\n  \"https://code.jquery.com/jquery-1.10.1.min.js\"\n  \"https://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.6.3/coffee-script.min.js\"\n  \"http://strd6.github.io/tempest/javascripts/envweb-v0.4.7.js\"\n]\n",
      "type": "blob"
    },
    "api_generator.coffee.md": {
      "path": "api_generator.coffee.md",
      "mode": "100644",
      "content": "API Generator\n=============\n\nGenerate all those fun API verbs: `get`, `put`, `post`, `patch`, `delete`\n\nThe `requester` does the actual api calls, these just set it up easily.\n\n`requester` is a function that takes an `options` object.\n\n    ApiGenerator = (requester) ->\n\nConfigure the options for a request by stringifying any data to be added to the\nrequest body, and setting the appropriate type. `get` requests don't call this\nas the default type is `get` and they put their params in the querystring.\n\n      requestOptions = (type, data) ->\n        type: type\n        data: JSON.stringify(data)\n\n      api = (path, options={}) ->\n        options.url = path\n\n        requester options\n\nExpose the basic api method in our returned object.\n\n      api: api\n\n      get: (path, data) ->\n        api path, data: data\n\n      put: (path, data) ->\n        api(path, requestOptions(\"PUT\", data))\n\n      post: (path, data) ->\n        api(path, requestOptions(\"POST\", data))\n\n      patch: (path, data) ->\n        api path, requestOptions(\"PATCH\", data)\n\n`delete` is a keyword in JS, so I guess we'll go with all caps. We maybe should\ngo with all caps for everything, but it seems so loud.\n\n      DELETE: (path, data) ->\n        api path, requestOptions(\"DELETE\", data)\n\n    module.exports = ApiGenerator\n",
      "type": "blob"
    },
    "utils.coffee.md": {
      "path": "utils.coffee.md",
      "mode": "100644",
      "content": "Utils\n=====\n\nExtend an object with additional properties.\n\n    module.exports =\n      extend: (target, sources...) ->\n        for source in sources\n          for name of source\n            target[name] = source[name]\n\n        return target\n",
      "type": "blob"
    },
    "templates/app.haml": {
      "path": "templates/app.haml",
      "mode": "100644",
      "content": ".app\n  = @name\n  .url= @web_url\n",
      "type": "blob"
    },
    "templates/apps.haml": {
      "path": "templates/apps.haml",
      "mode": "100644",
      "content": "%ul.apps\n  - each @apps, (app) ->\n    %li.app\n      = app.name\n",
      "type": "blob"
    },
    "setup.coffee.md": {
      "path": "setup.coffee.md",
      "mode": "100644",
      "content": "Setup\n=====\n\nExpose global require for templates and debugging.\n\n    global.require = require\n\nExpose global package for debugging.\n\n    global.PACKAGE = PACKAGE\n",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  var ApiGenerator, api, extend, get, herokuKey, root, template, url, _ref;\n\n  require(\"./setup\");\n\n  herokuKey = btoa(\":\" + localStorage.herokuToken + \"\\n\");\n\n  url = \"account\";\n\n  ApiGenerator = require(\"./api_generator\");\n\n  extend = require(\"./utils\").extend;\n\n  root = \"https://api.heroku.com/\";\n\n  template = require(\"./templates/apps\");\n\n  _ref = ApiGenerator(function(options) {\n    var path;\n    options = extend({\n      dataType: \"json\",\n      headers: {\n        Accept: \"application/vnd.heroku+json; version=3\",\n        Authorization: herokuKey\n      },\n      type: \"GET\"\n    }, options);\n    path = options.url;\n    if (!path.match(/^http/)) {\n      options.url = \"\" + root + \"/\" + path;\n    }\n    return $.ajax(options);\n  }), get = _ref.get, api = _ref.api;\n\n  get(\"apps\").then(function(data) {\n    console.log(data);\n    return $(\"body\").append(template({\n      apps: data\n    }));\n  }, function(_arg) {\n    var responseText;\n    responseText = _arg.responseText;\n    return console.error(JSON.parse(responseText));\n  });\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.0\",\"remoteDependencies\":[\"https://code.jquery.com/jquery-1.10.1.min.js\",\"https://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.6.3/coffee-script.min.js\",\"http://strd6.github.io/tempest/javascripts/envweb-v0.4.7.js\"]};",
      "type": "blob"
    },
    "api_generator": {
      "path": "api_generator",
      "content": "(function() {\n  var ApiGenerator;\n\n  ApiGenerator = function(requester) {\n    var api, requestOptions;\n    requestOptions = function(type, data) {\n      return {\n        type: type,\n        data: JSON.stringify(data)\n      };\n    };\n    api = function(path, options) {\n      if (options == null) {\n        options = {};\n      }\n      options.url = path;\n      return requester(options);\n    };\n    return {\n      api: api,\n      get: function(path, data) {\n        return api(path, {\n          data: data\n        });\n      },\n      put: function(path, data) {\n        return api(path, requestOptions(\"PUT\", data));\n      },\n      post: function(path, data) {\n        return api(path, requestOptions(\"POST\", data));\n      },\n      patch: function(path, data) {\n        return api(path, requestOptions(\"PATCH\", data));\n      },\n      DELETE: function(path, data) {\n        return api(path, requestOptions(\"DELETE\", data));\n      }\n    };\n  };\n\n  module.exports = ApiGenerator;\n\n}).call(this);\n\n//# sourceURL=api_generator.coffee",
      "type": "blob"
    },
    "utils": {
      "path": "utils",
      "content": "(function() {\n  var __slice = [].slice;\n\n  module.exports = {\n    extend: function() {\n      var name, source, sources, target, _i, _len;\n      target = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];\n      for (_i = 0, _len = sources.length; _i < _len; _i++) {\n        source = sources[_i];\n        for (name in source) {\n          target[name] = source[name];\n        }\n      }\n      return target;\n    }\n  };\n\n}).call(this);\n\n//# sourceURL=utils.coffee",
      "type": "blob"
    },
    "templates/app": {
      "path": "templates/app",
      "content": "module.exports = Function(\"return \" + HAMLjr.compile(\".app\\n  = @name\\n  .url= @web_url\\n\", {compiler: CoffeeScript}))()",
      "type": "blob"
    },
    "templates/apps": {
      "path": "templates/apps",
      "content": "module.exports = Function(\"return \" + HAMLjr.compile(\"%ul.apps\\n  - each @apps, (app) ->\\n    %li.app\\n      = app.name\\n\", {compiler: CoffeeScript}))()",
      "type": "blob"
    },
    "setup": {
      "path": "setup",
      "content": "(function() {\n  global.require = require;\n\n  global.PACKAGE = PACKAGE;\n\n}).call(this);\n\n//# sourceURL=setup.coffee",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "version": "0.1.0",
  "entryPoint": "main",
  "remoteDependencies": [
    "https://code.jquery.com/jquery-1.10.1.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.6.3/coffee-script.min.js",
    "http://strd6.github.io/tempest/javascripts/envweb-v0.4.7.js"
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