//Rules, non modifier:
        // Match, take prev diagonal.
        // Does not match, make 0
    //Rules, with Modifier:
        // Match, take max between top and left
        // Does not match, take top
export const regex = (s, p) => {
    const MODIFIER = "*"
    const doesMatch = (c, p) => {
        if(p === ".") {
            return 1
        }
        if(c === p[0]) {
            return 1
        }
        return 0
    }
    const getTop = (stringMap, i, j) => (stringMap[i - 1] && stringMap[i - 1][j]) || 0
    const getDiagonal = (stringMap, i, j) => (stringMap[i - 1] && stringMap[i - 1][j - 1]) || 0
    const getLeft = (stringMap, i, j, isModified) => stringMap[i][j - 1] != void 0 ? stringMap[i][j - 1] : isModified 
    const hasModifier = (p) => p[1] === MODIFIER
    const parseP = () => {
        const charArr = []
        for(let i = 0; i < p.length; i++) {
            const currChar = p[i]
            const nextChar = p[i+1]
            if(nextChar === MODIFIER) {
                currChar += nextChar
                i += 1
            }
            charArr.push(currChar)
        }
        return charArr
    }
    const patternArr = parseP()
    const stringMap = [...Array(patternArr.length)].map(_ => Array(s.length).fill(0))
    for(let i = 0; i < stringMap.length; i++) {
        let isModified = hasModifier(patternArr[i])
        for(let j = 0; j < stringMap[i].length; j++) {
            const matches = doesMatch(s[j], patternArr[i])
            if(i === 0 && j === 0) {
                if(matches) stringMap[0][0] = 1
                continue
            }
            if(matches) {
                if(!isModified) {
                    stringMap[i][j] = getDiagonal(stringMap, i, j)
                } else {
                    const top = getTop(stringMap, i, j)
                    const left = getLeft(stringMap, i, j, isModified)
                    stringMap[i][j] = Math.max(top, left)
                }
            } else {
                if(!isModified) {
                    stringMap[i][j] = 0
                } else {
                    stringMap[i][j] = getTop(stringMap, i, j)
                }
            }
        }
    }
    const len = stringMap.length - 1
    const innerLen = stringMap[len].length - 1
    return !!stringMap[len][innerLen]
}