var https = require('https');
var fs = require('fs');
var request = require('request');
var sharp = require('sharp');
var getArticle = require('./getArticle')
var getNews = require('./getNews')
var getUser = require('./getUser')
var express = require('express');
var bodyParser = require('body-parser');
var word = require('./words');
const mongoose = require('mongoose');

var privateKey = fs.readFileSync('ca/nginx.key', 'utf8'); //这里输入你的证书所在位置
var certificate = fs.readFileSync('ca/nginx.crt', 'utf8'); //这里输入你的证书所在位置
var credentials = { key: privateKey, cert: certificate };

var app = express();

//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//设置跨域访问
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


//当服务器收到get请求的时候的操作
app.get('/', (req, res) => {
    var data = "这是从数据库中取得数据，说白了就是一堆json";
});

app.get('/test', (req, res) => {
    var data = "这是从数据库中取得数据，说白了就是一堆json";
    console.log(req);
    console.log("听见了")
});


app.post('/getall', (req0, res0) => {

    console.log(req0.body.params.user);
    console.log(typeof(req0.body.params.user));
    mongoose.connect('mongodb://127.0.0.1:27017/word', { useNewUrlParser: true });
    let user = mongoose.model(req0.body.params.user, word.UserSchema);
    user.find((err1, res1) => {
        // console.log(res1);
        let final = [];
        for (let i = 0; i < res1.length; i++) {
            // console.log(res1[i].data);
            //处理时间
            let tmp = res1[i].data;
            let unix = tmp.getTime();

            let interval = [unix + 86400000, unix + (86400000 * 4), unix + (86400000 * 11), unix + (86400000 * 41)];
            //根据status对返回的时间进行筛选
            //如果status是4，那么返回四个圈

            if (res1[i].status == 4) {
                let copy = [];
                for (let j = 0; j < 4; j++) {
                    // console.log(interval[j]);
                    let date = new Date(interval[j]);
                    console.log(date);
                    res1[i].data = date;
                    //这里很诡异
                    //如果不进行序列化的话最后push进去的四个值全是最后的对象
                    copy.push(JSON.stringify(res1[i]));
                    console.log("copy现在是" + copy);
                }
                //很傻  还他妈的要解序列化卧槽
                for (let i = 0; i < copy.length; i++) {
                    copy[i] = JSON.parse(copy[i]);
                }
                console.log("数组")
                console.log(copy)
                final.push(...copy);
            };
            //同理
            if (res1[i].status == 3) {
                let copy = [];
                for (let j = 1; j < 4; j++) {
                    // console.log(interval[j]);
                    let date = new Date(interval[j]);
                    console.log(date);
                    res1[i].data = date;
                    //这里很诡异
                    //如果不进行序列化的话最后push进去的四个值全是最后的对象
                    copy.push(JSON.stringify(res1[i]));
                    console.log("copy现在是" + copy);
                }
                //很傻  还他妈的要解序列化卧槽
                for (let i = 0; i < copy.length; i++) {
                    copy[i] = JSON.parse(copy[i]);
                }
                console.log("数组")
                console.log(copy)
                final.push(...copy);
            };
            if (res1[i].status == 2) {
                let copy = [];
                for (let j = 2; j < 4; j++) {
                    // console.log(interval[j]);
                    let date = new Date(interval[j]);
                    console.log(date);
                    res1[i].data = date;
                    //这里很诡异
                    //如果不进行序列化的话最后push进去的四个值全是最后的对象
                    copy.push(JSON.stringify(res1[i]));
                    console.log("copy现在是" + copy);
                }
                //很傻  还他妈的要解序列化卧槽
                for (let i = 0; i < copy.length; i++) {
                    copy[i] = JSON.parse(copy[i]);
                }
                console.log("数组")
                console.log(copy)
                final.push(...copy);
            };
            if (res1[i].status == 1) {
                let copy = [];
                for (let j = 3; j < 4; j++) {
                    // console.log(interval[j]);
                    let date = new Date(interval[j]);
                    console.log(date);
                    res1[i].data = date;
                    //这里很诡异
                    //如果不进行序列化的话最后push进去的四个值全是最后的对象
                    copy.push(JSON.stringify(res1[i]));
                    console.log("copy现在是" + copy);
                }
                //很傻  还他妈的要解序列化卧槽
                for (let i = 0; i < copy.length; i++) {
                    copy[i] = JSON.parse(copy[i]);
                }
                console.log("数组")
                console.log(copy)
                final.push(...copy);
            };
        }
        console.log(final);
        console.log(final);
        res0.send(final);
    })

})

