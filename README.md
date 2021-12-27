# HTML+CSS Öğreniyoruz

[TR](https://medium.com/adem-md/html-css-%C3%B6%C4%9Freniyoruz-b3c10f2441a8)

[EN] In this [series of tutorials](https://www.youtube.com/playlist?list=PLadt0EaV4m3Ae9mBaQNylUKUaFK38F4EB), we gain basic HTML and CSS knowledge while coding the selected design.

## Table of contents

- [Overview](#overview)
  - [Project Structure](#project-structure)
  - [Content](#content)
  - [Installation](#installation)
  - [Screenshot](#screenshot)
  - [Credits](#credits)

## Overview

### Project Structure

css/main.css file is created from main.scss file which is inside the scss folder. main.scss file is used to import the other scss files. CSS codes of the components of the website are included in the scss/pages/index.scss. CSS codes of the header, navigation and footer are included in the scss/global folder. 

PugJS is used as a template engine. Files of the template are in the views folder. Files in the views/component and views/global folder are extended from the file called master.pug. HTML codes of the common components of the website are included in the views/component which is in the views folder.

### Content

Topics covered in this tutorial:

- Semantic HTML5 markup
- CSS custom properties
- The Basics of Object-Oriented CSS
- Flexbox
- Mobile-first workflow
- Font-face and typography
- Using SVG

## Installation

```bash
git clone https://github.com/fundakartal/html-css-ogreniyoruz.git
cd html-css-ogreniyoruz
npm install or yarn install
```

## Start the server

```bash
gulp
```

Now enter [`localhost:3000`](http://localhost:3000) in the address bar of your browser.

### Screenshot

![screenshot](./img/ss-desktop.png)

### Credits

- Design: [Booking by Vladimir Gruev](https://dribbble.com/shots/3877462-Booking)