In order to speed things up as we only have 30 minutes
* we pre-baked a certificate and an its associated keystore 
  * it will be used to secure the communication between your AEM instance and `adobe.io`
  * browse this folder. In there you'll find
    * the public certificate expected by `adobe.io` [`certificate_pub.crt`](certificate_pub.crt)
    * the associated private key and signed certificate stuffed into a PKCS#12 [`keystore.p12`](keystore.p12)
   that you'll use when configuring your AEM instance

* an integration is also pre-defined on `adobe.io` console at https://console.adobe.io/integrations/43611/47460/overview
  * using the accounts mentioned above you should be able to access it

If you were to do it again, here are the instructions:

#### Create a certificate and keystore

To create a certificate and keystore:

1. Create an RSA private/public certificate in OpenSSL with the following command:

      ```
      openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout private.key -out certificate_pub.crt
      ```

2. Add the private key and signed certificate to a PKCS#12 file with the following command:

      ```
      openssl pkcs12 -keypbe PBE-SHA1-3DES -certpbe PBE-SHA1-3DES -export -in certificate_pub.crt -inkey private.key -out author.pfx -name "author"
      ```
3. When prompted, create an export password and store it for later use.

4. Create a keystore from the generated keys with the following command:

      ```
      cat private.key certificate_pub.crt > private-key-crt
      ```

      >Note: On Windows systems, you may need to concatenate the files manually or provide an alternate command. For more information, see the [OpenSSL manpages](https://www.openssl.org/docs/manpages.html).

5. Set the alias as **eventproxy** and a non-empty keystore password (such as admin), with the following command:

      ```
      openssl pkcs12 -export -in private-key-crt -out keystore.p12 -name eventproxy -noiter -nomaciter
      ```
      >Note: On Windows systems, this command expression may vary. For more information, see the [OpenSSL manpages](https://www.openssl.org/docs/manpages.html).


### Create an Adobe I/O Console integration

To create an [Adobe I/O Console](https://adobe.io/console) integration:

1. After signing in to the Adobe I/O Console, select **New Integration**.

2. Select **Access an API** and then select **Continue**.

3. On the **Create a new integration** page, select **Adobe I/O Events** and then select **Continue**.

4. Select **New integration**.

5. In the <strong id="Create-new-integration-box">Create a new integration</strong> dialog box, specify a name for the integration and add a description.
 To add **Public keys certificates**, select **Select a File** and navigate to your **certificate_pub.crt** to upload it.

6. Select **Create Integration.**

We have created an integration for you in the Adobe I/O Console 
Just in case you cant access it, [here are the info you need](console.md)