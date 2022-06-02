import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import { ProfileLink } from './_models/profile-link.model';

@Component({})
export default class ProfileLinkComponent extends Vue {
	
	@Prop() profileLink: ProfileLink;
  
}

