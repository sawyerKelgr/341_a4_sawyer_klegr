import React from 'react';
import ReactDOM from 'react-dom';
import BestSellers from './../modules/bestSellers/BestSellers';
import { isTSAnyKeyword } from '@babel/types';

import { render } from '@testing-library/react';

it("has correct headding", ()=>{
    const {getByTestId} = render(<BestSellers></BestSellers>)
    const x = getByTestId('headding');//).(<h3 data-testid="headding">Top 20 best sellers</h3>)
    expect(x.innerHTML).toEqual("Top 20 best sellers");
})