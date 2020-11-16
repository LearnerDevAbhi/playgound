

const fs=require('fs');
const dummydta=fs.readFileSync('1-json.json')
//const stringDta=JSON.toString(dummydta)
//const data=JSON.parse(dummydta);
const stringdata=dummydta.toString()
const user=JSON.parse(stringdata)
user.name='abhji tiwari'
user.Age=25
const userJson=JSON.stringify(user)
fs.writeFileSync('1-json.json',userJson)




// const book={
//     title:'Check Code With Abhishek',
//     author:'Abhishek Tiwari'
// }
// const bookJson=JSON.stringify(book);
// //console.log(bookJson.title)
// // const parseBook=JSON.parse(bookJson)
// // console.log(parseBook.author)
// //fs.writeFileSync('1-json.json',bookJson);
// const bufferdata=fs.readFileSync('1-json.json');
// const datajson=bufferdata.toString();
// const data=JSON.parse(datajson)
// console.log(data.title)