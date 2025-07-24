import './Callback.scss'
import Button from "@/Components/Button/Button.jsx";

const Callback = (props) => {
  const {} = props

  return (
    <section
      className="callback"
    >
      <div className="callback__body container">
        <h2 className="callback__body-title">
          Мы Вам перезвоним
        </h2>
        <p className="callback__body-subtitle">
          Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.
        </p>
        <div className="callback__body-form">
          <input
            className="callback__body-form-input"
            placeholder="Ваше имя"
            type="text"
          />
          <input
            className="callback__body-form-input"
            placeholder="Ваш Email"
            type="text"
          />

          <Button className="callback__body-form-button" label="Отправить" />
        </div>
      </div>
    </section>
  )
}

export default Callback