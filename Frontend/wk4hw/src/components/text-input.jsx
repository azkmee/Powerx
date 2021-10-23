import React from 'react'
import propTypes from 'prop-types'
import { FieldContext } from './field-context';
import cn from 'classnames'
import { callAll } from '../lib/call-all';

export const TextInput = React.forwardRef(function TextInput({
    type='text' , onChangeValue, ...props 
}, forwardedRef) {
    const fieldId = React.useContext(FieldContext);
    
    return (
        <input
            type = {type}
            id = {props.id || fieldId}
            {...props}
            className = {cn(`  block
                            w-full
                            shadow-sm
                            sm:text-sm
                            focus:ring-pink-500 focus:border-pink-500
                            border-gray-300
                            rounded-md`, props.className)}
            onChange = {callAll(
                onChangeValue && ((e)=>onChangeValue(e)), props.onChange)}

            ref = {forwardedRef}
            
            />
    )

}

)