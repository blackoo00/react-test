var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
			<button id="add-qestion-btn" onClick={this.props.onToggleForm} className="btn btn-success">添加问题</button>
		)
	}
})