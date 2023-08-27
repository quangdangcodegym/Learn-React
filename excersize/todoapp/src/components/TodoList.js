import Button from '@atlaskit/button'
import React from 'react'
import styled from 'styled-components'
import Todo1  from './Todo1'
import Todo  from './Todo'
const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;
`

export default function TodoList({todoList}) {
  return (
    <>
    {console.log("RENDER todolist")}
        {
            todoList.map((todo) => <Todo >
              <div>haha</div>
            </Todo> )
        }
    </>
  )
}
