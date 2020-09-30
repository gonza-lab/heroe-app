import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route, useHistory } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

describe('Pruebas en <HeroScreen />', () => {
  test('Debe mostrar el componente redirect si no hay parametros en el URL ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen />
      </MemoryRouter>
    );
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('Debe de mostrar un heroe si hay parametros en el URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-thor']}>
        <Route path="/hero/:heroeId" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('.hero-screen').exists()).toBe(true);
  });
});
