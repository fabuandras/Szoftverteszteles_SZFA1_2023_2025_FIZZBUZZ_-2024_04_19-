QUnit.module('fizzBuzz', function() {
    //alap kérdések, pl. létezik-E?
    QUnit.test('Létezik-E?', assert => {
        assert.ok(fizzBuzz);
    });

    QUnit.test('Létezik-E?', assert => {
        assert.ok(typeof(fizzBuzz) === 'function');
    });
1
    QUnit.test('Szám = 15', assert => {
        assert.equal(fizzBuzz(15), "fizzBuzz");
    });

    QUnit.test('Szám = 5', assert => {
        assert.equal(fizzBuzz(5), "Buzz");
    });

    QUnit.test('Szám = 3', assert => {
        assert.equal(fizzBuzz(3), "fizz");
    });

    QUnit.test('Szám = 13', assert => {
        assert.equal(fizzBuzz(13), "fizzBuzz");
    });

});