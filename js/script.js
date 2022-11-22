/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const advs = document.querySelectorAll(".promo__adv img");
  const bg = document.querySelector(".promo__bg");
  const genre = bg.querySelector(".promo__genre");
  const filmList = document.querySelector(".promo__interactive-list");

  const addForm = document.querySelector("form.add");
  const addFilm = addForm.querySelector("input.adding__input");
  const checkbox = addForm.querySelector('[type="checkbox"]');
  const btnForm = addForm.querySelector("button");
  
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };
  let { movies } = movieDB;

  genre.textContent = "драма";
  bg.style.backgroundImage = 'url("../img/bg.jpg")';

  const removeAdv = (adv) => {
    adv.forEach((item) => {
      item.remove(item);
    });
  };

  const createMovieDb = (arr, list) => {
    arr.sort();
    list.innerHTML = "";

    arr.forEach((film, i) => {
      list.innerHTML += `
      <li class="promo__interactive-item">${i + 1}. ${film}
          <div class="delete"></div>
      </li>`;
    });

    document.querySelectorAll(".delete").forEach((btn) => {
      btn.addEventListener("click", () => {
        console.log('vla');
      });
    });
  };

  btnForm.addEventListener("click", (event) => {
    event.preventDefault();

    let inputFilm = addFilm.value;
    let favorite = checkbox.checked;

    if (inputFilm) {
      if (inputFilm.length > 21) {
        inputFilm = addFilm.value.slice(0, 21) + "...";
        movies.push(inputFilm.toUpperCase());
        createMovieDb(movies, filmList);
      } else {
        movies.push(inputFilm.toUpperCase());
        createMovieDb(movies, filmList);
      }
    }
    if (Boolean(favorite) === true && Boolean(inputFilm) === true) {
      console.log("Добавляем любимый фильм");
    }
  });

  removeAdv(advs);
  createMovieDb(movies, filmList);
});
