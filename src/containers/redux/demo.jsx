import { connect } from "react-redux";
import ReduxDemo from "@/views/redux/demo";
import { setUser } from "@/actions/user";

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo);
