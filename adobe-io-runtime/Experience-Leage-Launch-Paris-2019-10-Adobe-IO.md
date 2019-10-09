
To start with Adobe I/O runtime, please refer to this doc: https://www.adobe.io/apis/experienceplatform/runtime/docs.html 

Then once set up, here are the few commands I used for my demos.
If you want to try these out, replace `ledroff` by our own namespace, et `summit` by your own package, refer to https://www.adobe.io/apis/experienceplatform/runtime/docs.html#!adobedocs/adobeio-runtime/master/reference/wsk_use.md for  more details

## runtime hello world demo

        wsk action create /ledroff/summit/hello-world ./hello-world.js --web true
        wsk action update /ledroff/summit/hello-world ./hello-world.js --web true

        wsk action get summit/hello-world --url

        curl https://adobeioruntime.net/api/v1/web/ledroff/summit/hello-world\?hello\=francois


## runtime event webhook 

        wsk action update /ledroff/summit/slack-webhook ./slack-webhook.js --web true

        wsk action invoke summit/slack-webhook --param challenge pong --result --blocking

        wsk action get summit/slack-webhook --url

        wsk activation list

        wsk activation get <id from above>




