app.factory("GetModal", function( $modal ){
  var service = {
    getModalCompanyDetails: getModalCompanyDetails
  };
  function getModalCompanyDetails(){
    var modalInstance = $modal.open({
      templateUrl: 'view/modal/company_details.html',
      controller:  'ModalCompanydetailsController',
      size:        'sm'
    });

  };

  return service;
});
