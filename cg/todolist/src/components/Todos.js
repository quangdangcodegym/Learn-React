import { React, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import TodoService from '../services/TodoService';
import Swal from 'sweetalert2'

const iconStyle = {
    marginRight: '10px', // Thay đổi giá trị theo mong muốn
};
let reloadTodo = false;
export default function Todos() {

    const [todos, setTodos] = useState([]);

    const [todoAddEdit, setTodoAddEdit] = useState(
        {
            isEdit: false,
            data: {
                id: null,
                name: ""
            }
        }
    );

    useEffect(() => {
        try {
            console.log("THUC HIEN USEEFFECT");
            async function getTodos() {
                let todoRes = await TodoService.getAllTodos();
                console.log(todoRes);
                setTodos(todoRes.data);
            }
            getTodos();

            reloadTodo = false;
        } catch (err) {

        }
    }, [reloadTodo])

    const handleBtnCreateUpdate = (evt) => {

        if (todoAddEdit.isEdit) {
            try {
                async function saveTodo() {
                    await TodoService.updateTodo(todoAddEdit.data);
                    setTodoAddEdit({
                        ...todoAddEdit,
                        isEdit: false,
                        data: {
                            ...todoAddEdit.data,
                            name: ''
                        }
                    })
                }
                saveTodo();
            } catch (err) {

            }
        } else {
            let todoAdd = todoAddEdit.data;
            console.log("todoAdd", todoAdd);
            try {
                async function saveTodo() {
                    await TodoService.saveTodo(todoAdd);
                    setTodoAddEdit({
                        ...todoAddEdit,
                        isEdit: false
                    })
                }
                saveTodo();
            } catch (err) {

            }
        }


        reloadTodo = true;
    }

    const handleShowEdit = (id, nameUpdate) => {
        console.log(id);
        setTodoAddEdit({
            ...todoAddEdit,
            isEdit: true,
            data: {
                ...todoAddEdit.data,
                name: nameUpdate,
                id: id
            }
        })
    }
    const showConfirmDelete = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                try{
                    async function deleteTodo(){
                        await TodoService.deleteTodo(id);
                    }
                    deleteTodo();
                    setTodos([...todos])
                    reloadTodo = true;
                }catch(err){

                }
            }
          })
    }

    console.log("RE RENDER", todoAddEdit, reloadTodo);
    return (
        <>
            
            <Container className='mt-5'>
                <Row className='justify-content-center'>
                    <Col xs={6}>
                        <h1>Todo list</h1>
                        <Container >
                            <Stack>
                                <Row className='justify-content-between mb-3'>
                                    <Col xs={9}>
                                        <Form.Control value={todoAddEdit.data.name} onChange={(evt) => setTodoAddEdit({ ...todoAddEdit, data: { ...todoAddEdit.data, name: evt.target.value } })} type="text" placeholder="name@example.com" />
                                    </Col>
                                    <Col xs={3} className='justify-content-end'>
                                        <Button variant="primary" onClick={handleBtnCreateUpdate}>{todoAddEdit.isEdit ? 'Update' : 'Create'}</Button>
                                    </Col>
                                </Row>

                                {
                                    todos.map((td) =>
                                    (
                                        <Row key={td.id} className='justify-content-between mb-3'>
                                            <Col xs={9}>
                                                <Form.Label>{td.name}</Form.Label>
                                            </Col>
                                            <Col xs={3} className='justify-content-end'>
                                                <FontAwesomeIcon onClick={(evt) => handleShowEdit(td.id, td.name)} style={iconStyle} className='' icon={faEdit} />
                                                <FontAwesomeIcon icon={faTrash} onClick={(evt)=>showConfirmDelete(td.id)} />
                                            </Col>
                                        </Row>
                                    )
                                    )
                                }

                            </Stack>
                        </Container>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
