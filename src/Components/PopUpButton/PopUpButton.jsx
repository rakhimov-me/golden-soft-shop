import Popup from 'reactjs-popup';
import './PopUpButton.scss';
import classNames from 'classnames';

const PopUpButton = ({ label, items, className }) => {
  return (
    <div className="popup-button-wrapper" data-popup-target="">
      <Popup
        trigger={
          <button
            className={classNames(className, 'popup-button')}
            data-rotate="0"
          >
            <span className="popup-button__label">{label}</span>
            <svg
              className="popup-button__chevron"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4L6 8L10 4"
                stroke="var(--color-black)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </button>
        }
        position="bottom left"
        on="click"
        closeOnDocumentClick
        onOpen={() => {
          const button = document.querySelector('.popup-button');
          button.dataset.rotate = '180';
        }}
        onClose={() => {
          const button = document.querySelector('.popup-button');
          button.dataset.rotate = '0';
        }}
      >
        <div className="popup-content">
          {items.map((item, index) => (
            <div key={index} className="popup-item">
              {item}
            </div>
          ))}
        </div>
      </Popup>
    </div>
  );
};

export default PopUpButton;