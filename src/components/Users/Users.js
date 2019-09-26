import React from 'react';

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
      this.setState({ male: event.target.checked });
    } else this.setState({ male: event.target.checked });
  }

  handleChangeF = event => {
    if (!event.target.checked) {
      this.setState({ female: event.target.checked });
    } else this.setState({ female: event.target.checked });
  }

  render() {
    const { users } = this.props;
    console.log(users);
    const showUsers = (name, lastname, age, male, female, arr) => {
      let filterUsers = arr;
      if (name !== '' && arr) {
        filterUsers = filterUsers.filter(user => user.name.includes(name));
      } 
      if (lastname !== '' && arr) {
          filterUsers = filterUsers.filter(user => user.lastname.includes(lastname));
      }
      if (age !== '' && arr) {
        filterUsers = filterUsers.filter(user => user.age == age);
      }
      if (male && arr) {
        filterUsers = filterUsers.filter(user => user.sex === 'm');
      }
      if (female && arr) {
        filterUsers = filterUsers.filter(user => user.sex === 'f');
      }
      if (male && female && arr) {
        filterUsers = filterUsers.filter(user => user.sex === 'f' && user.sex === 'm');
      }
      return (filterUsers ? filterUsers.map(filterUser => (
            <>
              <div>{filterUser.name}</div>
              <div>{filterUser.lastname}</div>
              <div>{filterUser.age}</div>
              <div>{filterUser.sex}</div>
            </>
          )) : null
      );
  }
    return (
      <div id={s.users}>
        <div>
          <input
            type="text"
            placeholder="name"
            onChange={this.handleChangeName}
            value={this.state.name}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="lastname"
            onChange={this.handleChangeLastname}
            value={this.state.lastname}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="age"
            onChange={this.handleChangeAge}
            value={this.state.age}
          />
        </div>
        <div>
          <label>
            male
            <input type="checkbox" onChange={this.handleChangeM} />
          </label>
          <label>
            female
            <input type="checkbox" onChange={this.handleChangeF} />
          </label>
        </div>
        {showUsers(
          this.state.name,
          this.state.lastname,
          this.state.age,
          this.state.male,
          this.state.female,
          users,
        )}
      </div>
    );
  }
}

export default Users;
