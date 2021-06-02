import React from 'react';
import PastPurchases from './../modules/bestSellers/BestSellers';

import { render } from '@testing-library/react';

it("has correct headding", ()=>{
    const {getByTestId} = render(<PastPurchases></PastPurchases>)
    const x = getByTestId('headding');
    expect(x.innerHTML).toEqual("Top 20 best sellers");
})