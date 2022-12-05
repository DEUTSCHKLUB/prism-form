module.exports = {
    content: [
      "./public/index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        fontFamily: {
            'sans': ['Orbitron', 'sans-serif'],
            'serif': ['Orbitron', 'sans-serif'],
            'mono': ['Orbitron', 'sans-serif'],
            'display': ['Orbitron', 'sans-serif'],
            'body': ['Orbitron', 'sans-serif'],
        },
      extend: {
        animation: {
            'spin-slow': 'spin 3s linear infinite',
        },
        colors:{
            'red': '#e63946',
            'blue': {
                'lightest': '#f1faee',
                'light': '#a8dadc',
                DEFAULT: '#457b9d',
                'dark': '#1d3557'
            },
            'yellow': {
                'light': '#dbd9a9',
                DEFUALT: '#e5ac3c'
            },
            'green': {
                DEFAULT: '#21a53d',
                'dark': '#1c8c34',
                'darkest': '#1d5634'
            },
            'black': '#000000',
            'white': '#FFFFFF'
        },
        height:{
            '600': '600px'
        },
        minHeight:{
            '600': '600px',
            '850': '850px',
            '1000': '1000px'
        },
        maxWidth:{
            '280': '280px'
        },
        spacing:{
            'full': '100%',
            'half': '50%'
        }
      },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
} 