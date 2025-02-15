```javascript
// Correct usage of $inc operator with an array field
db.collection.updateOne( { _id: 1, "arr": { $elemMatch: { "_id": 1} } }, { $inc: { "arr.$.value": 1 } } );
// or using $set 
db.collection.updateOne( { _id: 1, "arr": { $elemMatch: { "_id": 1} } }, { $set: { "arr.$.value": yourNewValue } } );
```