import { Button, Table } from "react-bootstrap";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";
import '../css/home.css';
function Home() {

    let history = useNavigate();

    function setID(id, name, age) {
        localStorage.setItem('id', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('age', age);

    }
    function deleted(id) {
        var index = array.map(function (e) {
            return e.id;
        }).indexOf(id);
        array.splice(index, 1)
        history('/');
    }
    return (
        <>
            <div>hello this Home page</div>
            <Table striped bordered hover size="sm">
                <thead className="table-head">
                    <tr className="table-title">
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item) => {
                        return (
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.age}</td>
                                <td>
                                    <Link to={`/edit`}>
                                        <Button onClick={(e) => setID(item.id, item.Name, item.age)} variant="info">Update</Button>
                                    </Link>
                                </td>
                                <td><Button onClick={e => deleted(item.id)} variant="danger">Delete</Button></td>
                            </tr>

                        );
                    })}
                </tbody>
            </Table>
            <div className="btn">
                <Link to='/create'><Button className="Btn-create">Create</Button></Link>
            </div>
        </>
    );
}

export default Home;