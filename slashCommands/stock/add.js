function _0x442c(){const _0x238be9=['projects','626wiWjIr','random','add\x20an\x20projects\x20at\x20stock','getString','name','options','965794EhxdpL','startsWith','599992OENwEr','9955386lEuwoy','5175006lcKgmo','price','push','add','stock_data','The\x20Name','length','user','floor','Done\x20Added\x20Success','The\x20link','2571968yznlZb','ASDFGHJKLasdfghjklqwertyuiopQWERTYUIOPzxcvnmZXCVBNM','ChatInput','exports','❌\x20-\x20**\x20Please\x20Put\x20Valid\x20Link\x20**','https://','pro.db','The\x20price\x20like\x20[\x2030000\x20,\x20100000\x20]','63YHQwWD','link','9426DkHIjH','discord.js','reply','552420fdVlys','charAt'];_0x442c=function(){return _0x238be9;};return _0x442c();}function _0x4568(_0x54f2a4,_0x486ae5){const _0x442cfb=_0x442c();return _0x4568=function(_0x456802,_0x45373d){_0x456802=_0x456802-0x113;let _0x232e38=_0x442cfb[_0x456802];return _0x232e38;},_0x4568(_0x54f2a4,_0x486ae5);}const _0x5a3a10=_0x4568;(function(_0x40886b,_0x109308){const _0xbe36db=_0x4568,_0x84ed93=_0x40886b();while(!![]){try{const _0x438370=parseInt(_0xbe36db(0x116))/0x1+-parseInt(_0xbe36db(0x135))/0x2*(parseInt(_0xbe36db(0x12f))/0x3)+-parseInt(_0xbe36db(0x125))/0x4+-parseInt(_0xbe36db(0x132))/0x5+parseInt(_0xbe36db(0x11a))/0x6+-parseInt(_0xbe36db(0x12d))/0x7*(parseInt(_0xbe36db(0x118))/0x8)+parseInt(_0xbe36db(0x119))/0x9;if(_0x438370===_0x109308)break;else _0x84ed93['push'](_0x84ed93['shift']());}catch(_0x229a61){_0x84ed93['push'](_0x84ed93['shift']());}}}(_0x442c,0x7f928));const {ApplicationCommandType}=require(_0x5a3a10(0x130)),db=require(_0x5a3a10(0x12b));function generateCaptcha(_0x3f7d56){const _0x5376c8=_0x5a3a10;if(_0x3f7d56===!![]){const _0x5ea065='0123456789';let _0x1cc20a='';for(let _0x2ece1b=0x0;_0x2ece1b<0x6;_0x2ece1b++){_0x1cc20a+=_0x5ea065[_0x5376c8(0x133)](Math[_0x5376c8(0x122)](Math[_0x5376c8(0x136)]()*_0x5ea065[_0x5376c8(0x120)]));}return _0x1cc20a;}else{const _0x5d943e=_0x5376c8(0x126);let _0x230d3f='';for(let _0x28d7f2=0x0;_0x28d7f2<0x6;_0x28d7f2++){_0x230d3f+=_0x5d943e[_0x5376c8(0x133)](Math[_0x5376c8(0x122)](Math['random']()*_0x5d943e[_0x5376c8(0x120)]));}return _0x230d3f;}}module[_0x5a3a10(0x128)]={'name':'add','description':_0x5a3a10(0x137),'type':ApplicationCommandType[_0x5a3a10(0x127)],'cooldown':0xbb8,'options':[{'name':_0x5a3a10(0x114),'description':_0x5a3a10(0x11f),'required':!![],'type':0x3},{'name':_0x5a3a10(0x12e),'description':_0x5a3a10(0x124),'required':!![],'type':0x3},{'name':_0x5a3a10(0x11b),'description':_0x5a3a10(0x12c),'required':!![],'type':0x4}],'run':async(_0x47aaa6,_0x4dc007)=>{const _0x426443=_0x5a3a10,_0x18ce6a=_0x4dc007[_0x426443(0x115)][_0x426443(0x113)]('name'),_0x11de7f=_0x4dc007[_0x426443(0x115)]['getString'](_0x426443(0x12e)),_0xb09e50=_0x4dc007[_0x426443(0x115)][_0x426443(0x113)](_0x426443(0x11b));if(!_0x11de7f[_0x426443(0x117)](_0x426443(0x12a)))return _0x4dc007[_0x426443(0x131)](_0x426443(0x129));const _0x1408bf=generateCaptcha(!![]),_0x4055c5={'id':parseInt(_0x1408bf),'name':_0x18ce6a,'price':_0xb09e50,'link':''+_0x11de7f,'owner':''+_0x4dc007[_0x426443(0x121)]['id']};await db[_0x426443(0x11d)](_0x426443(0x134),0x1),await db[_0x426443(0x11c)](_0x426443(0x11e),_0x4055c5),_0x4dc007['reply']({'content':_0x426443(0x123)});}};