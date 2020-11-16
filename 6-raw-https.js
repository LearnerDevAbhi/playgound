const { request } = require("http");

const http = require('http');
    const foreURL="http://api.weatherstack.com/current?access_key=657b42e53976b3d737c8d9c60407620b&query=40,-75";

  const req= http.request(foreURL,(res)=>{
        let data=''
        res.on('data',(chunk)=>{
            data=data+chunk.toString()
        });
        res.on('end',()=>{
            const body=JSON.parse(data)
            console.log(body)
        })
    })
    req.on('error',(error)=>{
        console.log("Error:" +error)
    })
    req.end();