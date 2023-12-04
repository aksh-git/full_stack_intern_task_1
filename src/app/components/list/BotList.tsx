import React from 'react'
import Image from 'next/image';

type propsType = {
    id: String,
    image: string,
    title: String,
    description: String,
    action: (id: String) => void,
    style: String,
    isActive: boolean,
}

function BotList({ id, image, title, description, action, style, isActive }: propsType) {
    return (
        <li title={title.toString()} onClick={() => action(id)} className={`w-fit md:w-full rounded-lg md:rounded-full ${isActive ? 'bg-secondary' : ''} hover:bg-secondary cursor-pointer ${style}`}>
            <div className='p-1 lg:px-2 lg:py-1 w-full flex items-center gap-2'>
                <div className='avatar w-8 rounded-full overflow-hidden'>
                    <Image className='w-full h-full' src={image} alt='avatar' width={240} height={240}></Image>
                </div>
                <div className='hidden md:block flex-row gap-1'>
                    <div className='text-xs md:text-sm font-semibold'>
                        {title}
                    </div>
                    <div className='text-xs font-medium text-white/70'>
                        {description.length > 30 ? description.slice(0, 26) + "..." : description}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default BotList