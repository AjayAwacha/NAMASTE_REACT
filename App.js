/* 
<div id="parent">
    <div id="child">
        <h1>i am h1</h1>
        <h1>i am h2</h1>
    </div>
    <div id="child2">
        <h1>i am h1</h1>
        <h1>i am h2</h1>
    </div>
</div> 
*/

import React from 'react';
import ReactDOM from 'react-dom';

const nestedElements = React.createElement('div', { id: "parent" }, [
    React.createElement('div', { id: 'child' }, [React.createElement('h1', {}, 'I am Heading'), React.createElement('h1', {}, 'I am Heading')]),
    React.createElement('div', { id: 'child1' }, [React.createElement('h1', {}, 'I am Heading'), React.createElement('h1', {}, 'I am Heading')])
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(nestedElements);

root.render(nestedElements);
