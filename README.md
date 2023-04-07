<!-- Please update value in the {}  -->

<h1 align="center">Notification Page</h1>
<h2 align="center">with Vue.js</h2>

<div align="center">
   Solution for a challenge from  <a href="http://frontendmentor.io" target="_blank">FrontEnd Mentor</a>.
</div>

<div align="center">
  <h3>
    <a href="https://notifications-page-main-blond.vercel.app/">
      Demo
    </a>https://notifications-page-main-blond.vercel.app/
    <span> | </span>
    <a href="https://github.com/pablomalave/notifications-page-main.git">
      Solution
    </a>
    <span> | </span>
    <a href="https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](./assets/imagesReadme/DesktopDesign.png)


This page is the result of a FrontEnd Mentor challenge, which proposes a notification center for an application. Apart from distinguishing Read and Unread notifications, a link is included to mark all of them as Read.

It was made under the "Mobile First" scheme where the page is designed for mobile phones and then the responsiveness towards larger sizes is applied.

As an addition to the approach of the challenge, the function of marking as Read to each notification with a click was added.

It was used with HTML, CSS, JS and Vue3.

![screenshot](./assets/imagesReadme/MobileDesign.png)

### What I learned

#### Vue.js

Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.

You can use Vue directly from a CDN via a script tag:

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```
Here we are using unpkg, but you can also use any CDN that serves npm packages, for example jsdelivr or cdnjs. Of course, you can also download this file and serve it yourself.

Every Vue application starts by creating a new application instance with the createApp function:

```js
import { createApp } from 'vue'

const app = createApp({
  /* root component options */
})
```
An application instance won't render anything until its .mount() method is called. It expects a "container" argument, which can either be an actual DOM element or a selector string:

```html
<div id="app"></div>
```
```js
app.mount('#app')
```


#### Array.forEach()

The use of forEach() method to calls a function for each element in an array.

```js
function markAllRead(){
            unreadMessages.forEach(moveToReadList);
        }
        
function moveToReadList(message){
            readMessages.set(message.id, message);
            unreadMessages.delete(message.id);
            unreadCounter = unreadMessages.size;
        }   
```
With the second argument in the forEach() method, a value passed to the function as its this value.


#### Object Map()

The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

Methods:
- new Map():	Creates a new Map object
- set():	Sets the value for a key in a Map
- get():	Gets the value for a key in a Map
- clear():	Removes all the elements from a Map
- delete():	Removes a Map element specified by a key
- has():	Returns true if a key exists in a Map
- forEach():	Invokes a callback for each key/value pair in a Map
- entries():	Returns an iterator object with the [key, value] pairs in a Map
- keys():	Returns an iterator object with the keys in a Map
- values():	Returns an iterator object of the values in a Map

Property
- size:	Returns the number of Map elements


### Built With

- HTML, CSS, CSS Grid, CSS Flex.
- JavaScript.
- VueJS.
- Mobile First Design.
- Responsive Design.

## Features

This challenge  shows a list of Notifications of an Application:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

The actual version is 2.0 which include the following features:

- Built with Vue.js.
- When the app is mounted, all notifications will be marked as "Unread".
- Each notification will mark as "Read" when the user clicks on it.
- The Unread Notifications will be placed at the top of the list.
- The Read Notifications will be placed after the Unread Notifications.

## Acknowledgements

- Chris Coyer. [A Complete Guide to Flexbox. ](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) 2013 - 2021.
- Chris Coyer. [A Complete Guide to Grid. ](https://css-tricks.com/snippets/css/complete-guide-grid/) 2013 - 2021.
- Juan Andrés Nuñez. [Curso Vue 3 desde cero](https://www.youtube.com/watch?v=ldMXgFlfmgk&list=PLM-Y_YQmMEqADwNySz6he0tkBr_awZ2tn) 2022.
- MDN Web Docs. [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- Thu Nghiem. [Steps to replicate a design with only HTML and CSS.](https://devchallenges-blogs.web.app/how-to-replicate-design/) 2020.
- Vue.JS. [Official Web Page.](https://vuejs.org/). 2023.
- W3 Schools. [JavaScript Array forEach()](https://www.w3schools.com/jsref/jsref_foreach.asp)
- W3 Schools. [JavaScript HTML DOM Elements](https://www.w3schools.com/js/js_htmldom_elements.asp)
- W3 Schools. [JavaScript Maps](https://www.w3schools.com/js/js_object_maps.asp)

## Contact

- Website [Pablo Malave - GithubPages](https://pablomalave.github.io/CV/)
- GitHub [@pablomalave](https://github.com/pablomalave)
