import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card.js';

describe( 'card', () => {
    it('renders without crashing',() =>{
        const container = document.createElement('div');
        ReactDOM.render(
            <Card />,
            container
        );
        ReactDOM.unmountComponentAtNode(
           container
        )
    })
    it("card hasn't changed", () =>{
        const tree = renderer.create(<Card />).toJSON();
        expect(tree).toMatchSnapshot();
    })
}
    
)


