function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    //подставляем переводы
    $(".localization").text(function() {
    var caption = $(this).attr("caption");
    return window[lang][caption];
    });
    //подсвечиваем активный язык
    if (lang) {
    $('.drop').find('li').removeClass('drop__item-active');
    $(`#li-language-${lang}`).addClass('drop__item-active');
    }
    //в инпут подставляем язык
    // $('#select').val(languageData);
    adaptStyles(lang);

    //подставляем картинку
    $('.slct-image').hide();
    $(`#language-${lang}`).show();

}

function hideDropBlock() {
  $('.drop').hide();
}

$(document).ready(function() {
    let lang = localStorage.getItem('lang');
    setLanguage(lang ? lang : 'en');
});


// Select

$('.slct').click(function(){
  /* Заносим выпадающий список в переменную */
  var dropBlock = $(this).parent().find('.drop');

  /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
  if( dropBlock.is(':hidden') ) {
    dropBlock.show();

    $(this).addClass('active');
  } else {
    $(this).removeClass('active');
    hideDropBlock()
  }
  return false;
});

$('.drop').find('li').click(function(){
  var selectResult = $(this).attr('caption');
  setLanguage(selectResult);
  hideDropBlock();
});

function adaptStyles(languageData) {
  if (languageData == 'ru') {
    $('.numbers__item').addClass('numbers__item-ru');
  } else {
    $('.numbers__item').removeClass('numbers__item-ru');
  }
}