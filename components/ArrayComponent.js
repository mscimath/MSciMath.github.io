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
                        },
                        {
                            subject: "null & undefined Types",
                            href: "#"
                        },
                        {
                            subject: "Boolean Type",
                            href: "#"
                        },
                        {
                            subject: "Number Type",
                            href: "#"
                        },
                        {
                            subject: "Number Type and Values of NaN and Infinity",
                            href: "#"
                        },
                        {
                            subject: "String Type",
                            href: "#"
                        },
                        {
                            subject: "String Type Methods",
                            href: "#"
                        },
                        {
                            subject: "Wrapper Objects",
                            href: "#"
                        }
                    ]
                },
                {
                    unit: "Types Conversion",
                    subjects: [
                        {
                            subject: "Explicit and Implicit Conversion",
                            href: "#"
                        },
                        {
                            subject: "Boolean Conversion",
                            href: "#"
                        },
                        {
                            subject: "Number Conversion",
                            href: "#"
                        },
                        {
                            subject: "String Conversion",
                            href: "#"
                        }
                    ]
                },
                {
                    unit: "Logical Operators",
                    subjects: [
                        {
                            subject: "Comparison Operators",
                            href: "#"
                        },
                        {
                            subject: "Logical Operators",
                            href: "#"
                        },
                        {
                            subject: "Examples of Use of and & or",
                            href: "#"
                        }
                    ]
                },
                {
                    unit: "Conditional Statements",
                    subjects: [
                        {
                            subject: "if Statement",
                            href: "#"
                        },
                        {
                            subject: "Switch Statement",
                            href: "#"
                        },
                        {
                            subject: "Ternary Operator",
                            href: "#"
                        },
                        {
                            subject: "null Coalescing Operator",
                            href: "#"
                        },
                        {
                            subject: "Optional Chaining Operator",
                            href: "#"
                        }
                    ]
                },
                {
                    unit: "Loops",
                    subjects: [
                        {
                            subject: "for Loop",
                            href: "#"
                        },
                        {
                            subject: "for... of & for... in Loops",
                            href: "#"
                        },
                        {
                            subject: "do... while & while Loops",
                            href: "#"
                        }
                    ]
                },
                {
                    unit: "Scopes, Closures and Modules",
                    subjects: [
                        {
                            subject: "Global Scope and Global Object",
                            href: "#"
                        },
                        {
                            subject: "Block Scope",
                            href: "#"
                        },
                        {
                            subject: "Function Scope",
                            href: "#"
                        },
                        {
                            subject: "Hoisting",
                            href: "#"
                        },
                        {
                            subject: "Use Strict",
                            href: "#"
                        }
                    ]
                },
                {
                    unit: "Functions",
                    subjects: [
                        {
                            subject: "Declaring Functions",
                            href: "#"
                        },
                        {
                            subject: "Returning Values",
                            href: "#"
                        },
                        {
                            subject: "Function's Parameters",
                            href: "#"
                        },
                        {
                            subject: "Callback Functions",
                            href: "#"
                        },
                        {
                            subject: "Closures",
                            href: "#"
                        },
                        {
                            subject: "Higher Order Functions",
                            href: "#"
                        }
                    ]
                },
                {
                    unit: "Arrays",
                    subjects: [
                        {
                            subject: "Array",
                            href: "#"
                        },
                        {
                            subject: "Arrays - Elementary Operations",
                            href: "#"
                        },
                        {
                            subject: "Spread Operator",
                            href: "#"
                        },
                        {
                            
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