# AJAX

## Topics to cover:

* [X] What is AJAX?
* [X] How to use AJAX?
    * [X] XML-HTTP-Request Object
    * [X] Fetch
    * [X] JQuery

### What is AJAX
---
AJAX = _Asynchronous JavaScript and XML_. Thanks to AJAX, web applications can send and receive data asynchronously without requiring a browser refresh.

![Ajax Workflow](https://github.com/C-Shi/lhl-flex-lecture/blob/main/module_4/ajax/image/ajax.png?raw=true)


The widespread use of AJAX was one of the factors that led to Web 2.0. It originally retrieved data sent using XML, but modern applications use JSON instead.

### Sending AJAX request
---
1. Legacy way of sending AJAX using `XMLHttpRequest`

```js
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(xhhtp.responseText);
  } else if (this.readyState == 4 && this.status >= 400) {
    console.log('http error')
  }
}
xhttp.onerror = function() {
  console.log('There is a network error')
}
xtttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true)
xhttp.send()
```

AJAX is implemented using the XMLHttpRequest (XHR) object. Modern libraries (such as jQuery or axios) provide us with easy-to-use wrappers for the XHR object.

2. Modern AJAX with Promise based library

jQuery gives us an API for making AJAX requests:

```js
jquery.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response))
  .catch(err => console.log(err))

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

### Ajax Workflow
---

1. Provide the inital HTML page
2. Determine and import the tool for AJAX
3. Determine when to fire an ajax request --> DOM event
4. Determine where and what to send in request
5. Determine the action upon receiving the response

![ajax design](https://github.com/C-Shi/lhl-flex-lecture/blob/main/module_4/ajax/image/ajax_design.png?raw=true)


