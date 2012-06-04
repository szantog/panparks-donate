/**
 *  @file
 *  Set hidden values in donate forms
 */

(function ($) {

  Drupal.behaviors.panparks_donate = {
    attach: function (context, settings) {
      $("input:radio[name='amountSelector']", context).click(function () {
        $("input[name='amount']").val($(this).val());
        //alert($(this).val());
      });

      $("input[name='uniqueAmount']", context).focus(function () {
        $("input:radio[name='amountSelector']").attr("checked" , false );
      });

      $("input[name='uniqueAmount']", context).focusout(function () {
        $("input[name='amount']").val($(this).val());
      });

      $("#panparks-donate-form-support-documentary input:radio[name='amountSelector']", context).click(function () {
        $("input[name='amount']").val($(this).val());
        //alert($(this).val());
      });
    }
  };

}(jQuery));
