import { pronouns } from '../../data/pronouns'
import './index.scss'

const ResultBox = ({worldLength , characters , sentences , paragraph , pronouns}:any) => {
  const resultBar = [
    {
      title: 'Words',
      value: worldLength,
    },
    {
      title: 'Characters',
      value:  characters,
    },
    {
      title: 'Sentences',
      value: sentences,
    },
    {
      title: 'Paragraphs ',
      value: paragraph,
    },
    {
      title: 'Pronouns',
      value: pronouns,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
