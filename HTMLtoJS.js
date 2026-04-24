(function(){
if(!document.head) document.documentElement.appendChild(document.createElement("head"));
(function(parent){
const el_0 = document.createElement("meta");
el_0.setAttribute("charset", `UTF-8`);
parent.appendChild(el_0);
const el_1 = document.createElement("title");
(function(parent){
parent.appendChild(document.createTextNode(`Page Blocked`));
})(el_1);
parent.appendChild(el_1);
const el_2 = document.createElement("style");
el_2.textContent = `
body { font-family: sans-serif; margin: 20px; }
textarea { width: 80%; margin-top: 10px; }
button { margin-top: 10px; padding: 6px 12px; font-size: 15px; }
h1 { margin-top: 0; }
h2 { margin-left: 10%;}
`;
parent.appendChild(el_2);
})(document.head);
if(!document.body) document.documentElement.appendChild(document.createElement("body"));
(function(parent){
const el_3 = document.createElement("center");
(function(parent){
const el_4 = document.createElement("h1");
(function(parent){
parent.appendChild(document.createTextNode(`HTML → JavaScript`));
})(el_4);
parent.appendChild(el_4);
})(el_3);
(function(parent){
})(el_3);
(function(parent){
const el_5 = document.createElement("p");
(function(parent){
parent.appendChild(document.createTextNode(`Paste your FULL HTML page:`));
})(el_5);
parent.appendChild(el_5);
})(el_3);
(function(parent){
})(el_3);
(function(parent){
const el_6 = document.createElement("textarea");
el_6.setAttribute("id", `htmlInput`);
el_6.setAttribute("rows", `12`);
parent.appendChild(el_6);
})(el_3);
(function(parent){
})(el_3);
(function(parent){
const el_7 = document.createElement("br");
parent.appendChild(el_7);
})(el_3);
(function(parent){
})(el_3);
(function(parent){
const el_8 = document.createElement("button");
el_8.setAttribute("id", `generateBtn`);
(function(parent){
parent.appendChild(document.createTextNode(`Generate JavaScript`));
})(el_8);
parent.appendChild(el_8);
})(el_3);
parent.appendChild(el_3);
const el_9 = document.createElement("h2");
(function(parent){
parent.appendChild(document.createTextNode(`Generated JS:`));
})(el_9);
parent.appendChild(el_9);
const el_10 = document.createElement("center");
(function(parent){
})(el_10);
(function(parent){
const el_11 = document.createElement("textarea");
el_11.setAttribute("id", `output`);
el_11.setAttribute("rows", `20`);
parent.appendChild(el_11);
})(el_10);
(function(parent){
})(el_10);
(function(parent){
const el_12 = document.createElement("p");
el_12.setAttribute("id", `yes`);
parent.appendChild(el_12);
})(el_10);
parent.appendChild(el_10);
})(document.body);

const externalScripts = [
  {
    "type": "blob",
    "code": "\nconst yest = document.getElementById(\"yes\");\n\nfunction safeText(str) {\n    return str.replace(/\\\\/g, \"\\\\\\\\\")\n              .replace(/`/g, \"\\\\`\");\n}\n\nfunction safeScript(str) {\n    return str.replace(/<\\/script>/gi, \"<\\\\/script>\");\n}\n\nlet elementCounter = 0;\n\nfunction elementToJS(node, externalScripts, inlineScripts) {\n    let code = \"\";\n\n    \n    if (node.nodeType === Node.TEXT_NODE) {\n        const t = node.textContent;\n        if (t.trim().length > 0) {\n            code += `parent.appendChild(document.createTextNode(\\`${safeText(t)}\\`));\\n`;\n        }\n        return code;\n    }\n\n    \n    if (node.nodeType === Node.ELEMENT_NODE) {\n        const tag = node.tagName.toLowerCase();\n\n        \n        if (tag === \"script\") {\n            const src = node.getAttribute(\"src\");\n            const content = node.textContent || \"\";\n\n            if (src) {\n                externalScripts.push({ type: \"external\", src });\n                return \"\";\n            }\n\n            \n            if (content.includes(\"_0x\") || content.length > 50000) {\n                externalScripts.push({ type: \"blob\", code: content });\n                return \"\";\n            }\n\n            \n            inlineScripts.push(safeScript(content));\n            return \"\";\n        }\n\n        \n        const id = elementCounter++;\n        const varName = `el_${id}`;\n\n        code += `const ${varName} = document.createElement(\"${tag}\");\\n`;\n\n        \n        for (let a of node.attributes) {\n            code += `${varName}.setAttribute(\"${a.name}\", \\`${safeText(a.value)}\\`);\\n`;\n        }\n\n       \n        if (tag === \"style\") {\n            code += `${varName}.textContent = \\`${safeText(node.textContent)}\\`;\\n`;\n            code += `parent.appendChild(${varName});\\n`;\n            return code;\n        }\n\n        \n        node.childNodes.forEach(child => {\n            code += `(function(parent){\\n${elementToJS(child, externalScripts, inlineScripts)}})(${varName});\\n`;\n        });\n\n        code += `parent.appendChild(${varName});\\n`;\n        return code;\n    }\n\n    return \"\";\n}\n\nfunction generateJS(html) {\n    const parser = new DOMParser();\n    const doc = parser.parseFromString(html, \"text/html\");\n\n    let externalScripts = [];\n    let inlineScripts = [];\n\n    let out = `(function(){\\n`;\n\n    out += `if(!document.head) document.documentElement.appendChild(document.createElement(\"head\"));\\n`;\n    out += `(function(parent){\\n`;\n    doc.head.childNodes.forEach(n =>\n        out += elementToJS(n, externalScripts, inlineScripts)\n    );\n    out += `})(document.head);\\n`;\n\n    out += `if(!document.body) document.documentElement.appendChild(document.createElement(\"body\"));\\n`;\n    out += `(function(parent){\\n`;\n    doc.body.childNodes.forEach(n =>\n        out += elementToJS(n, externalScripts, inlineScripts)\n    );\n    out += `})(document.body);\\n\\n`;\n\n    // EXTERNAL SCRIPTS\n    out += `const externalScripts = ${JSON.stringify(externalScripts, null, 2)};\\n\\n`;\n\n    out += `\nfunction loadScriptsSequentially(list, done){\n    if(list.length === 0){ done(); return; }\n\n    const item = list.shift();\n    const s = document.createElement(\"script\");\n\n    if(item.type === \"external\"){\n        s.src = item.src;\n    } else if(item.type === \"blob\"){\n        s.src = URL.createObjectURL(new Blob([item.code], {type:\"text/javascript\"}));\n    }\n\n    s.onload = () => loadScriptsSequentially(list, done);\n    s.onerror = () => { console.error(\"SCRIPT FAILED:\", item); loadScriptsSequentially(list, done); };\n\n    document.head.appendChild(s);\n}\n`;\n\n    \n    out += `\nconst inlineScripts = ${JSON.stringify(inlineScripts, null, 2)};\n\nfunction runInlineScripts(){\n    inlineScripts.forEach(code => {\n        const s = document.createElement(\"script\");\n        s.textContent = code;\n        document.body.appendChild(s);\n    });\n\n    if(typeof onAllScriptsLoaded === \"function\"){\n        onAllScriptsLoaded();\n    }\n}\n\nloadScriptsSequentially([...externalScripts], runInlineScripts);\n`;\n\n    out += `})();`;\n\n    yest.textContent = \"JS Loaded\";\n    return out;\n}\n\ndocument.getElementById(\"generateBtn\").addEventListener(\"click\", () => {\n    const html = document.getElementById(\"htmlInput\").value;\n    if (!html) {\n        yest.textContent = \"\";\n        document.getElementById(\"output\").value = \"\";\n        alert(\"Enter something!\");\n        return;\n    }\n    document.getElementById(\"output\").value = generateJS(html);\n});\n"
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
