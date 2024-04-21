document.addEventListener("DOMContentLoaded", function () {
    // 获取按钮元素
    var aboutmeBtn = document.getElementById("aboutmeBtn");
    var galleryBtn = document.getElementById("galleryBtn");

    // 添加点击事件处理程序
    aboutmeBtn.addEventListener("click", function () {
        console.log("aboutme");
        window.location.href = "aboutMe.html"; // 跳转到 Home 页面
    });

    galleryBtn.addEventListener("click", function () {
        console.log("gallery");
        window.location.href = "gallery.html"; // 跳转到 Gallery 页面
    });


});


// // Check which page you're on
// if (window.location.href.endsWith('/index.html')) {
//     // Get a reference to the button on page 1
//     var aboutmeBtn = document.getElementById("aboutmeBtn");
//     var galleryBtn = document.getElementById("galleryBtn");
//     // Add an event listener for the 'click' event on page 1 button
//     aboutmeBtn.addEventListener("click", function () {
//         console.log("aboutme")
//         window.location.href = "aboutMe.html"; // 跳转到 Home 页面
//     });

//     galleryBtn.addEventListener("click", function () {
//         console.log("gallery");
//         window.location.href = "gallery.html"; // 跳转到 Gallery 页面
//     });

// } else if (window.location.href.endsWith('/aboutMe.html')) {
//     // Get a reference to the button on page 2
//     var indexBtn = document.getElementById("indexBtn");

//     indexBtn.addEventListener("click", function () {
//         window.location.href = "index.html"; // 跳转到 Home 页面
//     });

// }
// else if (window.location.href.endsWith('/gallery.html')) {
//     // Get a reference to the button on page 2
//     var indexBtn = document.getElementById("indexBtn");

//     indexBtn.addEventListener("click", function () {
//         window.location.href = "index.html"; // 跳转到 Home 页面
//     });
// }
