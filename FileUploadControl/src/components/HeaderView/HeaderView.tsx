import { Spin } from 'antd'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { JSONSingleObjectForMap } from '../../types/fileTypes'

interface HeaderViewProps {
    item: JSONSingleObjectForMap;
}

const HeaderView: React.FC<HeaderViewProps> = ({ item }) => {
    const [loading, setLoading] = useState(false)


    const [openItemId, setOpenItemId] = useState<number | null>(null)

    const toggleItem = (itemId: number) => {
        setOpenItemId(openItemId === itemId ? null : itemId)
    }

    return (
        <Spin spinning={loading}>

            <div key={item.id} className="header-container">
                <div
                    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                >
                    <span onClick={() => toggleItem(item.id)}>
                        {openItemId === item.id ? '▲' : '▼'}
                    </span>
                    <input type="checkbox" />

                    {item.headerType === 'h1' ? (
                        <h1 className="header-container">{item.headerContent}</h1>
                    ) : item.headerType === 'h2' ? (
                        <h2 className="header-container">{item.headerContent}</h2>
                    ) : item.headerType === 'h3' ? (
                        <h3 className="header-container">{item.headerContent}</h3>
                    ) : item.headerType === 'h4' ? (
                        <h4 className="header-container">{item.headerContent}</h4>
                    ) : (
                        <h5 className="header-container">{item.headerContent}</h5>
                    )}

                </div>
                {openItemId === item.id && <p className='header-content'>{item.bodyContent}</p>}
            </div>

        </Spin>
    )
}

export default HeaderView
