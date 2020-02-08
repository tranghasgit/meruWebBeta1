
$(document).ready(function(){
  $('.wrapperAll').hide();
  const anchor = $('.animateAnchor');
  // var menuItems = ['atMusica','atArte','atEvents','atMerch','atAbout'];
  anchor.each(function(){
    const newAnchor = $(this);
    $(this).click(function(ele){
      const idName = "#at" + newAnchor.attr('id');
      const $idName = $(idName);
      // const newfifChild = parentClass.children(5);
      //fadein animation for each folder
      $idName.hide().appendTo('.mainContainer').fadeIn({duration: 100, queue: false},'linear')
      .animate({width: '68%'},{duration:0, queue: false},'linear');
      //fadeout for underneath items
      $('.wrapperAll').not($idName).animate({width: '75%'},{duration: 150, queue: false},'linear');
      ele.preventDefault();
    });
  });

  //remove folder when click
  $('.wrapperAll').click(function(){
    $(this).fadeOut();
  });

  const socialT = "";
  const social = $('.pageTitle')
  social.each(function(){
    const newSocial = $(this);
    $(this).hover(function(ele){
      const socialName = newSocial.attr('id');
      // console.log(socialName);

      if (socialName == 'facebook'){
        $('body, html').toggleClass('blueBg');
      }
      else if (socialName == 'instagram'){
        $('body, html').toggleClass('pinkBg');
      }
      else if (socialName == 'soundcloud'){
        $('body, html').toggleClass('orangeBg');
      }
      else if (socialName == 'youtube'){
        $('body, html').toggleClass('redBg');
      }

      $('.socialT').text(socialName);
      $('.socialT').toggleClass('socialTShow');
    });
  });

  // $('.fb').hover(function(){
  //   if ()
  //   $('body, html').toggleClass('blueBg');
  //   $('.socialT').toggleClass('socialTShow');
  // });
});
