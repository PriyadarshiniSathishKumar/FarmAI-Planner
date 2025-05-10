
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Earth tone colors
				"earth": {
					"50": "#F2FCE2",
					"100": "#E7F8C3",
					"200": "#D4F19A",
					"300": "#C0E972",
					"400": "#AAE049",
					"500": "#90CE28",
					"600": "#72A420",
					"700": "#537919",
					"800": "#354F11",
					"900": "#172608",
				},
				"soil": {
					"50": "#FEF7CD",
					"100": "#FDEE9B",
					"200": "#FCE569",
					"300": "#FBDD37",
					"400": "#FAD605",
					"500": "#C8AB04",
					"600": "#967F03",
					"700": "#645402",
					"800": "#322A01",
					"900": "#1A1501",
				},
				"clay": {
					"50": "#FEC6A1",
					"100": "#FEB989",
					"200": "#FE9F56",
					"300": "#FE8522",
					"400": "#EF6A01",
					"500": "#BD5401",
					"600": "#8B3D01",
					"700": "#5A2700",
					"800": "#281200",
					"900": "#160900",
				},
				"stone": {
					"50": "#F1F0FB",
					"100": "#E3E0F7",
					"200": "#C7C2EE",
					"300": "#ABA3E6",
					"400": "#8F85DD",
					"500": "#7366D5",
					"600": "#4F3EC9",
					"700": "#3F32A1",
					"800": "#2F2578",
					"900": "#1F194F",
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'plant-grow': {
					'0%': {
						transform: 'scaleY(0.1)',
						opacity: '0.3',
					},
					'100%': {
						transform: 'scaleY(1)',
						opacity: '1',
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					}
				},
				'pulse-gentle': {
					'0%, 100%': {
						opacity: '1',
					},
					'50%': {
						opacity: '0.7',
					}
				},
				'rain-drop': {
					'0%': {
						transform: 'translateY(-10px)',
						opacity: '0',
					},
					'70%': {
						opacity: '1',
					},
					'100%': {
						transform: 'translateY(20px)',
						opacity: '0',
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'plant-grow': 'plant-grow 1.5s ease-out forwards',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'pulse-gentle': 'pulse-gentle 3s infinite ease-in-out',
				'rain-drop': 'rain-drop 1.5s infinite ease-in-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
