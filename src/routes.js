import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

const routes = [
	{ path: '/', component: About },
	{ path: '/projects', component: Projects },
	{ path: '/contact', component: Contact }
];

export default routes;
