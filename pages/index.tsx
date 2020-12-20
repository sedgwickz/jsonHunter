import { useEffect, useState } from 'react'
import CmdPanel from '../components/CmdPanel'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import LeftPanel from '../components/LeftPanel'
import RightPanel from '../components/RightPanel'
import { WORKER_URL } from '../lib/constant'
function Home() {
    const [url, setUrl] = useState('')
    const [selectors, setSelectors] = useState('')
    const [result, setResult] = useState('')
    const [cmd, setCmd] = useState('')
    useEffect(() => {
        setUrl(localStorage.getItem('url') || '')
        setSelectors(localStorage.getItem('selectors') || '')
    }, [])

    const convert2Curl = () => {
        setCmd(
            `curl -X POST ${WORKER_URL} -H "Accept: application/json" -d '${JSON.stringify(
                {
                    url,
                    selectors: selectors.replace(/\n/g, '').replace(/  /g, '')
                }
            )}'`
        )
    }

    const convert2Fetch = () => {
        setCmd(
            `
fetch("${WORKER_URL}", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '${JSON.stringify({
        url,
        selectors: selectors.replace(/\n/g, '').replace(/  /g, '')
    })}'
})
.then(r => r.json())
.then(data => console.log(data))
            `
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
                            convert2Curl,
                            convert2Fetch
                        }}
                    />
                </div>
                <div className='flex flex-col md:w-1/2 space-y-4'>
                    <RightPanel {...{ url, result }} />
                </div>
            </div>
            <CmdPanel {...{ url, selectors, cmd }} />
            <Intro />
            <Footer />
        </div>
    )
}

export default Home
