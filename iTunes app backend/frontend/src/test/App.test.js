import React from 'react';
import App from '../App';
import renderer, {create} from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer 
    .create(<App/>)
    expect(tree).toMatchSnapshop();
})

