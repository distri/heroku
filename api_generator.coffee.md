API Generator
=============

Generate all those fun API verbs: `get`, `put`, `post`, `patch`, `delete`

The `requester` does the actual api calls, these just set it up easily.

`requester` is a function that takes an `options` object.

    ApiGenerator = (requester) ->

Configure the options for a request by stringifying any data to be added to the
request body, and setting the appropriate type. `get` requests don't call this
as the default type is `get` and they put their params in the querystring.

      requestOptions = (type, data) ->
        type: type
        data: JSON.stringify(data)

      api = (path, options={}) ->
        options.url = path

        requester options

Expose the basic api method in our returned object.

      api: api

      get: (path, data) ->
        api path, data: data

      put: (path, data) ->
        api(path, requestOptions("PUT", data))

      post: (path, data) ->
        api(path, requestOptions("POST", data))

      patch: (path, data) ->
        api path, requestOptions("PATCH", data)

`delete` is a keyword in JS, so I guess we'll go with all caps. We maybe should
go with all caps for everything, but it seems so loud.

      DELETE: (path, data) ->
        api path, requestOptions("DELETE", data)

    module.exports = ApiGenerator
