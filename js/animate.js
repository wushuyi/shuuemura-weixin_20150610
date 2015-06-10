var Animate = {
    1: {
        up: {out: "pt-page-moveToTop", "IN": "pt-page-moveFromBottom"},
        down: {out: "pt-page-moveToBottom", "IN": "pt-page-moveFromTop"},
        left: {out: "pt-page-moveToLeft", "IN": "pt-page-moveFromRight"},
        right: {out: "pt-page-moveToRight", "IN": "pt-page-moveFromLeft"}
    },
    2: {
        up: {out: "pt-page-rotatePushTop", "IN": "pt-page-moveFromBottom"},
        down: {out: "pt-page-rotatePushBottom", "IN": "pt-page-moveFromTop"},
        left: {out: "pt-page-rotatePushLeft", "IN": "pt-page-moveFromRight"},
        right: {out: "pt-page-rotatePushRight", "IN": "pt-page-moveFromLeft"}
    },
    3: {
        up: {out: "pt-page-rotatePushTop", "IN": "pt-page-rotatePullBottom pt-page-delay180"},
        down: {out: "pt-page-rotatePushBottom", "IN": "pt-page-rotatePullTop pt-page-delay180"},
        left: {out: "pt-page-rotatePushLeft", "IN": "pt-page-rotatePullRight pt-page-delay180"},
        right: {out: "pt-page-rotatePushRight", "IN": "pt-page-rotatePullLeft pt-page-delay180"}
    },
    4: {
        up: {out: "pt-page-rotateBottomSideFirst", "IN": "pt-page-moveFromBottom pt-page-delay200 pt-page-ontop"},
        down: {out: "pt-page-rotateTopSideFirst", "IN": "pt-page-moveFromTop pt-page-delay200 pt-page-ontop"},
        left: {out: "pt-page-rotateRightSideFirst", "IN": "pt-page-moveFromRight pt-page-delay200 pt-page-ontop"},
        right: {out: "pt-page-rotateLeftSideFirst", "IN": "pt-page-moveFromLeft pt-page-delay200 pt-page-ontop"}
    },
    5: {
        up: {out: "pt-page-flipOutTop", "IN": "pt-page-flipInBottom pt-page-delay500"},
        down: {out: "pt-page-flipOutBottom", "IN": "pt-page-flipInTop pt-page-delay500"},
        left: {out: "pt-page-flipOutRight", "IN": "pt-page-flipInLeft pt-page-delay500"},
        right: {out: "pt-page-flipOutLeft", "IN": "pt-page-flipInRight pt-page-delay500"}
    },
    6: {
        up: {out: "pt-page-rotateFall pt-page-ontop", "IN": "pt-page-scaleUp"},
        down: {out: "pt-page-rotateFalltoright pt-page-ontop", "IN": "pt-page-scaleUp"},
        left: {out: "pt-page-rotateFall pt-page-ontop", "IN": "pt-page-scaleUp"},
        right: {out: "pt-page-rotateFalltoright pt-page-ontop", "IN": "pt-page-scaleUp"}
    },
    7: {
        up: {out: "pt-page-rotateFoldTop", "IN": "pt-page-moveFromBottomFade"},
        down: {out: "pt-page-rotateFoldBottom", "IN": "pt-page-moveFromTopFade"},
        left: {out: "pt-page-rotateFoldLeft", "IN": "pt-page-moveFromRightFade"},
        right: {out: "pt-page-rotateFoldRight", "IN": "pt-page-moveFromLeftFade"}
    },
    8: {
        up: {out: "pt-page-moveToTopFade", "IN": "pt-page-rotateUnfoldBottom"},
        down: {out: "pt-page-moveToBottomFade", "IN": "pt-page-rotateUnfoldTop"},
        left: {out: "pt-page-moveToLeftFade", "IN": "pt-page-rotateUnfoldRight"},
        right: {out: "pt-page-moveToRightFade", "IN": "pt-page-rotateUnfoldLeft"}
    },
    9: {
        up: {out: "pt-page-rotateCubeTopOut pt-page-ontop", "IN": "pt-page-rotateCubeTopIn"},
        down: {out: "pt-page-rotateCubeBottomOut pt-page-ontop", "IN": "pt-page-rotateCubeBottomIn"},
        left: {out: "pt-page-rotateCubeLeftOut pt-page-ontop", "IN": "pt-page-rotateCubeLeftIn"},
        right: {out: "pt-page-rotateCubeRightOut pt-page-ontop", "IN": "pt-page-rotateCubeRightIn"}
    },
    10: {
        up: {out: "pt-page-rotateCarouselTopOut pt-page-ontop", "IN": "pt-page-rotateCarouselTopIn"},
        down: {out: "pt-page-rotateCarouselBottomOut pt-page-ontop", "IN": "pt-page-rotateCarouselBottomIn"},
        left: {out: "pt-page-rotateCarouselLeftOut pt-page-ontop", "IN": "pt-page-rotateCarouselLeftIn"},
        right: {out: "pt-page-rotateCarouselRightOut pt-page-ontop", "IN": "pt-page-rotateCarouselRightIn"}
    },
    11: {
        up: {out: "pt-page-fad", "IN": "pt-page-moveFromBottom pt-page-ontop"},
        down: {out: "pt-page-fade", "IN": "pt-page-moveFromTop pt-page-ontop"},
        left: {out: "pt-page-fade", "IN": "pt-page-moveFromRight pt-page-ontop"},
        right: {out: "pt-page-fade", "IN": "pt-page-moveFromLeft pt-page-ontop"}
    },
    12: {
        up: {out: "pt-page-moveToTopFade", "IN": "pt-page-moveFromBottomFade"},
        down: {out: "pt-page-moveToBottomFade", "IN": "pt-page-moveFromTopFade"},
        left: {out: "pt-page-moveToLeftFade", "IN": "pt-page-moveFromRightFade"},
        right: {out: "pt-page-moveToRightFade", "IN": "pt-page-moveFromLeftFade"}
    },
    13: {
        up: {out: "pt-page-moveToTopEasing pt-page-ontop", "IN": "pt-page-moveFromBottom"},
        down: {out: "pt-page-moveToBottomEasing pt-page-ontop", "IN": "pt-page-moveFromTop"},
        left: {out: "pt-page-moveToLeftEasing pt-page-ontop", "IN": "pt-page-moveFromRight"},
        right: {out: "pt-page-moveToRightEasing pt-page-ontop", "IN": "pt-page-moveFromLeft"}
    },
    14: {
        up: {out: "pt-page-scaleDown", "IN": "pt-page-moveFromBottom pt-page-ontop"},
        down: {out: "pt-page-scaleDown", "IN": "pt-page-moveFromTop pt-page-ontop"},
        left: {out: "pt-page-scaleDown", "IN": "pt-page-moveFromRight pt-page-ontop"},
        right: {out: "pt-page-scaleDown", "IN": "pt-page-moveFromLeft pt-page-ontop"}
    },
    15: {
        up: {out: "pt-page-scaleDownUp", "IN": "pt-page-scaleUp pt-page-delay300"},
        down: {out: "pt-page-scaleDown", "IN": "pt-page-scaleUpDown pt-page-delay300"},
        left: {out: "pt-page-scaleDownUp", "IN": "pt-page-scaleUp pt-page-delay300"},
        right: {out: "pt-page-scaleDown", "IN": "pt-page-scaleUpDown pt-page-delay300"}
    },
    16: {
        up: {out: "pt-page-moveToTop pt-page-ontop", "IN": "pt-page-scaleUp"},
        down: {out: "pt-page-moveToBottom pt-page-ontop", "IN": "pt-page-scaleUp"},
        left: {out: "pt-page-moveToLeft pt-page-ontop", "IN": "pt-page-scaleUp"},
        right: {out: "pt-page-moveToRight pt-page-ontop", "IN": "pt-page-scaleUp"}
    },
    17: {
        up: {out: "rotateSlideOuttotop", "IN": "rotateSlideIntotop"},
        down: {out: "rotateSlideOuttobottom", "IN": "rotateSlideIntobottom"},
        left: {out: "pt-page-rotateSlideOut", "IN": "pt-page-rotateSlideIn"},
        right: {out: "rotateSlideOuttoright", "IN": "rotateSlideIntoright"}
    }
};


