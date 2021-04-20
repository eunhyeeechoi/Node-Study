const { renderFile } = require('ejs');
const express = require('express');
const app = express();

const server = app.listen(3000,()=>{
    console.log('Start Server : localhost:3000');
});

app.set('views',__dirname+'/view'); 
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
// dirname : 현재디렉토리 
// set : 정의
// ejs -> embeded javascript templage 약자 -> html 안에서 javascript 코드를 쓸 수 있게 해줌 jsp 와 비슷


app.get('/', function(req,res){
    //res.send('hello eunhye World!!');
    res.render('index.html');
});

app.get('/about', function(req,res){ // 라우터를 바꿈
    //res.send('about page');
    res.render('about.html');
});

