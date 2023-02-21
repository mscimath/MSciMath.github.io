const names = [    
    'Ada Lovelace', 
    'Grace Hopper', 
    'Margaret Hamilton'];
var objects = [
    {
        age: "8",
        city: "Porto"
    }
]
var objA = {
    age: "8",
    city: "Porto"
};
var objB = {
  age: "6",
  city: "Paris",
  experience: "1"
};
var objC = Object.assign({}, objA, objB); 
console.log(objects.objD);
  

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
                <div>
                    <div>
                        {objects.map((object) => <p key={object.id}>{object.age}</p>)}
                    </div>
                    <div>
                        {names.map((d) => <p key={d.id}>{d}</p>)}
                    </div>
                </div>
                    
            </>
        )
    }
}