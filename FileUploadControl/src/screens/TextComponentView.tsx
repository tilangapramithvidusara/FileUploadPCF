import { Spin } from 'antd'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { JSONSingleObjectForMap } from '../types/fileTypes'
import HeaderView from '../components/HeaderView/HeaderView'


const TextComponentView: React.FC = () => {
    const [loading, setLoading] = useState(false)


    const items: JSONSingleObjectForMap[] = [
        {
            id: 1,
            order: 1, // order for the segments to be appear, 1 means it is the first main content
            type: 'headerContent', // This can be headerContent, tableContent, imageContent & so on
            isTable: false,
            headerType: 'h2',
            headerContent: 'Header 01',
            bodyContent: 'Custom content goes here',
            tableHeaders: null,
            tableBody: null,
            parentID: null, // parentID goes here, if there is no parent then null
            childID: 2, // childID goes here, if there is no child then null
        },
        {
            id: 2,
            order: 1,
            type: 'headerContent',
            isTable: false,
            headerType: 'h3',
            headerContent: 'Sub Header Content',
            bodyContent: 'Custom content goes here for the sub header',
            tableHeaders: null,
            tableBody: null,
            parentID: 1,
            childID: null,
        },
        {
            id: 3,
            order: 1,
            type: 'headerContent',
            isTable: false,
            headerType: 'h3',
            headerContent: 'Second sub heading',
            bodyContent: 'Custom content goes here for the second sub heading',
            tableHeaders: null,
            tableBody: null,
            parentID: 2,
            childID: null,
        },
        {
            id: 4,
            order: 2,
            type: 'headerContent',
            isTable: false,
            headerType: 'h2',
            headerContent: 'This is the second main header',
            bodyContent: 'Custom content goes here',
            tableHeaders: null,
            tableBody: null,
            parentID: null,
            childID: 5,
        },
        {
            id: 5,
            order: 2,
            type: 'headerContent',
            isTable: false,
            headerType: 'h3',
            headerContent: 'Seb heading',
            bodyContent: 'Custom content goes here',
            tableHeaders: null,
            tableBody: null,
            parentID: 4,
            childID: null,
        },
    ]

    return (
        <Spin spinning={loading}>
            {items.map((item) => (
                <div>{item.type === 'headerContent' ? (<div><HeaderView item={item} /></div>) : (<div></div>)}</div>
            ))}


        </Spin>
    )
}

export default TextComponentView
