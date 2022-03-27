const text: StyleConfig = {
	baseStyle: {
		color: 'greyViolet.600'
	},
	variants: {
		subtitle: {
			fontSize: 'xl', 
			fontWeight: 'normal',
			lineHeight: '2ch'
		},
		body: {
			fontSize: 'lg', 
			fontWeight: 'normal',
			lineHeight: '3ch'
		},
		body2: {
			fontSize: 'md', 
			fontWeight: 'normal',
			lineHeight: '3ch'
		},
		caption: {
			fontSize: '.875rem', 
			fontWeight: 'medium', 
			textTransform: 'uppercase', 
			color: 'gray.700', 
			letterSpacing: '.15rem'
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
