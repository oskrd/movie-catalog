import React, { Component } from 'react';
import axios from 'axios';
import Hightlight from '../components/Highlight';
import NewReleases from '../components/NewReleases';
import TitleSection from '../components/TitleSection';


export default class HomePage extends Component {
    state = {
        movies : [],
        highlightedMovie: '',
        upcomingReleases: []
    }

    componentDidMount() {
        this.getData();
        this.getUpcomingReleases();
    }

    getUpcomingReleases = async () => {
        try {
            const upcoming = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=f90ff1daa65420537c600c00b7e593a6');
            this.setState({
                upcomingReleases : upcoming.data.results
            })
        } catch (err) {
            console.log(err);    
        }
    }

    getData = async () => {
        try {
            const outcome = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=f90ff1daa65420537c600c00b7e593a6');
            this.setHighlightedMovie(outcome.data.results);
            this.setState({
                movies : outcome.data.results
            })
        } catch (err) {
            console.log(err);
            
        }
    }

    setHighlightedMovie (movies) {
        const highlightedMovie = movies[Math.floor(Math.random()*movies.length)];
        this.setState({
            highlightedMovie
        })
    }

    render() {
        return (
            <div>
                <Hightlight movie={this.state.highlightedMovie} />
                <TitleSection> At movie theaters </TitleSection>
                <NewReleases movies = {this.state.movies} />
                <TitleSection> Comming Soon</TitleSection>
                <NewReleases movies = {this.state.upcomingReleases} />
            </div>
        );
    }
}
