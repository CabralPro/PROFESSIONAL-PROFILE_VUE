import Vue from 'vue';
import Component from 'vue-class-component';
import { resumeHtml, resumeHtmlToPrint } from './_resume-files/resume';
import html2pdf from 'html2pdf.js'

@Component({})
export default class ResumeComponent extends Vue {

	initialized = false;
	loading = false;
	resumeHtml = resumeHtml

	mounted() {
		setTimeout(() => this.initialized = true, 2000)
	}

	generateReport() {
		this.loading = true;

		setTimeout(() => {
			html2pdf(resumeHtmlToPrint, {
				filename: 'Arthur Cabral Lemos - Resume.pdf',
				image: { type: 'jpeg', quality: 1 },
				html2canvas: { scale: 2, dpi: 192, letterRendering: true },
				jsPDF: { format: 'a4', orientation: 'portrait', putOnlyUsedFonts: true }
			}).then(() => {
				this.loading = false
			})
		});

	}

}

