Clientside Heroku App Management
================================

First we need an auth token to make requests against the Heroku API.

We'll want to list all the apps that are running.

Create and run a new app from a Github hosted git repo at a specific revision.

Stop a heroku app.

Update an app to a newer git revision.

Testing API
-----------

    herokuKey = btoa(":" + localStorage.herokuToken + "\n")
    url = "account"

    ApiGenerator = require "./api_generator"
    {extend} = require "./utils"

    root = "https://api.heroku.com/"

If our request is absolute we use that url, otherwise we get the base url from
our root and append the path. This allows us to follow HATEOS resource urls more
easily.

    {api} = ApiGenerator (options) ->
      options = extend
        dataType: "json"
        headers:
          Accept: "application/vnd.heroku+json; version=3"
          Authorization: herokuKey
        type: "GET"
      , options

      path = options.url
      unless path.match /^http/
        options.url = "#{root}/#{path}"

      $.ajax(options)

    api("user")
    .then (data) ->
      console.log data
    , ({responseText}) ->
      console.error JSON.parse responseText
