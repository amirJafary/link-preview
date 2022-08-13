import React, { useState } from 'react';
import { TextField } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

const AddTodoSection = () => {

    const [title, setTitle] = useState();
    const [discription, setDiscription] = useState();
    const [todo, setTodo] = useState([]);
    const [refreshDate, setRefreshDate] = useState(Date.now());
    const [haveChange, setHaveChange] = useState(false);
    const [selectedTodoId, setSelectedTodoId] = useState(null);

    const titleChanged = (e) => {
        setTitle(e.target.value)
    }

    const discriptionChanged = (e) => {
        setDiscription(e.target.value)
    }

    const saveClicked = () => {

        if (!haveChange) {
            const todoDetail = {
                'id': todo.length + 1,
                'title': title,
                'discription': discription,
                'isDone': false
            }
            todo.push(todoDetail);
            setTitle('');
            setDiscription('');
        } else {
            todo.map(item => {
                if (item.id === selectedTodoId) {
                    item.title = title;
                    item.discription = discription;
                }
            })
            setTitle('');
            setDiscription('');
            setHaveChange(false);
        }
    }

    const switchTodoClicked = (id) => {
        todo.map(item => {
            if (item.id === id) { item.isDone = !item.isDone }
        })
        setRefreshDate(Date.now())
    }

    const editTodoClicked = (id) => {
        setSelectedTodoId(id);
        let selectedTodo = todo.filter(item => item.id === id);
        setTitle(selectedTodo.map(item => item.title));
        setDiscription(selectedTodo.map(item => item.discription));
        setHaveChange(true);
    }

    const deleteTodoClicked = (id) => {
        let deleteSelectedTodo = todo.filter(item =>
            item.id !== id
        )
        setTodo(deleteSelectedTodo);
    }

    console.log(todo);

    return (
        <div className='d-flex pt-5 justify-content-center'>
            <Card className='p-5 Regular shadow w-50'>
                <h3 className='mb-3'>Add Todo</h3>
                <div className='d-flex flex-row'>
                    <div className='d-flex flex-culomn col-md-6'>
                        <TextField value={title} onChange={titleChanged} className='w-100' id="standard-basic" label="Title" variant="standard" />
                    </div>
                </div>
                <div className='d-flex mt-3 flex-row'>
                    <div className='d-flex flex-culomn col-md-12'>
                        <TextField value={discription} onChange={discriptionChanged} className='w-100' id="standard-basic" label="discription" variant="standard" />
                    </div>
                </div>
                <div className='d-flex mt-5 flex-row'>
                    <div className='d-flex justify-content-end flex-culomn col-md-12'>
                        <Button onClick={saveClicked} variant="contained" color="primary">
                            save
                        </Button>
                    </div>
                </div>
                {todo.length >= 1 && <h3 className='my-3'>Your Task(s) Are</h3>}

                {todo.length >= 1 ? todo.map((item, index) =>
                    <div key={item.id} className='d-flex mt-2 rounded-md gap-2 bg-blue-200 border p-2 flex-row'>
                        <div className='d-flex px-3 truncate bg-slate-100 fw-bold rounded-md p-1 justify-content-start flex-culomn col-md-3'>
                            {item.title}
                        </div>

                        <div className='d-flex p-1 truncate justify-content-start flex-culomn col-md-7'>
                            {item.discription}
                        </div>

                        <div className='col-md-2 d-flex justify-content-end'>

                            <Switch color='primary' label='is Do' cheacked={item.isDone} onChange={() => switchTodoClicked(item.id)} size="small" />

                            <Button onClick={() => editTodoClicked(item.id)} className='me-1 bg-white' style={{ minWidth: '35px', border: '1px solid rgba(0,0,0,.5)' }}>
                                <i class="fa-solid fa-edit"></i>
                            </Button>

                            <Button onClick={() => deleteTodoClicked(item.id)} className='bg-white me-3' style={{ minWidth: '35px', border: '1px solid rgba(0,0,0,.5)' }}>
                                <i class="fa-solid fa-trash"></i>
                            </Button>
                        </div>

                    </div>)
                    : <div className='d-flex mt-5 flex-row'>
                        <div className='d-flex bg-orange-300 fw-bold rounded-sm p-2 justify-content-center h-100 flex-culomn col-md-12'>
                            No Task Added
                        </div>
                    </div>
                }
            </Card>
        </div>
    );
};

export default AddTodoSection;