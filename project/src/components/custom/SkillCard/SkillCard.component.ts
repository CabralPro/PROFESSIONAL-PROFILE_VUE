import Vue from 'vue';
import { Prop, Component, Watch } from 'vue-property-decorator';
import { Skill } from './_models/skill.model';

@Component({})
export default class SkillCardComponent extends Vue {

	@Prop() skill: Skill;

	@Watch('percentBar')
	percentBarChanged() {
		let p = this.percentBar / 100;
		this.percentCircle = p * 315 + 45 - 360;
	}

	percentBar = 0
	percentCircle = 360

}

