/*============================================
; Title: Assignment 2.3
; Author: Professor Krasso 
; Date: 7 May 2019
; Modified By: Alan Edwards
; Description: API GATEWAY
;===========================================
*/


var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;
config.web.secret ='topsecret'
