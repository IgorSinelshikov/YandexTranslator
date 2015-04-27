# YandexTranslator


RU

## 1. Начало работы


  Для начала необходимо подключить библиотеку jQuery:
  
  
  https://www.jquery.com/
  
  Далее загрузить YandexTranslator и подключить его.
  
```javascript
  <script src="[путь к файлу/]yandexTranslator.js"></script>
```
  
## 2. Инициализация
 

  Для начала необходимо получить ключ API Яндекс Переводчика
  
  https://tech.yandex.ru/keys/get/?service=trnsl
  
  Для инициализации:
  
```javascript
  var translator = new YandexTranslator([ключ]);
```

## 3. API


> translate(Object config)
  
    Переводит текст.
    
    Поля объекта config:
    
- text - Текст для перевода
      
- fromLang - Язык текста (необязательный)
      
- toLang - Язык, на который нужно перевести
      
    Возвращает строку с переведенным текстом.


> detect(String text)
  
    Определяет язык текста.
    
    Возвращает строку с определенным языком текста.
    
    
> getLangs([String ui])
  
    Возвращает направления перевода. 
    
    Возвращает массив с направлениями перевода.
      

## 4. Пример

```javascript
  var translator = new YandexTranslator('svcsdjvbsdb23jb23rbjscjsc.dvdjvnhfgb3h2jwd');
  alert(translator.translate({text: 'Hi', fromLang: 'en', toLang: 'ru'})); // 'Привет'
  alert(translator.detect('Hi'); // 'en'
  alert(translator.getLangs(); // Array[160]
```
  
  
  
