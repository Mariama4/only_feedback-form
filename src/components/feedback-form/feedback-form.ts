import Component, { ComponentProps, getComponent, getComponents } from '../../app/js/component';
const axios = require('axios');
import Input from '../input/input';
import Textarea from '../textarea/textarea';

export default class FeedbackForm extends Component.Default {
    nInputs: Input[];
    nButton: HTMLElement;
    nTextarea: Textarea;

    constructor(element: ComponentProps) {
        super(element);

        this.nInputs = getComponents('input').map(input => new Input(input));
        this.nTextarea = new Textarea(getComponent('textarea'));
        this.nButton = this.getElement('button');

        this.nButton.addEventListener('click', this.collectData);
    }

    collectData = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();

        // const success = this.nInputs.every((input) => !input.nInputError.textContent);
        const success = this.nInputs.every((input) => input.success);

        if (success) {
            const data: any = {};
            this.nInputs.forEach(link => data[link.getName()] = link.getValue());
            data[this.nTextarea.getName()] = this.nTextarea.getValue();
            this.sendData(data);
        } else {
            this.nInputs.forEach(input => input.setFill(!!input.getValue()));
        }
    }

    sendData = (data: any) => {
        axios.post('/', data)
            .then((response: any) => console.log(response))
            .catch((error: any) => console.log(error));
    }

    destroy = () => {
        // Destroy functions
    }
}