const nodemailer = require('nodemailer');

const email={
    "host":"",
    "port":"",
    "secure":false,
    "auth":{
        "user":"",
        "pass":""
    }
}
// email 을 보내는것을 해봄
const send = async (option) =>{
    nodemailer.createTransport(email).sendMail(option,(error,info)=>{
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }

    });
    //계정정보
};

let email_data={
    from:'abc@naver.com',
    to:'abc@naver.com',
    subject:'테스트 입니다.',
    text:'nodejs 한시간만에 끝내보자.'
}

send(email_data);