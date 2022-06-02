import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';

@Component({})
export default class FieldsetComponent extends Vue {

	@Prop() title: string;

}

