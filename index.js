const _0x37886c=_0x3ce5;(function(_0x198fd6,_0x1afe98){const _0x575c40=_0x3ce5,_0x4512ff=_0x198fd6();while(!![]){try{const _0x151594=parseInt(_0x575c40(0x190))/0x1+parseInt(_0x575c40(0x19d))/0x2*(parseInt(_0x575c40(0x184))/0x3)+parseInt(_0x575c40(0x1a1))/0x4+-parseInt(_0x575c40(0x188))/0x5+-parseInt(_0x575c40(0x18b))/0x6+-parseInt(_0x575c40(0x17c))/0x7*(parseInt(_0x575c40(0x181))/0x8)+-parseInt(_0x575c40(0x18c))/0x9*(parseInt(_0x575c40(0x186))/0xa);if(_0x151594===_0x1afe98)break;else _0x4512ff['push'](_0x4512ff['shift']());}catch(_0x5d97a8){_0x4512ff['push'](_0x4512ff['shift']());}}}(_0x5398,0x3a51d));const {Client,GatewayIntentBits,Partials,Collection}=require(_0x37886c(0x17e)),client=new Client({'intents':[GatewayIntentBits[_0x37886c(0x19c)],GatewayIntentBits['GuildMessages'],GatewayIntentBits[_0x37886c(0x19e)],GatewayIntentBits[_0x37886c(0x196)],GatewayIntentBits[_0x37886c(0x18d)]],'partials':[Partials[_0x37886c(0x17d)],Partials[_0x37886c(0x191)],Partials[_0x37886c(0x19a)],Partials[_0x37886c(0x189)],Partials[_0x37886c(0x179)]]}),fs=require('fs'),config=require('./config.json');require(_0x37886c(0x195))['config'](),client[_0x37886c(0x182)]=new Collection(),client['aliases']=new Collection(),client[_0x37886c(0x18e)]=new Collection(),client[_0x37886c(0x17b)]=new Collection(),client[_0x37886c(0x187)]=config[_0x37886c(0x187)],module[_0x37886c(0x18f)]=client,fs['readdirSync'](_0x37886c(0x19f))[_0x37886c(0x194)](_0x4ffadb=>{require('./handlers/'+_0x4ffadb)(client);}),process['on'](_0x37886c(0x1a0),(_0xeb2f67,_0x526e21)=>{const _0x5c3c31=_0x37886c;console[_0x5c3c31(0x17f)](_0x5c3c31(0x185),_0x526e21,_0x5c3c31(0x180),_0xeb2f67);}),process['on'](_0x37886c(0x19b),_0x4737ff=>{const _0x2aeb7a=_0x37886c;console[_0x2aeb7a(0x17f)](_0x2aeb7a(0x192),_0x4737ff),process[_0x2aeb7a(0x18a)](0x1);});const gracefulShutdown=()=>{const _0x2ace67=_0x37886c;console[_0x2ace67(0x199)](_0x2ace67(0x197)),client[_0x2ace67(0x17a)](),process[_0x2ace67(0x18a)](0x0);};function _0x3ce5(_0x55eefa,_0x1289c1){const _0x53989e=_0x5398();return _0x3ce5=function(_0x3ce5eb,_0x4fad3c){_0x3ce5eb=_0x3ce5eb-0x179;let _0x43d274=_0x53989e[_0x3ce5eb];return _0x43d274;},_0x3ce5(_0x55eefa,_0x1289c1);}function _0x5398(){const _0xfa3348=['SIGTERM','forEach','dotenv','DirectMessages','Shutting\x20Down\x20Gracefully...','env','log','User','uncaughtException','Guilds','14362QwQFHO','GuildMessageReactions','./handlers','unhandledRejection','1463076DMKvTf','Reaction','destroy','buttons','93919KqUNzg','Channel','discord.js','error','reason:','40hZpEJp','commands','TOKEN','141ZUrDQQ','Unhandled\x20Rejection\x20at:','39510zVkFxG','prefix','2222765RQkWYV','GuildMember','exit','1969740XBnXMU','27NNCJDO','MessageContent','slashCommands','exports','387382qoIcSz','Message','Uncaught\x20Exception\x20thrown:'];_0x5398=function(){return _0xfa3348;};return _0x5398();}process['on'](_0x37886c(0x193),gracefulShutdown),process['on']('SIGINT',gracefulShutdown),client['login'](process[_0x37886c(0x198)][_0x37886c(0x183)]);



// Your Code Here V14


