function download(url,down)
{
    console.log("img start downloading....");
    setTimeout(() => {
        let img=url.split('/').pop();
        down(img);
    }, 2000);
}
function compress(img,down){
    console.log("img start compressing....");
    setTimeout(() => {
        let cimg=img.split('.')[0]+"zip";
        cmp(cimg);
    },1000);
}

function upload(cpm,upl)
{
    console.log("image start uploading....");
    setTimeout(() => {
        let u="https://localhost:3000/"+cmp;
        upl(u);
    },2000);
}

let url="https://www.facebook.com/photo.jpg";

download(url,function down(img){
    console.log("image downloaded successfully",img);
    compress(img,function cmp(cimg){
        console.log("file compressed successfully....",cimg);
        upload(cimg,function upl(u){
            console.log("img uploaded successfully....");
        });
    });
});