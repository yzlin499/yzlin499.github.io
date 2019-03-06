function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function makeString(cid) {
    return "{\"course_id\":\"" + cid + "\",\"sgin_id\":\"" + (new Date()).getTime() + "\",\"fashion\":\"1\"}";
}