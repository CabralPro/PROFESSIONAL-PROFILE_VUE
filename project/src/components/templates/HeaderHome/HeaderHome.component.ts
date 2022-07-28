import { ProfileLink } from '@/components/custom/ProfileLink/_models/profile-link.model';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class HeaderHomeComponent extends Vue {

	mounted() {
		import("@/assets/js/animation.js").then();
	}

	profileLinks: ProfileLink[] = [
		{
			icon: "fluent:document-briefcase-20-filled",
			text: "Resume",
			link: "/resume",
		},
		{
			icon: "foundation:social-linkedin",
			text: "/arthurcabrallemos",
			link: "https://www.linkedin.com/in/arthurcabrallemos/",
		},
		{
			icon: "ant-design:github-filled",
			text: "/CabralPro",
			link: "https://github.com/CabralPro",
		},
		{
			icon: "dashicons:email-alt2",
			text: "cabraltec02@gmail.com",
		},
	]

}

