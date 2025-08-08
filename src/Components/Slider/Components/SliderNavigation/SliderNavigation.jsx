import './SliderNavigation.scss'
import classNames from "classnames";
import Button from "@/Components/Button/index.js";

import { ReactComponent as PrevIcon } from "@/assets/icons/arrow-prev.svg"
import { ReactComponent as NextIcon } from "@/assets/icons/arrow-next.svg"

const SliderNavigation = (props) => {
  const {
    className,
    id,
    hasPagination = true,
    /**
     * '' (default) | 'hero' 'catalogue'
     */
    mode = '',
  } = props

  return (
    <div
      className={classNames(className, "slider-navigation", {
        [`slider-navigation--${mode}`]: mode,
      })}
      id={id}
      data-js-slider-navigation=''
    >
      <Button
        className="popular__head-arrows-prev"
        label="Previuos slide"
        isLabelHidden
        mode="transparent"
        extraAttrs={{
          'data-js-slider-previous-button': '',
        }}
      >
        <PrevIcon />
      </Button>

      {hasPagination && (
        <div
          className="slider-navigation-pagination"
          data-js-slider-pagination = ''
        />
      )}

      <Button
        className="popular__head-arrows-next"
        label="Next slide"
        isLabelHidden
        mode="transparent"
        extraAttrs={{
          'data-js-slider-next-button': '',
        }}
      >
        <NextIcon />
      </Button>
    </div>
  )
}

export default SliderNavigation