$(document).on('turbolinks:load', function() {
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
