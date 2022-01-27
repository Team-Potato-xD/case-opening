/*
 * An object with method for incrementing index
 */
function createIncrementableIndex(start = 1) {
    return {
        lastIndex: start - 1,
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