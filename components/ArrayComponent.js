var objects = [{
    objA : {
    age: "8",
    city: "Porto"
    },
    objB : {
        age: "6",
        city: "Paris",
        experience: "1"
      }
}]

var objC = Object.assign({}, objects.objA, objects.objB); 
console.log(objC.age, objC.city, objC.experience);

var contents = [   
    {
        table:
            [
                {
                    unit: "Variable Declarations and Their Types",
                    subjects: [
                        {
                            subject: "Creating Variables in JavaScript",
                            href: "#"
                        }, 
                        {
                            subject: "Data Types in Javascript",
                            href: "#"
                        }
                    ]
                },
                {
                    unit: "Types Conversion",
                    subjects: [
                        {
                            subject: "Explicit and Implicit Conversion"
                        }
                    
                    ]
                }
            ]
    },
    {
        table:
            [
                {
                    unit: "Variable Declarations and Their Types",
                    subjects: [
                        {
                            subject: "Creating Variables in JavaScript",
                            href: "#"
                        }, 
                        {
                            subject: "Data Types in Javascript",
                            href: "#"
                        }
                    ]
                },
                {
                    unit: "Types Conversion",
                    subjects: [
                        {
                            subject: "Explicit and Implicit Conversion"
                        }
                    
                    ]
                }
            ]
    }
]

class ArrayComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'O',
            appVersion: '1'
        }
    }

    render(){
        return(
            <>
                <div className="section-content">                   
                        {contents.map((item) => 
                        <table key={item.id} className="theory-subjects">  
                            {item.table.map((subitem) =>
                                <>
                                    <tr>
                                        <th>{subitem.unit}</th>
                                    </tr>
                                    {subitem.subjects.map((subject) =>
                                        <tr key={subject.id}>
                                            <td>
                                                {subject.subject}
                                            </td>
                                        </tr>
                                    )}
                                </>
                            )}                            
                        </table>   
                        )}                    
                </div>
            </>
        )
    }
}