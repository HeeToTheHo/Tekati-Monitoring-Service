# tekati-monit-system-src
This is a microservice I wrote to monitor the HTTP status code of a website, and if it's not a passing status code, to send a email through AWS SES alerting of a outage.
I intended for it to be used to automate updating a statuspage.io site, but I'm sure others can find a use for it as well.
Currently, it only runs once, but if you have a good way to run this code once per 5 minutes, feel free to add it!

# Setup
Node and NPM is needed, as is your AWS shared credentials file. Assuming you have these setup and in the right place, you can run npm install inside the root of the code, and either run it with node, or build the docker container and deploy it to whatever. 
When running, be sure to pass all the needed enviorment variables (see below.) Not too hard, but be sure your AWS account is out of the SES sandbox, or if you're in the sandbox, who you're sending the email (and sending it from) is verified in the web panel.

# Needed Environment Variables
<b>moniturl</b>: put in the site you want monitored (ex: http://example.com)

<b>recieveemail</b>: the email address that will recieve the status email (ex: user1@example.com)

<b>senderemail</b>: the email address that will send the email. (ex: monitor@example.com)
