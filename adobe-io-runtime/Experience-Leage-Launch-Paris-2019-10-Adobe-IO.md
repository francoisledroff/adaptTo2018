
To start with Adobe I/O runtime, please refer to this doc: https://www.adobe.io/apis/experienceplatform/runtime/docs.html 

Then once set up, here are the few commands I used for my demos.
If you want to try these out, replace `youradobeioruntimenamespace` by our own namespace, et `youradobeioruntimepackage` by your own package, 
refer to https://www.adobe.io/apis/experienceplatform/runtime/docs.html#!adobedocs/adobeio-runtime/master/reference/wsk_use.md for  more details

## runtime hello world demo

        wsk action create /youradobeioruntimenamespace/youradobeioruntimepackage/hello-world ./hello-world.js --web true
        wsk action update /youradobeioruntimenamespace/youradobeioruntimepackage/hello-world ./hello-world.js --web true

        wsk action get youradobeioruntimepackage/hello-world --url

        curl https://adobeioruntime.net/api/v1/web/youradobeioruntimenamespace/youradobeioruntimepackage/hello-world\?hello\=francois


## runtime event webhook 

        wsk action update /youradobeioruntimenamespace/youradobeioruntimepackage/slack-webhook ./slack-webhook.js --web true

        wsk action invoke youradobeioruntimepackage/slack-webhook --param challenge pong --result --blocking

        wsk action get youradobeioruntimepackage/slack-webhook --url

        wsk activation list

        wsk activation get <id from above>




