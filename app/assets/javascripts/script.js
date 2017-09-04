$(document).on('turbolinks:load', function() {
  $(function() {
    $('#datetimepickerend').datetimepicker({
      inline: true,
      sideBySide: true,
      stepping: 30,
      format: 'DD/MM/YYYY h:mm A'
    })

    $('#datetimepickerstart').datetimepicker({
      inline: true,
      sideBySide: true,
      stepping: 30,
      format: 'DD/MM/YYYY h:mm A'
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
})


function openEventWidgets() {
  cloudinary.openUploadWidget({
    cloud_name: 'ddanielnp',
    upload_preset: 'event_preset',
    multiple: false
  }, function(error, result) {
    console.log(result);
    $('.advert_image').attr('src', result[0].eager[0].secure_url)
    //ruby will autocreate its hidden field with an id (modelName_columnName). form_for is supposed to be used in conjunction with a model, (form_tag is not) so it will create and id using the model name and attribute.
    $('#advert_advert_image').val(result[0].eager[0].secure_url)
  })
}
