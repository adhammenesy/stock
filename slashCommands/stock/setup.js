const _0x2bac35=_0x597f;function _0x3386(){const _0x25a52a=['buy_channel','getUser','./add','200YpytYG','ChatInput','1316637cZraTr','reply','receipient','129105WvGjpF','setup\x20buy.','feedback_channel','logs\x20channel','client_role','probot','The\x20Client\x20Role','setup','getChannel','Feedback\x20channel','feedback','pro.db','log','options','16435yoJylI','427236WFkDfq','set','buyroom','11LUwtua','discord.js','logs_channel','1974vJEcnl','2UnnncP','74241iiapHk','6896210gvppki','exports','getRole','4665gqmiuS'];_0x3386=function(){return _0x25a52a;};return _0x3386();}(function(_0x279d9e,_0x517b49){const _0x2e9630=_0x597f,_0x56aa80=_0x279d9e();while(!![]){try{const _0x37df71=parseInt(_0x2e9630(0x207))/0x1*(parseInt(_0x2e9630(0x1eb))/0x2)+parseInt(_0x2e9630(0x1f9))/0x3+parseInt(_0x2e9630(0x208))/0x4+parseInt(_0x2e9630(0x1f0))/0x5*(-parseInt(_0x2e9630(0x1ea))/0x6)+-parseInt(_0x2e9630(0x1f6))/0x7+parseInt(_0x2e9630(0x1f4))/0x8*(-parseInt(_0x2e9630(0x1ec))/0x9)+parseInt(_0x2e9630(0x1ed))/0xa*(parseInt(_0x2e9630(0x20b))/0xb);if(_0x37df71===_0x517b49)break;else _0x56aa80['push'](_0x56aa80['shift']());}catch(_0x1c67de){_0x56aa80['push'](_0x56aa80['shift']());}}}(_0x3386,0x25c03));function _0x597f(_0x2e4a32,_0x2851b7){const _0x3386d8=_0x3386();return _0x597f=function(_0x597f95,_0x1030eb){_0x597f95=_0x597f95-0x1ea;let _0x497211=_0x3386d8[_0x597f95];return _0x497211;},_0x597f(_0x2e4a32,_0x2851b7);}const {ApplicationCommandType}=require(_0x2bac35(0x20c)),{options}=require(_0x2bac35(0x1f3)),db=require(_0x2bac35(0x204));module[_0x2bac35(0x1ee)]={'name':_0x2bac35(0x200),'description':_0x2bac35(0x1fa),'type':ApplicationCommandType[_0x2bac35(0x1f5)],'cooldown':0xbb8,'options':[{'name':'buy_channel','description':'Buy\x20Channel','required':!![],'type':0x7},{'name':_0x2bac35(0x20d),'description':_0x2bac35(0x1fc),'required':!![],'type':0x7},{'name':_0x2bac35(0x1fb),'description':_0x2bac35(0x202),'required':!![],'type':0x7},{'name':_0x2bac35(0x1fd),'description':_0x2bac35(0x1ff),'required':!![],'type':0x8},{'name':_0x2bac35(0x1fe),'description':_0x2bac35(0x1fe),'required':!![],'type':0x6},{'name':'bank','description':'The\x20receipient','required':!![],'type':0x6}],'run':async(_0xf1aefc,_0x5a5719)=>{const _0xcb8e0=_0x2bac35,_0x3e395b=_0x5a5719[_0xcb8e0(0x206)][_0xcb8e0(0x201)](_0xcb8e0(0x1f1)),_0x40be03=_0x5a5719[_0xcb8e0(0x206)]['getChannel'](_0xcb8e0(0x20d)),_0x5d4f50=_0x5a5719[_0xcb8e0(0x206)][_0xcb8e0(0x201)](_0xcb8e0(0x1fb)),_0x4cf901=_0x5a5719[_0xcb8e0(0x206)][_0xcb8e0(0x1ef)]('client_role'),_0x37e183=_0x5a5719['options']['getUser'](_0xcb8e0(0x1fe)),_0x2bed26=_0x5a5719[_0xcb8e0(0x206)][_0xcb8e0(0x1f2)]('bank');await db[_0xcb8e0(0x209)](_0xcb8e0(0x205),_0x40be03['id']),await db[_0xcb8e0(0x209)](_0xcb8e0(0x1fd),_0x4cf901['id']),await db[_0xcb8e0(0x209)]('buyroom',_0x3e395b['id']),await db['set'](_0xcb8e0(0x20a),_0x3e395b['id']),await db[_0xcb8e0(0x209)](_0xcb8e0(0x1f8),_0x2bed26['id']),await db[_0xcb8e0(0x209)](_0xcb8e0(0x203),_0x5d4f50['id']),_0x5a5719[_0xcb8e0(0x1f7)]('**\x20Done\x20Set\x20All\x20Settings\x20Success\x20**');}};