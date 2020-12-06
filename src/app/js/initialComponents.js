import barba from '@barba/core';
import { getComponent } from './component';
import Scrollbar from 'smooth-scrollbar';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const scrollbarOptions = {};
let scrollbar = Scrollbar.init(document.querySelector('[data-barba="container"]'), scrollbarOptions);

let header = new Header(getComponent('header'));
let footer = new Footer(getComponent('footer'));

// Init functions
barba.hooks.beforeEnter(data => {
    scrollbar = Scrollbar.init(document.querySelector('[data-barba="container"]'), scrollbarOptions);
    header = new Header(getComponent('header'));
    footer = new Footer(getComponent('footer'));
});

// Destroy functions
barba.hooks.beforeLeave(data => {
    scrollbar.destroy();
    header.destroy();
    footer.destroy();
});