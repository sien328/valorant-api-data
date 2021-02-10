import React, { Component } from 'react';
import { runInThisContext } from 'vm';

class LeaderBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leaderboard: [],
        }
    }

    componentDidMount() {
        this.getValorantLeaderBoard()
            .then(res => {
                this.setState({ leaderboard: res });
                console.log("leaderboard: ", res);
            })
            .catch(err => console.log(err));
    }

    getValorantLeaderBoard = async () =>  {
        let act = this.getAct();
        console.log(act);
        const response = await fetch('/riot-games/val/leaderboard?actID=' + act.id);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    }

    getAct = () => {
        let acts = this.props.valContent.acts;
        let act = acts.filter( act => act.isActive && act.type == 'act');
        let [actObj] = act;
        return actObj;
    };

    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/riot-games/val/ranked', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();
        
        this.setState({ responseToPost: body });
    };


    render() {
    return (
        <div className="leaderboard">
            {/* <form onSubmit={this.handleSubmit}>
            <p>
                <strong>Post to Server:</strong>
            </p>
            <input
                type="text"
                value={this.state.post}
                onChange={e => this.setState({ post: e.target.value })}
                />
            <button type="submit">Submit</button>
            </form>
            <p>{this.state.responseToPost}</p> */}
            {/* <p>{this.state.leaderboard}</p>         */}
        </div>
    );
    }
}

export default LeaderBoard;