'use client';

import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

import { PhoneIcon, MailIcon, WebIcon, HomeIcon, EducationIcon, ExperienceIcon, LocationIcon } from '../../components/Icons';
import { Txt, Bold, Title, formatDate, parseHtml } from '../../components/Common';

import tw from '../../components/tw';

import u from '../../data/user.json';
const FULL_NAME = u.profileInfo.name + ' ' + u.profileInfo.lastName;
const ELEMENT_STYLE = tw("");

const Header = () => (
	<View style={tw("flex-row justify-between bg-gray-800 text-white px-10 pb-10 items-center")}>
		<View style={tw("pt-10")}>
			<Text style={[tw("tracking-wider font-lato uppercase"), { fontSize: 30 }]}>{u.profileInfo.name}</Text>
			<Text style={[tw("tracking-wider font-lato-bold uppercase"), { fontSize: 30 }]}>{u.profileInfo.lastName}</Text>
			<Text style={tw("text-sm my-2 uppercase")}>{u.profileInfo.profesisonalTitle}</Text>
		</View>
		<View style={tw("bg-accent rounded-b-full p-2")}>
			<Image style={tw("object-cover w-44 h-44 rounded-full mt-10")} src="/img/person.jpg" />
		</View>
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
								.map((s, i) => <View key={`skill_${i}`} style={tw("h-2 w-2 rounded-full " + (i < skill.level ? 'bg-accent' : 'bg-gray-300'))} />)}
						</View>
					}
				</View>
			)}
		</View>
	</View>
);

const References = () => (
	<View style={ELEMENT_STYLE}>
		<Title>{u.referenceInfo.title}</Title>
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
	<View style={ELEMENT_STYLE}>
		<Title>{u.contactInfo.title}</Title>
		<View style={tw("flex-col gap-1")}>
			{u.contactInfo.items.map((contact) =>
				<View key={contact.id} style={tw("flex-row gap-1 items-center")}>
					{{
						email: <MailIcon />,
						phone: <PhoneIcon />,
						website: <WebIcon />,
						other: <HomeIcon />,
					}[contact.type]}
					<Txt>{contact.value}</Txt>
				</View>
			)}
		</View>
	</View>
);

const Education = () => (
	<View style={ELEMENT_STYLE}>
		<View style={tw("flex-row gap-2")}>
			<EducationIcon />
			<Title>{u.educationInfo.title}</Title>
		</View>
		<View style={tw("flex-col gap-2")}>
			{u.educationInfo.items.map((edu) =>
				<View key={edu.id}>
					<Bold>{edu.title}</Bold>
					<Txt>{edu.institution}</Txt>
					<Txt>{edu.startDate} - {edu.endDate}</Txt>
					<Txt>{edu.description}</Txt>
				</View>
			)}
		</View>
	</View>
);

const Experience = () => (
	<View style={ELEMENT_STYLE}>
		<Title>{u.workInfo.title}</Title>
		<View style={tw("flex-col")}>
			{u.workInfo.items.map((work) =>
				<View key={work.id} style={tw("flex-row")}>
					<View style={tw("flex-col gap-1 border-r border-gray-700 w-[30%] py-2 pr-5")}>
						<Bold>{work.position}</Bold>
						<Txt twStyle="bg-gray-800 text-white text-center p-1">{work.startDate} - {work.endDate}</Txt>
					</View>
					<View style={tw("flex-col gap-1 w-[70%] py-2 pl-5")}>
						<View style={tw("flex-row")}>
							<Bold twStyle="grow">{work.employer}</Bold>
							<Txt twStyle="font-lato-italic">{work.location}</Txt>
						</View>
						<Txt twStyle="text-justify leading-6">{parseHtml(work.description)}</Txt>
					</View>
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
			<Page size="A4" style={tw("text-gray-700 flex-col gap-10 pb-10")}>
				<Header />

				<View style={tw("flex-row border-b border-gray-400 mx-10 pb-10")}>
					<View style={tw("flex-row")}>
						<View style={tw("w-[30%]")}>
							<Profile />
						</View>
						<View style={tw("w-[70%] pl-10")}>
							<Title>About me</Title>
							<Txt twStyle="mt-2 leading-6">{u.profileInfo.aboutMe}</Txt>
						</View>
					</View>
				</View>

				<View style={tw("px-10 pb-10 border-b border-gray-400")}>
					<Experience />
				</View>

				<View style={tw("flex-row px-10 pb-10 border-b border-gray-400")}>
					<View style={tw("w-[30%]")}>
						<Skills />
					</View>
					<View style={tw("w-[70%] pl-10")}>
						<Education />
					</View>
				</View>

			</Page>
		</Document >
	);
}