'use strict';

const numberOfFilms = Number(prompt('Сколько фильмов вы уже посмотрели?', 'Введите число'));


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let q1 = prompt('Один из последних просмотренных фильмов?', 'Название фильма');
let q2 = prompt('На сколько оцените его?', 'Введите балл от 1 до 10');

let nameOfFilm = q1,
markOfFilm = q2;

personalMovieDB.movies[nameOfFilm] = markOfFilm;

let q3 = prompt('Один из последних просмотренных фильмов?', 'Название фильма');
let q4 = prompt('На сколько оцените его?', 'Введите балл от 1 до 10');

nameOfFilm = q3;
markOfFilm = q4;

personalMovieDB.movies[nameOfFilm] = markOfFilm;

console.log(personalMovieDB);