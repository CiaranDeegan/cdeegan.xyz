import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';

const routes = [
	{ path: '/', component: Home },
	{ path: '/projects', component: Projects },
	{ path: '/contact', component: Contact }
];

export default routes;
