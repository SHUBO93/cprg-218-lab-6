document.addEventListener("DOMContentLoaded", function () {
    // 获取按钮元素
    var indexBtn = document.getElementById("indexBtn");
    indexBtn.addEventListener("click", function () {
        console.log("index");
        window.location.href = "index.html"; // 跳转到 Home 页面
    });
});

