
export const pairWithSum = (array, sum) => {
    const cache = {}
    const pairs = []
    for(let [index, element] of array.entries()) {
        if (cache[sum - element] != void 0) {
            pairs.push([cache[sum - element], index])
        }
        cache[element] = index
    }
    return pairs
}