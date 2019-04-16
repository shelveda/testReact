
var $id ;

function setIdforShowMenu(id) {

    // $('.navbar-base').find('.navbar-1row-t1__main').find('.navbar-1row-t1')
    //     .find('#nav-li-1').find('.dropdown-content')
    //     .animate({height:'toggle',duration:3000},500,"linear").slideDown();


     document.getElementById(`${id}`).querySelector('.dropdown-content')
        .classList.toggle('display-block');

    document.getElementById(`${id}`).classList.toggle("active-theme");

    window.$id =`#${id} .dropbtn`;

    jqinput = `.dropdown-content:not(#${id} .dropdown-content)`;
    var dropdowns = $(jqinput)

    for (i = 0; i < dropdowns.length; i++) {

        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('display-block')) {
          openDropdown.classList.remove('display-block');
        }
    }

    jqinput2 = `.navbar-1row-t1__item-main:not(#${id}.navbar-1row-t1__item-main)`

    // var dropdownsList = document.querySelectorAll(jqinput2);

    var dropdownsList = $(jqinput2);

    console.log(dropdownsList);

    var j;

    for (j = 0; j < dropdownsList.length; j++) {
      var openDropdown = dropdownsList[j];
      if (openDropdown.classList.contains('active-theme')) {
        openDropdown.classList.remove('active-theme');
      }
    }

}

window.onclick = function(event) {
  if (!event.target.matches($id)) {
    var dropdowns = document.getElementsByClassName("dropdown-content");

    var dropdownsList = document.querySelectorAll('li');

    var j;
    for (j = 0; j < dropdownsList.length; j++) {
      var openDropdown = dropdownsList[j];
      if (openDropdown.classList.contains('active-theme')) {
        openDropdown.classList.remove('active-theme');
      }
    }

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('display-block')) {
        openDropdown.classList.remove('display-block');
      }
    }
  }
}


// function for menu 

function menuColOpen(){

    $('#nav-collapsed').removeClass('none');
   
    $('#mute').removeClass('none');
   
   
    $('body').addClass("fixed");
    
   
   }
   
function menuColClose(){
   
    $('#mute').addClass("none");
   
    $('#nav-collapsed').addClass('none');
   
    $('body').removeClass("fixed"); 
   
   }

//// data table just test

var dataSet = [
  [ "اسید", "$320,800","ff","dd","$320,800" ],
  [ "سولفات", "$170,750","fd","gd","$320,800" ],
  [ "منیزیم", "$86,000","dd","df","$320,800" ],
  [ "اسید", "$320,800","gf","gf","$320,800"],
  [ "سولفات", "$170,750","df","ddd","$320,800" ],
  [ "منیزیم", "$86,000","fs","sf","$320,800"],
];


  $('#example tfoot th#title').each(function () {
      var title = $(this).text();
      $(this).html('<input type="text" placeholder=" جستجو در ' + title + '" />');
  });

  var table = $('#example').DataTable({
    
      responsive: {
          details: {
              display: $.fn.dataTable.Responsive.display.modal({
                  header: function (row) {
                      var data = row.data();
                      return 'Details for ' + data[0] + ' ' + data[1];
                  }
              }),
              renderer: $.fn.dataTable.Responsive.renderer.tableAll(),
          }
      },
      columnDefs: [
          { className: 'none',
              targets:   -1,
          },
      ],
      fixedColumns: true,
      scrollY: "250",
      deferRender: true,
      scroller: {
          srowHeight: 40,
      },
      dom: "<<'table't>>",
      data: dataSet,
      columns: [
          {title: "عنوان",
          width:"15%",
          className:"dt-center",
          },
          {title: "قیمت",
          width:"30%",
          className:"dt-center"},
          {title: "تغیرات",
          width:"10%",
          className:"dt-center",
          },
          {title: "حداقل",
          width:"20%",className: "none"},
          {title: "حداکثر",
          width:"20%",className: "none"},
      ],
  });

  table.columns().every(function () {
      var that = this;

      $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this.value) {
              that
                  .search(this.value)
                  .draw();
          }
      });
  });




///news
$(document).ready(function(){
    $(".news-box").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true,
        accessibility:false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

///tablet & mobile-slider
$(document).ready(function(){
    $(".slider-tablet").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        speed:1500,
        accessibility:false,
        arrows:false,

    });
    $(".slider-mobile").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        dots:true,
        arrows:false,
        accessibility:false,

    });
});








  