import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

// useCallback을 써서 재사용성을 높여준다.
function TodosContainer() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = useCallback(text => dispatch(addTodo(text)), [dispatch]);
    const onToggle = useCallback(id => dispatch(toggleTodo(id)),[dispatch]);
    return <Todos 
        todos={todos}
        onCreate={onCreate}
        onToggle={onToggle}
    />;
}

export default TodosContainer;