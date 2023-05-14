$(document).ready(function() {

	$("#get").click(function() {
		$.ajax({
			url: "/service",
			type: "GET",
			success: function(data, textStatus, jqXHR) {
				$("#response").text(data.msg);
				console.log(data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("error: "+textStatus);
			}
		});
	});

	$("#put").click(function() {
		var data = {
			msg: "PUT message : "+$("#serviceInput").val()
		};	
		$.ajax({
			url: "/service",
			type: "PUT",
			data: JSON.stringify(data),
    		contentType: 'application/json; charset=utf-8',
    		dataType: 'json',			
			success: function(data, textStatus, jqXHR) {
				$("#response").text(data.msg);
				console.log(data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("error: "+textStatus);
			}
		});
	});

	$("#post").click(function() {
		var data = {
			msg: "POST message : "+$("#serviceInput").val()
		};	
		$.ajax({
			url: "/service",
			type: "POST",
			data: JSON.stringify(data),
    		contentType: 'application/json; charset=utf-8',
    		dataType: 'json',			
			success: function(data, textStatus, jqXHR) {
				$("#response").text(data.msg);
				console.log(data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("error: "+textStatus);
			}
		});
	});

	$("#head").click(function() {
		$.ajax({
			url: "/service",
			type: "HEAD",
			success: function(data, textStatus, jqXHR) {
				$("#response").text("HEAD responded");
				console.log("HEAD responded");
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("error: "+textStatus);
			}
		});
	});

	$("#delete").click(function() {
		$.ajax({
			url: "/service",
			type: "DELETE",
			success: function(data, textStatus, jqXHR) {
				$("#response").text(data.msg);
				console.log(data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log("error: "+textStatus);
			}
		});
	});
	
});	