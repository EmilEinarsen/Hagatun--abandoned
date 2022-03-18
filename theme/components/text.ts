const text: StyleConfig = {
	baseStyle: {
		color: 'greyViolet.600'
	},
	variants: {
		subtitle: {
			fontSize: 'xl', 
			fontWeight: 'normal'
		},
		body: {
			fontSize: 'lg', 
			fontWeight: 'normal', 
			marginTop: '1.5rem', 
			lineHeight: '1.75rem'
		},
		body2: {
			fontSize: 'md', 
			fontWeight: 'normal',
			lineHeight: '1.75rem'
		},
		caption: {
			fontSize: '.875rem', 
			fontWeight: 'medium', 
			textTransform: 'uppercase', 
			color: 'gray.700', 
			letterSpacing: '.15rem', 
			marginTop: '1rem'
		},
		blockquote: {
			
		},
		naked: {
			fontSize: 'lg', 
			fontWeight: 'normal'
		},
	},
	defaultProps: {
		variant: "body",
	},
} as const

export default text
