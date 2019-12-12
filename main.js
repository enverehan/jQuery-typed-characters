$(document).ready(function() {

    $('#your_message').keyup(function() {

        var typed_characters = $(this).val().length;
        $("#typed_characters").text( typed_characters );

    });

});