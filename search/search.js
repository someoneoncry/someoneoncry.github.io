var fs = require("fs");
// 载入模块
var Segment = require('segment');
// 创建实例
var segment = new Segment();
// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();


// 同步读取
var data = require('./search.json');

function delHtmlTag(str) {
    return str.replace(/<[^>]+>/g, "");//去掉所有的html标记
}

function tokenize(seg, text) {
    return seg.doSegment(
        delHtmlTag(text),
        {
            simple: true,
            stripPunctuation: true,
            stripStopword: true,
            convertSynonym: true
        }
    )
}

for (var i = 0; i < data.length; ++i) {
    console.log(tokenize(segment, data[i].content));
}
</[^>