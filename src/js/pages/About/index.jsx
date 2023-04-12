import React, { useRef } from 'react';
import Intro from './components/Intro';
import Members from './components/Members';
import Gallery from './components/Gallery';
import Partners from './components/Partners';

import members_0 from '../../../assets/images/members-0.png';
import members_1 from '../../../assets/images/members-1.png';
import members_2 from '../../../assets/images/members-2.png';
import members_3 from '../../../assets/images/members-3.png';
import members_4 from '../../../assets/images/members-4.png';
import members_5 from '../../../assets/images/members-5.png';
import members_6 from '../../../assets/images/members-6.png';
import members_7 from '../../../assets/images/members-7.png';
import members_8 from '../../../assets/images/members-8.png';
import members_9 from '../../../assets/images/members-9.png';
import members_10 from '../../../assets/images/members-10.png';
import members_11 from '../../../assets/images/members-11.png';
import members_12 from '../../../assets/images/members-12.png';
import members_13 from '../../../assets/images/members-13.png';
import members_14 from '../../../assets/images/members-14.png';
import members_15 from '../../../assets/images/members-15.png';
import Header from '../../components/Header';

const About = () => {
	const data_1 = {
		title: 'Advisory board members',
		subtitle: 'The best and brightest innovators advise our leaders.',
		members: [
			{
				photo: members_1,
				name: 'Prof. Joe Hellerstein',
				description: 'Joseph M. Hellerstein is the Jim Gray Professorof Computer Science at the University of California, Berkeley, where has taught and led research teams in data systems since 1995.',
				linkedin: 'https://www.linkedin.com/in/joehellerstein/'
			},
			{
				photo: members_2,
				name: 'Dr. Ben Lorica',
				description: 'Ben Lorica is a Principal at Gradient Flowand the editor of the widely-read Gradient Flow Newsletter. As a seasoned data scientist, he holds co-chair positions.',
				linkedin: 'https://www.linkedin.com/in/benlorica/'
			},
			{
				photo: members_5,
				name: 'Sethu Balan Raman',
				description: 'Sethu Balan Raman was until recently a senior director at Apple in charge of all of the deep learning infrastructure team, leading hundreds of engineers. Prior to that he was VP Engineering of Turi, acquired by Apple.',
				linkedin: 'https://www.linkedin.com/in/balansethuraman/'
			},
			{
				photo: members_3,
				name: 'Vijay Sharma',
				description: 'Vijay Sharma is a seasoned entrepreneur based in Bangalore and drives Visual Layer engagements in India.',
				linkedin: 'https://www.linkedin.com/in/vijaysw/'
			}
		]
	};
	const data_2 = {
		title: 'Leadership',
		members: [
			{
				photo: members_4,
				name: 'Dr. Danny Bickson',
				post: 'Co-founder & CEO',
				description: 'Former Co-founder and VP EMEA of Turi (acquired for $200M by Apple). CMU Researcher. Sr. Mgr at Apple.',
				linkedin: 'https://www.linkedin.com/in/dr-danny-bickson-835b32/'
			},
			{
				photo: members_6,
				name: 'Dr. Amir Alush',
				post: 'Co-founder & CTO',
				description: 'Former Co-founder and CTO of Brodmann17. Highly experienced in building CV/AI Groups and leading into production.',
				linkedin: 'https://www.linkedin.com/in/amiralush/'
			},
			{
				photo: members_7,
				name: 'Prof. Carlos Guestrin',
				post: 'Co-founder & CSO',
				description: 'Stanford Prof, Co-founder and CEO of Turi (acquired for $200M by Apple). Sr. Dir. at Apple. Deep Learning Infra Team Pioneer.',
				linkedin: 'https://www.linkedin.com/in/carlos-guestrin-5352a869/'
			},
			{
				photo: members_8,
				name: 'Tal Weber',
				post: 'CRO',
				description: 'Tal Weber has 25+ years of Corporate Development experience and served in C-Level positions in several global entities.',
				linkedin: 'https://www.linkedin.com/in/talweber/'
			}
		]
	};
	const data_3 = {
		title: 'Team',
		members: [
			{
				photo: members_9,
				name: 'Amir Markovitz',
				description: 'Sr. Machine Learning Researcher',
				linkedin: 'https://www.linkedin.com/in/amir-markovitz/'
			},
			{
				photo: members_10,
				name: 'Omer Nagar',
				description: 'Machine Learning Researcher',
				linkedin: 'https://www.linkedin.com/in/ovednagar/'
			},
			{
				photo: members_11,
				name: 'Tom Shani',
				description: 'Machine Learning Engineer',
				linkedin: 'https://www.linkedin.com/in/tom-shani-748777252/'
			},
			{
				photo: members_12,
				name: 'Gal Bar Nissan',
				description: 'Lead Full Stack Developer',
				linkedin: 'https://www.linkedin.com/in/gal-bar-nissan-79441056/'
			},
			{
				photo: members_13,
				name: 'Adi Wishnitzer',
				description: 'UI/UX Designer',
				linkedin: 'https://www.linkedin.com/in/adi-wishnitzer/'
			},
			{
				photo: members_14,
				name: 'Dickson Neoh, Ph.D.',
				description: 'Developer Relations Lead',
				linkedin: 'https://www.linkedin.com/in/dickson-neoh'
			},
			{
				photo: members_15,
				name: 'Gagandeep Gambhir',
				description: 'Lead Front End Developer',
				linkedin: 'https://www.linkedin.com/in/gagandeep-gambhir-85a50645/'
			},
			{
				photo: members_0,
				name: 'Ofri Assif',
				description: 'Office Admin',
				linkedin: 'https://www.linkedin.com/in/ofri-assif-0b5b20268/'
			}
		]
	};
	return (
		<>
		<Header />
		<main className="main about">
			<Intro />
			<Members data={data_1} />
			<Members data={data_2} />
			<Members data={data_3} />
			<Gallery />
			<Partners />
		</main>
		</>
	);
};

export default About;
