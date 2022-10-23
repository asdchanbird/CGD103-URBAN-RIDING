function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
        duration: 1.25, 
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        ease: "expo", 
        overwrite: "auto"
    });
    }

    function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
    }

    document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
        hide(elem); // assure that the element is hidden when scrolled into view
        
        ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
});


//NAV導覽列下拉式選單jquery
$(document).ready(function() {
    "use strict";
      $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
      $(".menu > ul > li").hover(function(e) {
          if ($(window).width() > 943) {
          $(this).children("ul").stop(true, false).fadeToggle(150);
          e.preventDefault();
          }
      });
      /*==========*/
      let menuBrand = document.querySelectorAll(".menu-brand li");
      let menuBike = document.querySelectorAll(".menu-bike ul");
      let menuLogo = document.querySelectorAll(".brandLogo li")
      for(let i=0;i<=menuBrand.length;i++){
          $(menuBrand[i]).click(function(){
                if(i >= 0){  
                    $(menuBike[0]).css({
                        'display': 'none',
                    })   
                    $(menuBike[1]).css({
                        'display': 'none',
                    }) 
                    $(menuBike[2]).css({
                        'display': 'none',
                    }) 
                    $(menuBike[3]).css({
                        'display': 'none',
                    }) 
                    /**/
                    $(menuLogo[0]).css({
                        'display': 'none',
                    })   
                    $(menuLogo[1]).css({
                        'display': 'none',
                    }) 
                    $(menuLogo[2]).css({
                        'display': 'none',
                    }) 
                    $(menuLogo[3]).css({
                        'display': 'none',
                    })         
                }
          })
      }
      $('.menu > ul > li').click(function(){
          if($(window).width() < 769){
              $(menuBrand).slideDown(2000)
           
              $('.brandLogo').hide()
          }
      })
     
      /**/

      $(menuBrand[0]).click(function(){
          $(menuBike[0]).fadeToggle(400)
          $(menuLogo[0]).fadeToggle(400)
      })
      $(menuBrand[1]).click(function(){
          $(menuBike[1]).fadeToggle(400)
          $(menuLogo[1]).fadeToggle(400)
      })
      
      $(menuBrand[2]).click(function(){
          $(menuBike[2]).fadeToggle(400)
          $(menuLogo[2]).fadeToggle(400)
      })
      $(menuBrand[3]).click(function(){
          $(menuBike[3]).fadeToggle(400)
          $(menuLogo[3]).fadeToggle(400)
      })
      /*==========*/
    //   $(".menu > ul > li").click(function() {
    //       if ($(window).width() <= 943) {
    //         $(".menu > ul > li").children("ul").fadeToggle(500)

    //       }
    //   });

      if ($(window).width() <= 943) {
        $(".changeNav").click(function(){
            $(".menu-dropdown").fadeToggle(500)
        })
      }
      
      $(window).resize(function() {
          $(".menu > ul > li").children("ul").hide();
        //   $(".menu > ul").removeClass('show-on-mobile');
      });
      });
      $( document ).ready(function() {
      let hamburger = $('#hamburger-icon');
      hamburger.click(function() {
          hamburger.toggleClass('active');
      });
  });
  