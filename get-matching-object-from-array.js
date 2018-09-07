/**
 * @description Supply two arguments; an Array of Objects, and an Object that you want to match on. The "objectToMatch" does not have to include ALL of the properties that the Object in the Array has, only some of them. Therefore if you pass {a: "A", b: "B"} as your "objectToMatch" and there is an object {a: "A", b: "B", c: "C", d: "D", ...} in "arr", that Object will be returned. If no match is found, null is returned.
 * @param {Object[]} arr An Array that you want to search for a partial object in.
 * @param {{}} objectToMatch The partial object that you want to match on.
 * @returns {({}|null)}
 */

const getMatchingObjectFromArray = (arr, objectToMatch) => {
  let value = null;

  arr.some(o => {
    let arrayHasMatchingObject = false;
    for (prop in objectToMatch) {
      if (o.hasOwnProperty(prop) && o[prop] === objectToMatch[prop]) {
        arrayHasMatchingObject = true;
      } else arrayHasMatchingObject = false;
    }
    if (arrayHasMatchingObject) {
      value = o;
      return true;
    } else {
      return false;
    }
  });

  return value;
};

module.exports = getMatchingObjectFromArray;
