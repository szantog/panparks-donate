/**
 *  @file
 *  Set hidden values in donate forms
 */

(function ($) {

  Drupal.behaviors.panparks_donate = {
    attach: function (context, settings) {
      $("input:radio[name='amountSelector']", context).click(function () {
        $('#ammount-1').val($(this).val());
        //alert($(this).val());
     });

      $("#edit-uniqueamount", context).focus(function () {
        $("input:radio[name='amountSelector']").attr("checked" , false );
     });

      $("#edit-uniqueamount", context).focusout(function () {
        $('#ammount-1').val($(this).val());
     });

      $("#ws_submit", context).click(function () {
        if (isNaN(parseInt($('#ammount-1').val()))){
          alert('Invalid amount');
          return false;
        }
     });

      $("#panparks-donate-form-support-documentary input:radio[name='amountSelector']", context).click(function () {
        $('#ammount-2').val($(this).val());
        //alert($(this).val());
     });
    }
  };

}(jQuery));