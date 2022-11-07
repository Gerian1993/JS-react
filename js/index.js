/*1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const start = () => {
  numberOfFilms = parseInt(
    prompt("Сколько фильмов вы уже посмотрели?", "Введите число")
  );

  while (
    numberOfFilms === "" ||
    numberOfFilms === null ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = parseInt(
      prompt("Некорректно. Сколько фильмов вы уже посмотрели?", "Введите число")
    );
  }
};

const rememberMyFilms = () => {
  for (let i = 0; i < 2; i++) {
    let q1 = prompt("Один из последних просмотренных фильмов?", "");
    while (q1 === "" || q1 === null || q1.length > 50) {
      q1 = prompt(
        "Неккоретктно. Пожалуйста повторите какой один из последних просмотренных фильмов?",
        ""
      );
    }
    let q2 = Number(
      prompt("На сколько оцените его?", "Введите число от 1 до 10")
    );
    while (q2 === "" || q2 === null || q2 > 10 || q2 < 1 || isNaN(q2)) {
      q2 = Number(
        prompt(
          "Неккоретктно. Пожалуйста повторите на сколько оцените его?",
          "Введите число от 1 до 10"
        )
      );
    }
    personalMovieDB.movies[q1] = q2;
  }
};

const detectPersonalLevel = () => {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
};

const showMyDB = (hidden) => {
  if (!hidden) {
    console.log(personalMovieDB);
  }
};

const writeYourGenres = (genre) => {
  for (let i=0; i<=2; i++){
    genre[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
  }
};





/* start();
rememberMyFilms();
detectPersonalLevel(); */
showMyDB(personalMovieDB.privat);
writeYourGenres(personalMovieDB.genres);

