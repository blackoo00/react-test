var React = require('react');

module.exports = React.createClass({
	handleForm:function(e){
		e.preventDefault();
		var newQuestion = {
			title: this.refs.title.getDOMNode().value,
			description: this.refs.description.getDOMNode().value,
			voteCount: 0,
		}
	},
	render:function(){
		var styleObj = {
			display: this.props.formDisplayed ? 'block' : 'none',
		};
		return (
			<form style={styleObj} action="addQuestion" className="clearfix" onSubmit={this.handleForm}>
				<div className="form-group">
					<label htmlFor="qtitle">问题</label>
					<input type="text" className="form-control" id="qtitel" placeholder="您的问题标题"/>
				</div>
				<textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
				<button className="btn btn-success pull-right">确认</button>
				<button className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</button>
			</form>
		)
	}
})