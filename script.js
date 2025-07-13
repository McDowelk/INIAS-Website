document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'title',
      right: 'prev,next'
    },
    events: [
      { title: 'Ancienne Belgique, Brussel', start: '2025-07-20' },
      { title: 'Lowlands, Nederland',       start: '2025-08-15' }
    ]
  });
  calendar.render();
});
