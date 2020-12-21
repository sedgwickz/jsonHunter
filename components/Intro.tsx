import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

interface Props {
    docs: string
}
const Intro = ({ docs }: Props) => {
    return (
        <div className='text-brew-primary leading-5 space-y-4 max-w-full'>
            <h1 id='docs'>文档</h1>
            <hr />
            <ReactMarkdown plugins={[gfm]} children={docs}></ReactMarkdown>
        </div>
    )
}

export default Intro
