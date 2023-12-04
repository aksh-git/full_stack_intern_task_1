import React from 'react'

type messageProp = {
    id: string,
    content: string,
    from: {
        image: string;
        displayName: string;
    };
    timestamp: Number // in miliseconds
}

function Message({ id, from, content, timestamp }: messageProp) {
    return (
        <div className=''>

        </div>
    )
}

export default Message