function header() {
    var html = "";
    html += '<small>のりたまの部屋</small>';
    document.write(html);
}

function footer() {
    var html = "";
    html += '<small>©2020 Noritama</small>';
    document.write(html);
}

function today() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    document.write("今日は" + year + "年" + month + "月" + day + "日です。");
}