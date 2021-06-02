import React from 'react';
import PastPurchases from './../modules/pastPurchases/PastPurchases';

import { render } from '@testing-library/react';

it("renders right", ()=>{
    const {getByTestId} = render(<PastPurchases></PastPurchases>)
    
    const x = getByTestId('div');
    //check that returned element contains all catagories it should
    expect(x.innerHTML).toContain("Cookbooks");
    expect(x.innerHTML).toContain("Database");
    expect(x.innerHTML).toContain("Fairy Tales");
    expect(x.innerHTML).toContain("Science Fiction");
    expect(x.innerHTML).toContain("Home Improvement");
    expect(x.innerHTML).toContain("Cars");
    expect(x.innerHTML).toContain("Woodwork");
})