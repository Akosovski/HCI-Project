$(function(){
    console.log('hello')
    imgSlide = $('#img-slide')
    var imgPath = ['test1.png', 'test2.png', 'test3.png', 'test4.png'];
    var currentImg = 0;
    var pathLength = imgPath.length

    $("#right-btn").click(function(){
        currentImg = currentImg + 1;
        if (currentImg >= pathLength){
            currentImg = 0;
        }
        imgSlide.attr("src", imgPath[currentImg]);
        console.log(imgPath[currentImg])
    });
    
    $('#left-btn').click(function(){
        currentImg = currentImg - 1;
        if (currentImg < 0){
            currentImg = pathLength-1;
        }
        imgSlide.attr("src", imgPath[currentImg]);
        console.log(imgPath[currentImg])
    });
})