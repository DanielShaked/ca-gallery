'use strict'

var gProjects;
var gNextId = 101;


function getProjects() {
    return gProjects
}



function createProjects() {
    gProjects = [
        _createProj('Minesweeper', 'Authentic version with some features', '', "img/portfolio/minsweeper.gif", 'https://danielshaked.github.io/minesweeper/'),
        _createProj('Pacman', 'An authentic version of the favorite game', '', "img/portfolio/pacman.gif", 'https://danielshaked.github.io/Pacman/'),
        _createProj('Todo', 'Todo app - just do it', '', "img/portfolio/todo.png", 'https://Google.com'),

    ]
}

function getProjById(id) {
    return gProjects.find(proj => proj.id === id)
}


function _createProj(name, title, desc, urlImg, url, labels = ['general'],) { //add image arrgument
    return {
        id: gNextId++,
        name,
        title,
        desc,
        urlImg,
        url,
        publishedAt: Date.now(),
    }
}
