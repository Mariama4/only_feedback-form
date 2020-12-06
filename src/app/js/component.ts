export type ComponentProps = {
    name: string;
    component: HTMLElement;
}

export type GetComponentProps = {
    name: string,
    component: HTMLElement
}

namespace Component {
    export class Default {
        nRootName: string;
        nRoot: HTMLElement;
    
        constructor({ name, component }: ComponentProps) {
            this.nRootName = name;
            this.nRoot = component;
        }

        getElement = (name: string): HTMLElement => this.nRoot.querySelector(`.${this.nRootName}__${name}`);
    
        getElements = (name: string): HTMLElement[] => Array.from(this.nRoot.querySelectorAll(`.${this.nRootName}__${name}`));
    }

    export const getComponent = (name: string, root: Document | HTMLElement = document): GetComponentProps => ({
        name,
        component: root.querySelector(`.${name}`)
    })

    export const getComponents = (name: string, root: Document | HTMLElement = document): GetComponentProps[] =>
        Array.from(root.querySelectorAll(`.${name}`))
            .map((component: HTMLElement) => ({
                name,
                component
            }));
}

export const { getComponent, getComponents } = Component;
export default Component;