import React from 'react';

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-700 space-y-4 space-x-5 px-5 py-4 mt-5'>
            <div className='text-white'>
                <h2 className="text-orange-400">How React Work?</h2>
                <p>React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React only changes what needs to be changed! React finds out what changes have been made, and changes only what needs to be changed.</p>
            </div>
            <div className='text-white'>
                <h2 className='text-orange-400'>Props VS State</h2>
                <p>
                <span className="text-amber-400">Props:</span> Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.
                </p>
                <p>
                    <span className='text-amber-400'>State:</span> The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.
                </p>
            </div>
            <div className='text-white'>
                <h2 className='text-orange-400'>How react state works?</h2>
                <p>React components has a built-in state object.The state object is where you store property values that belongs to the component. When the state object changes, the component re-rendTo change a value in the state object, use the this.setState method.</p>
            </div>
        </div>
    );
};

export default Footer;