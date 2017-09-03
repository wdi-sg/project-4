$(document).on('turbolinks:load', function () {
  $(function () {
    $('#datetimepicker1').datetimepicker({
      format: 'DD/MM/YYYY'
    })
  })

  $(function () {
    $('#datetimepicker3start').datetimepicker({
      format: 'LT',
      stepping: 30
    })
  })

  $(function () {
    $('#datetimepicker3end').datetimepicker({
      format: 'LT',
      stepping: 30
    })
  })
})
