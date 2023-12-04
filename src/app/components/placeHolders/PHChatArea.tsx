import React from 'react'

function PHChatArea() {
    return (
        <div className='PHcharArea-arrow w-full h-full bg-primary rounded-lg overflow-clip '>
            <div className='w-full p-12 space-y-0'>
                <div className='flex '>
                    <div className='flex flex-col w-fit h-fit'>
                        <div className='text-6xl font-bold text-accent'>
                            Please
                        </div>
                        <div className='text-4xl font-bold text-accent'>
                            select any
                        </div>
                    </div>
                    <div className='w-fit h-fit mt-8 ml-2'>
                        <div className='text-3xl font-bold w-fit'>
                            Chat
                        </div>
                        <div className='flex -mt-3 -ml-2 gap-2 items-end'>
                            <div className='text-3xl font-bold'>
                                from
                            </div>
                            <div className='text-6xl font-bold text-accent'>
                                Sidebar.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PHChatArea