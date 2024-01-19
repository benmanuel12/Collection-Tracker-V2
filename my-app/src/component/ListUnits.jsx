import React from 'react';
import UnitDataService from '../service/UnitDataService';
import { useNavigate } from "react-router-dom";


export default function ListUnits() {

    const navigate = useNavigate()

    const [units, setUnits] = React.useState([]);
    const [message, setMessage] = React.useState("");

    React.useEffect(() => {
        refreshUnits();
      }, []);


    function refreshUnits() {
        UnitDataService.retrieveAllUnits()
            .then(
                response => {
                    console.log(response);
                    setUnits(response.data)
                }
            )
    }

    function toggleObtained(id) {
        console.log(id)
        setUnits(oldUnits => oldUnits.map(unit => {
            return unit.id === id ? {id: unit.id, name: unit.name, obtained: !unit.obtained} : unit
        }))
    }


    // function addUnitClicked() {
    //     navigate(`/units/-1`)
    // }

    // function updateUnitClicked(id) {
    //     console.log('update ' + id)
    //     navigate(`/units/${id}`)
    // }


    // function deleteUnitClicked(id) {
    //     UnitDataService.deleteUnit(id)
    //         .then(
    //             response => {
    //                 setMessage(`Delete of unit ${id} Successful`)
    //                 refreshUnits()
    //             }
    //         )
    // }
        
    return (
        <div className="container">
            <h1>Priconne Unit Tracker</h1>
            <h3>All Characters</h3>
            {message && <div class="alert alert-success">{message}</div>}
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>Id</th> */}
                            <th>Name</th>
                            <th>Obtained</th>
                            {/* <th>Update</th> */}
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                    {
                        units.map(
                            unit =>
                                <tr key={unit.id}>
                                    {/* <td>{unit.id}</td> */}
                                    <td><button className="btn btn-success" onClick={() => toggleObtained(unit.id)}>{unit.name}</button></td>
                                    <td>{unit.obtained === true ? "Yes" : "No"}</td>
                                    {/* <td><button className="btn btn-success" onClick={() => navigate(`/units/${unit.id}`)}>Update</button></td> */}
                                    {/* <td><button className="btn btn-warning" onClick={() => deleteUnitClicked(unit.id)}>Delete</button></td> */}

                                </tr>
                        )
                    }
                    </tbody>
                </table>
                {/* <div className="row">
                    <button className="btn btn-success" onClick={() => navigate(`/units/-1`)}>Add</button>
                    <button className="btn btn-success" onClick={() => refreshUnits()}>Refresh</button>
                </div> */}
            </div>
        </div>
    )
}