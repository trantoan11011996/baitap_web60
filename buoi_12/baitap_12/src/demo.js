import React, { Component } from "react";


class Demo extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        {this.props.data.name}
                    </li>
                    <li>
                        {this.props.data.age}
                    </li>
                    <li>
                        {this.props.data.birth}
                    </li>
                    <li>
                        {this.props.data.city}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Demo