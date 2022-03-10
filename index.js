const csv = require('csvtojson');
const fs = require('fs').promises;

const csvRuleFilePath = './data2.csv';
const csvDataFilePath = './data.csv';

const run = async () => {
    const jsonRuleArray = await csv().fromFile(csvRuleFilePath);
    let data = await fs.readFile(csvDataFilePath, 'binary');

    jsonRuleArray.forEach(({kw, key}) => {
        data = data.replace(new RegExp(kw, 'g'), key);
    });

    await fs.writeFile('result.csv', data);
};

run();