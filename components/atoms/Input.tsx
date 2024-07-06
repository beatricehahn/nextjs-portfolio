interface InputProps {
    id: string
    name: string
    label: string
    placeholder: string
}

const Input = ({ id, name, label, placeholder, ...props } : InputProps) => {
  return (
    <div className='w-full mb-3'>
        <label className='block text-lg' htmlFor={id}>{label}</label>
        <input 
            autoComplete='off'
            type="text" 
            id={id} 
            name={name} 
            placeholder={placeholder}
            { ...props}
            className='w-full text-gray-900 placeholder-gray-40 border-gray-500 border-opacity-50 focus:ring-2 focus:ring-purple rounded-md'
        />
    </div>
  )
}

export default Input