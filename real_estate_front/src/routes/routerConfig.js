import DefaultPage from '../components/Pages/DefaultPage/DefaultPage';


const baseUrl = '/admin';

const routerConfig = [
	{
		id: 1,
		path: "/",
		component: DefaultPage,
        icon: 'fa fa-fw fa-file-pdf',
        name: 'Test',
        subitems: [

		]
	},

];

export default routerConfig
