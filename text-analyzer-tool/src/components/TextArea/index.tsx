import './index.scss'


const TextArea = ({handleChange}:any) => {

  return <textarea autoFocus onChange={(e)=>{handleChange(e.target.value)}} className="text-area" placeholder="Paste your text here..." />
}

export default TextArea
