/**
 * Lab Test 1 for Full Stack Development
 * @author: Jam Furaque
 */

const fs = require('fs');
const path = require('path');

const logs = path.join(__dirname, 'logs');
if(!fs.existsSync(logs)) {
    fs.mkdirSync(logs);
}

process.chdir(logs);
for (let i = 0; i < 10; i++){
    const file = `log${i}.txt`;
    fs.writeFileSync(file, `Log ${i}`);
    console.log(file);
}