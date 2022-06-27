module.exports = {
    purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'brew-default': '#2e2a24',
                'brew-primary': '#f9d094',
                'brew-code': 'rgba(0, 0, 0, 0.3)',
                'brew-border': 'rgba(255, 255, 255, 0.08)'
            },
            height: {
                '(screen-40)': 'calc(100vh - 20rem)'
            },
            maxHeight: {
                '(screen-40)': 'calc(100vh - 40rem)'
            },
            minHeight: {
                '100px': '100px'
            }
        }
    },
    variants: {
        extend: { opacity: ['disabled'] }
    },
    plugins: []
}
