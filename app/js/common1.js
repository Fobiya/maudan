// $(function () {
//     try {
//         $.browserSelector();
//         if ($("html").hasClass("chrome")) {
//             $.smoothScroll();
//         }
//     } catch (err) {
//     }
//     ;
//     $("img, a").on("dragstart", function (event) {
//         event.preventDefault();
//     });
// });
$(function () {
    $("[name=send]").click(function () {
        $(":input.error").removeClass('error');
        $(".allert").remove();
        var error;
        var btn = $(this);
        var ref = btn.closest('form').find('[required]');
        var msg = btn.closest('form').find('input, textarea');
        var send_btn = btn.closest('form').find('[name=send]');
        var send_options = btn.closest('form').find('[name=campaign_token]');
        $(ref).each(function () {
            if ($(this).val() == '') {
                var errorfield = $(this);
                $(this).addClass('error').parent('.field').append('<div class="allert"><span>Заполните это поле</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                error = 1;
                $(":input.error:first").focus();
                return;
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if ($(this).attr("type") == 'email') {
                    if(!pattern.test($(this).val())) {
                        $("[name=email]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
              var patterntel = /^()[0-9+()]{7,16}/i;
                if ($(this).attr("type") == 'tel') {
                    if (!patterntel.test($(this).val())) {
                        $("[name=phone]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный номер телефона</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
            }
        });
        if (!(error == 1)) {
            $(send_btn).each(function () {
                $(this).attr('disabled', true);
            });
            $(send_options).each(function () {
                var form = $(this).closest('form'), name = form.find('.name').val();
                if ($(this).val() == '') {
                    $.ajax({
                        type: 'POST', url: 'mail.php', data: msg, success: function () {
                            $("#modal_callback_ok h4").remove();
                            $("#modal_callback_ok").prepend("<h4>" + name + ",</h4>");
                            $('form').trigger("reset");
                            setTimeout(function () {
                                $("[name=send]").removeAttr("disabled");
                            }, 1000);
                            $(".fancybox-close").click();
                            $('div.md-show').removeClass('md-show');
                            $("#call_ok")[0].click();
							 window.location = "thanks.html";
                        }, error: function (xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
                } else {
                    $.ajax({
                        type: 'POST',
                        url: 'mail.php',
                        data: msg,
                        success: $.ajax({
                            type: 'POST',
                            url: 'sub.php',
                            data: msg,
                            statusCode: {
                                200: function () {
                                    $("#modal_callback_ok h4").remove();
                                    $("#modal_callback_ok").prepend("<h4>" + name + ",</h4>");
                                    $('form').trigger("reset");
                                    setTimeout(function () {
                                        $("[name=send]").removeAttr("disabled");
                                    }, 1000);
                                    $(".fancybox-close").click();
                                    $('div.md-show').removeClass('md-show');
                                    $("#call_ok")[0].click();
									 window.location = "thanks.html";
                                }
                            }
                        }),
                        error: function (xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
                }
            });
        }
        return false;
    })
});


$(function () {
    $('.view-source .v-hide').hide();
    $a = $('.view-source a');
    $a.on('click', function (event) {
        event.preventDefault();
        $a.not(this).next().slideUp(500);
        $(this).next().slideToggle(500);
    });
});



$(function () {
      $("#phone1").mask("+38(999) 999-9999");
    $("#phone2").mask("+38(999) 999-9999");
    $("#phone3").mask("+38(999) 999-9999");
    $("#phone4").mask("+38(999) 999-9999");
    $("#phone5").mask("+38(999) 999-9999");
    $("#phone6").mask("+38(999) 999-9999");
    $("#phone7").mask("+38(999) 999-9999");
});



//
// function set(obj) {
//     var id = obj.title;
//     $('.pacet').val(id);
// }
// function setbtn(obj) {
//     var id = obj.title;
//     $('.pacet').val("Кнопка: " + id);
// }
 // $(function() {
 //         $(".md-trigger").click(function() {
 //             $("#page-preloader").removeClass("active");
 //             $(this).toggleClass("active");
 //         })
 //    });


// $(".md-trigger").click(function(){
//   $("body").addClass("expand");
// });
//
// $(".md-close").click(function(){
//  $("body").removeClass();
// });





function set(obj) {var id=obj.title; $('.pacet').val(id);}
function setbtn(obj) {var id=obj.title; $('.pacet').val("Кнопка: " + id);}



AOS.init({
    easing: 'ease-in-out-sine'
});








$(".scroll_to_id").mPageScroll2id();











"use strict";
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if(!document.getElementsByClassName) {
        // IE8 support
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i<j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    }
    else {
        var videos = document.getElementsByClassName("youtube");
    }

    var nb_videos = videos.length;
    for (var i=0; i<nb_videos; i++) {
        // Based on the YouTube ID, we can easily find the thumbnail image
        videos[i].style.backgroundImage = '';

        // Overlay the Play icon to make it look like a video player
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);

        videos[i].onclick = function() {
            // Create an iFrame with autoplay set to true
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');

            // The height and width of the iFrame should be the same as parent
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;

            // Replace the YouTube thumbnail with YouTube Player
            this.parentNode.replaceChild(iframe, this);
        }
    }
});



		//waypoints
    $('#first').waypoint(
        function() {
            if ($("#first").hasClass("number")) {
            }
            else{
                $("#first").addClass("number");
             $("#first .youtube").click();
          
            }
        },
        {offset: "350px"}
    );













