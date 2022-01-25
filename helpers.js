/*
 * An object with method for incrementing index
 */
function createIncrementableIndex() {
    return {
        lastIndex: 0,
        next: function() {
            return ++this.lastIndex;
        }
    };
}