if (Zhu._weixin && Zhu._Android) {

}


/*if(Zhu._IsPC) $(window).resize(resize) , resize();
 function resize(){
 if($(window).width() > $(window).height()) {
 $("#horizontal").show();
 }else
 {
 $("#horizontal").hide();
 }
 };
 */


document.addEventListener('touchmove', function (ev) {
    ev.preventDefault();
    return false;
}, false)


window.

    $(window).resize(resize) , resize();
function resize() {
};


var Animate_Index = 0;
var Animate_lastIndex = Animate_Index;
var Animate_isSwipe = true;
var Animate_css = Animate[15];
var Animate_Bstop = true;

$('.pageall').eq(Animate_lastIndex).show();


var BSTOP = true;
var SHAKE_THRESHOLD = Zhu._Android ? 500 : 700;
var lastUpdate = 0;
var x, y, z, last_x, last_y, last_z;
function deviceMotionHandler(eventData) {


    var acceleration = eventData.accelerationIncludingGravity;
    var curTime = new Date().getTime();
    if ((curTime - lastUpdate) > 100) {
        var diffTime = (curTime - lastUpdate);
        lastUpdate = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        if (speed > SHAKE_THRESHOLD) {

            //if(!window.LOADEND) return;
            if (!BSTOP) return;
            BSTOP = false;


            YaoYiYao();


        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
};


function YaoYiYao() {


    $('#sound0')[0].play();

    window.removeEventListener('devicemotion', deviceMotionHandler, false);
    if (window.NotCode) {

        $.ajax({
            type: 'POST',
            url: 'get_free.php',
            success: function () {

                setTimeout(function () {
                    swipeUpFn(6);
                }, 1000)


            }
        })


    } else {
        $.ajax({
            type: 'POST',
            url: 'get_prizes.php',
            dataType: "json",
            data: {
                code: window.UserCode
            },
            success: function (res) {
                if (res.success == true) {

                    setTimeout(function () {
                        swipeUpFn(3);
                    }, 1000)

                    //中奖
                } else {

                    setTimeout(function () {
                        swipeUpFn(5);
                    }, 1000)
                    //未中奖
                }
            }
        })

    }


}


function AnimateTween() {

    window.removeEventListener('devicemotion', deviceMotionHandler, false);
    switch (Animate_Index) {
        case 0:

            break;
        case 1:
            $('.s2-4').from({bottom: -100, opacity: 0});
            $('.s2-3').from({transform: 'scale(1.5)', opacity: 0, delay: .5})
            $('.s2-2').from({transform: 'translate(0,50px)', opacity: 0, delay: 1});


            $('.page2 .logo1').from({transform: 'translate(0,-20px)', opacity: 0, delay: 1.2});
            $('.s2-1').from({transform: 'translate(0,-20px)', opacity: 0, delay: 1.4});


            break;
        case 2:
            $('.s3-4').from({bottom: -100, opacity: 0});
            $('.s3-3').from({transform: 'scale(1.5)', opacity: 0, delay: .5})
            $('.s3-2').from({transform: 'translate(0,50px)', opacity: 0, delay: 1});


            $('.page3 .logo1').from({transform: 'translate(0,-20px)', opacity: 0, delay: 1.2});
            $('.s3-1').from({transform: 'translate(0,-20px)', opacity: 0, delay: 1.4});


            setTimeout(function () {
                BSTOP = true;
                window.addEventListener('devicemotion', deviceMotionHandler, false);


                $('.s3-3').click(function () {
                    YaoYiYao();
                })
            }, 1000)


            break;


        case 3:
            $('.s4-1 .simg').each(function (i) {
                $(this).from({opacity: 0, transform: 'scale(.75)', delay: i * .3})
            })

            setTimeout(function () {
                swipeUpFn(4);
            }, 5000)
            break;


        case 4:


            $('.s5-1').from({transform: 'scale(1.5)', opacity: 0, delay: .5})
            $('.s5-2').from({transform: 'translate(0,50px)', opacity: 0, delay: 1});
            $('.s5-3').from({transform: 'translate(0,50px)', opacity: 0, delay: 1.5});
            $('.s5-4').from({transform: 'translate(0,50px)', opacity: 0, delay: 2});
            $('.page5 .logo1').from({transform: 'translate(0,-20px)', opacity: 0, delay: 2});

            break;
        case 5:


            $('.s6-1').from({transform: 'translate(0,50px)', opacity: 0, delay: .5});
            $('.s6-2').from({transform: 'translate(0,50px)', opacity: 0, delay: 1});
            $('.s6-3').from({transform: 'translate(0,50px)', opacity: 0, delay: 1.5});
            $('.s6-4').from({transform: 'translate(200px,0)', opacity: 0, delay: 1.5});
            $('.page5 .logo1').from({transform: 'translate(0,-20px)', opacity: 0, delay: 1.5});

            break;
        case 6:


            $('.s8-1').from({transform: 'translate(0,50px)', opacity: 0, delay: .5});
            $('.s8-2').from({transform: 'translate(0,50px)', opacity: 0, delay: 1});
            $('.s8-3').from({transform: 'translate(0,50px)', opacity: 0, delay: 1.5});
            ;
            $('.page8 .logo1').from({transform: 'translate(0,-20px)', opacity: 0, delay: 1.5});

            break;
        case 7:


            $('.s9-1').from({transform: 'translate(0,50px)', opacity: 0, delay: .5});
            $('.s9-2').from({transform: 'translate(0,50px)', opacity: 0, delay: 1});
            $('.s9-3').from({transform: 'translate(-200px,0)', opacity: 0, delay: 1.5});
            ;
            ;
            $('.s9-4').from({transform: 'translate(200px,0)', opacity: 0, delay: 1.5});
            ;
            $('.page9 .logo1').from({transform: 'translate(0,-20px)', opacity: 0, delay: 1.5});

            break;
    }


};


function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}

function swipeUpFn(index) {
    if (index && index == Animate_Index) return;
    if (!Animate_Bstop) return;
    Animate_Bstop = false;

    var NowStep = $('.box-step').eq(Animate_lastIndex);
    var NextStep = $('.box-step').eq(index ? index : ++Animate_Index);


    if (!NextStep.size()) {
        Animate_Index--;
        Animate_Bstop = true;
        return;
    }
    if (index) Animate_Index = index;
    NowStep.cssHide(Animate_css.up.out, function () {
        Animate_Bstop = true;
    })
    NextStep.cssShow(Animate_css.up.IN);
    Animate_lastIndex = Animate_Index;
    setTimeout(AnimateTween, 100)
};
function swipeDownFn(index) {
    if (Animate_lastIndex == 0) return;
    if (index && index == Animate_Index) return;
    if (!Animate_Bstop) return;
    Animate_Bstop = false;


    var NowStep = $('.box-step').eq(Animate_lastIndex);
    var NextStep = $('.box-step').eq(index ? index : --Animate_Index);

    if (index) Animate_Index = index;


    NowStep.cssHide(Animate_css.down.out, function () {
        Animate_Bstop = true;
    })
    NextStep.cssShow(Animate_css.down.IN)
    Animate_lastIndex = Animate_Index;
    setTimeout(AnimateTween, 100)


};


$(function () {






    //$.ajax({
    //	type:'GET',
    //	url:'get_user_info',
    //	dataType:"json",
    //	success:function ( res ){
    //
    //		//if(res.errcode == 1 && res.msg == '用户尚未授权')	location.href = '../sessiontest.php?retURL=http://112.124.70.247/weoper/wesite/shuuemura/shuuemura1501/oilgift/'
    //
    //		if(res.errcode == 1 && res.msg == '用户尚未授权')	location.href = '../index.php?retURL=http://112.124.70.247/weoper/wesite/shuuemura/shuuemura1501/oilgift/'
    //	}
    //})


    $('a[href="#"]').attr('href', 'javascript:;');
    /*$$('.box-content').bind('swipeUp' , function (){
     if(!Animate_isSwipe) return;
     swipeUpFn();

     }).bind('swipeDown' , function (){

     if(!Animate_isSwipe) return;
     swipeDownFn();


     });
     */



    if ($(window).height() < 1008) {
        var scale = 0.8;
        var TranY = 70;
        var b = 1008 - $(window).height();


        $('.s3-4 , .s2-4 , .s6-4').css('transform', 'scale(' + ( 1 - b / 180 * 0.2) + ') translate(0,' + ((b / 180) * TranY) + 'px)')
    }
    ;


});


function LoadFn(arr, fn, fn2) {
    var loader = new PxLoader();
    for (var i = 0; i < arr.length; i++) {
        loader.addImage(arr[i]);
    }
    ;

    loader.addProgressListener(function (e) {
        var percent = Math.round(e.completedCount / e.totalCount * 100);
        if (fn2) fn2(percent)
    });


    loader.addCompletionListener(function () {
        if (fn) fn();
    });
    loader.start();
}


var LoadingImg = [];

$('img').each(function () {

    if (!$(this).attr('src')) return;
    LoadingImg.push($(this).attr('src'));

});
LoadingImg.push('./images/wx_logo.png');
LoadingImg.push('./images/wx_3.png');
LoadingImg.push('./images/wx_2.png');
LoadingImg.push('./images/wx_1.png');
LoadingImg.push('./images/up_btn.png');
LoadingImg.push('./images/bj1.jpg');
LoadingImg.push('./images/bj1-3.jpg');
LoadingImg.push('./images/bj1-2.jpg');


function HTMLStart() {

    $('.s1-2').from({transform: 'scale(1.5)', opacity: 0})
    $('.s1-3').from({transform: 'translate(0 , 50px)', opacity: 0, delay: .5})
    $('.s1-4').from({transform: 'translate(-50px,0)', opacity: 0, delay: .5})


    $('.logo1:first').from({transform: 'translate(0,-50px)', opacity: 0, delay: 1})
    $('.s1-1').from({transform: 'translate(0,-50px)', opacity: 0, delay: 1.5})
    $('.s1-5').from({transform: 'translate(0,50px)', opacity: 0, delay: 1.5})

}


LoadFn(LoadingImg, function () {

    $('#loading').fadeOut();


    HTMLStart();


}, function (p) {


    //$('#loading .s1-4 i').width( p + '%')
    $('#loading p').html('LOADING...<br />' + p + '%')
});

















