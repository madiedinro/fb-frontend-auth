import { Component, h } from 'preact';
import { AlenaComponent } from './components/alena';
import { PhoneFormContainer } from './components/containers';
import './styles/app.css'
import { AppProps, AppState } from './intrerfaces'
import { Router, route } from 'preact-router';
import { initApi, DGodApi } from './lib/api';


const api = initApi(APP_CONFIG.service_url)


export class App extends Component<AppProps, AppState> {
	/**
	 * Core app module
	 * 
	 * TODO: Try to implement child context
	 * getChildContext(){return { api: this.props.api }}
	 */

	constructor(props: AppProps) {
		super(props);
	}

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