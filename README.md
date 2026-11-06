# Mexico City GP 2026 — 3D metaverse (standalone)

## Just watch / explore alone
Double-click `mexico-gp-2026-standalone.html`. Everything (including three.js) is inside the file. No internet or account needed, apart from an optional web font.

## See other visitors on the same computer
Open the file in two tabs or windows of the same browser. Avatars, chat and emotes are shared between them, and the race stays in sync.

## Play with friends on other computers
1. Install Node.js, then in the `relay` folder run: `npm install` then `node server.js`
2. You open http://localhost:8080 ; friends on your network open http://YOUR-LAN-IP:8080 (the page connects by itself).
3. Or open the HTML file anywhere and type `ws://YOUR-LAN-IP:8080` in the "Relay" box, then Connect.
To play over the internet, forward port 8080 or host the relay on a server (use wss:// behind HTTPS).

## Controls
Explore mode: drag to look, W A S D to walk, Q/E up and down, Shift to run. Voice-over uses the browser's speech engine.
