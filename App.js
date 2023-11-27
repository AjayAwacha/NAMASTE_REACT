import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const headingElement = (<h1 className="heading">
       Hello React From JSX
    </h1>)

// React Component
// const HeadingComponent = () => {
//     return <h1 className='comp'>Hello React Component</h1>
// }

// const HeadingComponent = () => <h1 className='comp'>Hello React Component</h1>


const HeadingComponent = () => (
    <h1 className='comp'>Hello React Component</h1>
)

// Case 1. Component inside component
const ComponentFirst = () => {
    return <h1>First Component</h1>
}

const ComponentSecound = () => {
    return (
        <div className='comp-inside-comp'>
            <ComponentFirst />
            <h1>Secound Component</h1>
        </div>
    )
}

// Case 2. Element Inside Element
const firstEle = <h1>Fisrt Element</h1>
const secoundEle = (
    <div className='ele-inside-ele'>
        {firstEle}
        <h1>Secound Element</h1>
    </div>
)

// Case 3. Render Element Inside component
const reactEle = <h1>React Element Render Inside Component</h1>
const ReactComponent = () => {
    return (
        <div>
            {reactEle}
            <h1>React Component</h1>
        </div>
    )
}

// Case 4. Render component inside Element
const TestComponent = () => {
    return <h1>This is Test Component</h1>
}

const testElement = (
    <div>
        <h1>React Element</h1>
        {/* {testComponent()} */}
        <TestComponent />
        {/* <TestComponent></TestComponent> */}
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(testElement);
