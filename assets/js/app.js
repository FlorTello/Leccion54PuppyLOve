 $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right'
  });
$('.close').on('click',(e)=>{
  $('#slide-out').sideNav('hide');
});
