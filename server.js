// Relay + web server for the Mexico GP metaverse.  Run:  npm install && node server.js
const http=require('http'),fs=require('fs'),path=require('path'),{WebSocketServer}=require('ws');
const PORT=process.env.PORT||8080,FILE=path.join(__dirname,'..','mexico-gp-2026-standalone.html');
const srv=http.createServer((q,r)=>{fs.readFile(FILE,(e,d)=>{if(e){r.writeHead(500);return r.end('Put mexico-gp-2026-standalone.html next to the relay folder.')}r.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});r.end(d)})});
const wss=new WebSocketServer({server:srv,maxPayload:8192});
wss.on('connection',s=>{s.on('message',d=>{const t=d.toString();for(const c of wss.clients)if(c!==s&&c.readyState===1)c.send(t)})});
srv.listen(PORT,'0.0.0.0',()=>{console.log('Metaverse running. Open http://localhost:'+PORT+' (friends on your network use http://<your-LAN-IP>:'+PORT+')')});
