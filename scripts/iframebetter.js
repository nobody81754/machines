(async function() {
    const iframe = document.createElement('iframe');

    try {
        const response = await fetch('JSDELIVRURL');
        const HTMLCODE = await response.text();

        iframe.srcdoc = HTMLCODE;

        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '100%');

        iframe.style.border = "none";
        iframe.style.position = "fixed";
        iframe.style.top = "0";
        iframe.style.left = "0";

        const appendIframe = () => document.body.appendChild(iframe);

        if (document.body) {
            appendIframe();
        } else {
            window.addEventListener('DOMContentLoaded', appendIframe);
        }
    } catch (err) {
        console.error("Failed to load HTML:", err);
    }
})();
