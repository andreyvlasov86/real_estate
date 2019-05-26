import DefaultPage from '../components/Pages/DefaultPage/DefaultPage';
import Announcements from '../components/Pages/Announcements/Announcements';


const routerConfig = [

	{
		id: 2,
		path: "/announcements",
		component: Announcements,
        icon: 'fa fa-fw fa-home',
        name: 'Test',
		show: true,
        subitems: [

		]
	},
	{
		id: 1,
		path: "*",
		component: DefaultPage,
        icon: '',
        name: 'Test',
		show: false,
        subitems: [

		]
	},

];

export default routerConfig
