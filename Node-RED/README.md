# Tweet Analyzer RESTful API

![Node-RED Flow](https://d3r69eeiwn2k86.cloudfront.net/items/160W28382c3l0i1Y2b0p/node-red.png)

Using Node-RED, I've built an RESTful API to analyze the tone of a tweet. The API needs a ```tweet``` parameter, which is the text to be analyzed. The text Analyze is done using [Watson Tone Analyzer](https://www.ibm.com/watson/services/tone-analyzer/)

You can try the API yourself by doing a GET request, using the following URL:

```https://desafioifood.mybluemix.net/analyze?tweet=YOUR_TEXT_HERE```

If the request is successful, it will return the emoji that indicates the sentiment of the tweet, such as:

```
{
  "response":	"😃"
}
```

For more info on how this works, you can check the Node-RED flow [here](https://desafioifood.mybluemix.net/red/#flow/333a8ac1.68f79e) or by using the ```flows.json``` on your Node-RED page.
