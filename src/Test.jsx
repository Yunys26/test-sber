import { Button, Input } from '@material-ui/core'
import React from 'react'
import store from './app/store';
import {get, post} from './store/action'


export default function test() {

    return (
        <div>
            <Input/>
            <Button onClick={store.dispatch(get())}>+1</Button>
            <Button onClick={store.dispatch(post())}>-1</Button>
        </div>
    )
}
