var c = document.getElementById("myCanvas");
var img = new Image();
img.src = 'SIIKD2/1b.png';
var ctx = c.getContext("2d");
ctx.drawImage(img, 0, 0);
img.src = 'SIIKD2/1t.png';
ctx.globalCompositeOperation = "destination-over";
ctx.drawImage(img, 0, 0);


function preImg(sourceId, targetId) {
    if (typeof FileReader === 'undefined') {
        alert('Your browser does not support FileReader...');
        return;
    }
    var reader = new FileReader();

    reader.onload = function (e) {
        var img = new Image();
        img.src = this.result;
        img.height = 374;
        img.width = 278;

        img.onload = function () {
            ctx.drawImage(img, 341, 155);
        }
    };
    reader.readAsDataURL(document.getElementById(sourceId).files[0]);
}