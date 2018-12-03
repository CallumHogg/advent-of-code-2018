const challenge1 = (input) => {
    const parseInput = (input) => {
        const id = input.split(' @ ')[0].replace('#', '');
        const left = Number(input.split(' @ ')[1].split(':')[0].split(',')[0]);
        const top = Number(input.split(' @ ')[1].split(':')[0].split(',')[1]);
        const width = Number(input.split(' @ ')[1].split(': ')[1].split('x')[0]);
        const height = Number(input.split(' @ ')[1].split(': ')[1].split('x')[1]);
        return {id, left, top, width, height}
    }

    const getCoords = (input) => {
        let coords = []
        const {height, width, left, top} = input
        for (let x = left; x < left + width; x++) {
            for (let y = top; y < top + height; y++) {
                coords = coords.concat({x, y});
            }
        }
        return coords;
    }

    const inputs = input.map(parseInput);
    const areaCoords = inputs.map(getCoords);
    const board = {}

    areaCoords.forEach(coords => {
        coords.forEach(({x, y}) => {
            const coord = `${x},${y}`;
            if(board[coord]) { return board[coord] = board[coord] + 1; }
            return board[coord] = 1;
        })
    });

    return Object.keys(board).filter(coord => {
        return board[coord] > 1;
    }).length;
}

const challenge2 = (input) => {
    const parseInput = (input) => {
        const id = input.split(' @ ')[0].replace('#', '');
        const left = Number(input.split(' @ ')[1].split(':')[0].split(',')[0]);
        const top = Number(input.split(' @ ')[1].split(':')[0].split(',')[1]);
        const width = Number(input.split(' @ ')[1].split(': ')[1].split('x')[0]);
        const height = Number(input.split(' @ ')[1].split(': ')[1].split('x')[1]);
        return {id, left, top, width, height}
    }

    const getCoords = (input) => {
        let coords = []
        const {height, width, left, top} = input
        for (let x = left; x < left + width; x++) {
            for (let y = top; y < top + height; y++) {
                coords = coords.concat({x, y});
            }
        }
        return coords;
    }

    const inputs = input.map(parseInput);
    const areaCoords = inputs.map(getCoords);
    const board = {}

    areaCoords.forEach(coords => {
        coords.forEach(({x, y}) => {
            const coord = `${x},${y}`;
            if(board[coord]) { return board[coord] = board[coord] + 1; }
            return board[coord] = 1;
        })
    });

    return inputs.find((input, index) => {
        const coords = areaCoords[index];
        return coords.filter(({x, y}) => {
            const coord = `${x},${y}`;
            return board[coord] === 1;
        }).length === coords.length
    }).id
}

module.exports = {challenge1, challenge2}