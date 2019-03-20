
export const pairWithSum = (array, sum) => {
    const cache = {}
    for(let [index, element] of array.entries()) {
        if (cache[sum - element] != void 0) {
            return [cache[sum - element], index]
        }
        cache[element] = index
    }
}