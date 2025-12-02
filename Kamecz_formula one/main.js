$(document).ready(function () {
  $('.navbar-nav li').click(function (x) {
    $('.navbar-nav li').removeClass('active');
    $(event.target).parent().addClass('active');
  });
});

function showCircuit() {
    $('#circuit').change(function (o) {
      switch (o.target.value) {
        case 'ITA':
          $('#circuitimage').attr('src', 'img/monza.jpg');
          $('#f1sound')[0].play();
          break;
        case 'HUN':
          $('#circuitimage').attr('src', 'img/hungaroring.jpg');
          break;
        case 'BEL':
          $('#circuitimage').attr('src', 'img/spa.jpg');
          break;
        case 'MON':
          $('#circuitimage').attr('src', 'img/monaco.jpg');
          break;

        default:
          break;
      }
    });
  }

//---------------------------------------------------------

function calculate() {
    let palya=document.querySelector("#circuit").value;
    let mp=document.getElementById("laptime").value;
    let palyahossz;
    switch(palya){
      case"HUN":
      palyahossz = 4.381;
      break;
      case "MON":
      palyahossz = 3.337;
      break;
      case "BEL":
      palyahossz = 7.004;
      break;
      case "ITA":
      palyahossz = 5.793;
      break;
    }
    let atlag = palyahossz / (mp/3600);
    document.getElementById("avaragespeed"),value = '${atlag} km/h';
  }
