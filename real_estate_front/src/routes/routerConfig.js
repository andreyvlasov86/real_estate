import DefaultPage from '../components/Pages/DefaultPage/DefaultPage';
import Announcements from '../components/Pages/Announcements/Announcements';


const routerConfig = [
	{
		id: 1,
		path: "/",
		component: DefaultPage,
        icon: 'fa fa-fw fa-home',
        name: 'Test',
        subitems: [

		]
	},
	{
		id: 2,
		path: "/announcements",
		component: Announcements,
        icon: 'fa fa-fw fa-file',
        name: 'Test',
        subitems: [

		]
	},

];

export default routerConfig
