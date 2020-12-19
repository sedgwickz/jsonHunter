import Logo from '../components/Logo'
import '../styles/globals.css'
function MyApp({ Component, pageProps }: { Component: any; pageProps: {} }) {
    return (
        <div className='flex p-4 flex-col container mx-auto h-screen'>
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
            </header>
            <main className='flex-grow max-h-full'>
                <Component {...pageProps} />
            </main>
        </div>
    )
}

export default MyApp
