app.controller('PlotTransmissibilityController', function( $scope, $location ){

  $scope.go = function(path) {
   $location.path(path);
  };

  var TESTER = document.getElementById('domain');
    var layout = {
      title: 'Déplacement / Accélération',
      // margin: { t: 0 },
      xaxis:  {
        title:    'Time (ms)',
        showgrid: true,
        showline: true
      //  zeroline: false
      },
      yaxis: {
        title: 'Accélération (g)',
        titlefont: { color: '#1f77b4'},
        tickfont:  { color: '#1f77b4'},
        showline: true
      },
      yaxis4: {
        title: 'Déplacement (m)',
        // titlefont: { color: '#d62728'},
        // tickfont:  { color: '#d62728'},
        overlaying: 'y',
        side: 'right',
        showline: true
   }
  };

  var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16],
    name:  'Accélération',
    mode:  'lines',
    type:  'scatter'
  };

  var trace2 = {
    x: [1, 2, 3],
    y: [4, 5, 6],
    name:  'Déplacement',
    mode:  'lines',
    yaxis: 'y4',
    type:  'scatter'
  };

  var data = [trace1, trace2];
  Plotly.plot( TESTER, data , layout);







  // var canvas = $('#myCanvas')[0],
  //     ctx = canvas.getContext('2d'),
  //     width = canvas.width,
  //     height = canvas.height,
  //     plot = function plot(fn, range) {
  //         var widthScale = (width / (range[1] - range[0])),
  //             heightScale = (height / (range[3] - range[2])),
  //             first = true;
  //
  //         ctx.beginPath();
  //
  //         for (var x = 0; x < width; x++) {
  //             var xFnVal = (x / widthScale) - range[0],
  //                 yGVal = (fn(xFnVal) - range[2]) * heightScale;
  //
  //             yGVal = height - yGVal; // 0,0 is top-left
  //
  //             if (first) {
  //                 ctx.moveTo(x, yGVal);
  //                 first = false;
  //             }
  //             else {
  //                 ctx.lineTo(x, yGVal);
  //             }
  //         }
  //
  //         ctx.strokeStyle = "red";
  //         ctx.lineWidth = 3;
  //         ctx.stroke();
  //     };
  //
  //     plot(function (x) {
  //         return Math.sin(x) + Math.sin(x * 2);
  //     }, [0, Math.PI * 4, -4, 4]);


});
