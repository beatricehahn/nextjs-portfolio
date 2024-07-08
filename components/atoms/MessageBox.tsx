interface MessageBoxProps {
    id: string
    name: string
    label: string
    placeholder: string
}

const MessageBox = ({ id, name, label, placeholder, ...props } : MessageBoxProps) => {
  return (
    <div className='w-full mb-3'>
        <label className='block text-lg' htmlFor={id}>{label}</label>
        <textarea 
            autoComplete='off'
            id={id} 
            name={name}
            rows={5}
            style={{ resize: 'none' }} 
            placeholder={placeholder}
            required
            { ...props}
            className='w-full text-gray-900 placeholder-gray-40 border-gray-500 border-opacity-50 focus:ring-2 focus:ring-purple rounded-md'
        ></textarea>
    </div>
  )
}

export default MessageBox