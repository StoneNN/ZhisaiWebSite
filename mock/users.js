import Mock from 'mockjs';

var loginTemplate = {

  'loginUsers': [
    {
      account: 'qqq',
      pwd: '111',
      userInfo:{
        avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543658561441&di=7fc0b65a68aef402cac6ed37325c5049&imgtype=0&src=http%3A%2F%2Fwww.jituwang.com%2Fuploads%2Fallimg%2F151019%2F258155-15101910414326.jpg',
        name:"王自健",
        gender:"先生",
        level:"桥牌五星终身大师",
        nickName:"孤独根号三",
        phone:"11012012306",
        weChat:"WZJ1314",
        QQ:"5543164",
        email:"wangzijian@sina.com",
        address:"中国河北省石家庄市裕华区裕华路110号",
        matchTeam:"河北宏鸿桥牌队"
      }      
    },
    {
      account: 'www',
      pwd: '222',
      userInfo:{
        avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543663171203&di=1983a4a8a9c4a04e96d1282a086ad99d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c52955531ee90000009c504451a0.jpg',
        name:"李明月",
        gender:"女士",
        level:"桥牌一星终身大师",
        nickName:"枫",
        phone:"1866465639",
        weChat:"wx96324",
        QQ:"5698464",
        email:"limingyue@163.com",
        address:"中国河北省石家庄市桥西区槐安路369号",
        matchTeam:"河北联通桥牌队"
      }    
    }
  ]
}

var loginData = Mock.mock(loginTemplate);

export default {
    'POST /api/login': (req,res)=>{
        console.log('------ req.body ------',req.body);
        const {account,pwd,method} = req.body;
        if(method==='accountLogin'){
            console.log('===========req==',loginData,req.body);
            console.log('loginTemplate-----',loginTemplate);
            console.log('loginData-----',loginData);
        
            const userArr = loginData.loginUsers.filter(
              item => (
                item.account === req.body.account && item.pwd === req.body.pwd
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
