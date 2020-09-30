import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
  test('Debe de retornar el estado por defecto', () => {
    expect(authReducer()).toEqual({});
  });

  test('Debe colocar el name del usuario y autenticar', () => {
    const actionTest = {
      type: types.login,
      payload: {
        name: 'Gonzalo',
      },
    };

    expect(authReducer({ logged: false }, actionTest)).toEqual({
      ...actionTest.payload,
      logged: true,
    });
  });

  test('Debe de borrar el name del usuario y desauntenticar', () => {
    const actionTest = {
      type: types.logout,
      payload: {
        name: 'Gonzalo',
      },
    };

    expect(authReducer({ name: 'Gonzalo', logged: true }, actionTest)).toEqual({
      logged: false,
    });
  });
});
