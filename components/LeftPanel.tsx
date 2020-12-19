import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
const preDefinedStruct = `Demo JSON: \n[{
name: '.topic-link',
attrs: ['href']
}]
`

interface Props {
    selectors: string
    setSelectors: Dispatch<SetStateAction<string>>
    url: string
    setUrl: Dispatch<SetStateAction<string>>
    setResult: Dispatch<SetStateAction<string>>
    handleCurl: () => void
}

const LeftPanel = ({
    selectors,
    setSelectors,
    url,
    setUrl,
    setResult,
    handleCurl
}: Props) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const urlRef = useRef<HTMLInputElement>(null)
    const [errMsg, setErrMsg] = useState('')
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
                setResult('loading...')
                fetch('/api/cf-worker', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        url,
                        selectors: selectors
                            .replace(/\n/g, '')
                            .replace(/  /g, '')
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

    return (
        <>
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
                className='block h-48 md:h-full'
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
                <div className='space-x-2'>
                    <a
                        target='_blank'
                        rel='nofollow'
                        style={{
                            backgroundColor: '#1b95e0',
                            padding: '0 4px'
                        }}
                        className='rounded text-xs text-white'
                        href='https://twitter.com/intent/tweet?text=%23JSONHunter%20%E4%B8%8D%E9%94%99%F0%9F%91%8D%2C%20%E7%88%AC%E5%8F%96%E6%95%B0%E6%8D%AE%E5%BE%88%E6%96%B9%E4%BE%BF%E3%80%82%20https%3A%2F%2Fgithub.com%2Fsedgwickz%2FjsonHunter'
                    >
                        <i
                            style={{
                                position: 'relative',
                                top: '2px',
                                display: 'inline-block',
                                width: '14px',
                                height: '14px',
                                backgroundImage:
                                    'url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23fff%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E)'
                            }}
                        ></i>
                        <span>Tweet</span>
                    </a>
                    <a
                        target='_blank'
                        className='underline text-xs text-white'
                        href='https://github.com/sedgwickz/jsonHunter'
                    >
                        🧡star repo支持开发者
                    </a>
                    <a className='underline text-xs text-white' href='#intro'>
                        使用说明
                    </a>
                    <a
                        className='underline text-xs text-white'
                        target='_blank'
                        href='https://jsonformatter.curiousconcept.com/'
                        rel='nofollow'
                    >
                        JSON查错
                    </a>
                    <button onClick={handleSubmit}>提交</button>
                </div>
            </div>
        </>
    )
}

export default LeftPanel
