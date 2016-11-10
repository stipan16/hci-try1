$(document).ready(function () {
	
	$('#toggle-view li').click(function () {

		var text = $(this).children('div.panel');

		if (text.is(':hidden')) {
			text.slideDown('200');
			$(this).children('span').html('-');		
		} else {
			text.slideUp('200');
			$(this).children('span').html('+');		
		}
	});
	
	$('#glIzbornik button').click(function() {
		$('#glIzbornik button').addClass('active').not(this).removeClass('active');
		// TODO: insert whatever you want to do with $(this) here
	});
	
	
	$("#uputeDiv" ).css( "display", "none" );
	$("#dogadjanjaDiv" ).css( "display", "none" );
	$("#stvariDiv" ).css( "display", "none" );
	$("#lokacijeDiv" ).css( "display", "none" );
	$("#stvarInputDiv" ).css( "display", "none" );
	$("#calendar" ).css( "display", "none" );
	$("#dogadjanjaInputDiv" ).css( "display", "none" );
	$("#mapDiv" ).css( "display", "block" );
	$("#calendar" ).css( "display", "block" );
	
	var explode = function(){
		$("#calendar" ).hide();
		$("#mapDiv" ).hide();		
	};
	setTimeout(explode, 800);
	
	$("#btn_opcenito").click(function(){
			$("#mainDiv").show();
			$("#uputeDiv" ).css( "display", "none" );
			$("#dogadjanjaDiv" ).css( "display", "none" );	
			$("#stvariDiv").hide();
			$("#lokacijeDiv" ).css( "display", "none" );
			$("#stvarInputDiv" ).css( "display", "none" );
			$("#calendar" ).css( "display", "none" );
			$("#dogadjanjaInputDiv" ).css( "display", "none" );
			$("#mapDiv" ).css( "display", "none" );
			
		});
	
	$("#btn_upute").click(function(){
			$("#mainDiv").hide();		
			$("#uputeDiv" ).css( "display", "block" );	
			$("#dogadjanjaDiv" ).css( "display", "none" );
			$("#stvariDiv").hide();
			$("#lokacijeDiv" ).css( "display", "none" );
			$("#stvarInputDiv" ).css( "display", "none" );
			$("#calendar" ).css( "display", "none" );
			$("#dogadjanjaInputDiv" ).css( "display", "none" );
			$("#mapDiv" ).css( "display", "none" );
	
	});
	
	$("#btn_dogadjanja").click(function(){
			$("#mainDiv").hide();
			$("#uputeDiv").hide();			
			$("#dogadjanjaDiv" ).css( "display", "block" );
			$("#stvariDiv").hide();		
			$("#lokacijeDiv" ).css( "display", "none" );
			$("#stvarInputDiv" ).css( "display", "none" );
			$("#calendar" ).css( "display", "none" );
			$("#dogadjanjaInputDiv" ).css( "display", "none" );
			$("#mapDiv" ).css( "display", "none" );
			
			
	});
	$("#btn_stvari").click(function(){
			$("#mainDiv").hide();
			$("#uputeDiv").hide();			
			$("#stvariDiv" ).css( "display", "block" );
			$("#dogadjanjaDiv").hide();		
			$("#lokacijeDiv" ).css( "display", "none" );
			$("#stvarInputDiv" ).css( "display", "none" );
			$("#calendar" ).css( "display", "none" );
			$("#dogadjanjaInputDiv" ).css( "display", "none" );
			$("#mapDiv" ).css( "display", "none" );
	});
	
	$("#btn_lokacije").click(function(){
			$("#mainDiv").hide();
			$("#uputeDiv").hide();			
			$("#stvariDiv" ).css( "display", "none" );
			$("#dogadjanjaDiv").hide();		
			$("#lokacijeDiv" ).css( "display", "block" );	
			$("#stvarInputDiv" ).css( "display", "none" );	
			$("#calendar" ).css( "display", "none" );
			$("#dogadjanjaInputDiv" ).css( "display", "none" );
			$("#mapDiv" ).css( "display", "none" );
			
	});
	$("#btn_novastvar").click(function(){
			$("#mainDiv").hide();
			$("#uputeDiv").hide();			
			$("#stvariDiv" ).css( "display", "none" );
			$("#dogadjanjaDiv").hide();
			$("#lokacijeDiv" ).css( "display", "none" );
			$("#stvarInputDiv" ).css( "display", "block" );	
			$("#calendar" ).css( "display", "none" );			
			$("#dogadjanjaInputDiv" ).css( "display", "none" );
			$("#mapDiv" ).css( "display", "none" );
	});
	$("#btnOdustani").click(function(){
			$("#mainDiv").hide();
			$("#uputeDiv").hide();			
			$("#stvariDiv" ).css( "display", "block" );
			$("#dogadjanjaDiv").css( "display", "none" );
			$("#lokacijeDiv" ).css( "display", "none" );
			$("#stvarInputDiv" ).css( "display", "none" );
			$("#calendar" ).css( "display", "none" );
			$("#dogadjanjaInputDiv" ).css( "display", "none" );
			$("#mapDiv" ).css( "display", "none" );
	});
	$("#btnDogadjanjeOdustani").click(function(){
			$("#mainDiv").hide();
			$("#uputeDiv").hide();			
			$("#stvariDiv" ).css( "display", "none" );
			$("#dogadjanjaDiv").css( "display", "block" );
			$("#lokacijeDiv" ).css( "display", "none" );
			$("#stvarInputDiv" ).css( "display", "none" );
			$("#calendar" ).css( "display", "none" );
			$("#dogadjanjaInputDiv" ).css( "display", "none" );
			$("#mapDiv" ).css( "display", "none" );
	});
	
	$("#btn_kalendar").click(function(){
			$("#mainDiv").hide();
			$("#uputeDiv").hide();			
			$("#stvariDiv" ).css( "display", "none" );
			$("#dogadjanjaDiv").css( "display", "none" );
			$("#lokacijeDiv" ).css( "display", "none" );
			$("#stvarInputDiv" ).css( "display", "none" );
			$("#calendar" ).css( "display", "block" );
			$("#dogadjanjaInputDiv" ).css( "display", "none" );
			$("#mapDiv" ).css( "display", "none" );
	});
	
	$("#btn_novodogadjanje").click(function(){
			$("#mainDiv").hide();
			$("#uputeDiv").hide();			
			$("#stvariDiv" ).css( "display", "none" );
			$("#dogadjanjaDiv").css( "display", "none" );
			$("#lokacijeDiv" ).css( "display", "none" );
			$("#stvarInputDiv" ).css( "display", "none" );
			$("#calendar" ).css( "display", "none" );
			$("#dogadjanjaInputDiv" ).css( "display", "block" );
			$("#mapDiv" ).css( "display", "none" );
	});
	$("#btn_mapaOdlagalista").click(function(){
			$("#mainDiv").hide();
			$("#uputeDiv").hide();			
			$("#stvariDiv" ).css( "display", "none" );
			$("#dogadjanjaDiv").css( "display", "none" );
			$("#lokacijeDiv" ).css( "display", "none" );
			$("#stvarInputDiv" ).css( "display", "none" );
			$("#calendar" ).css( "display", "none" );
			$("#dogadjanjaInputDiv" ).css( "display", "none" );
			$("#mapDiv").css( "display", "block" );
	});
	
	
});


/*kalendar scripts*/
$.getScript('http://arshaw.com/js/fullcalendar-1.6.4/fullcalendar/fullcalendar.min.js',function(){
  
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    editable: true,
    events: [
      {
        title: 'Sakupljanje teškog otpada',
        start: new Date(y, m, 1)
      },
      {
        title: 'Sakupljanje papira',
        start: new Date(y, m, d-5),
        end: new Date(y, m, d-2)
      },
      {
        id: 999,
        title: 'Sakupljanje Plastike',
        start: new Date(y, m, d-3, 16, 0),
        allDay: false
      },
      {
        id: 999,
        title: 'Sakupljanje Plastike',
        start: new Date(y, m, d+4, 16, 0),
        allDay: false
      },
      {
        title: 'Sastanak udruga zaštita okoliša',
        start: new Date(y, m, d, 10, 30),
        allDay: false
      },
      {
        title: 'Sastanak ekolozi',
        start: new Date(y, m, d, 12, 0),
        end: new Date(y, m, d, 14, 0),
        allDay: false
      },
      {
        title: 'Elektronički otpad¸',
        start: new Date(y, m, d+1, 19, 0),
        end: new Date(y, m, d+1, 22, 30),
        allDay: false
      },
      
    ]
  });
})