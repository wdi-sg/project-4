$(document).on('turbolinks:load', function () {
  $(function () {
    $('#datetimepickerend').datetimepicker({
      inline: true, sideBySide: true,
      // stepping: 30,
      // format: 'DD/MM/YYYY h:mm A'
    })

    $('#datetimepickerstart').datetimepicker({
      inline: true, sideBySide: true,
      // stepping: 30,
      // format: 'DD/MM/YYYY h:mm A'
    })
  })
})
