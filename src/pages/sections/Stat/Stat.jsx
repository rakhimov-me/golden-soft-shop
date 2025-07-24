import './Stat.scss'

const Stat = (props) => {
  const {} = props

  const statistic = [
    {
      value: "5,567",
      label: 'Счастливых клиентов',
    },
    {
      value: 1245,
      label: 'Продуктов на выбор',
    },
    {
      value: 372,
      label: 'Продаж в день',
    },
    {
      value: 20,
      label: 'Лет на рынке',
    },
  ];

  return (
    <section
      className="stat"
    >
      <div className="stat__body container">
        <ul className="stat__list">
          {statistic.map((item, index) => {
            return (
              <li key={index} className="stat__list-item">
                <p className="stat__list-value h3">{item.value}</p>
                <p className="stat__list-label">{item.label}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Stat