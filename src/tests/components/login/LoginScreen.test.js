import { mount, shallow } from 'enzyme';
import React from 'react';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';
import { contextValue, historyMock } from '../../fixtures/default';

describe('Pruebas en <LoginScreen />', () => {
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={historyMock} />
    </AuthContext.Provider>
  );

  test('Debe mostrarse correctamente', () => {
    expect(wrapper.find('.form-group').length).toBe(2);
    expect(wrapper.find('.btn').length).toBe(1);
  });

  test('Debe ejecutar el dispatch y replace cuando se logea', () => {
    wrapper.find('.btn').simulate('click');
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'Gonzalo',
      },
    });

    expect(historyMock.replace).toHaveBeenCalled();
  });
});
