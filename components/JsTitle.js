class JsTitle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Visitor"
        }
    }

    render() {
        return(
            <>
                <h1>J<span>ava</span>S<span>cript </span>T<span>heory & </span>P<span>ractical </span>S<span>nippets</span></h1>
                <h4 className="sm-wide-tx-r">...with explanations.</h4>
            </>
        )
    }
}