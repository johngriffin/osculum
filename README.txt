
This project is heavily inspired by and started off as a fork of https://github.com/automata/osc-web


*Osculum* makes it possible to send and receive OSC messages through a Web browser.  
One day it might allow many people each with a web-enabled mobile phone to make music together.


* Prerequisites

- [[http://nodejs.org][node.js]]
- an OSC supported application ([[http://puredata.org][Puredata]]) or hardware controller

* Installation

First of all, download and install nodejs from http://nodejs.org, then:

#+begin_src sh
$ git clone git://github.com/johngriffin/osculum.git
$ cd osculum
$ npm install
#+end_src

* Using

Run the bridge app on your machine (localhost):
#+begin_src sh
$ cd osculum
$ node bridge.js
#+end_src

Set the IP address of your host machine running the bridge app in the web/index.html.  This will allow the browser to open a websocket connection back to the host.

Run the web server:
#+begin_src sh
$ gulp webserver
#+end_src

Open http://localhost:8080 in a web browser

Now you can run your favorite OSC app/device and send OSC messages
through port 3333. Those messages will be send to the HTML page by
WebSockets.

Configure your favorite OSC app/device to listen to OSC messages coming
into port 3334. Any message sent by the browser (hit the button!) will be
sent to your OSC app/device.

