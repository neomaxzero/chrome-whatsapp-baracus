

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', afterDOMLoaded);
} else {
    afterDOMLoaded();
}

function afterDOMLoaded() {
    document.addEventListener('DOMNodeInserted', mutator);
}

function mutator(event) {
    // Mutate images in profile
    const IMG_SRC = chrome.extension.getURL("baracus.jpg");
    const profileImages = document.getElementsByClassName("Qgzj8");
    if (profileImages.length) {
        [...profileImages].forEach(img => {
            img.src = IMG_SRC;
        });
    }

    // Mutate name in profile
    const NAME = "Marito Baracus";
    const names = document.querySelectorAll("._25Ooe span");
    if (names.length && names.length < 10000) {
        [...names].forEach(span => {
            if (span.innerHTML === NAME) return;
            span.innerHTML = NAME;
        });
    }

}
