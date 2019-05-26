import DefaultPage from '../components/Pages/DefaultPage/DefaultPage';
import Announcements from '../components/Pages/Announcements/Announcements';


const routerConfig = [

	{
		id: 1,
		path: "/announcements",
		component: Announcements,
        icon: 'fa fa-fw fa-home',
        name: 'Announcements',
		show: true,
        subitems: [

		]
	},
	{
		id: 0,
		path: "/",
		component: DefaultPage,
        icon: '',
        name: 'Default',
		show: false,
        subitems: [

		]
	},


];

export default routerConfig
