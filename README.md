# node-find-object-in-array
Helper function to find a particular Object in an Array of Objects

### My use case:
I use this function in my DataLoader batch loading functions in GraphQL servers. Let's say you use the array of keys passed to your batch loading function to query a database; something like this:
```js
const batchLoadingFunction = keys => {
  db.query({
    where: keys
  });
}
```
If you pass an Array of 3 keys, there is no guarantee that you will receive 3 items back from the query. So, with that in mind, I use the **node-find-object-in-array** helper to join together the initial set of keys with whatever data was returned, like so:
```js
const batchLoadingFunction = keys => {
  const data = await db.query({
    where: keys
  });
  
  const keysWithData = keys.map(key => nodeFindObjectInArray(data, key));
}
```
### Why?
The return value of a DataLoader batch loading function must be an Array with the same length, and in the same order as the key Array you passed. 