//返回有单词的日期的圈
app.post('/showdate', (req0, res0) => {
    console.log(req0.body.params.user);
    console.log(typeof(req0.body.params.user));
    mongoose.connect('mongodb://127.0.0.1:27017/word', { useNewUrlParser: true });
    let user = mongoose.model(req0.body.params.user, word.UserSchema);
    user.find((err1, res1) => {
        console.log(res1);
        let set = new Set();
        for (let i = 0; i < res1.length; i++) {
            //处理时间
            let tmp = res1[i].data;
            let unix = tmp.getTime();
            console.log("时间戳 :" + unix)
            let interval = [unix + 86400000, unix + (86400000 * 4), unix + (86400000 * 11), unix + (86400000 * 41)];
            if (res1[i].status == 4) {
                for (let j = 0; j < 4; j++) {
                    let time = new Date(interval[j]);
                    let year = time.getFullYear();
                    let month = time.getMonth() + 1;
                    let day = time.getDate();
                    let full = year + "/" + month + "/" + day;
                    set.add(full);
                };
            }
            if (res1[i].status == 3) {
                for (let j = 1; j < 4; j++) {
                    let time = new Date(interval[j]);
                    let year = time.getFullYear();
                    let month = time.getMonth() + 1;
                    let day = time.getDate();
                    let full = year + "/" + month + "/" + day;
                    set.add(full);
                };
            }
            if (res1[i].status == 2) {
                for (let j = 2; j < 4; j++) {
                    let time = new Date(interval[j]);
                    let year = time.getFullYear();
                    let month = time.getMonth() + 1;
                    let day = time.getDate();
                    let full = year + "/" + month + "/" + day;
                    set.add(full);
                };
            }
            if (res1[i].status == 1) {
                for (let j = 3; j < 4; j++) {
                    let time = new Date(interval[j]);
                    let year = time.getFullYear();
                    let month = time.getMonth() + 1;
                    let day = time.getDate();
                    let full = year + "/" + month + "/" + day;
                    set.add(full);
                };
            }
        }
        console.log(set);
        let final = Array.from(set);
        console.log(final);
        res0.send(JSON.stringify(final));
    })
});
app.post('/getword', (req0, res0) => {
    let unix = req0.body.params.unix;
    console.log(unix);
    console.log(typeof(unix));
    let param_day = new Date(unix).toDateString();
    console.log(param_day);
    mongoose.connect('mongodb://127.0.0.1:27017/word', { useNewUrlParser: true });
    let user = mongoose.model(req0.body.params.user, word.UserSchema);
    user.find((err1, res1) => {
        //现在数据库里只有添加进去的时间
        let list = [];
        for (let i = 0; i < res1.length; i++) {
            console.log(res1[i].data);
            //取出每个单词的添加时间
            let db_unix = res1[i].data.getTime();
            console.log(db_unix);
            let one = new Date(db_unix + 86400000).toDateString();
            let three = new Date(db_unix + (86400000 * 4)).toDateString();
            let seven = new Date(db_unix + (86400000 * 11)).toDateString();
            let thirty = new Date(db_unix + (86400000 * 41)).toDateString();
            //这里也需要对单词状态进行判断
            if (res1[i].status == 4 && (param_day == one || param_day == three || param_day == seven || param_day == thirty)) {
                console.log(res1[i]);
                list.push(res1[i]);
            }
            if (res1[i].status == 3 && (param_day == three || param_day == seven || param_day == thirty)) {
                console.log(res1[i]);
                list.push(res1[i]);
            }
            if (res1[i].status == 2 && (param_day == seven || param_day == thirty)) {
                console.log(res1[i]);
                list.push(res1[i]);
            }
            if (res1[i].status == 1 && (param_day == thirty)) {
                console.log(res1[i]);
                list.push(res1[i]);
            }
        }
        // console.log(res1);
        // let final = new Set();
        // console.log(final);

        // console.log(list)
        res0.send(JSON.stringify(list));
    })

})


