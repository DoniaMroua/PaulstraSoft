app.controller('IndexController', function($scope, $translate, GetModal, $location){

  $scope.go= function(path,langKey) {
    $scope.changeLanguage(langKey);
    $location.path(path);
  };
  $scope.openModalCompanyDetails= function(){
    GetModal.getModalCompanyDetails();
  };

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };

  //****************************Create Data Base*****************************************//
      // Wait for Cordova to load
      //
      document.addEventListener("deviceready", onDeviceReady, false);

      // Cordova is ready
      //
      function onDeviceReady() {
          var db = window.openDatabase("Database", "1.0", "Database", 700000);
          db.transaction(populateDB, errorCB, successCB);
      }

      // Populate the database
      //
      function populateDB(tx) {
           tx.executeSql('DROP TABLE IF EXISTS FamilleSuspension');
           tx.executeSql( 'CREATE TABLE IF NOT EXISTS FamilleSuspension(Id INTEGER NOT NULL PRIMARY KEY, NomFamilleFR TEXT NOT NULL, NomFamilleEN TEXT NOT NULL, Image TEXT NOT NULL,Affiche INTEGER NOT NULL,PDFFr TEXT NOT NULL,PDFEn TEXT NOT NULL,Ordre INTEGER NOT NULL,AdresseFR TEXT NOT NULL,AdresseEN TEXT NOT NULL)');
           tx.executeSql('INSERT INTO FamilleSuspension (id, NomFamilleFR, NomFamilleEN, Image, Affiche, PDFFr, PDFEn, Ordre, AdresseFR, AdresseEN ) VALUES (1, "PAULSTRADYN","PAULSTRADYN", "paulstradyn", 1, "paulstradyn-fr.pdf", "paulstradyn-uk.pdf", 2, "http://www.paulstra-industry.com/upload/product/documentation/paulstradyn-fr.pdf", "http://www.paulstra-industry.com/upload/product/documentation/paulstradyn-uk.pdf")');
           tx.executeSql('INSERT INTO FamilleSuspension (id, NomFamilleFR, NomFamilleEN, Image, Affiche, PDFFr, PDFEn, Ordre, AdresseFR, AdresseEN ) VALUES (2, "STABIFLEX","STABIFLEX", "stabiflex", 1, "stabiflex-fr.pdf", "stabiflex-fr.pdf", 3, "http://www.paulstra-industry.com/upload/product/documentation/stabiflex-fr.pdf", "http://www.paulstra-industry.com/upload/product/documentation/stabiflex-uk.pdf")');
           tx.executeSql('INSERT INTO FamilleSuspension (id, NomFamilleFR, NomFamilleEN, Image, Affiche, PDFFr, PDFEn, Ordre, AdresseFR, AdresseEN ) VALUES (3, "S.C.","S.C. MOUNTING", "sc", 1, "support-sc-fr.pdf", "support-sc-uk.pdf", 5, "http://www.paulstra-industry.com/upload/product/documentation/support-sc-fr.pdf", "http://www.paulstra-industry.com/upload/product/documentation/support-sc-uk.pdf")');

      }

      // Transaction error callback
      //
      function errorCB(tx, err) {
          alert("Error processing SQL: "+err);
      }

      // Transaction success callback
      //
      function successCB() {
          // alert("success!");
      }

});
