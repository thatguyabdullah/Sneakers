module.exports = {
    content: [
        "./pages/*.{html,js}",
        "./index.html",
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./components/**/*.{html,js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                // Primary Colors
                primary: {
                    DEFAULT: "#1A1A1A", // gray-900
                    50: "#F8F9FA", // gray-50
                    100: "#F1F3F4", // gray-100
                    200: "#E9ECEF", // gray-200
                    300: "#DEE2E6", // gray-300
                    400: "#CED4DA", // gray-400
                    500: "#ADB5BD", // gray-500
                    600: "#6C757D", // gray-600
                    700: "#495057", // gray-700
                    800: "#343A40", // gray-800
                    900: "#212529", // gray-900
                },
                secondary: {
                    DEFAULT: "#F8F9FA", // gray-50
                },
                accent: {
                    DEFAULT: "#00D4FF", // cyan-400
                    50: "#E6FAFE", // cyan-50
                    100: "#CFFAFE", // cyan-100
                    200: "#A5F3FC", // cyan-200
                    300: "#67E8F9", // cyan-300
                    400: "#22D3EE", // cyan-400
                    500: "#06B6D4", // cyan-500
                    600: "#0891B2", // cyan-600
                    700: "#0E7490", // cyan-700
                    800: "#155E75", // cyan-800
                    900: "#164E63", // cyan-900
                },
                // Background Colors
                background: "#FFFFFF", // white
                surface: "#F1F3F4", // gray-100
                // Text Colors
                text: {
                    primary: "#212529", // gray-800
                    secondary: "#6C757D", // gray-500
                },
                // Status Colors
                success: {
                    DEFAULT: "#00C851", // green-500
                    50: "#F0FDF4", // green-50
                    100: "#DCFCE7", // green-100
                    500: "#22C55E", // green-500
                    600: "#16A34A", // green-600
                },
                warning: {
                    DEFAULT: "#FFB900", // yellow-500
                    50: "#FEFCE8", // yellow-50
                    100: "#FEF3C7", // yellow-100
                    500: "#EAB308", // yellow-500
                    600: "#CA8A04", // yellow-600
                },
                error: {
                    DEFAULT: "#DC3545", // red-600
                    50: "#FEF2F2", // red-50
                    100: "#FEE2E2", // red-100
                    500: "#EF4444", // red-500
                    600: "#DC2626", // red-600
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                inter: ['Inter', 'sans-serif'],
                jetbrains: ['JetBrains Mono', 'monospace'],
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1.2' }],
                '6xl': ['3.75rem', { lineHeight: '1.2' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            boxShadow: {
                'athletic': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'athletic-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'athletic-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            },
            animation: {
                'fade-in': 'fadeIn 300ms ease-out',
                'slide-up': 'slideUp 400ms ease-out',
                'scale-in': 'scaleIn 300ms ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            transitionDuration: {
                '300': '300ms',
                '400': '400ms',
                '600': '600ms',
            },
            transitionTimingFunction: {
                'athletic': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
        },
    },
    plugins: [],
}