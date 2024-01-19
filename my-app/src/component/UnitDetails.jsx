import React from 'react'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import UnitDataService from '../service/UnitDataService';

export default function UnitDetails(props) {

    const [state, setState] = React.useState[{
        id: props.match.params.id,
        name: '',
        obtained: false
    }]

    React.useEffect(() => {
        console.log(state.id)

        // eslint-disable-next-line
        if (id == -1) {
            return
        }

        UnitDataService.retrieveUnit(state.id)
            .then(response => response.json())
            .then(data => setState({
                    id: data.data.id,
                    name: data.data.name,
                    obtained: data.data.obtained
                }))
        

    })

    return (
        <div>
            <h1>Priconne Unit Tracker</h1>
            <h3>Unit</h3>
            <div>{state.id}</div>
            <div>{state.name}</div>
            <div>{state.obtained === true ? "Yes" : "No"}</div>
        </div>
    )
}