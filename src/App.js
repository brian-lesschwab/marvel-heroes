import React, { Component } from 'react'
import { TimelineSlider, Hero, Heroes } from './components'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeline: 1,
      heroData: [
        {id: 1, name: 'Hulk', description: 'hulk is super green'},
        {id: 2, name: 'Iron Man', description: 'Iron man is made of iron'},
        {id: 3, name: 'Captain America', description: 'Captain America is really old'},
        {id: 4, name: 'Thor', description: 'Thor will live for 5,000 years'},
        {id: 5, name: 'Ant Man', description: 'Ant man can become small and big'},
        {id: 6, name: 'Black Panther', description: 'Black pather has a lot of vibranium'},
        {id: 7, name: 'Doctor Strange', description: 'Doctor Strange is magical'},
        {id: 8, name: 'Scarlet Witch', description: 'Scarlet Witch is one of the most powerful characters in Marvel'},
        {id: 9, name: 'Vision', description: 'Vision is an ai with infinity stone power'},
        {id: 10, name: 'Thanos', description: 'Thanos is a bad guy'},
      ]
    }
  }

  updateTimeline = (value: number) => this.setState({timeline: value})

  clickHero = () => {console.log('clicked hero')}

  clickThanos = () => {
    const heroData = this.state.heroData.map(hero => {
      delete hero.img
      if(this.isThanos(hero)) {return hero}
      return Math.random() >= 0.5 ? { ...hero, img:'dead' } : hero
    })
    this.setState({ heroData })
  }

  isThanos = (hero) => hero.id === 10

  render() {
    const { heroData, timeline } = this.state


    const heroes = heroData
      .filter(hero => hero.id <= timeline)
      .map((hero, i) => {
        const img = hero.img || hero.name.toLowerCase().replace(' ', '_')
        const action = this.isThanos(hero) ? this.clickThanos : this.clickHero
        return <Hero key={i} hero={{ ...hero, img, action }} />
      })


    return (
      <div className="App">
        <header className="App-header">
          <h1>Marvel Timeline</h1>
          <TimelineSlider
            timeline={timeline}
            onChange={this.updateTimeline} />
          <Heroes heroes={heroes} />
        </header>
      </div>
    );
  }
}

export default App;
