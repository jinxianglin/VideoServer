const schedule = require('node-schedule');
const yongjiuzyCrawler = require('../crawler/yongjiuzyCrawler');

function scheduleCrawler(){
    console.log("启动爬虫定时任务");
    schedule.scheduleJob('0 15 * * * *', function(){//每小时执行一次
        console.log('开始爬虫任务:' + new Date());
        yongjiuzyCrawler.startCrawler();
    }); 
}

exports.scheduleCrawler = scheduleCrawler;