let fs = require("fs");

  // creating folder
  
// fs.mkdirSync('Siyapa');

// creating file in Siyapa folder

fs.writeFileSync("Siyapa/bio.txt", 'HEre! I created a new file and writing some data in it.')

fs.writeFile("write.txt"," Going to wriiten  ", (err) =>{
     
    console.log("data appended");
    console.log(err);
 })

// now I'm going to append some data

fs.appendFileSync("Siyapa/bio.txt",   "     I'M the appended data ") 


 // reading data without getting buffer data wid sync approach

 let readingData = fs.readFileSync("Siyapa/bio.txt",'utf8');

 console.log(" your reading data without buffer",+ " ", readingData);

 // rename the file 

 fs.renameSync("Siyapa/bio.txt", "Siyapa/Mybio.txt")

 // we can delete using unlink sync any file

//  fs.unlinkSync("Siyapa/cohse.txt");