class TitleAddition extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            data : '',
            name : '',
        }
    }

    render() {
        return(
            <>
                <h2>S<span>cience & { `${this.props.name}` }
                </span>M<span>athematics </span>B<span>its and </span>
                P<span>ieces</span></h2>                                    
            </>
        )
    }
}