/*
 * An object with method for incrementing index
 */
function createIncrementableIndex(lastIndex = 0) {
    return {
        lastIndex: lastIndex,
        next: function() {
            return ++this.lastIndex;
        }
    };
}

/*
 * Search for objects in an array
 */
function searchObjectArray(objectArray, query) {
    return objectArray.filter(obj => {
        for (let key in query) {
            if (!(key in obj) || query[key] !== obj[key]) return false;
        }
        return true;
    });
}