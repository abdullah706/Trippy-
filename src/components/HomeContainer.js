import React from 'react';
import Home from '../components/core/Home';
import Api from '../utils/Api';
import Card from '../components/city/Card'

class HomeContainer extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        cities: []
    };
}
componentDidMount() {

    Api.getHome()
    .then(cities => {
      console.log(cities);
        this.setState({
            cities
        })
        
    });
}
  render() {
    return (      
      <div>
        <Card />
        <Home />
        
        {this.state.cities.map((city) => {
          console.log("city", city)
          return (
            <div>
              <img src ={'http://localhost:3001' + city .source}/>
              <p>
                {city.name}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HomeContainer;