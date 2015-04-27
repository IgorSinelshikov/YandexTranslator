(function (window) {
	'use strict';
		
	function YandexTranslator(key) {
		var _key;
		
		if (key) {
			_key = key;	
		} else {
			throw new Error('Yandex translator error: key must be defined.');
		}
		
		this.getKey = function () {
			return _key;
		};
	}
	
	YandexTranslator.prototype = (function () {
		
		/**
		 * Translates text with Yandex Translator.
		 * @param   {Object} config 	Object of text to translate
		 * @returns {String} Translated text
		 */
		function translate(config) {
			if (!config) {
				throw new Error('Yandex translator error: config object must be defined.');
			}
			
			if (!config.fromLang) {
				throw new Error('Yandex translator error: config.fromLang must be defined.');
			}
			
			if (!config.toLang) {
				throw new Error('Yandex translator error: config.toLang must be defined.');
			}
			
			config.text = config.text || '';
			
			var translatedText = [],
				lang = config.fromLang + "-" + config.toLang,
				data = {
					key: this.getKey(),
					lang: lang,
					text: config.text || ''							
				};
			
			$.ajax({
				url: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
				type: 'POST',
				async: false,
				dataType: 'JSON',
				data: data,
				success: function onSucess(data) {
					translatedText = data.text;
				},
				error: function onError(jqXHR, textStatus, errorThrown) {
					throw new Error(errorThrown);
				}
			});
			
			return translatedText.join(' ');
		}
		
		return {
			constructor: YandexTranslator,
			translate: translate
		};
	}());
	
	window.YandexTranslator = YandexTranslator;
	
}(window));
