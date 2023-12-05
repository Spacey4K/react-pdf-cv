import { Text } from "@react-pdf/renderer";
import u from '../data/user.json';

import tw from './tw';

const FONT_SIZE = 10;

const Txt = ({ twStyle, children }) => {
	twStyle = u.resumeOptions.color.textColor + ' ' + (twStyle ?? '');
	return (
		<Text style={[tw(twStyle), { fontSize: FONT_SIZE }]}>{children}</Text>
	);
};

const Bold = ({ twStyle, children }) => {
	twStyle = "font-lato-bold uppercase " + (twStyle ?? '');
	return (
		<Text style={[tw(twStyle), { fontSize: FONT_SIZE }]}>{children}</Text>
	);
};

const Title = ({ twStyle, children }) => {
	twStyle = "font-lato-bold uppercase tracking-widest mb-3 " + (twStyle ?? '');
	return (
		<Text style={[tw(twStyle), { fontSize: FONT_SIZE }]}>{children}</Text>
	);
};

function formatDate(date) {
	date = new Date(date);
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return `${date.getDate()} ${months[date.getMonth()].toUpperCase()} ${date.getFullYear()}`;
}

function parseHtml(html) {
	return html
		.replace(/<br>|(<\/li><li>)/g, '\n')
		.replace(/<\/?ul>|<\/?li>/g, '')
		;
}

export { Txt, Bold, Title, formatDate, parseHtml };