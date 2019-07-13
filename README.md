# ken-fetch

`fetch()` 函数用于请求接口,其中包含 fetch.get() / fetch.post() / fetch.push() / fetch.delete()。

## Installation

```
npm install ken-fetch --save

const fetch = require('ken-fetch');
```

### GET JSON

```javascript
fetch.get('/users').then(users => {
  console.log(users);
});
```

### POST JSON

```javascript
fetch.post('/users', data).then(res => console.log(res));
```

### PUT JSON

```javascript
fetch.put('/users/:id', data).then(res => console.log(res));
```

### DELETE JSON

```javascript
fetch.delete('/users/:id').then(res => console.log(res));
```