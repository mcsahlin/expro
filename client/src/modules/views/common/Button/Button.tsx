// Code Generated with love
// Template: tailwindFunctionalComponentTemplate

import { tv } from 'tailwind-variants';

export const baseButton = tv({
	base: 'cursor-pointer text-white font-bold shadow-md hover:scale-[1.2] rounded-full px-5 py-2',
	variants: {
		size: {
			sm: 'text-sm py-1 px-3',
			md: 'text-md py-2 px-4',
			lg: 'text-lg py-3 px-5',
			xl: 'text-xl py-4 px-6',
			xxl: 'text-2xl py-5 px-7',
		},
		vPadding: {
			// vertical padding
			none: 'py-0',
			xs: 'py-1',
			sm: 'py-2',
			md: 'py-3',
			lg: 'py-4',
			xl: 'py-5',
			xxl: 'py-6',
		},
		hPadding: {
			// horizontal padding
			none: 'px-0',
			xs: 'px-1',
			sm: 'px-2',
			md: 'px-3',
			lg: 'px-4',
			xl: 'px-5',
			xxl: 'px-6',
		},
		hSpace: {
			// horizontal margin
			none: 'mx-0',
			xs: 'mx-1',
			sm: 'mx-2',
			md: 'mx-3',
			lg: 'mx-4',
			xl: 'mx-5',
			xxl: 'mx-6',
		},
		vSpace: {
			// vertical margin
			none: 'my-0',
			xs: 'my-1',
			sm: 'my-2',
			md: 'my-3',
			lg: 'my-4',
			xl: 'my-5',
			xxl: 'my-6',
		},
		shadow: {
			none: 'shadow-none',
			sm: 'shadow-sm',
			md: 'shadow-md',
			lg: 'shadow-lg',
			xl: 'shadow-xl',
			xxl: 'shadow-2xl',
		},
		rounded: {
			none: 'rounded-none',
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			xl: 'rounded-xl',
			xxl: 'rounded-2xl',
			full: 'rounded-full',
		},
		color: {
			primary: 'bg-gradient-to-bl from-purple-500 to-purple-800',
			secondary: 'bg-gradient-to-bl from-blue-500 to-blue-800',
			tertiary: 'bg-gradient-to-bl from-gray-500 to-gray-800',
		},
		align: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right',
			top: 'align-top',
			bottom: 'align-bottom',
		},
		behavior: {
			none: 'cursor-default',
			pointer: 'cursor-pointer',
			wait: 'cursor-wait',
			text: 'cursor-text',
			move: 'cursor-move',
			notAllowed: 'cursor-not-allowed',
			zoomIn: 'cursor-zoom-in',
			zoomOut: 'cursor-zoom-out',
			grab: 'cursor-grab',
			grabbing: 'cursor-grabbing',
			block: 'w-full',
		},
	},
});
