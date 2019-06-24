
$(document).ready(function(){
    $('.delete-user').on('click', function(e){
      $target = $(e.target);
      const id = $target.attr('data-id');
      $.ajax({
        type:'DELETE',
        url: '/profile/'+id,
        success: function(response){
          alert('Your delete request has been succesfully processed!');
          window.location.href='/';
        },
        error: function(err){
          console.log(err);
        }
      });
    });
  });
