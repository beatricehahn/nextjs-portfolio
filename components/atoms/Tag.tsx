const Tag = ({ label } : { label : string }) => {
  return (
    <span className='rounded-full border-2 border-white-100 text-white-100 p-1'>{label}</span>
  )
}

export default Tag