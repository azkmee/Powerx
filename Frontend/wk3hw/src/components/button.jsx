import cn from 'classnames'

export const Button = (props) => {
    return (
        <button 
            type={props.type} 
            className={cn(`
                w-full
                inline-flex
                justify-center
                items-center
                py-2
                px-4
                border border-transparent
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-white
                bg-pink-600
                hover:bg-pink-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-pink-500
              `,props.className)}
           >{props.children}</button>
    )
}