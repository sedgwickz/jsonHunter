import Head from 'next/head'
import { useEffect, useState } from 'react'
import Logo from '../components/Logo'
import NavBar from '../components/NavBar'
import { initGA, logPageView } from '../lib/analytics'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: { Component: any; pageProps: {} }) {
    const [hasInitialized, setHasInitialized] = useState(false)
    useEffect(() => {
        if (!hasInitialized) {
            initGA()
            setHasInitialized(true)
        }
        logPageView()
    })
    return (
        <div className='flex p-4 flex-col container mx-auto h-screen'>
            <Head>
                <title>JSONHunter - 在线爬虫</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
                <meta
                    name='description'
                    content='JSONHunter 可以帮助你快速获取某网站指定元素，实现类似爬虫或者获取 JSON PlaceHolder效果。'
                />
            </Head>
            <div className='fixed top-0 right-0 z-999 w-32'>
                <a
                    target='_blank'
                    href='https://github.com/sedgwickz/jsonHunter'
                >
                    <img
                        id='forkme'
                        src='https://aral.github.io/fork-me-on-github-retina-ribbons/right-grey@2x.png'
                        alt='Fork me on GitHub'
                    />
                </a>
            </div>
            <header className='py-4'>
                <Logo />
                <NavBar />
            </header>
            <main className='flex-grow max-h-full'>
                <Component {...pageProps} />
            </main>
        </div>
    )
}

export default MyApp
