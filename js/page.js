var $container = $('#container'),
      filters = {};

  // filter buttons
  $('.filter a').click(function(){
    var $this = $(this),
        isoFilters = [],
        prop, selector;
    // store filter value in object
    // i.e. filters.color = 'red'
    filters[ $this.data('group') ] = $this.data('filter');

    for ( prop in filters ) {
      isoFilters.push( filters[ prop ] )
    }
    selector = isoFilters.join('');
    $container.isotope({ filter: selector });

    return false;
  });

    // change size of clicked element
    $container.find('.property').live('click', function(){
      $(this).toggleClass('large');
      $container.isotope('reLayout');
    });


      // switches selected class on buttons
      $('#options').find('.option-set a').click(function(){
        var $this = $(this);

        // don't proceed if already selected
        if ( !$this.hasClass('selected') ) {
          $this.parents('.option-set').find('.selected').removeClass('selected');
          $this.addClass('selected');
        }

      });

$container.isotope({
  // options...
  resizable: true, // disable normal resizing
  // set columnWidth to a percentage of container width
  masonry: { columnWidth: $container.width() / 2 }
});

// update columnWidth on window resize
$(window).smartresize(function(){
  $container.isotope({
    // update columnWidth to a percentage of container width
    masonry: { columnWidth: $container.width() / 2}
  });
});

$('#simple_attributes').hide();

 $(".simp").click(function () {
      $("#simple_attributes").show("fast");
    });

    $(".all,.pclass,.pelement,.combi").click(function () {
      $("#simple_attributes").hide("fast");
    });


    $('#pseudo_class').hide();

 $(".pclass").click(function () {
      $("#pseudo_class").show("fast");
    });

    $(".all,.simp,.pelement,.combi").click(function () {
      $("#pseudo_class").hide("fast");
    });

      $(".parentNav").click(function () {
$(".childNav").trigger('click');

});
