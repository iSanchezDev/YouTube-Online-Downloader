# YouTube Downloader (Work In Progress)

By URLs from YouTube you can convert video to audio or download videos to your computer.

Now you can get your downloads in your directory 'downloads' for later versions tough I will let you to download from you browser.

I just want to share without publicing anywhere to avoid copyright policy from youtube's authors. So you could use it under your responsibility.

The back engine is based on youtube-dl, it is a program for Windows, Linux And Mac.
 
The JavaScript tool to communicate with youtube-dl is [node-youtube-dl](https://github.com/przemyslawpluta/node-youtube-dl).

## Requirements

Before to start, please install these programs:
* Node ^8.0.0
* npm  ^5.0.0
* [Angular Cli](https://github.com/angular/angular-cli#installation)
* [youtube-dl](https://rg3.github.io/youtube-dl/download.html) 
* Python 2.6, 2.7 or 3.2 Except for windows exe

## Installation

### Client

Move to client/ directory and run this command:

```
npm install
```

#### Development 
````
npm run dev
````

Open your browser and search for localhost:4200

Note:
Behind the scenes a proxy configuration will redirect you to 8888 port.
This is the port configured in our api to work in my IDE.
If you change this port you will need to change in proxy.cong as well.

Please, see Readme on this folder to understand how Angular Cli works.

### Api

Move to api directory and run this command:
```
npm install
```

#### Development

Configuration por on your IDE `env.PORT`

Run this command to start:

```
npm start
```

#### Production

Port 8080 by default

### Screenshot

![screen shot 2017-11-09 at 23 18 32](https://user-images.githubusercontent.com/25980900/32634342-6e1f6076-c5ab-11e7-927d-646fc847fce9.png)
