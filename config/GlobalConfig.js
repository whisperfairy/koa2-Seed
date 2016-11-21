/**
 * Created byon .
 *  User:  whisperfairy
 *  Date:  2016/11/19
 *  Time:  14:27
 */
const path =require('path')
const GlobalConfig ={
    'distdir':path.join(__dirname,'../server/bin'),
    'SourceDir':path.join(__dirname,'../server/src'),
    'webpackDir':path.join(__dirname,'../webpack'),
    'publicPath':path.join(__dirname,'../server/bin')
}
module.exports = GlobalConfig;