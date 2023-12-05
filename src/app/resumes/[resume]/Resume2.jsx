'use client';

import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

import { PhoneIcon, MailIcon, WebIcon, HomeIcon, LocationIcon, CircleIconWrapper } from '../../components/Icons';
import { Txt, Bold, Title, formatDate, parseHtml } from '../../components/Common';

import tw from '../../components/tw';

import u from '../../data/user.json';
const FULL_NAME = u.profileInfo.name + ' ' + u.profileInfo.lastName;
const ELEMENT_STYLE = tw("border-b border-gray-400 py-5");

const Header = () => (
	<View style={tw("flex-col")}>
		<View style={tw("flex-row")}>
			<View style={tw("flex-col grow")}>
				<View style={tw("pt-10")}>
					<Text style={[tw("tracking-wider font-lato"), { fontSize: 30 }]}>{u.profileInfo.name} {u.profileInfo.lastName}</Text>
					<Text style={tw("text-sm my-2 uppercase")}>{u.profileInfo.profesisonalTitle}</Text>
				</View>
				<View style={tw("w-16 border-accent border-b my-5")} />
			</View>
			<View style={tw("flex items-center")}>
				<View style={tw("bg-accent h-16 w-10 absolute")}></View>
				<Image style={tw("object-cover w-32 h-32 rounded-full mt-10")} src="/img/person.jpg" />
			</View>
		</View>
		<View>
			<Title>About me</Title>
			<Txt twStyle="mt-2 leading-6">{u.profileInfo.aboutMe}</Txt>
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
					<CircleIconWrapper>
						{{
							email: <MailIcon twColor="text-white" />,
							phone: <PhoneIcon twColor="text-white" />,
							website: <WebIcon twColor="text-white" />,
							other: <HomeIcon twColor="text-white" />,
						}[contact.type]}
					</CircleIconWrapper>
					<Txt>{contact.value}</Txt>
				</View>
			)}
		</View>
	</View>
);

const Education = () => (
	<View style={ELEMENT_STYLE}>
		<Title>{u.educationInfo.title}</Title>
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
		<View style={tw("flex-col gap-2")}>
			{u.workInfo.items.map((work) =>
				<View key={work.id} style={tw("flex-col gap-2")}>
					<View style={tw("flex-row")}>
						<View style={tw("grow")}>
							<Bold>{work.position}</Bold>
						</View>
						<View style={tw("flex-row gap-1 items-center")}>
							<LocationIcon />
							<Txt>{work.location}</Txt>
						</View>
					</View>
					<View style={tw("font-lato-italic")}>
						<Txt>{work.employer}</Txt>
						<Txt>{work.startDate} - {work.endDate}</Txt>
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
			<Page size="A4" style={tw("px-10 text-gray-700")}>
				<Header />
				<View style={tw("flex-row border-t border-gray-400 mt-10")}>
					<View style={tw("w-[35%] border-r border-gray-400 pr-10")}>

						<Profile />
						<Skills />
						<Contact />
						<References />

					</View>
					<View style={tw("w-[65%] border-gray-400 pl-10")}>

						<Experience />
						<Education />

					</View>
				</View>
			</Page>
		</Document >
	);
};;;;