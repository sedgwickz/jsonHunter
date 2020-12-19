import React, { useRef, useState } from 'react'
const preDefinedStruct = `Demo JSON: \n[{
name: '.topic-link',
attrs: ['href']
}]
`
const LeftPanel = ({
    selectors,
    setSelectors,
    url,
    setUrl,
    setResult,
    handleCurl
}) => {
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
