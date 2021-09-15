import React from "react"
import { render, screen } from '@testing-library/react'
import { EasyTab, EasyTabs } from './EasyTabs'

describe('number of nav and tab components', () => {
  beforeEach(() => {
    render(
      <EasyTabs>
        <EasyTab>foo</EasyTab>
        <EasyTab>bar</EasyTab>
      </EasyTabs>
    );
  });

  it('should render the correct number of NavItems', () => {
    expect(screen.queryAllByTestId('easy-tabs-nav-item')).toHaveLength(2)
  });

  it('should render the correct number of NavLinks', () => {
    expect(screen.queryAllByTestId('easy-tabs-nav-link')).toHaveLength(2)
  });

  it('should render the correct number of TabPanes', () => {
    expect(screen.queryAllByTestId('easy-tabs-tab-pane')).toHaveLength(2)
  });
});

describe('tab contents', () => {
  beforeEach(() => {
    render(
      <EasyTabs>
        <EasyTab label="Foo Label">foo content</EasyTab>
        <EasyTab label="Bar Label">bar content</EasyTab>
      </EasyTabs>
    );
  });

  it('should render the nav links correctly', () => {
    expect(screen.queryAllByTestId('easy-tabs-nav-link')[0].textContent).toEqual('Foo Label')
    expect(screen.queryAllByTestId('easy-tabs-nav-link')[1].textContent).toEqual('Bar Label')
  });
  it('should render the tab panes correctly', () => {
    expect(screen.queryAllByTestId('easy-tabs-tab-pane')[0].textContent).toEqual('foo content')
    expect(screen.queryAllByTestId('easy-tabs-tab-pane')[1].textContent).toEqual('bar content')
  });
});
