import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';

describe('list', () => {
    it('rendered without crashing', () => {
        const myList = document.createElement('div');
        ReactDOM.render(<List cards={[]}/>, myList );
        ReactDOM.unmountComponentAtNode(myList);
    })

    it("hasn't been ruined", () => {
        const tree = renderer.create(<List cards={[]}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    
    

})