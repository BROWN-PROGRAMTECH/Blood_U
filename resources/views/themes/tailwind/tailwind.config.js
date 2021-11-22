module.exports = {
    purge: [
        './**/*.php',
        './*.php',
        './assets/**/*.scss',
        './assets/**/*.js',
      ],
    theme: {
        extend: {
            rotate: {
                '-1': '-1deg',
                '-2': '-2deg',
                '-3': '-3deg',
                '1': '1',
                '2': '2deg',
                '3': '3deg',
            },
            borderRadius: {
                'xl' : '0.8rem',
                'xxl': '1rem',
            },
            height: {
                '1/2': '0.125rem',
                '2/3': '0.1875rem',
            },
            maxHeight: {
                '16': '16rem',
                '20': '20rem',
                '24': '24rem',
                '32': '32rem',
            },
            inset: {
                '1/2': '50%',
            },
            width: {
                '96': '24rem',
                '104': '26rem',
                '128': '32rem',
            },
            transitionDelay: {
                '450': '450ms',
            },
            colors: {
                'wave': {
                    50: '#FEF2F2',
                    100: '#FEE2E2',
                    200: '#FECACA',
                    300: '#FCA5A5',
                    400: '#F87171',
                    500: '#EF4444',
                    600: '#DC2626',
                    700: '#B91C1C',
                    800: '#991B1B',
                    900: '#7F1D1D',
                },
            }
        }
    },
    variants: {
        borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundColor: ['hover', 'group-hover','responsive'],
        textColor: ['group-hover', 'hover'],
        border: ['group-hover'],
        transform: ['group-hover'],
        margin: ['hover', 'responsive'],
        display: ['responsive', 'hover', 'focus'],
        inset: ['responsive', 'group-hover'],
        translate: ['responsive', 'hover', 'group-hover'],
        gridTemplateColumns: ['responsive'],
        height: ['responsive', 'group-hover'],
        scale: ['group-hover', 'responsive'],
        rotate: ['group-hover', 'responsive'],
        container: ['responsive']
    },
    plugins: [
        require('@tailwindcss/custom-forms'),
        require('@tailwindcss/typography')
    ]
}
