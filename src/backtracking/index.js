
export const shortPathToGivenGoals = (board, startX, startY) => {
    const height = board.length
    const width = board[0].length
    const shortestPaths = {}
    const isValid = (x, y) => {
        return (y < height && y >= 0) && (x < width && x >= 0)
    }
    const isSafe = (visited, x, y) => {
        return (board[y][x] && !visited[y][x])
    }
    const findPath = (x, y, visited, paths) => {
        if(board[y][x] === 3 && !visited[y][x]) {
            visited[y][x] = 3
            shortestPaths[`goal${x},${y}`] = paths
            return
        }
        visited[y][x] = 1
        console.log(visited)
        if(isValid(x + 1, y) && isSafe(visited, x + 1, y)) {
            const newPath = [...paths, "RIGHT"]
            findPath(x + 1, y, visited, newPath)
        }
        if(isValid(x, y + 1) && isSafe(visited, x, y + 1)) {
            const newPath = [...paths, "DOWN"]
            findPath(x, y + 1, visited, newPath)
        }
        if(isValid(x - 1, y) && isSafe(visited, x - 1, y)) {
            const newPath = [...paths, "LEFT"]
            findPath(x - 1, y, visited, newPath)
        }
        if(isValid(x, y - 1) && isSafe(visited, x, y - 1)) {
            const newPath = [...paths, "UP"]
            findPath(x, y - 1, visited, newPath)
        }
        visited[y][x] = 0
    }
    const visited = [...Array(height)].map(_ => Array(width).fill(0))
    findPath(startX, startY, visited, [])
    console.log(shortestPaths)
}