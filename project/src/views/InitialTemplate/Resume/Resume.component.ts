import Vue from 'vue';
import Component from 'vue-class-component';
import { resumeHtml } from './_resume-files/resume';

@Component({})
export default class ResumeComponent extends Vue {

	resumeHtml = resumeHtml
}

