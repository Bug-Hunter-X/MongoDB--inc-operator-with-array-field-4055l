# MongoDB $inc operator with array field
This example demonstrates an uncommon error when using the `$inc` operator with an array field in MongoDB.
The incorrect usage attempts to increment a specific element within the array, but this is not supported directly by the `$inc` operator.
The solution shows the correct way to update an array element using the `$` positional operator and the `$set` operator, addressing the common misconception of using `$inc` with array elements.
