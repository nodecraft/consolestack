Installation
=============
    npm install consolestack

What does it do?
=============

Console stack is a very simple library that appends a stacktrace line number to each console message for improved debugging. This becomes helpful for larger node.js applications.

How to use it
=============
Simply require the library and the rest is done automatically.

```javascript
    require('consolestack');
```

Changelog
=============

`1.0.1`
 - Added console.out as a method to avoid stamp output.
 - Stack trace now excludes CWD for logging
 `1.0.0`
 - Release Version