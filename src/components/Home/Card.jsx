import Atropos from 'atropos/react'
import React from 'react'
import 'atropos/css'

export default function Card() {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <Atropos
                onEnter={() => console.log('Enter')}
                onLeave={() => console.log('Leave')}
                onRotate={(x, y) => console.log('Rotate', x, y)}
                className="w-[500px] h-[500px]">
                <img alt='test' src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D" />
            </Atropos>
        </div>
    )
}
