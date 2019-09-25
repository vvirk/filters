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

  render() {
    const { users } = this.props;
    console.log(users);

    const handleChangeName = event => {
      this.setState({ name: event.target.value });
    };

    const handleChangeLastname = event => {
      this.setState({ lastname: event.target.value });
    };

    const handleChangeAge = event => {
      this.setState({ age: event.target.value });
    };

    const handleChangeM = event => {
      if (event.target.checked) {
        this.setState({ male: event.target.checked });
      }
    };

    const handleChangeF = event => {
      if (event.target.checked) {
        this.setState({ female: event.target.checked });
      }
    };

    const showUsers = (name, lastname, age, male, female, arr) => {
      if (name !== '' && arr) {
        const filterNames = arr.filter(user => user.name.includes(name));
        return filterNames.map(filterName => (
          <>
            <div>{filterName.name}</div>
            <div>{filterName.lastname}</div>
            <div>{filterName.age}</div>
            <div>{filterName.sex}</div>
          </>
        ));
      } else if (lastname !== '' && arr) {
          const filterLastnames = arr.filter(user => user.lastname.includes(lastname));
          return filterLastnames.map(filterLastname => (
          <>
            <div>{filterLastname.name}</div>
            <div>{filterLastname.lastname}</div>
            <div>{filterLastname.age}</div>
            <div>{filterLastname.sex}</div>
          </>
        ));
      } else if (age !== '' && arr) {
        const filterAges = arr.filter(user => user.age == age)
        return filterAges.map(filterAge => (
          <>
            <div>{filterAge.name}</div>
            <div>{filterAge.lastname}</div>
            <div>{filterAge.age}</div>
            <div>{filterAge.sex}</div>
          </>
        ))
      } else if (male && arr) {
        const filterMales = arr.filter(user => ( user.sex === 'm'));
        return filterMales.map(filterMale => (
          <>
            <div>{filterMale.name}</div>
            <div>{filterMale.lastname}</div>
            <div>{filterMale.age}</div>
            <div>{filterMale.sex}</div>
          </>
        ));
      } else if (female && arr) {
        const filterFemales = arr.filter(user => ( user.sex === 'f'));
        return filterFemales.map(filterFemale => (
          <>
            <div>{filterFemale.name}</div>
            <div>{filterFemale.lastname}</div>
            <div>{filterFemale.age}</div>
            <div>{filterFemale.sex}</div>
          </>
        ));
      } else {
      return arr
        ? arr.map(user => (
            <>
              <div>{user.name}</div>
              <div>{user.lastname}</div>
              <div>{user.age}</div>
              <div>{user.sex}</div>
            </>
          ))
        : null;
    };
  }
    return (
      <div id={s.users}>
        <div>
          <input
            type="text"
            placeholder="name"
            onChange={handleChangeName}
            value={this.state.name}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="lastname"
            onChange={handleChangeLastname}
            value={this.state.lastname}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="age"
            onChange={handleChangeAge}
            value={this.state.age}
          />
        </div>
        <div>
          <label>
            male
            <input type="checkbox" value="m" onChange={handleChangeM} />
          </label>
          <label>
            female
            <input type="checkbox" value="f" onChange={handleChangeF} />
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
