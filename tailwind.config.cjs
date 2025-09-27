module.exports = {
content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
theme: {
extend: {
colors: {
safariOrange: '#F28C28',
safariGreen: '#1B5E20',
darkFooter: '#2D1F1B'
},
borderRadius: {
'xl-2': '14px'
},
boxShadow: {
'soft': '0 8px 20px rgba(0,0,0,0.08)'
}
}
},
plugins: []
}