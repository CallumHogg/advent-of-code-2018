const challenge1 = (input) => {
    const operatorMap = {
        '-': (sum, value) => sum - value,
        '+': (sum, value) => sum + value,
    }

    return input.reduce((sum, input) => {
        const [operator, ...value] = input.split('');
        const operatorFunc = operatorMap[operator];
        if(!operatorFunc) { throw new Error(`Unkown operator ${operator}`); }
        return operatorFunc(sum, Number(value.join('')));
    }, 0)
}

const challenge2 = (input, sum=0, seen={'0': true}) => {
    const operatorMap = {
        '-': (sum, value) => sum - value,
        '+': (sum, value) => sum + value,
    }
    for (let index = 0; index < input.length; index++) {
        const [operator, ...value] = input[index].split('');
        const operatorFunc = operatorMap[operator];
        if(!operatorFunc) { throw new Error(`Unkown operator ${operator}`); }
        sum = operatorFunc(sum, Number(value.join('')));
        if(seen[sum]) { return sum; }
        seen[sum] = true;
    }
    return challenge2(input, sum, seen);
}

module.exports = {challenge1, challenge2}