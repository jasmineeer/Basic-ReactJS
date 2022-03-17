import { useState, useEffect } from "react"
/**
 * useState => untuk mendefinisikan state
 * useEffect => sebuah fungsi yg dijalankan (dieksekusi) ketika komponennya telah ditampilkan
 * 
 */
import { Modal } from "bootstrap";
export default function Student(props) {
    let [students, setStudents] = useState([])
    let [modalStudent, setModalStudent] = useState(null)
    let [id, setId] = useState(0)
    let [name, setName] = useState("")
    let [birthdate, setBirthdate] = useState("")
    let [action, setAction] = useState("")
    let [editId, setEditId] = useState(true)
    let [readID, setReadId] = useState(true)

    useEffect(() => {
        // inisiasi(pemberian nilai awal) data array students
        let arrayStudents = [
            { id: 1, name: `Dito`, birthdate: `1 Mei 1900` },
            { id: 2, name: `Faiza`, birthdate: `500 SM` },
        ]
        setStudents(arrayStudents)

        // inisiasi state modal student 
        setModalStudent(new Modal(document.getElementById(`modal_student`)))
    }, [])

    // function addStudent
    let addStudent = () => {
        // open modal 
        modalStudent.show()

        // reset isi dari setiap inputan 
        setId(0)
        setName("")
        setBirthdate("")
        setAction("insert")
        setEditId(true)
    }

    // function saveStudent
    let saveStudent = () => {
        // close modal
        modalStudent.hide()
        if (action === `insert`) {
            let newData = {
                id: id, name: name, birthdate: birthdate
            }

            // store array from students
            let temp = [...students]
            // add new data
            temp.push(newData) 
            // store to students
            setStudents(temp)
        } else if (action === `edit`) {
            // store data students to temp
            let temp = [...students]
            
            // find index of selected data by ID
            let index = temp.findIndex(siswa => siswa.id === id)

            // update data based on founded index
            temp[index].name = name
            temp[index].birthdate = birthdate

            // restore to students from temp
            setStudents(temp)

        }
    }

    let editStudent = siswa => {
        // open the modal
        modalStudent.show()

        // reset isi dari setiap inputan
        setId(siswa.id)
        setName(siswa.name)
        setBirthdate(siswa.birthdate)
        setAction(`edit`)
        setEditId(false)
    }

    return (
        <div>
            <div className="card col-10">
                <div className="card-header bg-info">
                    <h3 className="display-5 text-white">List of My Students</h3>
                </div>
                <div className="card-body">
                    {students.map(siswa => (
                        // .map() => function dari array untuk scanning setiap data dalam array
                        <div className="row" key={`key${siswa.id}`}>
                            <div className="col-2">
                                <small>ID</small>
                                <h5>{siswa.id}</h5>
                            </div>
                            <div className="col-4">
                                <small>Name</small>
                                <h5>{siswa.name}</h5>
                            </div>
                            <div className="col-2">
                                <small>Birthdate</small>
                                <h5>{siswa.birthdate}</h5>
                            </div>
                            <div className="col-2">
                                <small>Action</small> <br />
                                {/* edit button */}
                                <button className="btn btn-warning mx-1"
                                onClick={() => editStudent(siswa)}>
                                    Edit 
                                </button>

                                {/* delete button */}
                                <button className="btn btn-danger mx-1"
                                onClick={() => deleteStudent(siswa)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* button add data */}
                    <button className="btn btn-primary"
                    onClick={() => addStudent()}>
                        Add 
                    </button>

                    {/* modal component */}
                    <div className="modal" id="modal_student">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Form Student</h4>
                                </div>
                                <div className="modal-body">
                                    {/* input for ID, Name and Birthdate */}

                                    ID
                                    <input type={`number`} className="form-control mb-2"
                                    value={id} onChange={ev => setId(ev.target.value)}
                                    readOnly={!editId}/>
                                    {/* Saat add student, editId = true, oleh karena itu readOnly harus bernilai false
                                        Sedangkan saat edit student, editId = false, oleh karena itu readOnly harus bernilai true */}

                                    Name
                                    <input type={`text`} className="form-control mb-2"
                                    value={name} onChange={ev => setName(ev.target.value)}/>

                                    Birthdate
                                    <input type={`text`} className="form-control mb-2"
                                    value={birthdate} onChange={ev => setBirthdate(ev.target.value)}/>

                                    <button className="btn btn-info" onClick={() => saveStudent()}>
                                        Save Data 
                                    </button>
                                </div>
                            </div>
                        </div> 
                    </div>
                    {/* end of modal */}
                </div>
            </div>
        </div>
    )
}