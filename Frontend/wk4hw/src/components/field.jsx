import { FieldContext } from "./field-context";
import {useId} from "../hooks/use-id"

export const Field = ({fieldId, children}) => {

    const ensureId = useId(fieldId);
    
    return (
        <FieldContext.Provider value = {ensureId}>
            {children}
        </FieldContext.Provider>
    )
}