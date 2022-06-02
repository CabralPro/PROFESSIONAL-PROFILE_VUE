import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import { TextCard } from './_models/text-card.model';

@Component({})
export default class TextCardComponent extends Vue {

	@Prop() textCard: TextCard;
  
}

