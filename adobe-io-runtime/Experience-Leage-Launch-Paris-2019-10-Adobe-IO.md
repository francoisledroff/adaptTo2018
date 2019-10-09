
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




