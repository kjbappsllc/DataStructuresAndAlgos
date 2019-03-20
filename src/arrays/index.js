
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

export const largestConsecutiveSubSequence = (array) => {
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

export const maximumLengthSubArray = (array, S) => {
    const cache = {}
    let sum = 0
    let len = 0
    let ending_index = -1
    cache[sum] = -1
    for(let [index, element] of array.entries()) {
        sum += element
        if(cache[sum] == void 0) {
            cache[sum] = index
        }
        if(cache[sum - S] != void 0 && len < index - cache[sum - S]) {
            len = index - cache[sum - S]
            ending_index = index
        }
    }
    return array.slice(ending_index - len + 1, ending_index + 1)
}