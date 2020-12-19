import { useEffect, useState } from 'react'
import CurlPanel from '../components/CurlPanel'
import Footer from '../components/footer'
import Intro from '../components/Intro'
import LeftPanel from '../components/LeftPanel'
import RightPanel from '../components/RightPanel'
export default function Home() {
    const [url, setUrl] = useState('')
    const [selectors, setSelectors] = useState('')
    const [result, setResult] = useState('')
    const [curlCmd, setCurlCmd] = useState('')
    useEffect(() => {
        setUrl(localStorage.getItem('url') || '')
        setSelectors(localStorage.getItem('selectors') || '')
    }, [])

    const handleCurl = () => {
        setCurlCmd(
            `curl -X POST https://jsonhunter.nuk.workers.dev -H "Accept: application/json" -d '${JSON.stringify(
                {
                    url,
                    selectors: selectors.replace(/\n/g, '').replace(/  /g, '')
                }
            )}'`
        )
    }

    return (
        <div className='flex flex-col max-h-full py-2 space-y-4'>
            <div className='md:flex space-x-2 md:h-(screen-40)'>
                <div className='flex flex-col md:w-1/2 space-y-3'>
                    <LeftPanel
                        {...{
                            url,
                            setUrl,
                            selectors,
                            setSelectors,
                            setResult,
                            handleCurl
                        }}
                    />
                </div>
                <div className='flex flex-col md:w-1/2 space-y-4'>
                    <RightPanel {...{ url, result }} />
                </div>
            </div>
            <CurlPanel {...{ url, selectors, curlCmd }} />
            <Intro />
            <Footer />
        </div>
    )
}
