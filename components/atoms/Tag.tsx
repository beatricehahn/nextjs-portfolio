const Tag = ({ label } : { label : string }) => {
  return (
    <span className='text-xs rounded-[4px] border-[1.5px] border-blue-800 text-blue-800 px-4 py-0.5 mr-2 mb-2'>{label}</span>
  )
}

export default Tag