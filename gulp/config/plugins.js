import replace from 'gulp-replace' // Поиск и замена
import plumber from 'gulp-plumber' // Обработка ошибок
import notify from 'gulp-notify' // Сообщения (подсказки)
import browserSync from 'browser-sync' // Локальный сервер
import newer from 'gulp-newer' // Проверка обновления
import gulpIf from 'gulp-if' // Условное ветление
import pug from 'gulp-pug' // Компиляция pug в html

export default {
  replace,
  plumber,
  notify,
  browserSync,
  newer,
  gulpIf,
	pug
}
