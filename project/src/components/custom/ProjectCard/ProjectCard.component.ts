import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import { Project } from './_models/project.model';

@Component({})
export default class ProjectCardComponent extends Vue {

	@Prop() project: Project

}

