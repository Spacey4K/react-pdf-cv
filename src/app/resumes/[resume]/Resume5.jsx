'use client';

import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

import { PhoneIcon, MailIcon, WebIcon, HomeIcon, EducationIcon, ExperienceIcon, LocationIcon, UserIcon } from '../../components/Icons';
import { Txt, Bold, Title, formatDate, parseHtml } from '../../components/Common';
import tw from '../../components/tw';

import u from '../../data/user.json';

const FULL_NAME = u.profileInfo.name + ' ' + u.profileInfo.lastName;
const ELEMENT_STYLE = tw("py-5");

const Header = () => (
	<View style={tw("bg-accent flex-col items-center p-5 text-white")}>
		<Image style={tw("object-cover rounded-full w-36 h-36")} src="/img/person.jpg" />
		<Text style={[tw("tracking-wider font-lato-bold"), { fontSize: 30 }]}>{u.profileInfo.name}</Text>
		<Text style={[tw("tracking-wider font-lato"), { fontSize: 30 }]}>{u.profileInfo.lastName}</Text>
		<Text style={tw("text-center text-sm my-2 uppercase")}>{u.profileInfo.profesisonalTitle}</Text>
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
			{u.skillsInfo.items.sort((a, b) => b.level - a.level).map((skill) =>
				<View key={skill.id} style={tw("flex-row gap-1")}>
					<Txt twStyle="grow w-full">{skill.name}</Txt>
					{skill.level &&
						<View style={tw("flex-row items-center")}>
							{Array.apply(null, Array(10))
								.map((s, i) => <View key={`skill_${i}`} style={tw("h-2 w-5 " + (i < skill.level ? 'bg-accent' : 'bg-gray-300'))} />)}
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
	<View style={tw("pt-10 mt-5 border-t border-gray-400")}>
		<Title>{u.contactInfo.title}</Title>
		<View style={tw("flex-row justify-between")}>
			{u.contactInfo.items.map((contact, i) =>
				<View style={tw("flex-col gap-1")}>
					<Bold twStyle="uppercase">{contact.type}</Bold>
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
		<View style={tw("flex-col gap-5 pl-5 border-l border-gray-400")}>
			{u.workInfo.items.map((work) =>
				<View key={work.id} style={tw("flex-col gap-2")}>
					<View style={tw("flex-row")}>
						<View style={tw("grow flex-row items-center")}>
							<View style={tw("absolute ml-[-20] bg-accent rounded-full w-3 h-3")} />
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
			<Page size="A4" style={tw("px-10 pb-10 text-gray-700")}>
				<View style={tw("flex-row")}>
					<View style={tw("w-[35%] flex-col gap-2")}>
						<Header />
						<View>
							<View style={tw("bg-secondary px-5")}>

								<Profile />
								<References />

							</View>
						</View>
					</View>
					<View style={tw("w-[65%] pl-10 pt-10")}>
						<View>
							<Title>About me</Title>
							<Txt twStyle="mt-2 leading-6">{u.profileInfo.aboutMe}</Txt>
						</View>

						<Skills />
						<Experience />
						<Education />

					</View>
				</View>
				<View>
					<Contact />
				</View>
			</Page>
		</Document>
	);
}