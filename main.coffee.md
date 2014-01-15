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

    $.ajax
      headers:
        Accept: "application/vnd.heroku+json; version=3"
        Authorization: herokuKey
      dataType: "json"
      url: "https://api.heroku.com/account"
      success: (data) ->
        console.log data
      error: ({responseText}) ->
        console.error JSON.parse responseText
