# JavaScript Callbacks vs Promise vs Observable in Plain English
[![N|Solid](https://miro.medium.com/max/1170/1*0h6I1sAxr3blJhPuWuwl3A.png)](https://nodesource.com/products/nsolid)

If you are a web developer starting out you have most certainly heard of these terms. Before we get to compare these concepts let’s talk about why would we need these at the first place.

Let’s say we are writing a front end application that fetches **apples** from a server. However, let’s assume the response we get back is delayed by 2 seconds or so. We mimic this scenario with the code below.

```javascript
const getApple = () => {
  setTimeout(() => {
    return { "name": "Macintosh" }
  }, 2000);
};

const myApple = getApple(); 
console.log(myApple.name);
```

So this will not work because out variable myApple is assigned and executed right away. **getApple** function however tries to set the object in 2 seconds. So we will not get the expected output in a real world scenario.

To deal with such situations callbacks were introduced. The code below solves this problem using callbacks

```javascript
const getApple = (b) => {
  setTimeout(() => {
    b({name: 'Macintosh'});
  }, 2000);
};

getApple((apple) => {
  console.log(apple.name);
})
```
we now pass a callback function to **getApple()**. Inside **getApple()**,
this callback function is received as a normal function argument and executed once the timer completes.

This idea of callbacks were very popular and it is still getting used a lot.
However, when building more complex applications we find ourselves in a callback loop
also know as the callback hell. Consider this example for instance.

```javascript
const bt = document.querySelector("button");
const result = document.getElementById("k")

const firstCallBack = callBack => {
  result.textContent = "First callback loading";
  setTimeout(() => {
    callBack(true);
  }, 2000);
};

const secondCallBack = callBack => {
  result.textContent = "Now Second callback is loading";
  setTimeout(() => {
    callBack(true);
  }, 2000);
};

bt.addEventListener("click", () => {
  firstCallBack((callBack) => {
    if(callBack) {
      secondCallBack( cb => {
        if(cb){
          result.textContent = "Got Apple";
        }
      })
    }
  })
});
```
Nesting callbacks can make applications very hard to debug and maintain clean code.
To solve these problems promises were introduced. Let’s take a look at the same example with promises.
```javascript
const firstPromise = callBack => {
  result.textContent = "First promise loading";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

const secondPromise = callBack => {
  result.textContent = "Now Second promise loading";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

bt.addEventListener("click", () => {
  firstPromise().
    then( isTrue => {
      if(isTrue) {
        return secondPromise().
          then( () => { result.textContent = "Got Apple" } )
      }
  })
});
```
Promises give us a much cleaner syntax, they are easy for error handling and easy to read and maintain. Once we start chaining more async operations the process with promises gets much easier compare to callbacks.
Inside **then()**, you can simply return the result of a function call.

We can handle errors with ease, too! Simply add a **catch()** block to your chain and it will catch any errors thrown by any of your promises.

Consider the following example for instance

```javascript

checkAuth()
  .then(authStatus => {
    return getUser(authStatus); // returns a new promise which may use the authStatus we fetched
  })
  .then(user => {
    console.log(user.name); // prints the user name
  })
  .catch(error => {
    // handle error here
  });
```
Now what about RxJS Observable ?
Although relatively new to the JavaScript world, RxJS Observable already gained quite some ground.
There are good reasons for that. The main reason however is working with streams of data. If you are working with streams of data instead of single values RxJS is the go to library. The data source (for example a button getting clicked) may emit multiple values. It could also only emit one — we don’t know! Or maybe we do even know that we’ll only receive one data object (e.g. HTTP request + response) — this can still be treated as a stream of event(s) and hence we may use RxJS Observable.
Let’s do the same example with observable

```javascript
const bt = document.querySelector("button");
const result = document.getElementById("k")

const firstObserve = callBack => {
  result.textContent = "First Observable is loading";
  return Rx.Observable.create( observer => {
    setTimeout(() => {
      observer.next(true);
    }, 2000);
  })
};

const secondObserve = callBack => {
  return Rx.Observable.create(observer => {
    result.textContent = "Second Observable is loading";
    setTimeout(() => {
      observer.next(true);
    }, 2000);
  })
};

Rx.Observable.fromEvent(bt, 'click')
  .switchMap(event => firstObserve())
  .switchMap(isTrue => {
    if (isTrue) {
      return secondObserve()
    }
  })
  .subscribe( () => {
    result.textContent = "Got Apple";
  })
```
With **subscribe()**, we actually subscribe to all the data pieces the observable recognizes. Remember? We do have a stream of data pieces. Whenever a new piece appears, our subscription gets informed. We then react by passing a function as the first argument to **subscription()**
I myself am pretty new with RxJS. However, I will write a more detailed article about observable later. For now I hope I gave you a simple overview of callbacks, promises and observable. Cheers :)
