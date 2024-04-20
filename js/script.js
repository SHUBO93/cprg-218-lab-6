document.addEventListener("DOMContentLoaded", function () {
    // 获取按钮元素
    var homeBtn = document.getElementById("homeBtn");
    var galleryBtn = document.getElementById("galleryBtn");

    // 添加点击事件处理程序
    homeBtn.addEventListener("click", function () {
        window.location.href = "aboutMe.html"; // 跳转到 Home 页面
    });

    galleryBtn.addEventListener("click", function () {
        window.location.href = "gallery.html"; // 跳转到 Gallery 页面
    });
});