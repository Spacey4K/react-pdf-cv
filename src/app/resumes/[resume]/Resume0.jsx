'use client';

import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

import { PhoneIcon, MailIcon, WebIcon, HomeIcon, EducationIcon, ExperienceIcon, LocationIcon } from '../../components/Icons';
import { Txt, Bold, Title, formatDate, parseHtml } from '../../components/Common';

import tw from '../../components/tw';

import u from '../../data/user.json';
const FULL_NAME = u.profileInfo.name + ' ' + u.profileInfo.lastName;
const ELEMENT_STYLE = tw("border-b border-gray-400 py-5");

const Header = () => (
	<View style={tw("flex-row")}>
		<View style={tw("flex-col grow")}>
			<View style={tw("grow")}>
				<Text style={[tw("tracking-wider font-lato"), { fontSize: 30 }]}>{u.profileInfo.name}</Text>
				<Text style={[tw("tracking-wider font-lato-bold"), { fontSize: 30 }]}>{u.profileInfo.lastName}</Text>
				<Text style={tw("text-sm my-2 uppercase")}>{u.profileInfo.profesisonalTitle}</Text>
			</View>
			<View style={tw("w-16 border-gray-400 border-b")} />
		</View>
		<Image style={tw("object-cover w-44 h-44")} src="/img/person.jpg" />
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
		<View style={tw("flex-col gap-2")}>
			{u.skillsInfo.items.map((skill) => <Txt key={skill.id}>• {skill.name}</Txt>)}
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
		<View style={tw("flex-row gap-2")}>
			<ExperienceIcon />
			<Title>{u.workInfo.title}</Title>
		</View>
		<View style={tw("flex-col gap-3")}>
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
			<Page size="A4" style={tw("p-10 text-gray-700")}>
				<Header />
				<View style={tw("flex-row pt-10")}>
					<View style={tw("w-[65%] border-r border-gray-400 pr-10")}>

						<Experience />
						<Education />

					</View>
					<View style={tw("w-[35%] pl-10")}>

						<Profile />
						<Skills />
						<References />
						<Contact />

					</View>
				</View>
			</Page>
		</Document >
	);
}