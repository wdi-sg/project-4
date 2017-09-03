$(document).on('turbolinks:load', function() {
  $(function() {
    $('#datetimepickerend').datetimepicker({
      inline: true,
      sideBySide: true,
      stepping: 30
    })

    $('#datetimepickerstart').datetimepicker({
      inline: true,
      sideBySide: true,
      stepping: 30
    })

  })
})

    // var startDate;
    //          $("#startdate").datetimepicker({
    //                      timepicker:true,
    //                      closeOnDateSelect:false,
    //                      closeOnTimeSelect: true,
    //                      initTime: true,
    //                      format: 'd-m-Y H:m',
    //                      minDate: 0,
    //                      roundTime: 'ceil',
    //                      onChangeDateTime: function(dp,$input){
    //                                startDate = $("#startdate").val();
    //                                                            }
    //                                                            });
    //         $("#enddate").datetimepicker({
    //                      timepicker:true,
    //                      closeOnDateSelect:false,
    //                      closeOnTimeSelect: true,
    //                      initTime: true,
    //                      format: 'd-m-Y H:m',
    //                      onClose: function(current_time, $input){
    //                             var endDate = $("#enddate").val();
    //                             if(startDate>endDate){
    //                                    alert('Please select correct date');
    //                              }
    //              }
    //               });
