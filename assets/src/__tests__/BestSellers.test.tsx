import React from 'react';
import BestSellers from './../modules/bestSellers/BestSellers';

import { render } from '@testing-library/react';

it("has correct headding", ()=>{
    const {getByTestId} = render(<BestSellers></BestSellers>)
    const x = getByTestId('headding');
    expect(x.innerHTML).toEqual("Top 20 best sellers");
})