document.addEventListener('DOMContentLoaded', function() {
    sidebar();
  });
function sidebar(){
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        draggable: false
    });
}

{
    const lightbox = GLightbox({loop:true});
}

var yume
var tos

jQuery.noConflict();
(function($) {

$(function(){
    yume = $.cookie('yumeYZ1d');
    tos = $.cookie('tos');
    if(yume && tos){
        $(".noenter-name").remove();
        var element = document.querySelector(".content");
        element.style.display = null;
    } else {
        $(".content").remove();
        var element = document.querySelector(".noenter-name");
        element.style.display = null;
    }
}


);
})(jQuery);

function textSearch(input_tag,list_tag,item_tag,text_tag){
  var input = document.querySelector(input_tag);
  var search_text = input.value.toUpperCase();
  var list = document.querySelector(list_tag);
  var items = list.querySelectorAll(item_tag);
  items.forEach((item) => {
    var text = item.querySelector(text_tag);
    if ( text.innerText.toUpperCase().indexOf(search_text) > -1 ||  text.textContent.toUpperCase().indexOf(search_text) > -1){
      item.style.display = null;
    } else {
      item.style.display = "none";
    }
  });
}

const yume_button = document.querySelector(".user-enter #enterYZ1")

yume_button.addEventListener("click",user_enter)

function user_enter(){
  var input = document.querySelector(".user-enter .YZ1 input.names0");
  var array = [input.value];
  for (i = 0; i < 3; i++){
    array.push("undefined")
  }
  document.cookie = "yumeYZ2d=" + array.join(",") + "; max-age=" + String(60 * 60 * 24 * 365) + "; path=/;";
}