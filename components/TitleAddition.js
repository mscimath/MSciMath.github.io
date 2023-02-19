class TitleAddition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Visitor'
        }
    }

    render() {
        return(
            <>
                <h2>S<span>cience & 
                    </span>M<span>athematics </span>B<span>its and </span>
                    P<span>ieces</span></h2>
            </>
        )
    }
}