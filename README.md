# Тестовый проект для Яндекс.Недвижимость  

Приложение ищет книги с помощью API Open Library и выводит результаты в виде списка сниппетов (обложка, название книги, автор). При клике на сниппет открывается модальное окно с более подробной информацией: увеличенное изображение с обложкой, название книги, автор, дата публикации, издатель, ISBN книги. Модальное окно можно закрыть по клику в любом месте экрана.  

Спустя секунду после ввода последнего символа текста в поисковую строку автоматически начинается поиск книг. Если в течение секунды пользователь вводит что-то дополнительно, таймер сбрасывается.  

Верстка «тянущаяся» от мобильных экранов до больших мониторов.   
Приложение написано с использованием React и Redux.   
Приложение одностраничное.   
Сборка осуществляется через webpack командой npm run build.  