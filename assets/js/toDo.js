// Check off specific todo by clicking
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
})

// Click on X to delete toDo
$('ul').on('click', 'span', function(event){
    // Remove the span with the parent -> li, fadeout then remove
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    // Enter key is 13
    if(event.which === 13){
        // Grabbing new toDo text from input
        var toDoText = $(this).val();
        $(this).val('');
        // Create new li and add to ul
        $('ul').append("<li><span><i class='fa fa-trash'></i></span> "+ toDoText +"</li>");

    }
})

$('.fa-plus').click(function(){
    $("input[type='text']").fadeToggle();
});