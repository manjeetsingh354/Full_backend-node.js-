const fs = require('fs');
const username = 'max';
fs.writeFile('text-data.txt','name:' + username,(err)=>{
  if(err) {
    console.log(err);
    return;
  }

   console.log('file is written');
  
});