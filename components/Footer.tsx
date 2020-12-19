import React from 'react'

const Footer = () => {
    return (
        <div
            className='flex text-gray-300 py-4 w-full'
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
            <div className='flex-initial'>
                <span>有用的网址：</span>
            </div>
            <div className='flex-1 space-x-2'>
                <a
                    target='_blank'
                    className='underline'
                    rel='nofollow'
                    href='https://developers.cloudflare.com/workers/'
                >
                    😇CouldFlare Worker文档
                </a>
                <a
                    target='_blank'
                    className='underline'
                    rel='nofollow'
                    href='https://nextjs.org/docs/getting-started'
                >
                    👍Nextjs文档
                </a>
                <a
                    target='_blank'
                    className='underline'
                    rel='nofollow'
                    href='https://jsonformatter.curiousconcept.com/'
                >
                    🚀JSON校验
                </a>
                <a
                    target='_blank'
                    className='underline'
                    rel='nofollow'
                    href='https://mdxjs.com/'
                >
                    🛠MDX文档
                </a>
                <a
                    target='_blank'
                    className='underline'
                    href='https://github.com/sedgwickz/jsonHunter'
                >
                    🧡jsonHunter源码
                </a>
            </div>
        </div>
    )
}

export default Footer
