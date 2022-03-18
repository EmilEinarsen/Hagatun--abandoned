const heading: StyleConfig = {
	baseStyle: {
		color: 'violet.600'
	},
	variants: {
		h1: {
			fontSize: '3.5rem', 
			fontWeight: 'bold', 
			marginTop: '1.5rem',
			lineHeight: '4.5rem',
			letterSpacing: '.15rem',
		},
		h2: {
			fontSize: '5xl', 
			fontWeight: 'medium', 
			marginTop: '2.5rem', 
			letterSpacing: '.15rem', 
			lineHeight: '2.25rem', 
			paddingBottom: '0.25rem',
		},
		h3: {
			fontSize: '4xl', 
			fontWeight: 'medium', 
			marginTop: '2rem',
			letterSpacing: '.15rem',
			lineHeight: '2rem', 
		},
		h4: {
			fontSize: '3xl', 
			fontWeight: 'medium', 
			marginTop: '2rem',
			letterSpacing: '.15rem',
			lineHeight: '1.75rem', 
		},
		h5: {
			fontSize: '2xl', 
			fontWeight: 'medium', 
			marginTop: '2rem',
			letterSpacing: '.15rem',
			lineHeight: '1.75rem', 
		},
		h6: {
			fontSize: 'xl', 
			fontWeight: 'medium', 
			marginTop: '2rem',
			letterSpacing: '.15rem',
			lineHeight: '1.75rem', 
		},
	},
} as const

export default heading
