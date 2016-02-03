(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    menuLink.onclick = function (e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };

}(this, this.document));


//わっかんねええええええええええええええええええええええええ
// $(function(){
//   $('#drop').hover(function(){
//     $('ul.child').removeClass('up');
//     console.log('up');
//     $('ul.child').addClass('down');
//     console.log('down');
//   }, function(){
//     $('ul.child').removeClass('down');
//     console.log('down2');
//     $('ul.child').addClass('up');
//     console.log('up2');
//   });
//   $('ul.down').slideDown();
//   $('ul.up').slideUp();
// });

//↓　くそコード　修正の必要あり　重い

$(function(){
    $('ul.child').slideUp();
    $('#drop').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $("ul.child",this).slideUp();
    });
    $('#drop2').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $("ul.child",this).slideUp();
    });
    $('#drop3').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $("ul.child",this).slideUp();
    });
});
