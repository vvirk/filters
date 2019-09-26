import React from 'react';
import { FilterInput } from '../FilterInput/FilterInput';
import { FilterCheckbox } from '../FilterCheckbox/FIlterCheckbox';

// styles
import s from './styles/users.module.scss';

export class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      age: '',
      male: false,
      female: false,
    };
  }

  componentDidMount() {
    this.props.getUsers();
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  }

  handleChangeLastname = event => {
    this.setState({ lastname: event.target.value });
  }

  handleChangeAge = event => {
    this.setState({ age: event.target.value });
  }

  handleChangeM = event => {
    if (!event.target.checked) {
      this.setState({ male: event.target.checked, });
    } else this.setState({ male: event.target.checked, });
  }

  handleChangeF = event => {
    if (!event.target.checked) {
      this.setState({ female: event.target.checked});
    } else this.setState({ female: event.target.checked });
  }

  render() {
    const { users } = this.props;
    const { name, lastname, age, male, female} = this.state;
    console.log(male);
    const showUsers = (name, lastname, age, male, female, arr) => {
      let filterUsers = arr;
      if (name !== '' && arr) {
        filterUsers = filterUsers.filter(user => user.name.includes(name));
      } 
      if (lastname !== '' && arr) {
          filterUsers = filterUsers.filter(user => user.lastname.includes(lastname));
      }
      if (age !== '' && arr) {
        filterUsers = filterUsers.filter(user => user.age === +age);
      }
      if (male && arr) {
        filterUsers = filterUsers.filter(user => user.sex === 'm');
      }
      if (female && arr) {
        filterUsers = filterUsers.filter(user => user.sex === 'f');
      }
      return (filterUsers ? filterUsers.map(filterUser => (
            <>
              <div className={s.usersItem}>{filterUser.name}</div>
              <div className={s.usersItem}>{filterUser.lastname}</div>
              <div className={s.usersItem}>{filterUser.age}</div>
              <div className={s.usersItem}>{filterUser.sex}</div>
            </>
          )) : null
      );
  }
    return (
      <div id={s.users}>
        <div className={s.usersItem}>
          <FilterInput
            type="text"
            placeholder="имя"
            onChange={this.handleChangeName}
            value={this.state.name}
          />
        </div>
        <div className={s.usersItem}>
          <FilterInput
            type="text"
            placeholder="фамилия"
            onChange={this.handleChangeLastname}
            value={this.state.lastname}
          />
        </div>
        <div className={s.usersItem}>
          <FilterInput
            type="text"
            placeholder="возраст"
            onChange={this.handleChangeAge}
            value={this.state.age}
          />
        </div>
        <div className={s.usersItem}>
          <FilterCheckbox
            label="M"
            type="checkbox" 
            onChange={this.handleChangeM} 
            checked={male}
          />
          <FilterCheckbox
            label="Ж"
            type="checkbox" 
            onChange={this.handleChangeF} 
            checked={female}
          />
        </div>
        {showUsers(
          name,
          lastname,
          age,
          male,
          female,
          users,
        )}
      </div>
    );
  }
}

export default Users;
