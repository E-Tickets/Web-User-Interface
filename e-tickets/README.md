# e-tickets

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## what I think is worth to note down

### where should image locate, "assets" or "static"? And what is the difference between them?

webpack will not process those sources in the static, it just simply copy to the distance.

And think about those in assets, they will be copy and rename.

### how the dist file structure is， and how to change it

old:

``` lang = file
dist
 ├── static
 │   │── js
 │   │   ├── main.css
 │   │   ├── mainA.js
 │   │   └── mainB.js
 │   └── css
 │       ├── a.css
 │       └── b.css
 │
 └── index.html
```

 change here : config/index.js line 54

``` lang = js
    //assetsSubDirectory: 'static'
    assetsSubDirectory: '',
```

new:

```
dist
 │── js
 │   ├── main.css
 │   ├── mainA.js
 │   └── mainB.js
 ├── css
 │   ├── a.css
 │   └── b.css
 │
 └── index.html
```