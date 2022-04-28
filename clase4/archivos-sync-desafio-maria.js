const fs = require('fs');


try {
    const fyh = fs.readFileSync('./fyh.txt', 'utf-8');
    console.log(fyh) 
} catch (err) {
    console.error(err.message);
}