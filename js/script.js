$(() => {
  $('#title').fadeIn(1000, () => {
    $('#img-caption').fadeIn(1000, () => {
      $('#image').fadeIn(1500);
    });
  });
});