//想了想还是用get请求来更新单词状态吧。。。
app.get('/update', (req0, res0) => {
    console.log(req0.query.word);
    console.log(req0.query.user);
    let word = req0.query.word;
    mongoose.connect('mongodb://127.0.0.1:27017/word', { useNewUrlParser: true });
    mongoose.set('useFindAndModify', false);
    let user = mongoose.model(req0.query.user, word.UserSchema);
    user.findOne({ word, word }, (err1, res1) => {
        let status = res1.status;
        status--;
        user.findOneAndUpdate({ word: word }, { status: status }, (err2, res2) => {
            if (status == 0) {
                //如果说这个状态没有了，那么在更新完之后直接将其删除
                user.remove({ word: word }).then(res => {
                    console.log("删除成功");
                })
            }
            console.log("更新成功!");
            res0.send("更新成功")
        })
    })
});

app.post('/register', (req0, res0) => {
    console.log(req0.body)
        //查询数据库中是否已存在用
    mongoose.connect('mongodb://127.0.0.1:27017/word', { useNewUrlParser: true });
    var db = mongoose.connection;
    db.collection('users').findOne({ name: req0.body.params.name }, (err1, res1) => {
        if (res1) {
            console.log("里面已经有了");
            let exist = { ex: true };
            res0.send(JSON.stringify(exist));
        } else {
            db.collection('users').insertOne({
                name: req0.body.params.name,
                password: req0.body.params.password
            })
            var name = mongoose.model(req0.body.params.name, word.UserSchema);
            //先装进去一个单词，要不然集合显示不出来(我也很奇怪啊QAQ)
            name.create({
                word: "root",
                note: "can u hear me?"
            });
            let exist = { ex: false };
            res0.send(JSON.stringify(exist));
        }
    })

});

app.post('/login', (req0, res0) => {
    console.log(req0.body.params.name);
    mongoose.connect('mongodb://127.0.0.1:27017/word', { useNewUrlParser: true });
    var db = mongoose.connection;
    db.collection('users').findOne({
        name: req0.body.params.name
    }, (err1, res1) => {
        if (res1) {
            console.log("有这个用户，请输入密码...");
            if (res1.password === req0.body.params.password) {
                console.log("密码匹配")
                res0.send(JSON.stringify({ res: "match" }))
            } else(
                res0.send(JSON.stringify({ res: "error" }))
            )
        } else {
            res0.send(JSON.stringify({ res: "empty" }))
        }
    })
});

app.post('/addword', (req0, res0) => {
    console.log(req0.body.params.user);
    console.log(typeof(req0.body.params.user));
    console.log(req0.body.params.word);
    console.log(req0.body.params.note);

    mongoose.connect('mongodb://127.0.0.1:27017/word', { useNewUrlParser: true });
    var db = mongoose.connection;
    db.collection(req0.body.params.user).insertOne({
        word: req0.body.params.word,
        note: req0.body.params.note,
        data: Date.now(),
        defn: req0.body.params.defn,
        commit: req0.body.params.commit,
        audio: req0.body.params.audio,
        status: 4
    }, (err1, res1) => {
        console.log(res1.result.ok);
        res0.send(JSON.stringify(res1.result.ok));
    })
});


app.use('/static', express.static('./static/'));

app.use('/images', express.static('./images/'));

app.use('/music', express.static('./resources/music'));

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8444, () => console.log('跑在8444'));