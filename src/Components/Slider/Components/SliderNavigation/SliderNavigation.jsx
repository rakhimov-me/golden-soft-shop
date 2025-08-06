import './SliderNavigation.scss'
import classNames from "classnames";

const SliderNavigation = (props) => {
  const {
    className,
    id,
    hasPagination = true,
  } = props

  return (
    <div
      className={classNames(className, "slider-navigation")}
      id={id}
    >

    </div>
  )
}

export default SliderNavigation