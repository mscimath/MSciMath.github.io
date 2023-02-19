class MainTitle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Visitor'
        }
    }
    
    render() {
        return(
            <>
                <h1>M<span>adej</span> S<span>ci</span>M<span>ath</span></h1>
            </>
        )
    }
}