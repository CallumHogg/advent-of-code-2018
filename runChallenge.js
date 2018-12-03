const fs = require('fs');

if(!process.env.DAY) { throw new Error('DAY is required') }
if(!process.env.CHALLENGE || process.env.CHALLENGE === '1') {
    const base = `./day${process.env.DAY}`
    const input = fs.readFileSync(`${base}/input1.txt`, 'utf-8');
    const func = require(`${base}`).challenge1;
    if(func && input) { 
        console.log('Challenge 1:', func(input.split('\n')));
    } else {
        console.error('Challenge 1 not yet defined');
    }
}
if(!process.env.CHALLENGE || process.env.CHALLENGE === '2') {
    const base = `./day${process.env.DAY}`
    const input = fs.readFileSync(`${base}/input2.txt`, 'utf-8');
    const func = require(`${base}`).challenge2;
    if(func && input) { 
        console.log('Challenge 2:', func(input.split('\n')));
    } else {
        console.error('Challenge 2 not yet defined');
    }
}