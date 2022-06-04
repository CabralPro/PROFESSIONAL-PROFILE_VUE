import Vue from 'vue';
import Component from 'vue-class-component';
import { Skill } from '@/components/custom/SkillCard/_models/skill.model';
import { TextCard } from '@/components/custom/TextCard/_models/text-card.model';
import { Project } from '@/components/custom/ProjectCard/_models/project.model';

@Component({})
export default class HomeView extends Vue {

	textCards: TextCard[] = [
		{
			title: `Hello, welcome! On this site you will know a little about my work!`,
			text: `I'm a software developer, I have a great passion for user interfaces, 
			animations and creating intuitive and dynamic user experiences. I work with 
			front-end, back-end and mobile applications and I'm always up to date on new 
			technologies.`,
			img: `programer3.png`,
			reverse: false
		},
		{
			title: `Excellence and execution of best practices is my goal!`,
			text: `A product needs to be innovative enough to differentiate itself from 
			the rest, but not so innovative that the user doesn't understand! That's why 
			I always deliver an excellent product in terms of code quality, maintainability 
			and UE ... it can save a lot of headaches in the future.`,
			img: `programer2.png`,
			reverse: true
		}
	]

	webSkills: Skill[] = [
		{ title: "Vue", percent: 100, icon: "logos:vue" },
		{ title: "Angular", percent: 100, icon: "logos:angular-icon" },
		{ title: "Vuetify", percent: 100, icon: "logos:vuetifyjs" },
		{ title: "Javascript", percent: 90, icon: "logos:javascript" },
		{ title: "Typescript", percent: 90, icon: "logos:typescript" },
		{ title: "Sass", percent: 85, icon: "logos:sass" },
		{ title: "Angular Material", percent: 85, image: "assets/img/icons/angular-material-logo.svg" },
		{ title: "Bootstrap", percent: 85, icon: "logos:bootstrap" },
		{ title: "BootstrapVue", percent: 85, image: "assets/img/icons/bv.svg", },
	]

	mobileSkills: Skill[] = [
		{ title: "Dart", percent: 70, icon: "logos:dart" },
		{ title: "Flutter", percent: 70, icon: "logos:flutter" },
		{ title: "Android Nativo", percent: 50, icon: "logos:android" }
	]

	backendSkills: Skill[] = [
		{ title: ".Net", percent: 80, icon: "logos:dotnet" },
		{ title: ".Net Core", percent: 100, icon: "cib:dot-net" },
		{ title: "C#", percent: 100, icon: "logos:c-sharp" },
		{ title: "Node", percent: 100, icon: "logos:nodejs" },
		// { title: "Java", percent: 50, icon: "logos:java" },
		{ title: "RabbitMQ", percent: 85, icon: "logos:rabbitmq" },
	]

	databaseSkills: Skill[] = [
		{ title: "MongoDb", percent: 95, icon: "logos:mongodb" },
		{ title: "Firestore", percent: 95, icon: "vscode-icons:file-type-firestore" },
		{ title: "SQLServer", percent: 95, icon: "simple-icons:microsoftsqlserver" },
		{ title: "Postregres", percent: 85, icon: "logos:postgresql" },
		{ title: "MySql", percent: 85, color: "white", icon: "simple-icons:mysql" },
		{ title: "Firebird", percent: 85, image: "assets/img/icons/firebird.png" },
		{ title: "Couchbase", percent: 70, icon: "logos:couchbase" },
		{ title: "SQLite", percent: 85, icon: "logos:sqlite" },
	]

	severalSkills: Skill[] = [
		{ title: "Azure Devops", percent: 90, icon: "logos:microsoft-azure" },
		{ title: "Firebase", percent: 90, icon: "logos:firebase" },
		{ title: "Heroku", percent: 90, icon: "logos:heroku" },
		{ title: "Git", percent: 95, icon: "logos:git" },
		{ title: "Digital Ocean", percent: 75, icon: "logos:digital-ocean" },
		{ title: "AWS", percent: 50, icon: "logos:aws" },
		{ title: "Docker", percent: 65, icon: "logos:docker" },
	]

	projects: Project[] = [
		{
			title: "Vocabulando",
			text: `The Vocabulando platform helps you improve your vocabulary through movie subtitles, 
			music and various texts in several languages`,
			link: "https://vocabulando.com.br/",
			img: "assets/img/vocabulando.png"
		},
		{
			title: "LPSJ",
			text: `In this application you have access to the main information of the LPSJ ministry, 
			such as the church agenda, dates and times of official services, notices from the direction 
			and much more`,
			link: "https://play.google.com/store/apps/details?id=com.lpsj&hl=pt_BR",
			img: "assets/img/lpsj.png"
		},
		{
			title: "Cabral Drums",
			text: `Cabral Drums is a homemade electronic drum project that aims at great sound quality 
			and low investment. On this site you will find everything you need to develop your own 
			project and enjoy Cabral Drums technology!`,
			link: "https://cabraldrums.web.app/",
			img: "assets/img/cabral-drums.png"
		},
		{
			title: "Correspondente Oficial",
			text: `Corresponende Oficial is a platform focused on the dissemination of legal work. 
			Lawyers can register and offer their services to clients. The site is integrated with 
			PagSeguro, allowing these lawyers to acquire disclosure plans.`,
			link: "https://www.correspondenteoficial.com.br",
			img: "assets/img/co.png"
		},
	]

}