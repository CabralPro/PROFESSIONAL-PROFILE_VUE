import Vue from 'vue';
import Component from 'vue-class-component';
import { Skill } from '@/components/custom/SkillCard/_models/skill.model';
import { TextCard } from '@/components/custom/TextCard/_models/text-card.model';
import { Project } from '@/components/custom/ProjectCard/_models/project.model';

@Component({})
export default class HomeView extends Vue {

	textCards: TextCard[] = [
		{
			title: `Olá, seja muito bem vindo! Neste site você conhecerá um pouco sobre	o meu trabalho!`,
			text: `Sou desenvolvedor de sistemas web e mobile, tenho uma grande paixão por interfaces de usuário, 
				animações e criação de	experiências intuitivas e dinâmicas para o usuário.Trabalho com front- end e 
				back - end e estou sempre atualizado sobre novas	tecnologias.`,
			img: `programer3.png`,
			reverse: false
		},
		{
			title: `Busco oferecer o meu melhor, visando sempre a execução das melhores práticas!`,
			text: `Um produto precisa ser inovador o suficiente para se diferenciar do resto, mas não tão inovador 
				que o usuário não entenda! Por isso faço o possível para entregar um excelente produto em termos de 
				qualidade de código, manutenibilidade e UE, pois isso pode evitar muitas dores de cabeça no futuro.`,
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
			text: `Enriqueça seu vocabulário em varios idiomas utilizando legendas de séries e filmes,
				letras musicais, textos e muito mais ...`,
			link: "https://vocabulando.com.br/",
			img: "assets/img/vocabulando.png"
		},
		{
			title: "LPSJ",
			text: `Nesse aplicativo você tem acesso as principais informações do ministério LPSJ, 
				como por exemplo a agenda das igrejas, datas e horários dos cultos oficiais, avisos 
				da direção e muito mais ...`,
			link: "https://play.google.com/store/apps/details?id=com.lpsj&hl=pt_BR",
			img: "assets/img/lpsj.png"
		},
		{
			title: "Cabral Drums",
			text: `Bateria Eletrônica Caseira feita com Arduíno e Raspberry Pi. O projeto também
				conta com um aplicativo que funciona como controle remoto via bluetooth. Tecnologias
				envolvidas: Java e C++`,
			link: "https://cabraldrums.web.app/",
			img: "assets/img/cabral-drums.png"
		},
		{
			title: "Correspondente Oficial",
			text: `Divulgação de trabalho advocatício. Advogados podem se cadastrar 
				e oferecer seus serviços aos clientes.O site está integrado ao PagSeguro 
				permitindo que esses advogados adquiram planos de divulgação.`,
			link: "https://www.correspondenteoficial.com.br",
			img: "assets/img/co.png"
		},
	]

}