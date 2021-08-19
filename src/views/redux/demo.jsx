import * as React from "react";
import * as ReactDOM from "react-dom";

export default class ReduxDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val: "",
    };
  }
  componentDidMount() {
    const { user } = this.props;
    this.setState({ val: user.userName });
  }
  onChangeVal(v) {
    this.setState({ val: v });
  }
  changeUser() {
    const { val } = this.state;
    this.props.setUser({
      userName: val,
    });
  }
  render() {
    const { user } = this.props;
    const { val } = this.state;
    return (
      <div>
        <h3>From Redux : {user.userName}</h3>
        <input
          type="text"
          value={val}
          onChange={(e) => {
            this.onChangeVal(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            this.changeUser();
          }}
        >
          更改
        </button>
      </div>
    );
  }
}
