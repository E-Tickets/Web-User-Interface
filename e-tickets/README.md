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

[6.26] update
newest:

``` lang = js
    //assetsSubDirectory: 'static'
    assetsSubDirectory: 'static/user',
```


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

### in dev mode testing meet the origin problem

add this item into config/index.js
```lang = js
dev{
    // other item ...
    proxyTable: {
      '/api': {
        target: 'http://172.18.157.240:8000', // set the host and port for test,and dont forget the http
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
    // other item ...
}
    
```