document.addEventListener("DOMContentLoaded", function () {
    // 获取按钮元素
    var aboutmeBtn = document.getElementById("aboutmeBtn");
    var galleryBtn = document.getElementById("galleryBtn");
    var indexBtn = document.getElementById("indexBtn");

    // 添加点击事件处理程序
    aboutmeBtn.addEventListener("click", function () {
        window.location.href = "aboutMe.html"; // 跳转到 Home 页面
    });

    galleryBtn.addEventListener("click", function () {
        window.location.href = "gallery.html"; // 跳转到 Gallery 页面
    });

    indexBtn.addEventListener("click", function () {
        window.location.href = "index.html"; // 跳转到 Home 页面
    });
});