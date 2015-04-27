# YandexTranslator


RU

Начало работы
  Для начала необходимо подключить библиотеку jQuery:
  https://www.jquery.com/
  
  Далее загрузить YandexTranslator и подключить его:
  <script src="[путь к файлу/]yandexTranslator.js"></script>
  
Инициализация
  Для начала необходимо получить ключ API Яндекс Переводчика
  https://tech.yandex.ru/keys/get/?service=trnsl
  
  Для инициализации:
  var translator = new YandexTranslator([ключ]);
  
API

  translate(Object config)
    Переводит текст.
    Поля объекта config:
      text - Текст для перевода
      fromLang - Язык текст
      toLang - Язык, на который нужно перевести
    Возвращает строку с переведенным текстом.
      

Пример
  var translator = new YandexTranslator('svcsdjvbsdb23jb23rbjscjsc.dvdjvnhfgb3h2jwd');
  alert(translator.translate({text: 'Hi', fromLang: 'en', toLang: 'ru'}));
  
  
  
  
