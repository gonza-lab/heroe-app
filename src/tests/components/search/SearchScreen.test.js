import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Pruebas en <SearchScreen />', () => {
  test('Debe mostrar a heroe dado segun el query', () => {
    const hero = 'batman';
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${hero}`]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('img').prop('alt').toLowerCase()).toBe(hero);
  });

  
});
