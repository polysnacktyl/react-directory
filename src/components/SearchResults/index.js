import React from 'react';
import EmployeeCard from '../EmployeeCard';
import API from '../../utils/API';

class App extends React.Component {
  state = { employees: [], search: '' }

  componentDidMount() {
    this.showTeam()
  }

  showTeam = () => {
    API.summonRandos()
      .then(res =>
        this.setState({
          employees: res.data.results.map((person, i) => ({
            lastName: person.name.last,
            firstName: person.name.first,
            picture: person.picture.large,
            email: person.email,
            phone: person.phone,
            key: i
          })
          )
        }))

      .catch(err => console.log(err))
  }

  sortByLast = () => {
    this.setState(
      this.state.employees.sort((a, b) => {
        let nameA = a.lastName.toLowerCase()
        let nameB = b.lastName.toLowerCase()

        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    )
  }

  sortByFirst = () => {
    this.setState(
      this.state.employees.sort((a, b) => {
        let nameA = a.firstName.toLowerCase()
        let nameB = b.firstName.toLowerCase()

        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        else return 0
      })
    )
  }


  render() {
    return (
        <div className="row" >
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th><span role="button" onClick={this.sortByLast}>Last</span></th>
                <th><span role="button" onClick={this.sortByFirst}>First</span></th>
                <th>email</th>
                <th>phone</th>
              </tr>
            </thead>
            {[...this.state.employees].map((item) => (
              <EmployeeCard
                picture={item.picture}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                phone={item.phone}
                city={item.city}
                key={item.key}
              />
            ))}
          </table>
        </div>
      // </div>
    );
  }
}



export default App;


