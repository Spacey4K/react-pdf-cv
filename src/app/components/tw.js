import { createTw } from "react-pdf-tailwind";
import { Font } from "@react-pdf/renderer";

Font.register({
	family: 'Lato',
	src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
	family: 'Lato Italic',
	src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
	family: 'Lato Bold',
	src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

Font.register({
	family: 'Open Sans',
	src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

const tw = createTw({
	theme: {
		fontFamily: {
			sans: ['Open Sans'],
			lato: ['Lato'],
			'lato-bold': ['Lato Bold'],
			'lato-italic': ['Lato Italic'],
		},
		extend: {
			colors: {
				'accent': '#0c85b0',
				'secondary': '#f3f4f6',
			}
		}
	},
});

export default tw;