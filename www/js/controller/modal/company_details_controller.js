app.controller('ModalCompanydetailsController', function( $scope, $modalInstance ){
  $scope.name = 'Donia Modal';

  $scope.company={
    name:    "Paulstara",
    email:   "contact@paulstra.com",
    phone:   003323014582,
    address: "61 Rue Marius Aufan, 92300 Levallois-Perret, France"
  }

  $scope.cancel = function(){
    $modalInstance.dismiss('cancel');
  }
});
