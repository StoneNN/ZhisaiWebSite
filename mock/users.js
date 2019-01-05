import Mock from 'mockjs';

var loginTemplate = {

  'loginUsers': [
    {
      name: 'qqq',
      pwd: '111',
      avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543658561441&di=7fc0b65a68aef402cac6ed37325c5049&imgtype=0&src=http%3A%2F%2Fwww.jituwang.com%2Fuploads%2Fallimg%2F151019%2F258155-15101910414326.jpg'
    },
    {
      name: 'www',
      pwd: '222',
      avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543663171203&di=1983a4a8a9c4a04e96d1282a086ad99d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c52955531ee90000009c504451a0.jpg'
    }
  ]
}

var loginData = Mock.mock(loginTemplate);

export default {
    'POST /api/login': (req,res)=>{
         console.log('------ req.body ------',req.body);
         const {name,pwd,method} = req.body;
        if(method==='accountLogin'){
            console.log('===========req==',loginData,req.body);
            console.log('loginTemplate-----',loginTemplate);
            console.log('loginData-----',loginData);
        
            const userArr = loginData.loginUsers.filter(
              item => (
                item.name === req.body.name && item.pwd === req.body.pwd
              )
            )
            console.log('--- userArr ---',userArr);
            if (userArr.length ===1) {
              console.log('验证通过');
              res.send({
                success:true,
                userData:userArr
              });
            } else {
              console.log('验证失败');
              res.send({success:false});
            }
         }
      
        // res.json(dataSource);
  }
}
