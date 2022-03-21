import { createIcon } from "../createIcon";
import { createIconMeta } from "../createIconMeta";

export const FacebookIconMeta = createIconMeta({
	title: 'Facebook',
	desc: 'Facebook',
	url: '',
})

export const FacebookIcon = createIcon({
	displayName: 'FacebookIcon',
	viewBox: '0 0 23 23',
	path: [
		<path key={0} d="M22.8036 11.4004C22.8036 5.32525 17.8787 0.400391 11.8036 0.400391C5.72845 0.400391 0.803589 5.32525 0.803589 11.4004C0.803589 16.8907 4.82611 21.4415 10.0848 22.2668V14.5801H7.29187V11.4004H10.0848V8.97696C10.0848 6.22008 11.7271 4.69727 14.2397 4.69727C15.4428 4.69727 16.702 4.91211 16.702 4.91211V7.61914H15.315C13.9486 7.61914 13.5223 8.46713 13.5223 9.33789V11.4004H16.5731L16.0854 14.5801H13.5223V22.2668C18.7811 21.4415 22.8036 16.8907 22.8036 11.4004Z" fill="currentColor"/>,
		<path key={1} d="M16.0854 14.5801L16.5731 11.4004H13.5223V9.33789C13.5223 8.46799 13.9486 7.61914 15.315 7.61914H16.702V4.91211C16.702 4.91211 15.4433 4.69727 14.2397 4.69727C11.7271 4.69727 10.0848 6.22008 10.0848 8.97695V11.4004H7.29187V14.5801H10.0848V22.2668C11.2237 22.4449 12.3834 22.4449 13.5223 22.2668V14.5801H16.0854Z" fill="white"/>,
	],
})