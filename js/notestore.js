(function () {
    var app = angular.module('starter.notestore', []);

    app.factory('NoteStore', function () {

        var notas = angular.fromJson(window.localStorage['notas'] || []);

        var persist = function () {

            window.localStorage['notas'] = angular.toJson(notas);

        };
        var list = function () {
            return notas;
        };

        var get = function (id) {
            return notas.filter(function (nota) {
                return nota.id === id;
            })[0];
        };

        var create = function (nota) {
            notas.push(nota);
            persist(nota);
        };

        var update = function (nota) {
            for (var i = 0; i < notas.length; i++) {
                if (notas[i].id === nota.id) {
                    notas[i] = nota;
                    persist();
                    return;
                }
            }

        };

        var remove = function (id) {
            for (var i = 0; i < notas.length; i++) {
                if (notas[i].id === id) {
                    notas.splice(i, 1);
                    persist();
                    return;
                }
            }

        };


        return {
            list: list,
            get: get,
            create: create,
            update: update,
            remove: remove
        };
    });
}());
