// custom jQuery validation
// add to validate form class 'js-validate'
// add to fields attr 'name'
//-----------------------------------------------------------------------------------
var validator = {
	init: function () {
		$('form').each(function () {
			var $form = $(this);
			var config = {
				errorElement: 'b',
				errorClass: 'error',
				focusInvalid: false,
				focusCleanup: true,
				errorPlacement: function (error, element) {
					validator.setError($(element), error);
				},
				highlight: function (element, errorClass, validClass) {
					var $el = validator.defineElement($(element));
					var $elWrap = $el.closest('.el-form-field');

					if ($el) $el.removeClass(validClass).addClass(errorClass);
					if ($elWrap.length) $elWrap.removeClass(validClass).addClass(errorClass);
				},
				unhighlight: function (element, errorClass, validClass) {
					var $el = validator.defineElement($(element));
					var $elWrap = $el.closest('.el-form-field');

					if ($el) $el.removeClass(errorClass).addClass(validClass);
					if ($elWrap.length) $elWrap.removeClass(errorClass).addClass(validClass);
				}
			};
			if ($form.hasClass('js-validate')) {
				$form.validate(config);
			}
		});
	},
	setError: function ($el, message) {
		$el = this.defineElement($el);
		if ($el) this.domWorker.error($el, message);
	},
	defineElement: function ($el) {
		return $el;
	},
	domWorker: {
		error: function ($el, message) {
			var $elWrap = $el.closest('.el-form-field');
			$el.addClass('error');
			if ($elWrap.length) $elWrap.addClass('error');
			$el.after(message);
		}
	}
};

validator.init();

// validate by data attribute
//-----------------------------------------------------------------------------------
(function () {
	// add to validate field data-valid="test"
	//-----------------------------------------------------------------------------------
	var rules = {
		'user_password': {
			minlength: 6
		},
		'user_password_repeat': {
			minlength: 6,
			equalTo: '#user_password',
			messages: {
				equalTo: "Passwords doesn't same"
			}
		}
	};

	for (var ruleName in rules) {
		$('[data-valid=' + ruleName + ']').each(function () {
			$(this).rules('add', rules[ruleName]);
		});
	};
}());

// global messages
//-----------------------------------------------------------------------------------
$.validator.messages.minlength = 'At least {0} characters';

// custom rules
//-----------------------------------------------------------------------------------
$.validator.addMethod("email", function (value) {
	if (value == '') return true;
	var regexp = /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	return regexp.test(value);
});

$.validator.addMethod("letters", function (value, element) {
	return this.optional(element) || /^[^1-9!@#\$%\^&\*\(\)\[\]:;,.?=+_<>`~\\\/"]+$/i.test(value);
});

$.validator.addMethod("digits", function (value, element) {
	return this.optional(element) || /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/i.test(value);
});

$.validator.addMethod('dataValidError', function (value, element) {
	var $el = validator.defineElement($(element));

	return this.optional(element) || !$el.attr('data-valid-error');
});