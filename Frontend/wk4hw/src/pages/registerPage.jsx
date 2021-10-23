import React from 'react'

import { TextInput } from "../components/text-input"
import { Field } from "../components/field"
import { Label } from "../components/label"
import { Button } from "../components/button"
import { useRegister } from '../service/auth.service'

export const RegisterPage = (...props) => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [username, setUsername] = React.useState('')


    const invokeRegister = useRegister();

    return (
        <main className="bg-gray-50 p-6 sm:p-12 min-h-screen">
            <div className="max-w-md mx-auto px-4 sm:px-6 py-6 bg-white shadow">
                <div className="text-3xl mt-4 mb-8 font-extrabold text-center text-blue-20">Register</div>

 
                    <form
                        onSubmit = {(e)=> {
                            e.preventDefault();
                            console.log(email, password, username)
                            invokeRegister(username, password, email)
                            //fetch
                        }}>
                        <Field fieldId = 'Username'>
                            <Label className = 'text-left'>Username</Label>
                            <div className='mt-1'>
                                <TextInput 
                                    onChangeValue = {(e) => {setUsername(e.target.value)}}/>
                            </div>
                        </Field>
                        <Field fieldId = 'Email'>
                            <Label className = 'text-left'>Email</Label>
                            <div className='mt-1'>
                                <TextInput 
                                    onChangeValue = {(e) => {setEmail(e.target.value)}}/>
                            </div>
                        </Field>
                        
                        <Field fieldId = 'Password'>
                            <Label className = 'text-left'>Password</Label>
                            <div className='mt-1'>
                                <TextInput
                                    type='password'
                                    onChangeValue = {(e) => {setPassword(e.target.value)}}/>
                            </div>
                        </Field> 

                        <Button className = 'mt-4'
                            type='submit'> Register </Button>
                    </form>
                </div>
        </main>
    )
}
