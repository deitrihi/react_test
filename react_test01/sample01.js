var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
        안녕, <input type="text" placeholder="이름을 여기에 작성하세요" />!
        지금 시간은 {this.props.date.toTimeString()} 입니다.
      </p>
    );
  }
});
setInterval(function() {
  React.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
  );
}, 500);
