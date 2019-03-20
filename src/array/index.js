
//utility
const XOR = (a,b) => (!a != !b)
//
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

export const binaryArraySort = (array) => {
    let zeroes = 0
    for(let element of array) {
        !element && (zeroes += 1)
    }
    return Array(zeroes).fill(0).concat(Array(array.length - zeroes).fill(1))
}

export const largestConsecutiveSubArray = (array) => {
    const cache = {}
    array.forEach(element => {
        const rightIndex = element + 1
        const leftIndex = element - 1
        if(!cache[element]) {
            let right = cache[rightIndex] || 0
            let left = cache[leftIndex] || 0
            const sum = left + right + 1
            cache[element] = sum
            let rightCursor = rightIndex
            while(right) {
                right = cache[rightCursor] && (cache[rightCursor] = sum)
                rightCursor += 1
            }
            let leftCursor = leftIndex
            while(left) {
                left = cache[leftCursor] && (cache[leftCursor] = sum)
                leftCursor += 1
            }
        }
    })
    return Object.values(cache).reduce((acc, curr) => {
        return curr > acc ? curr : acc
    }, 0)
}