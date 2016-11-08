/*How to create, get, and delete todo data based on user interaction.*/

angular.module('fitbitPOCController', [])
	.controller('mainController', function($scope, $http, fitbitPOCs) {

    fitbitPOCs.get().success(function(data) {
      var fitbitData;
      fitbitData = data;
				
			console.log(fitbitData[0]['Date']);
			console.log(fitbitData[0]['Steps']);
			console.log(parseInt(fitbitData[0]['Steps'].replace(/\,/g,'')));
			
			google.charts.load('current', {packages: ['corechart', 'line']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var stepData = new google.visualization.DataTable();
				stepData.addColumn('string', 'Date');
        stepData.addColumn('number', 'Steps');

        stepData.addRows([[fitbitData[0]['Date'], parseInt(fitbitData[0]['Steps'].replace(/\,/g,''))]]);

        var options = {
          hAxis: {
            title: 'Date'
          },
          vAxis: {
            title: 'Steps'
          },
          backgroundColor: '#f1f8e9'
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(stepData, options);
      }
    });
		
/*
    //when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
			//validate the formData to make sure that something is there
      //if form is empty, nothing will happen
      //people can't just hold enter to keep adding the same to-do anymore
      if (!$.isEmptyObject($scope.formData)) {
        //call the create function from our service (returns a promise object)
        Todos.create($scope.formData)
          //if successful creation, call our get function to get all the new todos
          .success(function(data) {
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.todos = data; // assign our new list of todos
          });
      }
    };

    //delete a todo after checking it
    $scope.deleteTodo = function(id) {
      Todos.delete(id)
        //if successful creation, call our get function to get all the new todos
        .success(function(data) {
          $scope.todos = data; //assign our new list of todos
        });
    };*/
});