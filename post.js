(function(){
    postsa = [
    {
       title: "Sony lança M4, Z4 tablet e aproveita MWC para dizer que segue no mercado",
       body: "A expectativa era grande: será que a Sony iria mostrar o Xperia Z4, sucessor do Z3, no MWC? Mas o mistério durou pouco. Logo no primeiro dia do evento realizado em Barcelona, a gigante anunciou o Z4… tablet. E, além dele, também chegou o M4 Acqua, ",
       image: "http://s2.glbimg.com/hV2n4vss4nO1tDvOjojR2JQU1Kk=/0x0:5472x3648/695x463/s.glbimg.com/po/tt2/f/original/2015/03/02/xperia_m4_4.jpg",
       url: "http://www.techtudo.com.br"
    },
    {
       title: "Testamos os Lumia 640 e 640 XL, smarts concorrentes do Moto G e Zenfone",
       body: "O próximo top de linha da Microsoft ainda não veio, mas dois novos intermediários, o Lumia 640 e o Lumia 640 XL, chegaram para preencher a lacuna de lançamentos. Os aparelhos foram apresentados hoje (2) durante o ",
       image: "http://s2.glbimg.com/VMTnsZfJ73yafYrpKrXoeAZE5oI=/0x0:1500x1000/695x463/s.glbimg.com/po/tt2/f/original/2015/03/02/lumia-640-4.jpg",
       url: "http://www.techtudo.com.br"
    },
    {
       title: "Resident Evil Revelations 2: jogadores usam dança para matar zumbis",
       body: "Resident Evil: Revelations 2 parece ter um estranho jeito de matar zumbis no Raid Mode: segundo usuários, é possível ferir inimigos a partir de movimentos de dança. Para isso, basta utilizar a personagem Gina Foley,",
       image: "http://s2.glbimg.com/oKst8MXCv88l6WIFOUCH7r29Ltk=/695x0/s.glbimg.com/po/tt2/f/original/2015/02/28/resident-evil-revelations-2-danca-gesto-gina-foley.jpg",
       url: "http://www.techtudo.com.br"
    },
    {
       title: "Facebook libera 17 opções de gênero no Brasil baseadas em grupos LGBT",
       body: "A partir desta segunda-feira (02), o Facebook tornou disponível 17 opções de gêneros diferentes, além da possibilidade de escolha livre de como o usuário quer ser identificado na rede. Grupos de defesa de direitos dos cidadãos LGBT",
       image: "http://s2.glbimg.com/IuXTl5_O3048JdMwpCMr1C3LLgI=/0x0:694x391/695x392/s.glbimg.com/po/tt2/f/original/2015/01/28/imagem01.jpg",
       url: "http://www.techtudo.com.br"
    },
    {
       title: "Google+ morreu? Rede social se despedaça em Photos, Streams e Hangouts",
       body: "Parece que a falta de popularidade do Google+ está fazendo com que a empresa repense seus serviços. Os rumores de que o Google estaria repaginando para, possivelmente, acabar com a rede social, começaram em uma entrevista de Sundar Pichai.",
       image: "http://s2.glbimg.com/iH0zLBi1B_czKsvcMSUxcgl7jB4=/695x0/s.glbimg.com/po/tt2/f/original/2015/03/02/sundar-pichai.jpg",
       url: "http://www.techtudo.com.br"
    }];
    var app = angular.module("postModule", []);
     
    app.directive("postDirective", function(){

        return {
            restrict: "E",
            templateUrl: "post-directive.html",
            controller: function($scope){
                this.posts = postsa;
                console.log(this.posts);
   
            },
            controllerAs: "pstCtrl"
        }

    });



})();