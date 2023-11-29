$(function () {
  // Slaider
  $(".blog__inner").slick({
    dots: true,
    arrows: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  // Menu burger
  $(".menu__btn , .menu a").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  // Mixityp gallry
  var mixer = mixitup(".gallery__content");
  //  scroll-behavior: smooth;  nu functioneaza in safari
  $(".menu a, .scroll-up__btn , .header__icon").on("click", function (e) {
    //Anulăm prelucrarea standardă a clicului pe link.
    e.preventDefault();
    //Extragem identificatorul blocului din atributul href.
    var id = $(this).attr("href"),
      //Aflăm înălțimea de la începutul paginii până la blocul la care face referire ancor.
      top = $(id).offset().top;

    //"Animăm trecerea la o distanță - sus în 2000 ms."
    $("body,html").animate({ scrollTop: top }, 2000);
  });
});

let numere = [1, 2, 3, 4, 5];
console.log(numere.slice(2, 4));
