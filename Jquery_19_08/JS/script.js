// $(document).ready(function(){
//     $("#btn1").on({
//         mousedown: function(){
//             $("#fade").css({fontSize:"larger"});
//         },
//         mouseover: function(){
//             $("#fade").css({color:"red"});
//         },
//         mouseup: function(){
//             $("#fade").css({backgroundColor: "blue"})
//         },


//     })
// })  
// $("#btn2").click(function (){
//     $("#fade").css({backgroundColor: "inherit" , color: "inherit" , fontSize: "inherit"})
// })
//poderia usar o on tbm

// 1) Criar uma página que possua 5 divs, 3 botões, 1 formulário contendo 5 campos de texto(Nome, endereço, telefone, email e cpf) , e 1 select contendo opções de estados do Brasil (Pelo menos 10 estados) e um botão de enviar. Faça o que se pede abaixo:

// - Ao clicar no primeiro botão, as 5 divs devem aparecer com cores diferentes, largura e altura diferentes e com um efeito que você aprendeu em Jquery (Á sua escolha)

// - Ao clicar no segundo botão, todas as divs deverão ficar com a cor azul, largura de 300px e altura de 150px.

// - Ao dar um duplo clique no terceiro botão, você deverá esconder duas divs à sua escolha, também utilizando um efeito do Jquery.

// - Coloque um foco nos campos do formulário com uma cor agradável ao usuário, e ao tirar o foco do campo de formulário remova esse efeito.

// - Pegue o valor do nome e do email do usuário e apresente na tela em uma tag de span os dados que foram digitados pelo usuário.

// 2) Crie uma página contendo uma div e aplique todos os efeitos que você aprender durante a aula(Hide(), show(), toggle(), fadeIn(), fadeOut(), fadeTo(), fadeToggle(), slideUp(), slideDown(), slideToggle()

    //1
$(document).ready(function () {
    $("#btn1").click(function () {
        $("#div1").css({ backgroundColor: "pink" , heigth: "150px" , width: "120px" });
        $("#div2").css({ backgroundColor: "blue" , heigth: "130px" , width: "150px" });
        $("#div3").css({ backgroundColor: "orange" , heigth: "120px" , width: "90px" });
        $("#div4").css({ backgroundColor: "grey" , heigth: "200px" , width: "100px" });
        $("#div5").css({ backgroundColor: "green" , heigth: "210px" , width: "90px" });
        $("p").fadeTo(2000,0.3)
        $("p").fadeTo(2000, 0.9)
    })
    //2
    $("#btn2").click(function () {
        $(".sections").css({ backgroundColor: "blue" , heigth: "150px" , width: "300px" });
      
    })
    //3
    $("#btn3").dblclick(function(){
        $("#div2 , #div3").hide()
    })
    //4
    $("input").focus(function(){
        $("input").css({backgroundColor: "cyan"})
    })
    $("input").focusout(function(){
        $("input").css({backgroundColor: "white"})
    })
    //5
    $("#name").keyup(function(){
        var valor = $(this).val()
        $("#enviar").click(function(){
            $("#span1").text(valor)
        })
    })
    $("#email").keyup(function(){
        var valor = $(this).val()
        $("#enviar").click(function(){
            $("#span2").text(valor)
        })
    })
})  