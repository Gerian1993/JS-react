"use strict";

let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = parseInt(
      prompt("Сколько фильмов вы уже посмотрели?", "Введите число")
    );
    while (
      personalMovieDB.count === "" ||
      personalMovieDB.count === null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = parseInt(
        prompt(
          "Некорректно. Сколько фильмов вы уже посмотрели?",
          "Введите число"
        )
      );
    }
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      let q1 = prompt("Один из последних просмотренных фильмов?", "").trim();
      while (q1 === "" || q1 === null || q1.length > 50) {
        q1 = prompt(
          "Неккоретктно. Пожалуйста повторите какой один из последних просмотренных фильмов?",
          ""
        ).trim();
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
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
    console.log(personalMovieDB.privat);
  },
  writeYourGenres: () => {
    for (let i = 0; i <= 2; i++) {
      personalMovieDB.genres[i] = prompt(
        `Ваш любимый жанр под номером ${i + 1}`,
        ""
      );
      while (
        personalMovieDB.genres[i] === "" ||
        personalMovieDB.genres[i] === null
      ) {
        personalMovieDB.genres[i] = prompt(
          `Ваш любимый жанр под номером ${i + 1}`,
          ""
        );
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  },
};

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
];

function sortStudentsByGroups(arr) {
  let newArr = [...arr];
  newArr.sort();
  let groups = [];
  let i = 0;
  let j = 0;
  while (i < 3) {
    groups[i] = [newArr[j], newArr[j + 1], newArr[j + 2]];
    i++;
    j += 3;
  }
  let otherStudents = "Оставшиеся студенты:";
  for (let i = 9; i <= newArr.length; i++) {
    if ((i+1) === newArr.length) {
      otherStudents += ` ${newArr[i]}`;
      break;
    } else if ((i+1) <= newArr.length) {
      otherStudents += ` ${newArr[i]},`;
    } else {
      otherStudents += ' -';
    }
  }
  groups[3] = otherStudents;
  return groups;
}

sortStudentsByGroups(students);
