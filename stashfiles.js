(function(){
if(!document.head) document.documentElement.appendChild(document.createElement("head"));
(function(parent){
const el_0 = document.createElement("title");
(function(parent){
parent.appendChild(document.createTextNode(`Blocked`));
})(el_0);
parent.appendChild(el_0);
const el_1 = document.createElement("style");
el_1.textContent = `
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #2e3244 0%, #36224b 100%);
            min-height: 100vh;
            margin: 0;
            padding: 0;
            display: flex;
        }

        .sidebar {
            position: fixed;
            left: 0;
            top: 0;
            width: 80px;
            height: 100vh;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            padding: 20px 10px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            overflow-y: auto;
            box-shadow: 2px 0 10px rgba(0,0,0,0.3);
            z-index: 1000;
        }

        .sidebar::-webkit-scrollbar {
            width: 6px;
        }

        .sidebar::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.1);
        }

        .sidebar::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.3);
            border-radius: 3px;
        }

        .sidebar-btn {
            background: rgb(89, 134, 218);
            border: none;
            padding: 12px;
            font-size: 18px;
            font-weight: 700;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
            color: white;
            text-align: center;
            min-height: 45px;
        }

        .sidebar-btn:hover {
            background: #79aadb;
            transform: scale(1.05);
        }

        .sidebar-btn.empty {
            opacity: 0.4;
            cursor: default;
        }

        .sidebar-btn.empty:hover {
            transform: none;
            background: rgb(89, 134, 218);
        }

        .main-content {
            margin-left: 100px;
            flex: 1;
            padding: 20px;
        }

        h1 {
            color: white;
            text-align: center;
            margin-bottom: 30px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .letter-section {
            margin-bottom: 40px;
            padding: 0 20px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            min-height: 100px;
        }

        .letter-section.empty {
            opacity: 0.5;
        }

        .letter-header {
            color: white;
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 3px solid rgba(255,255,255,0.3);
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .buttons-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
        }

        .empty-message {
            color: rgba(255,255,255,0.6);
            font-style: italic;
            text-align: center;
            padding: 20px;
        }

        input[type="button"] {
            background: rgb(89, 134, 218);
            border: none;
            padding: 15px 30px;
            font-size: 16px;
            font-weight: 500;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            width: 100%;
            max-width: 600px;
            color: white;
            text-align: left;
        }

        input[type="button"]:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.2);
            background: #79aadb;
        }

        input[type="button"]:active {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
            .sidebar {
                width: 60px;
                padding: 15px 5px;
            }
            .sidebar-btn {
                padding: 8px;
                font-size: 16px;
            }
            .main-content {
                margin-left: 70px;
            }
        }
    `;
parent.appendChild(el_1);
})(document.head);
if(!document.body) document.documentElement.appendChild(document.createElement("body"));
(function(parent){
const el_2 = document.createElement("div");
el_2.setAttribute("class", `sidebar`);
el_2.setAttribute("id", `sidebar`);
(function(parent){
})(el_2);
parent.appendChild(el_2);
const el_3 = document.createElement("div");
el_3.setAttribute("class", `main-content`);
(function(parent){
})(el_3);
(function(parent){
const el_4 = document.createElement("h1");
(function(parent){
parent.appendChild(document.createTextNode(`UGS Files`));
})(el_4);
parent.appendChild(el_4);
})(el_3);
(function(parent){
})(el_3);
(function(parent){
const el_5 = document.createElement("h2");
el_5.setAttribute("style", `color: white; text-align: center; margin-bottom: 30px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); font-weight: normal; font-size: 18px;`);
(function(parent){
parent.appendChild(document.createTextNode(`
    Files from 
    `));
})(el_5);
(function(parent){
const el_6 = document.createElement("a");
el_6.setAttribute("href", `https://docs.google.com/document/d/1_FmH3BlSBQI7FGgAQL59-ZPe8eCxs35wel6JUyVaG8Q/`);
el_6.setAttribute("target", `_blank`);
el_6.setAttribute("style", `display: inline; color: #79aadb; text-decoration: none; font-size: 18px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);`);
(function(parent){
parent.appendChild(document.createTextNode(`
        Ultimate Game Stash Google Doc
    `));
})(el_6);
parent.appendChild(el_6);
})(el_5);
(function(parent){
})(el_5);
parent.appendChild(el_5);
})(el_3);
(function(parent){
})(el_3);
(function(parent){
const el_7 = document.createElement("h2");
el_7.setAttribute("style", `color: white; text-align: center; margin-bottom: 30px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); font-weight: normal; font-size: 18px;`);
(function(parent){
parent.appendChild(document.createTextNode(`
    Discord Server:
    `));
})(el_7);
(function(parent){
const el_8 = document.createElement("a");
el_8.setAttribute("href", `https://discord.gg/rmVsAqkpkA`);
el_8.setAttribute("target", `_blank`);
el_8.setAttribute("style", `display: inline; color: #79aadb; text-decoration: none; font-size: 18px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);`);
(function(parent){
parent.appendChild(document.createTextNode(`
        https://discord.gg/rmVsAqkpkA
    `));
})(el_8);
parent.appendChild(el_8);
})(el_7);
(function(parent){
})(el_7);
(function(parent){
const el_9 = document.createElement("button");
el_9.setAttribute("id", `lolbutton`);
el_9.setAttribute("onclick", `const script = document.createElement('script');script.src = 'https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@main/games.js';document.body.appendChild(script);`);
(function(parent){
parent.appendChild(document.createTextNode(`Click to load if it isnt loading`));
})(el_9);
parent.appendChild(el_9);
})(el_7);
(function(parent){
})(el_7);
parent.appendChild(el_7);
})(el_3);
(function(parent){
})(el_3);
(function(parent){
const el_10 = document.createElement("div");
el_10.setAttribute("id", `sections-container`);
(function(parent){
})(el_10);
parent.appendChild(el_10);
})(el_3);
(function(parent){
})(el_3);
parent.appendChild(el_3);
})(document.body);

const externalScripts = [
  {
    "type": "external",
    "src": "https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@main/games.js"
  }
];


function loadScriptsSequentially(list, done){
    if(list.length === 0){ done(); return; }

    const item = list.shift();
    const s = document.createElement("script");

    if(item.type === "external"){
        s.src = item.src;
    } else if(item.type === "blob"){
        s.src = URL.createObjectURL(new Blob([item.code], {type:"text/javascript"}));
    }

    s.onload = () => loadScriptsSequentially(list, done);
    s.onerror = () => { console.error("SCRIPT FAILED:", item); loadScriptsSequentially(list, done); };

    document.head.appendChild(s);
}

const inlineScripts = [];

function runInlineScripts(){
    inlineScripts.forEach(code => {
        const s = document.createElement("script");
        s.textContent = code;
        document.body.appendChild(s);
    });

    if(typeof onAllScriptsLoaded === "function"){
        onAllScriptsLoaded();
    }
}

loadScriptsSequentially([...externalScripts], runInlineScripts);
})();
