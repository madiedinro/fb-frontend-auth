import { Component, h } from 'preact';
import { AlenaComponent } from './components/alena';
import { PhoneFormContainer } from './components/containers';
import './styles/app.css'
import { Router, route } from 'preact-router';
import { initApi, DGodApi } from './lib/api';


const api = initApi('https://bolt.rstat.org/facebook')


export interface AppProps {
	title: string;
}

interface AppState {

	title: string;
}


export class App extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
	}

	// getChildContext(){
	// 	return {
	// 		api: this.props.api
	// 	}
	// }

	render(props: AppProps, state: AppState) {
		return (
			<div className='wrapper'>
				<Router>
					<AlenaComponent path="/alena/auth_success" title={"Все получилочь!"} mainText={"Можно закрыть вкладку"} />
					<AlenaComponent path="/alena/too_late" title={"Ну и где тебя носило?"} mainText={"Вероятно время запрашиваемого ресурса вышло."} />
					<PhoneFormContainer api={api} path="/alena/fblogin" />
					<AlenaComponent default title={"Ай-ай-ай!"} mainText={"Не шути со мной..."} />
				</Router>
			</div>
		)
	}
}