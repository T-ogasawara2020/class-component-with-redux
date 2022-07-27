import { connect } from "react-redux";
import App from "../components/App";
import { plus, minus, asyncMinus, getJson, changeTitle } from "../actions";

const mapStateToProps = (state) => {
  return {
    number: state.number,
    day: state.day,
    title: state.title
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plus: (num) => {
      dispatch(plus(num));
    },
    minus: (num) => {
      dispatch(minus(num));
    },
    asyncMinus: (num) => {
      dispatch(asyncMinus(num));
    },
    getJson: () => {
      dispatch(getJson());
    },
    changeTitle: (title) => {
      dispatch(changeTitle(title));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
