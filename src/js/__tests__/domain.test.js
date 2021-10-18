import Character from '../domain';

describe('test checkErrorName', () => {
  test('checkErrorName min', () => {
    function result() {
      const player = new Character('p', 'Zombie');
      player.checkErrorName();
    }

    expect(result).toThrowError(new Error('недопустимые значения имени'));
  });

  test('checkErrorName max', () => {
    function result() {
      const player = new Character('playersZombieGood', 'Zombie');
      player.checkErrorName();
    }

    expect(result).toThrowError(new Error('недопустимые значения имени'));
  });

  test('checkErrorName string', () => {
    function result() {
      const player = new Character(123, 'Zombie');
      player.checkErrorName();
    }

    expect(result).toThrowError(new Error('недопустимые значения имени'));
  });
});

describe('test checkErrorType', () => {
  test('checkErrorType name', () => {
    function result() {
      const player = new Character('player', 'Zombie1');
      player.checkErrorType();
    }

    expect(result).toThrowError(new Error('недопустимые значения типа'));
  });
});
