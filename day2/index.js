const challenge1 = (input) => {
    const getLetterCounts = (box) => {
        return box.split('').reduce((counts, letter) => {
            if(!counts[letter]) { return Object.assign({}, counts, {[letter]: 1}); }
            return Object.assign({}, counts, {[letter]: counts[letter] + 1}); 
        }, {})
    }

    const [twice, thrice] = input.reduce(([twice, thrice], input) => {
        const counts = getLetterCounts(input);
        const inputTwice = Object.keys(counts).find((key) => { return counts[key] === 2; });
        const inputThrice = Object.keys(counts).find((key) => { return counts[key] === 3; });

        return [
            inputTwice ? twice + 1 : twice,
            inputThrice ? thrice + 1 : thrice
        ]
    }, [0, 0]);
    return twice * thrice;
}

const challenge2 = (input) => {
    const diffBox = (box1, box2) => {
        return box1.split('').filter((char, index) => {
            if(box2[index] === char) { return true; }
            return false;
        }).join('');
    }

    for (let index1 = 0; index1 < input.length; index1++) {
        const box1 = input[index1];
        for (let index2 = 0; index2 < input.length; index2++) {
            const box2 = input[index2];
            const diff = diffBox(box1, box2);
            if(diff.length === box1.length - 1) {
                return diff;
            }
        }
    }
}

module.exports = {challenge1, challenge2}