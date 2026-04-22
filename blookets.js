(function(){
if(!document.head) document.documentElement.appendChild(document.createElement("head"));
(function(parent){
const el_0 = document.createElement("base");
el_0.setAttribute("href", `https://cdn.jsdelivr.net/gh/jjthecoolest/goon/`);
parent.appendChild(el_0);
const el_1 = document.createElement("link");
el_1.setAttribute("rel", `icon`);
el_1.setAttribute("type", `image/png`);
el_1.setAttribute("href", `favicon.png`);
parent.appendChild(el_1);
const el_3 = document.createElement("link");
el_3.setAttribute("rel", `apple-touch-icon`);
el_3.setAttribute("href", `/favicon.png`);
parent.appendChild(el_3);
const el_4 = document.createElement("meta");
el_4.setAttribute("name", `google-adsense-account`);
el_4.setAttribute("content", `ca-pub-5521219086088837`);
parent.appendChild(el_4);
const el_5 = document.createElement("meta");
el_5.setAttribute("charset", `UTF-8`);
parent.appendChild(el_5);
const el_6 = document.createElement("meta");
el_6.setAttribute("name", `viewport`);
el_6.setAttribute("content", `width=device-width, initial-scale=1.0`);
parent.appendChild(el_6);
const el_7 = document.createElement("title");
(function(parent){
parent.appendChild(document.createTextNode(`Blooket1-V1`));
})(el_7);
parent.appendChild(el_7);
const el_8 = document.createElement("meta");
el_8.setAttribute("name", `title`);
el_8.setAttribute("content", `Blooket1-V1`);
parent.appendChild(el_8);
const el_9 = document.createElement("meta");
el_9.setAttribute("name", `description`);
el_9.setAttribute("content", `Play unbl*cked games like Crazy Cattle 3D and DriveMad on Blooket1-V1. Fast, free, no downloads—perfect for school or home.`);
parent.appendChild(el_9);
const el_10 = document.createElement("meta");
el_10.setAttribute("property", `og:type`);
el_10.setAttribute("content", `website`);
parent.appendChild(el_10);
const el_11 = document.createElement("meta");
el_11.setAttribute("property", `og:url`);
el_11.setAttribute("content", `https://gn-math.github.io/`);
parent.appendChild(el_11);
const el_12 = document.createElement("meta");
el_12.setAttribute("property", `og:title`);
el_12.setAttribute("content", `Blooket1-V1`);
parent.appendChild(el_12);
const el_13 = document.createElement("meta");
el_13.setAttribute("property", `og:description`);
el_13.setAttribute("content", `Play unbl*cked games like Crazy Cattle 3D and DriveMad on Blooket1-V1. Fast, free, no downloads—perfect for school or home.`);
parent.appendChild(el_13);
const el_14 = document.createElement("meta");
el_14.setAttribute("name", `twitter:card`);
el_14.setAttribute("content", `summary_large_image`);
parent.appendChild(el_14);
const el_15 = document.createElement("meta");
el_15.setAttribute("name", `twitter:url`);
el_15.setAttribute("content", `https://gn-math.github.io/`);
parent.appendChild(el_15);
const el_16 = document.createElement("meta");
el_16.setAttribute("name", `twitter:title`);
el_16.setAttribute("content", `Blooket1-V1`);
parent.appendChild(el_16);
const el_17 = document.createElement("meta");
el_17.setAttribute("name", `twitter:description`);
el_17.setAttribute("content", `Play unbl*cked games like Crazy Cattle 3D and DriveMad on Blooket1-V1. Fast, free, no downloads—perfect for school or home.`);
parent.appendChild(el_17);
const el_18 = document.createElement("style");
el_18.textContent = `
        :root {
            --primary: #e8ebff;
            --primary-hover: #e8ebff;
            --primary-light: rgba(255, 124, 0, 0.1);
            --primary-lighter: rgba(252, 38, 81, 0.05);
            --accent: #8b5cf6;
            --accent-light: rgba(139, 92, 246, 0.1);
            --success: #10b981;
            --warning: #f59e0b;
            --text: #1a1a1a;
            --text-muted: #6b7280;
            --text-light: #9ca3af;
            --bg: #ffffff;
            --bg-secondary: #f8fafc;
            --surface: #ffffff;
            --surface-hover: #f1f5f9;
            --border: #e2e8f0;
            --border-light: #f1f5f9;
            --glass: rgba(255, 255, 255, 0.8);
            --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
            --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
            --shadow-glow: 0 0 20px rgba(252, 38, 81, 0.3);
            --radius: 12px;
            --radius-sm: 8px;
            --radius-lg: 16px;
            --radius-xl: 20px;
            --gradient-primary: rgba(255, 124, 0, 1);
            --gradient-accent: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
            --gradient-surface: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        }

        .dark-mode {
            --primary: #e8ebff;
            --primary-hover: #e8ebff;
            --primary-light: rgba(255, 124, 0, .15);
            --primary-lighter: rgba(252, 38, 81, 0.08);
            --accent: #a855f7;
            --accent-light: rgba(168, 85, 247, 0.15);
            --success: #fbbf24;
            --warning: #fbbf24;
            --text: #f1f5f9;
            --text-muted: #94a3b8;
            --text-light: #64748b;
            --bg: #0f172a;
            --bg-secondary: #1e293b;
            --surface: #1e293b;
            --surface-hover: #334155;
            --border: #334155;
            --border-light: #475569;
            --glass: rgba(30, 41, 59, 0.8);
            --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.4);
            --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.5);
            --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.5), 0 2px 4px -2px rgb(0 0 0 / 0.5);
            --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.6), 0 4px 6px -4px rgb(0 0 0 / 0.6);
            --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.7), 0 8px 10px -6px rgb(0 0 0 / 0.7);
            --shadow-glow: 0 0 20px rgba(252, 38, 81, 0.4);
            --gradient-primary: rgba(255, 124, 0, 1);
            --gradient-accent: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
            --gradient-surface: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        }

        * {
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', system-ui, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background: var(--bg);
            color: var(--text);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-weight: 400;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        header {
            background: #4e5757;
            color: white;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: var(--shadow-lg);
            backdrop-filter: blur(20px);
        }

        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1.25rem 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1.5rem;
        }

        .logo {
            font-size: 1.75rem;
            font-weight: 800;
            letter-spacing: -0.02em;
            background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .search-container {
            display: flex;
            flex: 1;
            max-width: 500px;
            gap: 0.75rem;
        }

        #searchBar {
            flex: 1;
            padding: 0.875rem 1rem;
            border: 0;
            border-radius: var(--radius);
            background: var(--glass);
            backdrop-filter: blur(20px);
            color: #e8ebff;
            font-size: 15px;
            outline: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: var(--shadow-sm);
            
        }

        #searchBar:hover {
            background: #3D4257;
            transform: translateY(-1px);
            box-shadow: var(--shadow);
            color: #e8ebff;
        }

        #searchBar:focus {
            background: var(--text);
            box-shadow: 0 0 0 3px rgba(255, 124, 0, 0.25), var(--shadow);
            transform: translateY(-1px);
            color: var(--glass);
        }

        #searchBar::placeholder {
            color: #e8ebff;
        }

        #sortOptions {
            padding: 0.875rem 0.5rem;
            border: 0;
            border-radius: var(--radius);
            background: var(--glass);
            backdrop-filter: blur(20px);
            color: #e8ebff;
            font-size: 15px;
            cursor: pointer;
            outline: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            min-width: 130px;
            box-shadow: var(--shadow-sm);
        }

        #sortOptions:hover {
            background: #3D4257;
            transform: translateY(-1px);
            box-shadow: var(--shadow);
            color: #e8ebff;
        }

        .control-buttons {
            display: flex;
            gap: 0.5rem;
        }

        #settings {
            background: rgba(255, 255, 255, 1);
            border: 0;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0.75rem;
            border-radius: var(--radius);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(20px);
        }

        #settings:hover {
            background: rgba(255, 124, 0, 1);
            transform: translateY(-1px);
            box-shadow: var(--shadow);
        }

        main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
        }

        #zoneCount {
            margin: 0 0 1.5rem;
            font-size: 14px;
            color: var(--text-muted);
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        #zoneCount::before {
            content: '';
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: var(--primary);
        }

        #container,
        #featuredZones {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1.5rem;
        }

        .zone-item {
            background: var(--gradient-surface);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            overflow: hidden;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            flex-direction: column;
            position: relative;
            box-shadow: var(--shadow-sm);
        }

        .zone-item:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: #FF0000;
            border-color: #e8ebff;
        }

        .zone-item:hover::before {
            opacity: 1;
        }

        .zone-item::before {
            content: '';
            position: absolute;
            inset: 0;
            background: var(--primary-light);
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
            z-index: 1;
        }

        .zone-item img {
            width: 100%;
            aspect-ratio: 1;
            object-fit: cover;
            display: block;
            background: var(--border-light);
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .zone-item:hover img {
            transform: scale(1.05);
        }

        .zone-item button {
            background: transparent;
            color: var(--text);
            border: 0;
            padding: 1.25rem 1rem;
            cursor: pointer;
            font-weight: 600;
            font-size: 14px;
            line-height: 1.4;
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            min-height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 2;
        }

        .zone-item:hover button {
            color: #e8ebff;
            background: rgba(252, 38, 81, 0.05);
        }

        #zoneViewer {
            position: fixed;
            inset: 0;
            background: var(--bg);
            z-index: 1000;
            display: none;
            flex-direction: column;
            animation: slideInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideInUp {
            from {
                transform: translateY(100%);
            }

            to {
                transform: translateY(0);
            }
        }

        .zone-header {
            background: #4e5757;
            color: white;
            padding: 1rem 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: var(--shadow-lg);
        }

        .zone-title {
            flex: 1;
            min-width: 0;
        }

        #zoneName {
            font-size: 1.25rem;
            font-weight: 700;
            margin: 0 0 0.25rem;
            line-height: 1.3;
        }

        #zoneId {
            display: none;
        }

        #zoneAuthor {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            transition: all 0.2s ease;
            font-weight: 500;
        }

        #zoneAuthor:hover {
            color: white;
            text-decoration: underline;
        }

        .zone-controls {
            display: flex;
            gap: 0.75rem;
        }

        .zone-controls button {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 0.625rem 1rem;
            border-radius: var(--radius);
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(20px);
        }

        .zone-controls button:hover {
            background: rgba(255, 124, 0, .7);
            border-color: rgba(255, 255, 255, 0.5);
            transform: translateY(-1px);
            box-shadow: var(--shadow);
        }

        #zoneFrame {
            flex-grow: 1;
            border: none;
            width: 90%;
            height: 90%;
        }

        #popupOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(8px);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            padding: 1rem;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        .popup {
            background: var(--surface);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-xl);
            width: 100%;
            max-width: 520px;
            max-height: 80vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            border: 1px solid var(--border);
            animation: slideInScale 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideInScale {
            from {
                transform: scale(0.9) translateY(20px);
                opacity: 0;
            }

            to {
                transform: scale(1) translateY(0);
                opacity: 1;
            }
        }

        .popup-header {
            background: var(--gradient-primary);
            color: white;
            padding: 1.25rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #popupTitle {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 700;
        }

        #popupClose {
            background: rgba(255, 255, 255, 0.1);
            border: 0;
            color: white;
            font-size: 1.25rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: var(--radius);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            line-height: 1;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(20px);
        }

        #popupClose:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
        }

        #popupBody {
            padding: 1.5rem;
            overflow-y: auto;
            color: var(--text);
        }

        #popupBody input[type="text"],
        #popupBody input[type="file"] {
            width: 100%;
            padding: 0.875rem 1rem;
            margin-bottom: 1.25rem;
            border: 1px solid var(--border);
            border-radius: var(--radius);
            background: var(--bg-secondary);
            color: var(--text);
            font-size: 15px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            outline: none;
        }

        #popupBody input[type="text"]:focus,
        #popupBody input[type="file"]:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(252, 38, 81, 0.1);
            transform: translateY(-1px);
        }

        #settings-button {
            width: 100%;
            padding: 0.875rem 1rem;
            background: var(--gradient-primary);
            color: white;
            border: 0;
            border-radius: var(--radius);
            cursor: pointer;
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 1rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: var(--shadow-sm);
        }

        #settings-button:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        #settings-button:active {
            transform: translateY(0);
        }
        
        .data {
            width: 100%;
            padding: 0.875rem 1rem;
            background: var(--gradient-primary);
            color: white;
            border: 0;
            border-radius: var(--radius);
            cursor: pointer;
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 1rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: var(--shadow-sm);
        }

        footer {
            background: var(--bg-secondary);
            border-top: 1px solid var(--border);
            padding: 2rem 5rem;
            margin-top: 3rem;
            text-align: center;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
        }

        .footer-links a {
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
            font-size: 15px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 0.5rem 1rem;
            border-radius: var(--radius);
        }

        .footer-links a:hover {
            color: var(--primary-hover);
            background: var(--primary-light);
            transform: translateY(-1px);
        }

        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 1rem;
                padding: 1rem;
            }

            .search-container {
                width: 100%;
                max-width: none;
            }

            main {
                padding: 1.5rem 1rem;
            }

            #container,
            #featuredZones {
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                gap: 1.25rem;
            }

            .zone-item button {
                padding: 1rem 0.75rem;
                min-height: 65px;
                font-size: 13px;
            }

            .footer-links {
                gap: 1.5rem;
            }
        }

        @media (max-width: 480px) {

            #container,
            #featuredZones {
                grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
                gap: 1rem;
            }

            .popup {
                margin: 0.5rem;
            }

            .zone-item:hover {
                transform: translateY(-4px) scale(1.01);
            }
        }
    `;
parent.appendChild(el_18);
})(document.head);
if(!document.body) document.documentElement.appendChild(document.createElement("body"));
(function(parent){
const el_19 = document.createElement("header");
(function(parent){
})(el_19);
(function(parent){
const el_20 = document.createElement("div");
el_20.setAttribute("class", `header-content`);
(function(parent){
})(el_20);
(function(parent){
const el_21 = document.createElement("div");
el_21.setAttribute("class", `logo`);
(function(parent){
parent.appendChild(document.createTextNode(`Blooket1-V1`));
})(el_21);
parent.appendChild(el_21);
})(el_20);
(function(parent){
})(el_20);
(function(parent){
const el_22 = document.createElement("div");
el_22.setAttribute("class", `search-container`);
(function(parent){
})(el_22);
(function(parent){
const el_23 = document.createElement("input");
el_23.setAttribute("type", `text`);
el_23.setAttribute("id", `searchBar`);
el_23.setAttribute("placeholder", `Search zones...`);
el_23.setAttribute("oninput", `filterZones()`);
parent.appendChild(el_23);
})(el_22);
(function(parent){
})(el_22);
(function(parent){
const el_24 = document.createElement("select");
el_24.setAttribute("id", `sortOptions`);
el_24.setAttribute("onchange", `sortZones()`);
(function(parent){
})(el_24);
(function(parent){
const el_25 = document.createElement("option");
el_25.setAttribute("value", `name`);
(function(parent){
parent.appendChild(document.createTextNode(`Name`));
})(el_25);
parent.appendChild(el_25);
})(el_24);
(function(parent){
})(el_24);
(function(parent){
const el_26 = document.createElement("option");
el_26.setAttribute("value", `id`);
(function(parent){
parent.appendChild(document.createTextNode(`ID (Date)`));
})(el_26);
parent.appendChild(el_26);
})(el_24);
(function(parent){
})(el_24);
(function(parent){
const el_27 = document.createElement("option");
el_27.setAttribute("value", `popular`);
(function(parent){
parent.appendChild(document.createTextNode(`Popular`));
})(el_27);
parent.appendChild(el_27);
})(el_24);
(function(parent){
})(el_24);
parent.appendChild(el_24);
})(el_22);
(function(parent){
})(el_22);
(function(parent){
const el_28 = document.createElement("button");
el_28.setAttribute("onclick", `saveData()`);
el_28.setAttribute("id", `sortOptions`);
(function(parent){
parent.appendChild(document.createTextNode(`Export Save`));
})(el_28);
parent.appendChild(el_28);
})(el_22);
(function(parent){
})(el_22);
(function(parent){
const el_29 = document.createElement("button");
el_29.setAttribute("href", `#`);
el_29.setAttribute("onclick", `document.getElementById('importData').click(); return false;`);
el_29.setAttribute("id", `sortOptions`);
(function(parent){
parent.appendChild(document.createTextNode(`Import Save`));
})(el_29);
parent.appendChild(el_29);
})(el_22);
(function(parent){
})(el_22);
parent.appendChild(el_22);
})(el_20);
(function(parent){
})(el_20);
(function(parent){
const el_30 = document.createElement("div");
el_30.setAttribute("class", `control-buttons`);
(function(parent){
})(el_30);
(function(parent){
const el_31 = document.createElement("button");
el_31.setAttribute("id", `settings`);
el_31.setAttribute("style", `background-color: var(--primary-color); color: #e8ebff; border: none; border-radius: 4px; padding: 0.5rem 2rem; font-size: 16px; cursor: pointer;`);
(function(parent){
parent.appendChild(document.createTextNode(`Settings`));
})(el_31);
parent.appendChild(el_31);
})(el_30);
(function(parent){
})(el_30);
parent.appendChild(el_30);
})(el_20);
(function(parent){
})(el_20);
parent.appendChild(el_20);
})(el_19);
(function(parent){
})(el_19);
parent.appendChild(el_19);
const el_32 = document.createElement("ins");
el_32.setAttribute("class", `adsbygoogle`);
el_32.setAttribute("style", `display:block; text-align:center;`);
el_32.setAttribute("data-ad-client", `ca-pub-5521219086088837`);
el_32.setAttribute("data-ad-slot", `5549138288`);
el_32.setAttribute("data-ad-format", `auto`);
el_32.setAttribute("data-full-width-responsive", `true`);
parent.appendChild(el_32);
const el_33 = document.createElement("main");
(function(parent){
})(el_33);
(function(parent){
const el_34 = document.createElement("details");
el_34.setAttribute("id", `featuredZonesWrapper`);
el_34.setAttribute("open", ``);
(function(parent){
})(el_34);
(function(parent){
const el_35 = document.createElement("summary");
el_35.setAttribute("id", `allZonesSummary`);
el_35.setAttribute("style", `font-size: 1.2rem; font-weight: bold; cursor: pointer;`);
(function(parent){
parent.appendChild(document.createTextNode(`Featured Zones`));
})(el_35);
parent.appendChild(el_35);
})(el_34);
(function(parent){
})(el_34);
(function(parent){
const el_36 = document.createElement("div");
el_36.setAttribute("id", `featuredZones`);
el_36.setAttribute("class", `zone-container`);
parent.appendChild(el_36);
})(el_34);
(function(parent){
})(el_34);
parent.appendChild(el_34);
})(el_33);
(function(parent){
})(el_33);
(function(parent){
const el_37 = document.createElement("br");
parent.appendChild(el_37);
})(el_33);
(function(parent){
})(el_33);
(function(parent){
const el_38 = document.createElement("hr");
parent.appendChild(el_38);
})(el_33);
(function(parent){
const el_39 = document.createElement("br");
parent.appendChild(el_39);
})(el_33);
(function(parent){
})(el_33);
(function(parent){
const el_40 = document.createElement("details");
el_40.setAttribute("id", `allZonesWrapper`);
el_40.setAttribute("open", ``);
(function(parent){
})(el_40);
(function(parent){
const el_41 = document.createElement("summary");
el_41.setAttribute("id", `allSummary`);
el_41.setAttribute("style", `font-size: 1.2rem; font-weight: bold; cursor: pointer;`);
(function(parent){
parent.appendChild(document.createTextNode(`All Zones`));
})(el_41);
parent.appendChild(el_41);
})(el_40);
(function(parent){
})(el_40);
(function(parent){
const el_42 = document.createElement("div");
el_42.setAttribute("id", `container`);
(function(parent){
parent.appendChild(document.createTextNode(`Loading...`));
})(el_42);
parent.appendChild(el_42);
})(el_40);
(function(parent){
})(el_40);
parent.appendChild(el_40);
})(el_33);
(function(parent){
})(el_33);
parent.appendChild(el_33);
const el_43 = document.createElement("div");
el_43.setAttribute("id", `zoneViewer`);
(function(parent){
})(el_43);
(function(parent){
const el_44 = document.createElement("div");
el_44.setAttribute("class", `zone-header`);
(function(parent){
})(el_44);
(function(parent){
const el_45 = document.createElement("div");
el_45.setAttribute("class", `zone-title`);
(function(parent){
})(el_45);
(function(parent){
const el_46 = document.createElement("h2");
el_46.setAttribute("id", `zoneName`);
(function(parent){
parent.appendChild(document.createTextNode(`zone`));
})(el_46);
parent.appendChild(el_46);
})(el_45);
(function(parent){
})(el_45);
(function(parent){
const el_47 = document.createElement("span");
el_47.setAttribute("id", `zoneId`);
el_47.setAttribute("style", `display: none;`);
parent.appendChild(el_47);
})(el_45);
(function(parent){
})(el_45);
(function(parent){
const el_48 = document.createElement("a");
el_48.setAttribute("id", `zoneAuthor`);
el_48.setAttribute("href", `#`);
el_48.setAttribute("target", `_blank`);
(function(parent){
parent.appendChild(document.createTextNode(`by Author`));
})(el_48);
parent.appendChild(el_48);
})(el_45);
(function(parent){
})(el_45);
parent.appendChild(el_45);
})(el_44);
(function(parent){
})(el_44);
(function(parent){
const el_49 = document.createElement("div");
el_49.setAttribute("class", `zone-controls`);
(function(parent){
})(el_49);
(function(parent){
const el_50 = document.createElement("button");
el_50.setAttribute("onclick", `fullscreenZone()`);
(function(parent){
parent.appendChild(document.createTextNode(`Fullscreen`));
})(el_50);
parent.appendChild(el_50);
})(el_49);
(function(parent){
})(el_49);
(function(parent){
const el_51 = document.createElement("button");
el_51.setAttribute("onclick", `aboutBlank()`);
(function(parent){
parent.appendChild(document.createTextNode(`Fullscreen in new tab`));
})(el_51);
parent.appendChild(el_51);
})(el_49);
(function(parent){
})(el_49);
(function(parent){
const el_52 = document.createElement("button");
el_52.setAttribute("onclick", `closeZone()`);
(function(parent){
parent.appendChild(document.createTextNode(`Close`));
})(el_52);
parent.appendChild(el_52);
})(el_49);
(function(parent){
})(el_49);
parent.appendChild(el_49);
})(el_44);
(function(parent){
})(el_44);
parent.appendChild(el_44);
})(el_43);
(function(parent){
})(el_43);
(function(parent){
const el_53 = document.createElement("iframe");
el_53.setAttribute("id", `zoneFrame`);
parent.appendChild(el_53);
})(el_43);
(function(parent){
})(el_43);
parent.appendChild(el_43);
const el_54 = document.createElement("div");
el_54.setAttribute("id", `popupOverlay`);
(function(parent){
})(el_54);
(function(parent){
const el_55 = document.createElement("div");
el_55.setAttribute("class", `popup`);
(function(parent){
})(el_55);
(function(parent){
const el_56 = document.createElement("div");
el_56.setAttribute("class", `popup-header`);
(function(parent){
})(el_56);
(function(parent){
const el_57 = document.createElement("h3");
el_57.setAttribute("id", `popupTitle`);
(function(parent){
parent.appendChild(document.createTextNode(`Title`));
})(el_57);
parent.appendChild(el_57);
})(el_56);
(function(parent){
})(el_56);
(function(parent){
const el_58 = document.createElement("button");
el_58.setAttribute("id", `popupClose`);
el_58.setAttribute("onclick", `closePopup()`);
(function(parent){
parent.appendChild(document.createTextNode(`×`));
})(el_58);
parent.appendChild(el_58);
})(el_56);
(function(parent){
})(el_56);
parent.appendChild(el_56);
})(el_55);
(function(parent){
})(el_55);
(function(parent){
const el_59 = document.createElement("div");
el_59.setAttribute("id", `popupBody`);
(function(parent){
parent.appendChild(document.createTextNode(`
                Content will be here
            `));
})(el_59);
parent.appendChild(el_59);
})(el_55);
(function(parent){
})(el_55);
parent.appendChild(el_55);
})(el_54);
(function(parent){
})(el_54);
parent.appendChild(el_54);
const el_60 = document.createElement("ins");
el_60.setAttribute("class", `adsbygoogle`);
el_60.setAttribute("style", `display:block; text-align:center;`);
el_60.setAttribute("data-ad-client", `ca-pub-5521219086088837`);
el_60.setAttribute("data-ad-slot", `5549138288`);
el_60.setAttribute("data-ad-format", `auto`);
el_60.setAttribute("data-full-width-responsive", `true`);
parent.appendChild(el_60);
})(document.body);

const externalScripts = [
  {
    "type": "external",
    "src": "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5521219086088837"
  },
  {
    "type": "external",
    "src": "https://www.googletagmanager.com/gtag/js?id=G-WX5VS54ZDW"
  },
  {
    "type": "external",
    "src": "https://fundingchoicesmessages.google.com/i/pub-5521219086088837?ers=1"
  },
  {
    "type": "external",
    "src": "https://cdn.jsdelivr.net/gh/jjthecoolest/goon/gnmath.js"
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

const inlineScripts = [
  "\n        //window.addEventListener('beforeunload', function (event) {\n        // event.preventDefault();\n        //   event.returnValue = '';\n        //   return 'Are you sure you want to leave? Any unsaved changes will be lost.';\n        //  });\n    ",
  "\n        window.dataLayer = window.dataLayer || [];\n\n        function gtag() {\n            dataLayer.push(arguments);\n        }\n        gtag('js', new Date());\n        gtag('config', 'G-WX5VS54ZDW');\n    ",
  "\n        (function() {\n            function signalGooglefcPresent() {\n                if (!window.frames['googlefcPresent']) {\n                    if (document.body) {\n                        const iframe = document.createElement('iframe');\n                        iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';\n                        iframe.style.display = 'none';\n                        iframe.name = 'googlefcPresent';\n                        document.body.appendChild(iframe);\n                    } else {\n                        setTimeout(signalGooglefcPresent, 0);\n                    }\n                }\n            }\n            signalGooglefcPresent();\n        })();\n    ",
  "\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ",
  "\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ",
  "\n        const container = document.getElementById('container');\n        const zoneViewer = document.getElementById('zoneViewer');\n        let zoneFrame = document.getElementById('zoneFrame');\n        const searchBar = document.getElementById('searchBar');\n        const sortOptions = document.getElementById('sortOptions');\n        // https://www.jsdelivr.com/tools/purge\n        const zonesurls = [\n            \"https://cdn.jsdelivr.net/gh/nobody81754/assets@main/zones.json\",\n            \"https://cdn.jsdelivr.net/gh/nobody81754/assets@latest/zones.json\",\n            \"https://cdn.jsdelivr.net/gh/nobody81754/assets@master/zones.json\",\n            \"https://cdn.jsdelivr.net/gh/nobody81754/assets/zones.json\"\n        ];\n        let zonesURL = zonesurls[Math.floor(Math.random() * zonesurls.length)];\n        const coverURL = \"https://cdn.jsdelivr.net/gh/nobody81754/covers@main\";\n        const htmlURL = \"https://cdn.jsdelivr.net/gh/nobody81754/html@main\";\n        let zones = [];\n        let popularityData = {};\n        const featuredContainer = document.getElementById('featuredZones');\n        async function listZones() {\n            try {\n                let sharesponse;\n                let shajson;\n                let sha;\n                try {\n                    sharesponse = await fetch(\"https://api.github.com/repos/nobody81754/assets/commits?t=\" + Date.now());\n                } catch (error) {}\n                if (sharesponse && sharesponse.status === 200) {\n                    try {\n                        shajson = await sharesponse.json();\n                        sha = shajson[0]['sha'];\n                        if (sha) {\n                            zonesURL = `https://cdn.jsdelivr.net/gh/nobody81754/assets@${sha}/zones.json`;\n                        }\n                    } catch (error) {\n                        try {\n                            let secondarysharesponse = await fetch(\"https://raw.githubusercontent.com/nobody81754/xml/refs/heads/main/sha.txt?t=\" + Date.now());\n                            if (secondarysharesponse && secondarysharesponse.status === 200) {\n                                sha = (await secondarysharesponse.text()).trim();\n                                if (sha) {\n                                    zonesURL = `https://cdn.jsdelivr.net/gh/nobody81754/assets@${sha}/zones.json`;\n                                }\n                            }\n                        } catch (error) {}\n                    }\n                }\n                const response = await fetch(zonesURL + \"?t=\" + Date.now());\n                const json = await response.json();\n                zones = json;\n                zones[0].featured = false; // always gonna be the discord\n                await fetchPopularity();\n                sortZones();\n                const search = new URLSearchParams(window.location.search);\n                const id = search.get('id');\n                const embed = window.location.hash.includes(\"embed\");\n                if (id) {\n                    const zone = zones.find(zone => zone.id + '' == id + '');\n                    if (zone) {\n                        if (embed) {\n                            if (zone.url.startsWith(\"http\")) {\n                                window.open(zone.url, \"_blank\");\n                            } else {\n                                const url = zone.url.replace(\"{COVER_URL}\", coverURL).replace(\"{HTML_URL}\", htmlURL);\n                                fetch(url + \"?t=\" + Date.now()).then(response => response.text()).then(html => {\n                                    document.documentElement.innerHTML = html;\n                                    const popup = document.createElement(\"div\");\n                                    popup.style.position = \"fixed\";\n                                    popup.style.bottom = \"20px\";\n                                    popup.style.right = \"20px\";\n                                    popup.style.backgroundColor = \"#cce5ff\";\n                                    popup.style.color = \"#004085\";\n                                    popup.style.padding = \"10px\";\n                                    popup.style.border = \"1px solid #b8daff\";\n                                    popup.style.borderRadius = \"5px\";\n                                    popup.style.boxShadow = \"0px 0px 10px rgba(0,0,0,0.1)\";\n                                    popup.style.fontFamily = \"Arial, sans-serif\";\n\n                                    popup.innerHTML = `Play more games at <a href=\"https://Blooket1-V1.github.io\" target=\"_blank\" style=\"color:#004085; font-weight:bold;\">https://Blooket1-V1.github.io</a>!`;\n\n                                    const closeBtn = document.createElement(\"button\");\n                                    closeBtn.innerText = \"✖\";\n                                    closeBtn.style.marginLeft = \"10px\";\n                                    closeBtn.style.background = \"none\";\n                                    closeBtn.style.border = \"none\";\n                                    closeBtn.style.cursor = \"pointer\";\n                                    closeBtn.style.color = \"#004085\";\n                                    closeBtn.style.fontWeight = \"bold\";\n\n                                    closeBtn.onclick = () => popup.remove();\n                                    popup.appendChild(closeBtn);\n                                    document.body.appendChild(popup);\n                                    document.documentElement.querySelectorAll('script').forEach(oldScript => {\n                                        const newScript = document.createElement('script');\n                                        if (oldScript.src) {\n                                            newScript.src = oldScript.src;\n                                        } else {\n                                            newScript.textContent = oldScript.textContent;\n                                        }\n                                        document.body.appendChild(newScript);\n                                    });\n                                }).catch(error => alert(\"Failed to load zone: \" + error));\n                            }\n                        } else {\n                            openZone(zone);\n                        }\n                    }\n                }\n            } catch (error) {\n                console.error(error);\n                container.innerHTML = `Error loading zones: ${error}`;\n            }\n        }\n        async function fetchPopularity() {\n            try {\n                const response = await fetch(\"https://data.jsdelivr.com/v1/stats/packages/gh/nobody81754/html@main/files?period=year\");\n                const data = await response.json();\n                data.forEach(file => {\n                    const idMatch = file.name.match(/\\/(\\d+)\\.html$/);\n                    if (idMatch) {\n                        const id = parseInt(idMatch[1]);\n                        popularityData[id] = file.hits.total;\n                    }\n                });\n            } catch (error) {\n                popularityData[0] = 0;\n            }\n        }\n        \n        function sortZones() {\n            const sortBy = sortOptions.value;\n            if (sortBy === 'name') {\n                zones.sort((a, b) => a.name.localeCompare(b.name));\n            } else if (sortBy === 'id') {\n                zones.sort((a, b) => a.id - b.id);\n            } else if (sortBy === 'popular') {\n                zones.sort((a, b) => (popularityData[b.id] || 0) - (popularityData[a.id] || 0));\n            }\n            zones.sort((a, b) => (a.id === -1 ? -1 : b.id === -1 ? 1 : 0));\n            const featured = zones.filter(z => z.featured);\n            displayFeaturedZones(featured);\n            displayZones(zones);\n        }\n\n        function displayFeaturedZones(featuredZones) {\n            featuredContainer.innerHTML = \"\";\n            featuredZones.forEach((file, index) => {\n                const zoneItem = document.createElement(\"div\");\n                zoneItem.className = \"zone-item\";\n                zoneItem.onclick = () => openZone(file);\n                const img = document.createElement(\"img\");\n                img.dataset.src = file.cover.replace(\"{COVER_URL}\", coverURL).replace(\"{HTML_URL}\", htmlURL);\n                img.alt = file.name;\n                img.loading = \"lazy\";\n                img.className = \"lazy-zone-img\";\n                zoneItem.appendChild(img);\n                const button = document.createElement(\"button\");\n                button.textContent = file.name;\n                button.onclick = (event) => {\n                    event.stopPropagation();\n                    openZone(file);\n                };\n                zoneItem.appendChild(button);\n                featuredContainer.appendChild(zoneItem);\n            });\n            if (featuredContainer.innerHTML === \"\") {\n                featuredContainer.innerHTML = \"No featured zones found.\";\n            } else {\n                document.getElementById(\"allZonesSummary\").textContent = `Featured Zones (${featuredZones.length})`;\n            }\n\n            const lazyImages = document.querySelectorAll('#featuredZones img.lazy-zone-img');\n            const imageObserver = new IntersectionObserver((entries, observer) => {\n                entries.forEach(entry => {\n                    if (entry.isIntersecting) {\n                        const img = entry.target;\n                        img.src = img.dataset.src;\n                        img.classList.remove(\"lazy-zone-img\");\n                        observer.unobserve(img);\n                    }\n                });\n            }, {\n                rootMargin: \"100px\",\n                threshold: 0.1\n            });\n\n            lazyImages.forEach(img => {\n                imageObserver.observe(img);\n            });\n        }\n\n        function displayZones(zones) {\n            container.innerHTML = \"\";\n            zones.forEach((file, index) => {\n                const zoneItem = document.createElement(\"div\");\n                zoneItem.className = \"zone-item\";\n                zoneItem.onclick = () => openZone(file);\n                const img = document.createElement(\"img\");\n                img.dataset.src = file.cover.replace(\"{COVER_URL}\", coverURL).replace(\"{HTML_URL}\", htmlURL);\n                img.alt = file.name;\n                img.loading = \"lazy\";\n                img.className = \"lazy-zone-img\";\n                zoneItem.appendChild(img);\n                const button = document.createElement(\"button\");\n                button.textContent = file.name;\n                button.onclick = (event) => {\n                    event.stopPropagation();\n                    openZone(file);\n                };\n                zoneItem.appendChild(button);\n                container.appendChild(zoneItem);\n            });\n            if (container.innerHTML === \"\") {\n                container.innerHTML = \"No zones found.\";\n            } else {\n                document.getElementById(\"allSummary\").textContent = `All Zones (${zones.length})`;\n            }\n\n            const lazyImages = document.querySelectorAll('img.lazy-zone-img');\n            const imageObserver = new IntersectionObserver((entries, observer) => {\n                entries.forEach(entry => {\n                    if (entry.isIntersecting) {\n                        const img = entry.target;\n                        img.src = img.dataset.src;\n                        img.classList.remove(\"lazy-zone-img\");\n                        observer.unobserve(img);\n                    }\n                });\n            }, {\n                rootMargin: \"100px\",\n                threshold: 0.1\n            });\n\n            lazyImages.forEach(img => {\n                imageObserver.observe(img);\n            });\n        }\n\n        function filterZones() {\n            const query = searchBar.value.toLowerCase();\n            const filteredZones = zones.filter(zone => zone.name.toLowerCase().includes(query));\n            if (query.length !== 0) {\n                document.getElementById(\"featuredZonesWrapper\").removeAttribute(\"open\");\n            }\n            displayZones(filteredZones);\n        }\n\n        function openZone(file) {\n            if (file.url.startsWith(\"http\")) {\n                window.open(file.url, \"_blank\");\n            } else {\n                const url = file.url.replace(\"{COVER_URL}\", coverURL).replace(\"{HTML_URL}\", htmlURL);\n                fetch(url + \"?t=\" + Date.now()).then(response => response.text()).then(html => {\n                    if (zoneFrame.contentDocument === null) {\n                        zoneFrame = document.createElement(\"iframe\");\n                        zoneFrame.id = \"zoneFrame\";\n                        zoneViewer.appendChild(zoneFrame);\n                    }\n                    zoneFrame.contentDocument.open();\n                    zoneFrame.contentDocument.write(html);\n                    zoneFrame.contentDocument.close();\n                    document.getElementById('zoneName').textContent = file.name;\n                    document.getElementById('zoneId').textContent = file.id;\n                    document.getElementById('zoneAuthor').textContent = \"by \" + file.author;\n                    if (file.authorLink) {\n                        document.getElementById('zoneAuthor').href = file.authorLink;\n                    }\n                    zoneViewer.style.display = \"block\";\n                    const url = new URL(window.location);\n                    url.searchParams.set('id', file.id);\n                    history.pushState(null, '', url.toString());\n                }).catch(error => alert(\"Failed to load zone: \" + error));\n            }\n        }\n\n        function aboutBlank() {\n            const newWindow = window.open();\n            let zone = zones.find(zone => zone.id + '' === document.getElementById('zoneId').textContent).url.replace(\"{COVER_URL}\", coverURL).replace(\"{HTML_URL}\", htmlURL);\n            fetch(zone + \"?t=\" + Date.now()).then(response => response.text()).then(html => {\n                if (newWindow) {\n                    var link = newWindow.document.createElement('link');\n                    link.rel = 'icon';\n                    newWindow.document.head.appendChild(link);\n                    link.href = \"https://resources.finalsite.net/images/f_auto,q_auto/v1626100427/k12albemarleorg/uj41eppe27bunrvhwnep/PowerSchoolLogos_Vertical-01.png\";\n                    newWindow.document.open();\n                    newWindow.document.write(html);\n                    newWindow.document.title = \"Home | Schoology\";\n                    newWindow.document.close();\n                }\n            })\n        }\n\n        function closeZone() {\n            zoneViewer.style.display = \"none\";\n            zoneViewer.removeChild(zoneFrame);\n            const url = new URL(window.location);\n            url.searchParams.delete('id');\n            history.pushState(null, '', url.toString());\n        }\n\n        function downloadZone() {\n            let zone = zones.find(zone => zone.id + '' === document.getElementById('zoneId').textContent);\n            fetch(zone.url.replace(\"{HTML_URL}\", htmlURL) + \"?t=\" + Date.now()).then(res => res.text()).then(text => {\n                const blob = new Blob([text], {\n                    type: \"text/plain;charset=utf-8\"\n                });\n                const url = URL.createObjectURL(blob);\n                const a = document.createElement('a');\n                a.href = url;\n                a.download = zone.name + \".html\";\n                document.body.appendChild(a);\n                a.click();\n                document.body.removeChild(a);\n                URL.revokeObjectURL(url);\n            });\n        }\n\n        function fullscreenZone() {\n            if (zoneFrame.requestFullscreen) {\n                zoneFrame.requestFullscreen();\n            } else if (zoneFrame.mozRequestFullScreen) {\n                zoneFrame.mozRequestFullScreen();\n            } else if (zoneFrame.webkitRequestFullscreen) {\n                zoneFrame.webkitRequestFullscreen();\n            } else if (zoneFrame.msRequestFullscreen) {\n                zoneFrame.msRequestFullscreen();\n            }\n        }\n\n        function sanitizeData(obj, maxStringLen = 1000, maxArrayLen = 10000) {\n            if (typeof obj === 'string') {\n                return obj.length > maxStringLen ? obj.slice(0, maxStringLen) + '...[truncated]' : obj;\n            }\n\n            if (obj instanceof Uint8Array) {\n                if (obj.length > maxArrayLen) {\n                    return `[Uint8Array too large (${obj.length} bytes), truncated]`;\n                }\n                return obj;\n            }\n\n            if (Array.isArray(obj)) {\n                return obj.map(item => sanitizeData(item, maxStringLen, maxArrayLen));\n            }\n\n            if (obj && typeof obj === 'object') {\n                const newObj = {};\n                for (const key in obj) {\n                    if (obj.hasOwnProperty(key)) {\n                        newObj[key] = sanitizeData(obj[key], maxStringLen, maxArrayLen);\n                    }\n                }\n                return newObj;\n            }\n\n            return obj;\n        }\n\n        async function saveData() {\n            alert(\"This might take a while, dont touch anything other than this OK button\");\n            const result = {};\n            result.cookies = document.cookie;\n            result.localStorage = {\n                ...localStorage\n            };\n            result.sessionStorage = {\n                ...sessionStorage\n            };\n            result.indexedDB = {};\n            const dbs = await indexedDB.databases();\n            for (const dbInfo of dbs) {\n                if (!dbInfo.name) continue;\n                result.indexedDB[dbInfo.name] = {};\n                await new Promise((resolve, reject) => {\n                    const openRequest = indexedDB.open(dbInfo.name, dbInfo.version);\n                    openRequest.onerror = () => reject(openRequest.error);\n                    openRequest.onsuccess = () => {\n                        const db = openRequest.result;\n                        const storeNames = Array.from(db.objectStoreNames);\n                        if (storeNames.length === 0) {\n                            resolve();\n                            return;\n                        }\n                        const transaction = db.transaction(storeNames, \"readonly\");\n                        const storePromises = [];\n                        for (const storeName of storeNames) {\n                            result.indexedDB[dbInfo.name][storeName] = [];\n                            const store = transaction.objectStore(storeName);\n                            const getAllRequest = store.getAll();\n                            const p = new Promise((res, rej) => {\n                                getAllRequest.onsuccess = () => {\n                                    result.indexedDB[dbInfo.name][storeName] = sanitizeData(getAllRequest.result, 1000, 100);\n                                    res();\n                                };\n                                getAllRequest.onerror = () => rej(getAllRequest.error);\n                            });\n                            storePromises.push(p);\n                        }\n                        Promise.all(storePromises).then(() => resolve());\n                    };\n                });\n            }\n\n            result.caches = {};\n            const cacheNames = await caches.keys();\n            for (const cacheName of cacheNames) {\n                const cache = await caches.open(cacheName);\n                const requests = await cache.keys();\n                result.caches[cacheName] = [];\n                for (const req of requests) {\n                    const response = await cache.match(req);\n                    if (!response) continue;\n                    const cloned = response.clone();\n                    const contentType = cloned.headers.get('content-type') || '';\n                    let body;\n                    try {\n                        if (contentType.includes('application/json')) {\n                            body = await cloned.json();\n                        } else if (contentType.includes('text') || contentType.includes('javascript')) {\n                            body = await cloned.text();\n                        } else {\n                            const buffer = await cloned.arrayBuffer();\n                            body = btoa(String.fromCharCode(...new Uint8Array(buffer)));\n                        }\n                    } catch (e) {\n                        body = '[Unable to read body]';\n                    }\n                    result.caches[cacheName].push({\n                        url: req.url,\n                        body,\n                        contentType\n                    });\n                }\n            }\n\n            alert(\"Done, wait for the download to come\");\n            const link = document.createElement(\"a\");\n            link.href = URL.createObjectURL(new Blob([JSON.stringify(result)], {\n                type: \"text/plain\"\n            }));\n            link.download = `${Date.now()}.data`;\n            document.body.appendChild(link);\n            link.click();\n            document.body.removeChild(link);\n        }\n\n        async function loadData(event) {\n            const file = event.target.files[0];\n            if (!file) return;\n            const reader = new FileReader();\n            reader.onload = async function(e) {\n                const data = JSON.parse(e.target.result);\n                if (data.cookies) {\n                    data.cookies.split(';').forEach(cookie => {\n                        document.cookie = cookie.trim();\n                    });\n                }\n\n                if (data.localStorage) {\n                    for (const key in data.localStorage) {\n                        localStorage.setItem(key, data.localStorage[key]);\n                    }\n                }\n\n                if (data.sessionStorage) {\n                    for (const key in data.sessionStorage) {\n                        sessionStorage.setItem(key, data.sessionStorage[key]);\n                    }\n                }\n\n                if (data.indexedDB) {\n                    for (const dbName in data.indexedDB) {\n                        const stores = data.indexedDB[dbName];\n                        await new Promise((resolve, reject) => {\n                            const request = indexedDB.open(dbName, 1);\n                            request.onupgradeneeded = e => {\n                                const db = e.target.result;\n                                for (const storeName in stores) {\n                                    if (!db.objectStoreNames.contains(storeName)) {\n                                        db.createObjectStore(storeName, {\n                                            keyPath: 'id',\n                                            autoIncrement: true\n                                        });\n                                    }\n                                }\n                            };\n                            request.onsuccess = e => {\n                                const db = e.target.result;\n                                const transaction = db.transaction(Object.keys(stores), 'readwrite');\n                                transaction.onerror = () => reject(transaction.error);\n                                let pendingStores = Object.keys(stores).length;\n\n                                for (const storeName in stores) {\n                                    const objectStore = transaction.objectStore(storeName);\n                                    objectStore.clear().onsuccess = () => {\n                                        for (const item of stores[storeName]) {\n                                            objectStore.put(item);\n                                        }\n                                        pendingStores--;\n                                        if (pendingStores === 0) resolve();\n                                    };\n                                }\n                            };\n                            request.onerror = () => reject(request.error);\n                        });\n                    }\n                }\n\n                if (data.caches) {\n                    for (const cacheName in data.caches) {\n                        const cache = await caches.open(cacheName);\n                        await cache.keys().then(keys => Promise.all(keys.map(k => cache.delete(k)))); // clear existing\n\n                        for (const entry of data.caches[cacheName]) {\n                            let responseBody;\n                            if (entry.contentType.includes('application/json')) {\n                                responseBody = JSON.stringify(entry.body);\n                            } else if (entry.contentType.includes('text') || entry.contentType.includes('javascript')) {\n                                responseBody = entry.body;\n                            } else {\n                                const binaryStr = atob(entry.body);\n                                const len = binaryStr.length;\n                                const bytes = new Uint8Array(len);\n                                for (let i = 0; i < len; i++) {\n                                    bytes[i] = binaryStr.charCodeAt(i);\n                                }\n                                responseBody = bytes.buffer;\n                            }\n                            const headers = new Headers({\n                                'content-type': entry.contentType\n                            });\n                            const response = new Response(responseBody, {\n                                headers\n                            });\n                            await cache.put(entry.url, response);\n                        }\n                    }\n                }\n                alert(\"Data loaded\");\n            };\n            alert(\"This might take a while, dont touch anything other than this OK button\");\n            reader.readAsText(file);\n        }\n\n        function darkMode() {\n            document.body.classList.toggle(\"dark-mode\");\n        }\n\n        function cloakIcon(url) {\n            const link = document.querySelector(\"link[rel~='icon']\");\n            link.rel = \"icon\";\n            if ((url + \"\").trim().length === 0) {\n                link.href = \"favicon.png\";\n            } else {\n                link.href = url;\n            }\n            document.head.appendChild(link);\n        }\n\n        function cloakName(string) {\n            if ((string + \"\").trim().length === 0) {\n                document.title = \"Blooket1-V1\";\n                return;\n            }\n            document.title = string;\n        }\n\n        function tabCloak() {\n            closePopup();\n            document.getElementById('popupTitle').textContent = \"Tab Cloak\";\n            const popupBody = document.getElementById('popupBody');\n            popupBody.innerHTML = `\n        <label for=\"tab-cloak-textbox\" style=\"font-weight: bold;\">Set Tab Title:</label><br>\n        <input type=\"text\" id=\"tab-cloak-textbox\" placeholder=\"Enter new tab name...\" oninput=\"cloakName(this.value)\">\n        <br><br><br><br>\n        <label for=\"tab-cloak-textbox\" style=\"font-weight: bold;\">Set Tab Icon:</label><br>\n        <input type=\"text\" id=\"tab-cloak-textbox\" placeholder=\"Enter new tab icon...\" oninput='cloakIcon(this.value)'>\n        <br><br><br>\n    `;\n            popupBody.contentEditable = false;\n            document.getElementById('popupOverlay').style.display = \"flex\";\n        }\n\n        const settings = document.getElementById('settings');\n        settings.addEventListener('click', () => {\n            document.getElementById('popupTitle').textContent = \"Settings\";\n            const popupBody = document.getElementById('popupBody');\n            popupBody.innerHTML = `\n    <button id=\"settings-button\" onclick=\"darkMode()\">Toggle Dark Mode</button>\n    <br><br>\n    <button id=\"settings-button\" onclick=\"tabCloak()\">Tab Cloak</button>\n    <br>\n    `;\n            popupBody.contentEditable = false;\n            document.getElementById('popupOverlay').style.display = \"flex\";\n        });\n\n        function showContact() {\n            document.getElementById('popupTitle').textContent = \"\";\n            const popupBody = document.getElementById('popupBody');\n            popupBody.innerHTML = `\n    <p></p> \n    <p></p> `;\n            popupBody.contentEditable = false;\n            document.getElementById('popupOverlay').style.display = \"flex\";\n        }\n\n        function loadPrivacy() {\n            document.getElementById('popupTitle').textContent = \"Privacy Policy\";\n            const popupBody = document.getElementById('popupBody');\n            popupBody.innerHTML = `\n        <div style=\"max-height: 60vh; overflow-y: auto;\">\n            <h2>PRIVACY POLICY</h2>\n            <p>Last updated April 17, 2025</p>\n            <p>This Privacy Notice for Blooket1-V1 (\"we,\" \"us,\" or \"our\"), describes how and why we might access, collect, store, use, and/or share (\"process\") your personal information when you use our services (\"Services\"), including when you:</p>\n            <ul>\n                <li>Visit our website at <a href=\"https://Blooket1-V1.github.io\">https://Blooket1-V1.github.io</a>, or any website of ours that links to this Privacy Notice</li>\n                <li>Engage with us in other related ways, including any sales, marketing, or events</li>\n            </ul>\n            <p>Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href=\"https://discord.com/404\">https://discord.com/404</a>.</p>\n            \n            <h3>SUMMARY OF KEY POINTS</h3>\n            <p>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</p>\n            \n            <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.</p>\n            \n            <p><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered \"special\" or \"sensitive\" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</p>\n            \n            <p><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>\n            \n            <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.</p>\n            \n            <p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.</p>\n            \n            <p><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.</p>\n            \n            <p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.</p>\n            \n            <p><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>\n        </div>\n    `;\n            popupBody.contentEditable = false;\n            document.getElementById('popupOverlay').style.display = \"flex\";\n        }\n\n        function closePopup() {\n            document.getElementById('popupOverlay').style.display = \"none\";\n        }\n        listZones();\n\n        const schoolList = [\"deledao\", \"goguardian\", \"lightspeed\", \"linewize\", \"securly\", \".edu/\"];\n\n        function isBlockedDomain(url) {\n            const domain = new URL(url, location.origin).hostname + \"/\";\n            return schoolList.some(school => domain.includes(school));\n        }\n\n        const originalFetch = window.fetch;\n        window.fetch = function(url, options) {\n            if (isBlockedDomain(url)) {\n                console.warn(`lam`);\n                return Promise.reject(new Error(\"lam\"));\n            }\n            return originalFetch.apply(this, arguments);\n        };\n\n        const originalOpen = XMLHttpRequest.prototype.open;\n        XMLHttpRequest.prototype.open = function(method, url) {\n            if (isBlockedDomain(url)) {\n                console.warn(`lam`);\n                return;\n            }\n            return originalOpen.apply(this, arguments);\n        };\n\n        HTMLCanvasElement.prototype.toDataURL = function(...args) {\n            return \"\";\n        };\n    "
];

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
