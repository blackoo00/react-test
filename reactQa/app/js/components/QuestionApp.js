var React = require('react');
var ShowAddButton = require('./ShowAddButton');
var QuestionForm = require('./QuestionForm');
var QuestionList = require('./QuestionList');
var _ = require('lodash');

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
	onNewQuestion:function(newQuestion){
		newQuestion.key = this.state.questions.length + 1;

		var newQuestions = this.state.questions.concat(newQuestion);

		newQuestions = this.sortQuestion(newQuestions);

		this.setState({
			questions: newQuestions,
		})
	},
	sortQuestion:function(questions){
		questions.sort(function(a,b){
			return b.voteCount - a.voteCount;
		});

		return questions;
	},
	onVote:function(key,newCount){
		var questions = _.uniq(this.state.questions);
		
		var index = _.findIndex(questions, function(qst){
			return qst.key == key;
		})

		questions[index].voteCount = newCount;
		questions = this.sortQuestion(questions);

		this.setState({
			questions:questions,
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
				<QuestionForm formDisplayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} onNewQuestion={this.onNewQuestion}/>
				<QuestionList questions={this.state.questions} onVote={this.onVote}/>
			</div>
		</div>
		)
	}
})