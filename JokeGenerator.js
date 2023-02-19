class JokeGenerator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Joke Generator',
            appVersion: '1'
        }
    }

    render(){
        return(
            <>
                <h2>Hello {this.state.name || 'Friend'}! Welcome Back.</h2>
                <button>Generate a Keyword</button>
                <CoolButton customText="Download now"/>
            </>
        )
    }
}