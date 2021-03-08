'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var School = function () {
    function School(name, level, numberOfStudents) {
        _classCallCheck(this, School);

        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    _createClass(School, [{
        key: 'quickFacts',
        value: function quickFacts() {
            console.log(this._name + ' educates ' + this._numberOfStudents + ' students at the ' + this._level + ' school level.');
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        }
    }, {
        key: 'level',
        get: function get() {
            return this._level;
        }
    }, {
        key: 'numberOfStudents',
        get: function get() {
            return this._numberOfStudents;
        },
        set: function set(num) {
            if (typeof num === 'number') {
                this._numberOfStudents = num;
                return this._numberOfStudents;
            } else {
                console.log('Invalid input: numberOfStudents must be set to a Number.');
            }
        }
    }], [{
        key: 'pickSubstituteTeacher',
        value: function pickSubstituteTeacher(substituteTeachers) {
            var randomIndex = Math.floor(Math.random() * substituteTeachers.length);
            return substituteTeachers[randomIndex];
        }
    }]);

    return School;
}();

var pepperMiddle = new School('George Wharton Pepper Middle School', 'middle', 1126);
console.log(pepperMiddle.quickFacts());