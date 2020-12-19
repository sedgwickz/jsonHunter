import React from 'react'

const CurlPanel = ({
    url,
    selectors,
    curlCmd
}: {
    url: string
    selectors: string
    curlCmd: string
}) => {
    return (
        <div>
            {curlCmd && (
                <div className='flex rounded text-white border-2 border-solid border-brew-primary relative'>
                    <figure>{curlCmd}</figure>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(curlCmd)
                        }}
                        className='absolute top-0 right-0 p-2 bg-transparent block w-auto'
                        title='复制'
                    >
                        <div className='flex items-center'>
                            <svg
                                className='fill-current text-brew-primary w-4'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                            >
                                <path d='M8 2a1 1 0 000 2h2a1 1 0 100-2H8z' />
                                <path d='M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z' />
                            </svg>
                            <span className='text-xs'>复制</span>
                        </div>
                    </button>
                </div>
            )}
        </div>
    )
}

export default CurlPanel
