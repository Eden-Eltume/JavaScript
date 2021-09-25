function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key]; //asssignment of same key-name with the sourceObject value
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}