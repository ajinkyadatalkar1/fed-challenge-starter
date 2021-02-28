import React ,{Component}from 'react';
import './Card.css';
import time from '../assets/icons/timer-outline.svg';
import track from '../assets/icons/race-track.svg';


export default class Card extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            selected: false,
            boxShadow: "0px 0px",
        }
        this.selectCard = this.selectCard.bind(this);
    }

    selectCard() {
        if(this.state.selected === false) {
            this.setState({
                selected: true,
                boxShadow: "10px 10px 5px #aaaaaa"
            });
        } else {
            this.setState({
                selected: false,
                boxShadow: "0px 0px"
            });
        }
        console.log(this.state.boxShadow);
    }

    render() {
    let details, detailsLink, banner;
    if(this.props.video === true) {
        details = <span><img className="time" src={time} alt=""/> <strong>{this.props.time}</strong> &nbsp; &nbsp; <img className="time" src={track} alt=""/> <strong>{this.props.distance}</strong></span>;
    } else {
        details = "";
    }

    if(this.props.viewDetails === true) {
        detailsLink = <a href={this.props.detailsLink}>VIEW DETAILS</a>;
    } else {
        detailsLink = "";
    }

    if(this.props.playlist === true) {
        banner = <div className="parent">
                <img className="bannerImage" src={this.props.image} alt=""/>
                <div className="playList">
                    <div className="videoCountOverlay">
                        {this.props.noOfWorkoutVideos}
                    </div>
                    <div>
                        WORKOUTS
                    </div>
                </div>
        </div>;
    } else {
        banner = <img className="bannerImage" src={this.props.image} alt=""/>;
    }

    return (
        <div className="card" onClick={this.selectCard} style={{boxShadow: this.state.boxShadow}}>
            {banner}
            <div className="title">
                <strong>{this.props.title}</strong>
                <img className="thumbnail" src={this.props.thumbnail} alt=""/>
            </div>
            <div className="Details">
                {details}
            </div>
            <div>
                {detailsLink}
                {this.state.count}
            </div>
        </div>
    );
    }
}