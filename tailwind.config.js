module.exports = {
    purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        minHeight: {
            0: '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            full: '100%'
        },
        extend: {
            colors: {
                'brew-default': '#2e2a24',
                'brew-primary': '#f9d094',
                'brew-code': 'rgba(0, 0, 0, 0.3)'
            },
            height: {
                '(screen-40)': 'calc(100vh - 16rem)'
            },
            maxHeight: {
                '(screen-40)': 'calc(100vh - 40rem)'
            }
        }
    },
    variants: {
        extend: { opacity: ['disabled'] }
    },
    plugins: []
}
