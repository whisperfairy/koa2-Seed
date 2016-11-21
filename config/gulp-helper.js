/**
 * Created byon .
 *  User:  whisperfairy
 *  Date:  2016/11/19
 *  Time:  15:37
 */
"use strict"
const path = require('path');
const config =require('./GlobalConfig')
function filepath(filepath){
    let filename = path.basename(filepath);
    let folderPath =path.relative(config.SourceDir,path.dirname(filepath).toString());
    let result={
        filename:filename,
        folderPath:folderPath
    };
    return result;
};
exports.filepath=filepath;