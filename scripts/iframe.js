(function() {
    const iframe = document.createElement('iframe');

    iframe.src = DATA_URL_HERE;

    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');

    iframe.style.border = "none";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";

    if (document.body) {
        document.body.appendChild(iframe);
    } else {
        window.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(iframe);
        });
    }
})();
