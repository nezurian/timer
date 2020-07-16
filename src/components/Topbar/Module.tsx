import React from 'react'

type Props = {
    moduleName: string
}
export default function Module(props: Props) {
    
    return (
        <div className="flex border border-gray-200 rounded-lg shadow-2xl m-2 ">
            {props.moduleName}
        </div>
    )
}
