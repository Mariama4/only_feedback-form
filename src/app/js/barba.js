import barba from '@barba/core';
import * as viewsBarba from './views';

const views = Object.keys(viewsBarba).map(view => viewsBarba[view])

barba.init({
    views
});