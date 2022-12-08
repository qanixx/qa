// https://api.jquery.com/jQuery.ajax
$.ajax({
    method: 'POST',
    url: 'https://formsubmit.co/ajax/948cfeef507a307dbd0bb52ee88223e1',
    dataType: 'json',
    accepts: 'application/json',
    data: {
        name: "FormSubmit",
        message: "I'm from Devro LABS"
    },
    success: (data) => console.log(data),
    error: (err) => console.log(err)
});