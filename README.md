# stream-shift

Returns the next buffer/object in a stream's readable queue

```
npm install stream-shift
```

## Usage

``` js
var shift = require('stream-shift')

console.log(shift(someStream)) // first item in its buffer
```

## Credit

Thanks [@dignifiedquire](https://github.com/dignifiedquire) for making this work on node 6

## License

MIT
