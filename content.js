// Change this to any image you want
const replacementImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_lxN_VXmC-cd8t91_7Gf38RY1777Il3Gg9_NhNywg1WIUvqD3vdYvELXXepdo1rBh8k&usqp=CAU";

function replaceImages() {
    document.querySelectorAll("img").forEach(img => {
        img.src = replacementImage;
        img.srcset = "";
    });
}

// Run once immediately
replaceImages();

// Optional: observe new images added dynamically
const observer = new MutationObserver(mutations => {
    mutations.forEach(() => replaceImages());
});

observer.observe(document.body, { childList: true, subtree: true });
