import './Test.scss'
import Button from "@/Components/Button/index.js";
import React from "react";
import Icon from "@/Components/Icon/Icon.jsx";
import { ReactComponent as TestIcon } from "@/assets/icons/arrow-prev.svg"


const Test = (props) => {
  const {} = props

  return (
    <section
      className="test"
    >
      <div className="test__body container">
        <h3 className="test__body-title">Простые кнокпи</h3>

        <div className="test__body-buttons test__row">
          <div className="button-test">
            <span className="test-title">Basic button</span>
            <Button
              className="button-test__button"
              label="Добавить в корзину"
            />
          </div>
        </div>

        <h3 className="test__body-title">Кнопки-иконки</h3>
        <div className="test__body-icons-b test__row">
          <div className="button-test">
            <span className="test-title">Icon filled</span>
            <Button
              className="button-test__button"
              label="Search"
              isLabelHidden
              mode="transparent"
              iconName="phone"
              hasFillIcon
            />
          </div>
          <div className="button-test">
            <span className="test-title">Icon only</span>
            <Button
              className="button-test__button"
              label="Search"
              isLabelHidden
              mode="transparent"
              iconName="test-2"
            />
          </div>
          <div className="button-test">
            <span className="test-title">Icon only</span>
            <Button
              className="button-test__button"
              label="Search"
              isLabelHidden
              mode="transparent"
              iconName="Vector"
            />
          </div>

          <div className="button-test">
            <span className="test-title">Header icon</span>
            <Button
              className="button-test__button"
              label="Liked"
              isLabelHidden
              mode="transparent"
              iconName="Liked"
              hasFillIcon
            />
          </div>

          <div className="button-test">
            <span className="test-title">Иконка стрелки с Fill</span>
            <Button
              className="button-test__button"
              label="Search"
              isLabelHidden
              mode="transparent"
              iconName="test-1"
            />
          </div>
        </div>

        <h3 className="test__body-title">Ссылки</h3>
        <div className="test__body-a test__row">
          <div className="button-test light">
            <span className="test-title">Text only (light)</span>
            <Button
              // className="button-test__a"
              label="Search"
              href='/'
              mode="light"
            />
          </div>

          <div className="button-test">
            <span className="test-title">Text only (basic)</span>
            <Button
              label="Search"
              href='/'
              mode="dark"
            />
          </div>

          <div className="button-test">
            <span className="test-title">Text only (basic)</span>
            <Button label="+7 (966) 55 88 499" href="#" iconName="phone" iconPosition="before" hasFillIcon/>
          </div>

          <div className="button-test">
            <span className="test-title">Text only (basic)</span>
            <Button href="#" iconName="Vector" iconPosition="after" />
          </div>

        </div>



        <h3 className="test__body-title">Кнопки + иконки</h3>
        <div className="test__body-button-icons test__row">
          <div className="button-test">
            <span className="test-title">Button + icon</span>
            <Button
              label="Search"
              iconName="phone"
              hasFillIcon
            />
          </div>
          <div className="button-test">
            <span className="test-title">Button + icon (transparent)</span>
            <Button
              className="button-test__button"
              label="+7 (966) 55 88 499"
              iconName="phone"
              hasFillIcon
              mode="transparent"
              iconSize={20}
            />
          </div>
          <div className="divider"></div>

          <div className="button-test">
            <span className="test-title">Only Icon (button) transparent</span>
            <Button
              label="previous slide"
              isLabelHidden
              mode="transparent"
            >
              <TestIcon />
            </Button>
          </div>

          <div className="button-test">
            <span className="test-title">Button: SVGR icon + label</span>
            <Button
              label="previous slide"
              // isLabelHidden
              // mode="transparent"
            >
              <TestIcon />
            </Button>
          </div>

        </div>

        <h3 className="test__body-title">Чисто иконки (без кнопок)</h3>
        <div className="button-test">
          <span className="test-title">просто иконка без пнопки</span>
          <Icon
            className="test-icon"
            name="phone"
            hasFill
            iconSize={40}
          />
        </div>

        <div className="button-test">
          <span className="test-title">Иконка стрелки с Fill</span>
          <Icon
            className="test-icon"
            name="Arrow-next"
            // hasFill
            iconSize={40}
          />
        </div>

        <div className="button-test">
          <span className="test-title">Иконка стрелки с Fill</span>
          <Icon
            className="test-icon"
            name="phone"
            // hasFill
            iconSize={100}
          />
        </div>

      </div>

    </section>
  )
}

export default Test