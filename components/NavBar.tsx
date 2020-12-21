import React from 'react'
import { FaGithub } from 'react-icons/fa'
const NavBar = () => {
    return (
        <nav className='space-x-4 underline text-lg'>
            <a href='/' title='首页'>
                首页
            </a>
            <a href='#docs' title='文档'>
                文档
            </a>
            {/* <a href='#changelog'>ChangeLog</a> */}
            <a
                title='源码'
                href='https://github.com/sedgwickz/jsonHunter'
                target='_blank'
            >
                <FaGithub className='inline-block' /> 源码
            </a>
        </nav>
    )
}

export default NavBar
