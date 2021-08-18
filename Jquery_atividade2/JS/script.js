h = 0;
$(document).ready(function () {
    $("#tamanho").scroll(function () {
        $("#posiçãoScrol").position(h += 1)

    })
})

$(document).ready(function () {
    $("#posiçãoScrol").click(function () {
        alert("Top position: " +h);
    })
})


window.addEventListener("resize", function () {
    var tam = $(window).width();
    if (tam >= 1040) {
        $("#menu-vertical").show();
    } else {
        $("#menu-vertical").hide();
    }
});

$(document).ready(function () {
    $("#caixaTexto").click(function () {
        var x = $("p").position();
        alert("Top position: " + x.top + "Left position: " + x.left);
    })
})

$(document).ready(function () {
    $("#img1").click(function () {
        var y = $("img").offset();
        alert("Top position: " + y.top + "Left position: " + y.left);
    })
})


// // Questões 
// //1
// $(document).ready(function () {
//     $("div").width(500).height(500)
// })
// //2
// $(document).ready(function () {
//     $("div").height()
// })
// //3
// $(document).ready(function () {
//     $("div").innerHeight()
// })
