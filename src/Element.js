import React from 'react';
import ReactDom from 'react-dom';

import observer from './Decorator';

class Any extends React.Component {
	get model(){
		return this.props.model || this.props.m;
	}

	componentWillMount(){
		if(this.model.componentWillMount){
			this.model.componentWillMount(this);
		}
	}

	componentDidMount(){
		if(this.model.componentDidMount){
			this.model.componentDidMount(this);
		}
	}

	componentWillReceiveProps(nextProps){
		if(this.model.componentWillReceiveProps){
			this.model.componentWillReceiveProps(this, nextProps);
		}
	}

	shouldComponentUpdate(nextProps, nextState){
		if(this.model.shouldComponentUpdate){
			this.model.shouldComponentUpdate(this, nextProps, nextState);
		}
	}

	componentWillUpdate(nextProps, nextState){
		if(this.model.componentWillUpdate){
			this.model.componentWillUpdate(this, nextProps, nextState);
		}
	}

	componentDidUpdate(prevProps, prevState){
		if(this.model.componentDidUpdate){
			this.model.componentDidUpdate(this, prevProps, prevState);
		}
	}

	componentWillUnmount(){
		if(this.model.componentWillUnmount){
			this.model.componentWillUnmount(this);
		}
	}

	render(){
		if(this.model == null){
			return null;
		}
		if(Array.isArray(this.model)){
			return <List m={this.model}/>;
		}else{
			return this.model.render(this);
		}
	}
}

Any = observer(Any) || Any;

class List extends React.Component {
	render(){
		var arr = this.props.model || this.props.m;
		if(arr == null){
			return null;
		}
		var keyName = this.props.keyName;
		return arr.$map((item, index) => {
			if(keyName == null || keyName == '$index'){
				return <Any m={item} key={index}/>;
			}else{
				return <Any m={item} key={item[keyName]}/>;
			}
		});
	}
}

List = observer(List) || List;

export default {
	Any,
	List
}