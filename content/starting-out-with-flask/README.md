# Starting out with Flask

## Table of Contents

* [Intro](#intro)
* [What is Flask?](#what-is-flask?)
* [Write a Flask program in 10 lines of code](#write-a-flask-program-in-10-lines-of-code)
    1. [Installation and Setup](#installation-and-setup)
    2. [10 Lines of Code](#10-lines-of-code)
    3. [Running our webserver](#running-our-webserver)
* [Understanding what we just did](#understanding-what-we-just-did)
    1. [Importing Flask](#importing-flask)
    2. [Creating Instance of Flask](#creating-instanc-of-flask)
    3. [Creating default endpoint](#creating-default-endpoint)
    4. [Returning data](#creating-default-endpoint)
    

#### Intro


## What is Flask?

## Write a Flask program in 10 lines of code
#### Installation and Setup
Imagine we have the following website without dark mode (a.k.a. light mode) that we want to add dark mode to:

```file
└── making-a-theme-switcher
    ├── index.html
    ├── styles.css
    └── script.js
```

```html index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Dark Theme Switcher</title>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script src="./script.js"></script>
  </head>
  <body>
    <div class="card">
      <h1>Ryan Yang</h1>
      <hr />
      <p>
        I am a front-end developer who should be doing 
        work but is sidetracked playing Maplestory
      </p>
    </div>
  </body>
</html>
```
