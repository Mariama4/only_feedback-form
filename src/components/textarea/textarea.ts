import Component, { ComponentProps } from '../../app/js/component';

export default class Textarea extends Component.Default {
    nTextarea: HTMLTextAreaElement;


    constructor(element: ComponentProps) {
        super(element);

        this.nTextarea = this.nRoot.querySelector('textarea');
    }

    getName = (): string => this.nTextarea.name;

    getValue = (): string => this.nTextarea.value;

    destroy = () => {
        // Destroy functions
    }
}