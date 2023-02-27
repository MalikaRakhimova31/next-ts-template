import React, { FC } from 'react'

import styles from './Layout.module.scss'

interface Props {
    children: JSX.Element
}

const Layout: FC<Props> = ({children}) : JSX.Element => {
    return (
        <>
            {children}
        </>
    )    
} 

export default Layout

