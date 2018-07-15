import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

const routes = [
	{ path: '/', component: Resume },
	{ path: '/projects', component: Projects },
	{ path: '/contact', component: Contact }
];

export default routes;
