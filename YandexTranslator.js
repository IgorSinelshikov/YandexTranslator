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
		
		function getLangs(ui) {
			var url = 'https://translate.yandex.net/api/v1.5/tr.json/getLangs',
				data = {
					key: this.getKey()
				},
				result;
			
			if (ui) {
				data.ui = ui;	
			}
			
			$.ajax({
				url: url,
				type: 'POST',
				async: false,
				dataType: 'JSON',
				data: data,
				success: onSuccess,
				error: onError
			});
			
			/**
			 * Actions when server responses successfully.
			 * @param {Object} data Server response object
			 */			
			function onSuccess(data) {
				if (data.dirs) {
					result = data.dirs;
				} else {
					throw new Error('Yandex translator error: unrecognized list of languages.');	
				}
			}
			
			/**
			 * Actions when server responses with error.
			 */
			function onError() {
				throw new Error('Yandex translator error: error while getting response from yandex translation server.');
			}
			
			return result;
		}
		
		/**
		 * Detects language of specified text.
		 * @param {String} text Text to detect language of
		 */
		function detect(text) {
			text = text || ' ';
			
			var url = 'https://translate.yandex.net/api/v1.5/tr.json/detect',
				data = {
					key: this.getKey(),
					text: text
				},
				result;
			
			$.ajax({
				url: url,
				type: 'POST',
				async: false,
				dataType: 'JSON',
				data: data,
				success: onSuccess,
				error: onError
			});
			
			/**
			 * Actions when server responses successfully.
			 * @param {Object} data Server response object
			 */
			function onSuccess(data) {
				if (data.lang) {
					result = data.lang;
				} else {
					throw new Error('Yandex translator error: unrecognized language.');	
				}
			}
			
			/**
			 * Actions when server responses with error.
			 */
			function onError() {
				throw new Error('Yandex translator error: error while getting response from yandex translation server.');
			}
			
			return result;
		}
		
		/**
		 * Translates text with Yandex Translator.
		 * @param   {Object} config 	Object of text to translate
		 * @returns {String} Translated text
		 */
		function translate(config) {
			if (!config) {
				throw new Error('Yandex translator error: config object must be defined.');
			}
			
			if (!config.toLang) {
				throw new Error('Yandex translator error: config.toLang must be defined.');
			}
				
			config.text = config.text || '';
			
			var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate',
				result = [],
				lang = (config.fromLang)?config.fromLang + "-" + config.toLang:config.toLang,
				data = {
					key: this.getKey(),
					lang: lang,
					text: config.text || ''							
				};
			
			$.ajax({
				url: url,
				type: 'POST',
				async: false,
				dataType: 'JSON',
				data: data,
				success: onSuccess,
				error: onError
			});
			
			/**
			 * Actions when server responses successfully.
			 * @param {Object} data Server response object
			 */
			function onSuccess(data) {
				if (data.text) {
					result = data.text;
				} else {
					throw new Error('Yandex translator error: unrecognized text.');	
				}
			}
			
			/**
			 * Actions when server responses with error.
			 */
			function onError() {
				throw new Error('Yandex translator error: error while getting response from yandex translation server.');
			}
			
			result = result.join(' ');
			
			return result;
		}
		
		return {
			constructor: YandexTranslator,
			translate: translate,
			detect: detect,
			getLangs: getLangs
		};
	}());
	
	window.YandexTranslator = YandexTranslator;
	
}(window));
