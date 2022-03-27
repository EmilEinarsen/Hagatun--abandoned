const heading: StyleConfig = {
	baseStyle: {
		color: 'violet.600',
	},
	variants: {
		h1: {
			fontSize: '3.5rem', 
			fontWeight: 'bold', 
			marginTop: '1.5rem',
			lineHeight: '1.9ch',
			letterSpacing: '.15rem',
		},
		h2: {
			fontSize: '5xl', 
			fontWeight: 'medium', 
			marginTop: '1.5rem', 
			letterSpacing: '.15rem', 
			lineHeight: '1.9ch', 
			paddingBottom: '0.25rem',
		},
		h3: {
			fontSize: '4xl', 
			fontWeight: 'medium', 
			marginTop: '1.5rem',
			letterSpacing: '.15rem',
			lineHeight: '1.9ch', 
		},
		h4: {
			fontSize: '3xl', 
			fontWeight: 'medium', 
			marginTop: '1.5rem',
			letterSpacing: '.15rem',
			lineHeight: '1.9ch', 
		},
		h5: {
			fontSize: '2xl', 
			fontWeight: 'medium', 
			marginTop: '1.5rem',
			letterSpacing: '.15rem',
			lineHeight: '1.9ch', 
		},
		h6: {
			fontSize: 'xl', 
			fontWeight: 'medium', 
			marginTop: '1.5rem',
			letterSpacing: '.15rem',
			lineHeight: '1.9ch', 
		},
	},
} as const

export default heading
