import { Spin } from 'antd'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { JSONFileSource } from '../../types/fileTypes'

const CustomView: React.FC = () => {
    const [loading, setLoading] = useState(false)

    const items: JSONFileSource[] = [
        {
            id: 1,
            type: 'h1',
            header: 'Header 01',
            content: 'Custom content goes here',
        },
        {
            id: 2,
            type: 'h1',
            header: 'Header 02',
            content: 'Custom content goes here',
        },
        {
            id: 3,
            type: 'h1',
            header: 'Header 03',
            content: 'Custom content goes here',
        },
        {
            id: 4,
            type: 'h1',
            header: 'Header 04',
            content: 'Custom content goes here',
        },
    ]

    const [openItemId, setOpenItemId] = useState<number | null>(null)

    const toggleItem = (itemId: number) => {
        setOpenItemId(openItemId === itemId ? null : itemId)
    }

    return (
        <Spin spinning={loading}>
            {items.map((item) => (
                <div key={item.id} className="header-container">
                    <div
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                    >
                        <span onClick={() => toggleItem(item.id)}>
                            {openItemId === item.id ? '▲' : '▼'}
                        </span>
                        <input type="checkbox" />
                        <h4 className="header-container">{item.header}</h4>
                    </div>
                    {openItemId === item.id && <p className='header-content'>{item.content}</p>}
                </div>
            ))}
        </Spin>
    )
}

export default CustomView
