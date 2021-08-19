// 2) Crie uma página contendo uma div e aplique todos os efeitos que você aprender durante a aula(Hide(), show(), toggle(), fadeIn(), fadeOut(), fadeTo(), fadeToggle(), slideUp(), slideDown(), slideToggle()

$(document).ready(function () {
    $("#efeitos").click(function(){
        $(".sections").hide()
    })
    $("#efeitos").dblclick(function(){
        $(".sections").show()
    })
    $("#efeitos1").click(function(){
        $(".sections").show()
    })
    $(".sections").mouseover(function(){
        $("p").toggle()
    })
    $(".sections").mouseover(function () {
        $("p").fadeTo(2000, 0.9).css({ backgroundColor: "blue" })

    })
    $(".sections").mouseout(function () {
        $("p").fadeTo(2000, 0.3).css({ backgroundColor: "grey" })

    })
    $("#slide1").click(function(){
        $(".sections").slideUp(1000);
      })
      $("#slide2").click(function(){
        $(".sections").slideDown(1000);
      })
      $("#btn1").click(function () {
        $("section").hide()
      })
      //SHOW
      $("#btn2").click(function () {
        $("section").show()
      })
      //TOGGLE
      $("#btn3").click(function () {
        $("section").toggle(1000)
      })
      //fadeTo
      $("#btn6").click(function () {
        $("section").fadeTo(1000, 0.3);
        $("section").fadeTo(1000, 1);
      })
      //fadeToggle
      $("#btn7").click(function () {
        $("section").fadeToggle(1000, "linear");
      });
      //SlideToggle
      $("#btn10").click(function () {
        $(".sections").slideToggle(1000);
      })

})  