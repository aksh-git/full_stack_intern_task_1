import React from 'react'
import { AiTwotoneSmile } from "react-icons/ai";

function PHChatArea() {
    return (
        <div className='PHcharArea-arrow w-full h-full bg-primary rounded-lg overflow-clip '>
            <div className='w-full h-full space-y-10'>
                <div className='text-3xl h-full flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <div className='text-5xl font-bold flex items-center'>
                            Welcome <AiTwotoneSmile/>
                        </div>
                        <div className='text-lg font-semibold text-accent/50'>
                            + select a chat from sidebar +
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PHChatArea