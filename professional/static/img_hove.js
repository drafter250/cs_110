document.addEventListener("DOMContentLoaded", function(event) { 
    function hoverSwapImg(event) {
        var start_img = this;
        console.log(start_img);
        var node1 = start_img.parentNode;
        console.log(node1);
        var node2 = node1.parentNode;
        console.log(node2);
        var p_images = node2.parentNode;
        console.log(p_images);

        var main_img = p_images.querySelector(".main_framed_img");
        console.log(main_img);
        main_img.src = start_img.src;
        main_img.href = start_img.href;
    };

    var img_list = document.getElementsByClassName("framed_img");
    console.log(img_list);
    for (var i=0; i < img_list.length; i++) {
        console.log(img_list[i]);
        img_list[i].addEventListener("mouseover", hoverSwapImg);
    }
})
