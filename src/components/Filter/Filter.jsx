import React from "react";
import style from "./Filter.module.css";
import PropTypes from "prop-types";
import actions from "../../redux/actions";
import { connect } from "react-redux";

const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <h3 className={style.title}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        className={style.input}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(actions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
