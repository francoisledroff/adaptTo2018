## Build event-driven integrations with AEM using Adobe I/O Events

You'll find here my [AdaptTo() 2018 lab](https://adapt.to/2018/en/schedule/build-event-driven-integrations-with-aem-using-adobe-io-events.html) material as well as my [Experience League 2019 demos](http://droff.com/content/2019/10/08/experience-league-conf.html)

### Abstract

Tired of building connectors for AEM? 

Here you will implement a real-time and lightweight integration with AEM with almost no code. You'll earn how you can expose any internal `osgi` events from AEM through Adobe I/O Events to build event-driven workflows across multiple systems with ease. You'll see how Adobe I/O Events allows us to respond to both administrative events and customer behaviors in real-time.

### Prerequisite

* an internet connection
* a text editor 
* `git` installed so you can `clone` this repo and `pull` it again during the lab
* An AEM instance, 6.4.x, with administrative permissions

### The Lab

* First step:  you will [install and configure Adobe Experience Manager (AEM) for Adobe I/O Events](1.aem-event-setup.md)
* All following steps are optional: you decide what you want to focus on, here is what we offer: 
  * [Create your own event receiving webhook, using your own server or going serverless](2.aem-event-webhooks.md)
  * [Register webhooks](3.aem-event-registration.md) to receive AEM events
  * [Understand and tune the OSGI event to Adobe I/O event mapping](4.aem-event-mapping.md)
  * [Test the flow by emitting events from AEM to Adobe I/O](5.aem-event-emitting.md)
  * [Learn how to map and fire custom AEM/osgi event to Adobe I/O](6.aem-event-custom.md)
  * [Learn about the AEM Adobe I/O Events healthchecks and tuning options](7.aem-event-more.md)

### Further Documentation

* Adobe I/O Events Documentation: https://www.adobe.io/apis/cloudplatform/events/documentation.html
* Adobe I/O Medium Blog: https://medium.com/adobetech
* Adobe I/O GitHub: https://github.com/adobeio
