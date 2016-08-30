var React = require('react');
var ShowAddButton = require('./ShowAddButton');
var QuestionForm = require('./QuestionForm');
var QuestionList = require('./QuestionList');

module.exports = React.createClass({
	getInitialState:function(){
		var questions = [
			{
				key: 1,
				title:'问题1',
				description:'答案1',
				voteCount:10,
			},
			{
				key: 2,
				title:'问题2',
				description:'答案2',
				voteCount:8,
			},
		];
		return {
			questions:questions,
			formDisplayed: false,
		}
	},
	onToggleForm:function(){
		this.setState({
			formDisplayed: !this.state.formDisplayed,
		})
	},
	render:function(){
		return(
		<div>
			<div className="jumbotron text-center">
				<div className="container">
					<h1>React回答</h1>
					<ShowAddButton onToggleForm={this.onToggleForm}/>
				</div>
			</div>
			<div className="main container">
				<QuestionForm formDisplayed={this.state.formDisplayed} onToggleForm={this.onToggleForm}/>
				<QuestionList questions={this.state.questions}/>
			</div>
		</div>
		)
	}
})