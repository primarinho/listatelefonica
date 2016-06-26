angular.module('listaTelefonica', []);

angular.module('listaTelefonica').controller('listaTelefonicaController', function ($scope) {
  $scope.app = "Lista Telefonica";
  $scope.contatos = [{
    nome: "Priscila",
    telefone: "99229-9382"
  },{
    nome: "Filipe",
    telefone: "99353-2200"
  },{
    nome: "Penha",
    telefone: "97558-9773"
  }];

  $scope.operadoras = [{
    nome: "Oi",
    codigo: 14
  },{
    nome: "Vivo",
    codigo: 15
  },{
    nome: "Tim",
    codigo: 41
  }];

  $scope.adicionarContato = function (contato) {
    $scope.contatos.push(angular.copy(contato));
    delete $scope.contato;
  };

  $scope.apagarContatos = function (contatos) {
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado) return contato;
    });
  };

  $scope.isContatoSelecionado = function (contatos) {
    return contatos.some(function (contato) {
      return contato.selecionado;
    });
  };
});

