import { getComponent } from '../../app/js/component';
import FeedbackForm from '../../components/feedback-form/feedback-form';

const Index = {
    namespace: 'index',
    beforeEnter() {
        this.nFeedbackForm = new FeedbackForm(getComponent('feedback-form'));
    },
    afterEnter() {
        // afterEnter body
    },
    beforeLeave() {
        // beforeLeave body
    },
    afterLeave() {
        // afterLeave body
    }
}

export default Index