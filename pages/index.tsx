import { useEffect, useRef, useState } from 'react'
import fetch from 'unfetch'
const preDefinedStruct = `/**
 * demo object
 * [
 *          {
 *              name: '.topic-link',
 *              attrs: ['href']
 *          }
 *]
 */
`

interface Selector {
    name: string
    attrs?: string[]
}

const atob64 = (a: string): string => {
    return Buffer.from(a).toString('base64')
}

export default function Home() {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const urlRef = useRef<HTMLInputElement>(null)
    const [url, setUrl] = useState('')
    const [selectors, setSelectors] = useState('')

    useEffect(() => {
        setUrl(localStorage.getItem('url') || '')
        setSelectors(localStorage.getItem('selectors') || '')
    }, [])

    const [errMsg, setErrMsg] = useState('')
    const [result, setResult] = useState('')
    const [curlCmd, setCurlCmd] = useState('')

    const handlePrettify = () => {
        try {
            const json = JSON.parse(selectors)
            if (!!json) {
                setSelectors(JSON.stringify(json, undefined, 2))
                setErrMsg('')
            }
        } catch (error) {
            setErrMsg('无效的JSON格式')
        }
    }
    const handleSubmit = () => {
        try {
            if (selectors && url && !!JSON.parse(selectors)) {
                setErrMsg('')
                fetch('/api/cf-worker', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        url,
                        selectors: selectors
                            .replace(/\n/g, '')
                            .replace(/ /g, '')
                    })
                })
                    .then((r) => r.json())
                    .then((data) => {
                        setResult(JSON.stringify(data, undefined, 2))
                    })
            } else {
                setErrMsg('请输入要爬取的URL')
                urlRef.current?.focus()
            }
        } catch (error) {
            setErrMsg(!url ? '请输入要爬取的URL' : '无效的JSON格式')
            textareaRef.current?.focus()
        }
    }

    const handleCurl = () => {
        setCurlCmd(
            `curl -X POST https://jsonhunter.nuk.workers.dev -H "Accept: application/json" -d '${JSON.stringify(
                {
                    url,
                    selectors: selectors.replace(/\n/g, '').replace(/ /g, '')
                }
            )}'`
        )
    }

    return (
        <div className='flex flex-col max-h-full py-2 space-y-4'>
            <div className='flex space-x-2 h-(screen-40)'>
                <div className='flex flex-col w-1/2 space-y-3'>
                    <input
                        required
                        ref={urlRef}
                        placeholder='request url'
                        className='w-full'
                        id='inputUrl'
                        type='text'
                        value={url}
                        onChange={(e) => {
                            setUrl(e.target.value)
                            localStorage.setItem('url', e.target.value)
                        }}
                    />
                    <div className='text-red-600'>{errMsg}</div>
                    <textarea
                        required
                        ref={textareaRef}
                        placeholder={preDefinedStruct}
                        value={selectors}
                        onChange={(e) => {
                            setSelectors(e.target.value)
                            localStorage.setItem('selectors', e.target.value)
                        }}
                        className='block'
                    ></textarea>
                    <div className='flex'>
                        <div className='flex-grow space-x-4'>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(selectors)
                                }}
                            >
                                复制
                            </button>
                            <button onClick={handlePrettify}>格式化JSON</button>
                            <button onClick={handleCurl}>转化curl命令</button>
                        </div>
                        <div>
                            <button onClick={handleSubmit}>提交</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-1/2 space-y-4'>
                    <figure className='flex-grow p-2 rounded text-white border-2 border-solid border-brew-primary overflow-scroll'>
                        <pre>{result}</pre>
                    </figure>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => {
                                const element = document.createElement('a')
                                const file = new Blob([result], {
                                    type: 'text/json'
                                })
                                element.href = URL.createObjectURL(file)
                                element.download = url + '.json'
                                document.body.append(element)
                                element.click()
                            }}
                        >
                            下载
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {curlCmd && (
                    <div className='flex p-8 rounded text-white border-2 border-solid border-brew-primary relative'>
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

            <div
                className='flex text-gray-300 py-4 w-full'
                style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
                <div className='flex-initial'>
                    <span>有用的网址：</span>
                </div>
                <div className='flex-1'>
                    <a
                        className='underline'
                        rel='nofollow'
                        href='https://jsonformatter.curiousconcept.com/'
                    >
                        🚀JSON校验
                    </a>
                </div>
            </div>
        </div>
    )
}
