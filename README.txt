
URL:
POST - https://zekf4gnatj.execute-api.us-west-2.amazonaws.com/dev/recipe
GET - https://zekf4gnatj.execute-api.us-west-2.amazonaws.com/dev/recipe
GET - https://zekf4gnatj.execute-api.us-west-2.amazonaws.com/dev/recipe/{id}
PUT - https://zekf4gnatj.execute-api.us-west-2.amazonaws.com/dev/recipe/{id}
DELETE - https://zekf4gnatj.execute-api.us-west-2.amazonaws.com/dev/recipe/{id}

I used CURL to test this API with following commands:
POST: curl -X POST <URL>
GET: curl <URL>
GET particular Item: curl <URL>/{id}
DELETE: curl -X DELETE <URL>/{id}
PUT: curl -X PUT <URL>/{id}

You can find my code on the following Github link:
https://github.com/rkaur24/lab2

