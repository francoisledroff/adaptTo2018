
To start with Adobe I/O runtime, please refer to this doc: https://www.adobe.io/apis/experienceplatform/runtime/docs.html 

Then once set up, here are the few commands I used for my demos.
If you want to try these out, replace `youradobeioruntimenamespace` by our own namespace, et `youradobeioruntimepackage` by your own package, 
refer to https://www.adobe.io/apis/experienceplatform/runtime/docs.html#!adobedocs/adobeio-runtime/master/reference/wsk_use.md for  more details

## runtime 101

create it

    wsk action create /youradobeioruntimenamespace/youradobeioruntimepackage/runtime101 ./runtime101.js 

invoke it
    
    wsk action invoke youradobeioruntimepackage/runtime101 --param name Vianney --param place Paris --result --blocking
 
update it 
 
    wsk action update /youradobeioruntimenamespace/youradobeioruntimepackage/runtime101 ./runtime101.js 
    wsk action invoke youradobeioruntimepackage/runtime101 --param name Dorothee --param place Kansas --result --blocking
 
make it a web endpoint
 
    wsk action update /youradobeioruntimenamespace/youradobeioruntimepackage/runtime101 ./runtime101.js  --web true
    wsk action get youradobeioruntimepackage/runtime101 --url    
    curl https://runtime.adobe.io/api/v1/web/youradobeioruntimenamespace/youradobeioruntimepackage/runtime101\?name\=Georges\&place\=S%C3%A8te
 
see the last activation record

    wsk activation get --last
    
see the log

    wsk activation list
    wsk activation logs 3ff44197b8af4b56b44197b8af3b5600

Delete it:

    wsk action delete /youradobeioruntimenamespace/youradobeioruntimepackage/runtime101

## slack webhook

## runtime event webhook 

        wsk action update /youradobeioruntimenamespace/youradobeioruntimepackage/slack-webhook ./slack-webhook.js --web true

        wsk action invoke youradobeioruntimepackage/slack-webhook --param challenge pong --result --blocking

        wsk action get youradobeioruntimepackage/slack-webhook --url

        wsk activation list


## Quelques liens publics pour compléter la présentation:

https://www.adobe.io/apis/experienceplatform/runtime.html
Adobe I/O 2018: Everything a developer needs to integrate, extend, and create with Adobe technology
https://www.youtube.com/watch?v=vwZaxWFn7ls

Adobe I/O Runtime: Go Serverless with Adobe's Cloud Platform : https://www.youtube.com/watch?v=vwZaxWFn7ls 
https://openwhisk.apache.org/

une demo avec campaign:
https://www.youtube.com/watch?v=e7dQILmwZEY&feature=youtu.be

liens internes:
Latest material for how to present Runtime to customers – Runtime Playbook - https://fieldreadiness-adobe.highspot.com/items/5dfd0e7fdf369d7b4006a90d  and this one https://fieldreadiness-adobe.highspot.com/items/5dafc6218fd6386c5ffebb21
la FAQ interne:
https://wiki.corp.adobe.com/pages/viewpage.action?pageId=1492581057

* Getting to Know the Adobe I/O Architecture: Experience Cloud Use Cases: https://medium.com/adobetech/getting-to-know-the-adobe-i-o-architecture-experience-cloud-use-cases-4c63a409ec8c
