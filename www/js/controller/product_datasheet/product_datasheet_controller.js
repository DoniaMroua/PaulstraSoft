app.controller('ProductDataSheetController', function( $scope, $q, $filter, $location ){

  $scope.familleSuspensions = [];

  $scope.go= function(path) {
   $location.path(path);
  };

  var db = window.openDatabase("Database", "1.0", "Database", 700000);



  function getMessages() {
    var deferred = $q.defer();
    db.transaction(
        function(tx) {
            var sql = "SELECT * FROM FamilleSuspension";

            tx.executeSql(sql, [],
                function(tx, results) {

                  var len = results.rows.length,
                      familles = [],
                      i = 0;
                    for (; i < len; i = i + 1) {
                        familles[i] = results.rows.item(i);
                    }
                    deferred.resolve(familles);

                }
            );
        },
        function () {
          alert('Something went Wrong');
        }
    );
    return deferred.promise;
  };

  getMessages().then(function(listview) {
                      $scope.familleSuspensions        = listview;
                      $scope.displayedFamilleSuspensions = $scope.familleSuspensions;
  });
});
