'use client';

import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

import { PhoneIcon, MailIcon, WebIcon, HomeIcon, LocationIcon, CircleIconWrapper } from '../../components/Icons';
import { Txt, Bold, Title, formatDate, parseHtml } from '../../components/Common';

import tw from '../../components/tw';

import u from '../../data/user.json';
const FULL_NAME = u.profileInfo.name + ' ' + u.profileInfo.lastName;
const ELEMENT_STYLE = tw("");

const Header = () => (
	<View style={tw("flex-col")}>
		<View style={tw("flex-col items-center")}>
			<Image style={tw("object-cover w-32 h-32 rounded-full")} src="/img/person.jpg" />
			<View style={tw("flex-row gap-2")}>
				<Text style={[tw("tracking-wider font-lato-bold text-accent"), { fontSize: 30 }]}>{u.profileInfo.name}</Text>
				<Text style={[tw("tracking-wider font-lato"), { fontSize: 30 }]}>{u.profileInfo.lastName}</Text>
			</View>
			<Text style={tw("text-sm my-2 uppercase")}>{u.profileInfo.profesisonalTitle}</Text>
		</View>
		<Txt twStyle="mt-2 leading-6 text-justify">{u.profileInfo.aboutMe}</Txt>
	</View>
);

const Profile = () => (
	<View style={ELEMENT_STYLE}>
		<Title>{u.profileInfo.title}</Title>
		<View style={tw("flex-col gap-1")}>
			<View style={tw("flex-row gap-2")}>
				<Bold twStyle="grow">Name</Bold>
				<Txt>{FULL_NAME}</Txt>
			</View>
			<View style={tw("flex-row gap-2")}>
				<Bold twStyle="grow">Birthday</Bold>
				<Txt>{formatDate(u.profileInfo.dateOfBirth)}</Txt>
			</View>
			<View style={tw("flex-row gap-2")}>
				<Bold twStyle="grow">Relationship</Bold>
				<Txt>{u.profileInfo.maritalStatus}</Txt>
			</View>
			<View style={tw("flex-row gap-2")}>
				<Bold twStyle="grow">National</Bold>
				<Txt>{u.profileInfo.nationality}</Txt>
			</View>
		</View>
	</View >
);

const Skills = () => (
	<View style={ELEMENT_STYLE}>
		<Title>{u.skillsInfo.title}</Title>
		<View style={tw("flex-col gap-3")}>
			{u.skillsInfo.items.sort((a, b) => b.level - a.level).map((skill) =>
				<View key={skill.id} style={tw("flex-col gap-1")}>
					<Txt>{skill.name}</Txt>
					{skill.level &&
						<View style={tw("flex-row gap-1 items-center")}>
							{Array.apply(null, Array(10))
								.map((s, i) => <View key={`skill_${i}`} style={tw("h-2 w-5 " + (i < skill.level ? 'bg-accent' : 'bg-gray-300'))} />)}
						</View>
					}
				</View>
			)}
		</View>
	</View >
);

const References = () => (
	<View style={ELEMENT_STYLE}>
		<View style={tw("text-center absolute mt-[-25] flex-col items-center text-center w-full")}>
			<Title twStyle="bg-accent rounded-full py-1 px-2 text-white">{u.referenceInfo.title}</Title>
		</View>
		<View style={tw("flex-col gap-2")}>
			{u.referenceInfo.items.map((ref) =>
				<View key={ref.id} style={tw("my-3")}>
					<Bold>{ref.name}</Bold>
					<Txt>{ref.title}</Txt>
					<Text><Bold>Phone: </Bold><Txt>{ref.phone}</Txt></Text>
					<Text><Bold>Email: </Bold><Txt>{ref.email}</Txt></Text>
				</View>
			)}
		</View>
	</View>
);

const Contact = () => (
	<View style={tw("pt-10 mt-5 border-t border-gray-400")}>
		<Title>{u.contactInfo.title}</Title>
		<View style={tw("flex-row justify-between")}>
			{u.contactInfo.items.map((contact, i) =>
				<View style={tw("flex-col gap-1")}>
					<Bold twStyle="uppercase text-accent">{contact.type}</Bold>
					<Txt>{contact.value}</Txt>
				</View>
			)}
		</View>
	</View>
);

const Education = () => (
	<View style={ELEMENT_STYLE}>
		<View style={tw("text-center absolute mt-[-25] flex-col items-center text-center w-full")}>
			<Title twStyle="bg-accent rounded-full py-1 px-2 text-white">{u.educationInfo.title}</Title>
		</View>
		<View style={tw("flex-col gap-2")}>
			{u.educationInfo.items.map((edu) =>
				<View key={edu.id} style={tw("flex-col gap-2")}>
					<View>
						<Bold>{edu.title}</Bold>
						<Txt>{edu.institution}</Txt>
						<Txt twStyle="font-lato-italic">{edu.startDate} - {edu.endDate}</Txt>
					</View>
					<Txt twStyle="text-justify leading-6">{edu.description}</Txt>
				</View>
			)}
		</View>
	</View>
);

const Experience = () => (
	<View style={ELEMENT_STYLE}>
		<View style={tw("text-center absolute mt-[-25] flex-col items-center text-center w-full")}>
			<Title twStyle="bg-accent rounded-full py-1 px-2 text-white">{u.workInfo.title}</Title>
		</View>
		<View style={tw("flex-col gap-2")}>
			{u.workInfo.items.map((work) =>
				<View key={work.id} style={tw("flex-col gap-2")}>
					<View style={tw("flex-row")}>
						<Bold twStyle="grow">{work.position}</Bold>
					</View>
					<View style={tw("")}>
						<Txt>{work.employer}</Txt>
						<Txt>{work.location}</Txt>
						<Txt twStyle="font-lato-italic">{work.startDate} - {work.endDate}</Txt>
					</View>
					<Txt twStyle="text-justify leading-6">{parseHtml(work.description)}</Txt>
				</View>
			)}
		</View>
	</View>
);

export default function Resume() {
	return (
		<Document
			author={FULL_NAME}
			title="Resume"
		>
			<Page size="A4" style={tw("p-10 text-gray-700")}>
				<Header />

				<View style={tw("flex-row gap-10 py-10")}>
					<View style={tw("w-full")}>
						<View style={tw("border border-gray-400 w-full p-5")}>
							<Experience />
						</View>
					</View>
					<View style={tw("w-full flex-col gap-10")}>
						<View style={tw("border border-gray-400 w-full p-5")}>
							<Education />
						</View>
						<View style={tw("border border-gray-400 w-full p-5")}>
							<References />
						</View>
					</View>
				</View>

				<Contact />

			</Page>
		</Document>
	);
};