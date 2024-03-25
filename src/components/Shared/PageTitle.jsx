import PropTypes from "prop-types";

function PageTitle({ mainText, highlightText, color, secondaryColor }) {
  return (
    <div>
      <h1 className={`text-5xl font-bold text-${color}`}>
        {mainText}{" "}
        <span className={`text-${secondaryColor}`}>{highlightText}</span>
      </h1>
      <div
        className={`border-${secondaryColor} bg-${secondaryColor} rounded-full w-16 h-2 flex-shrink-0`}
      ></div>
    </div>
  );
}

PageTitle.propTypes = {
  mainText: PropTypes.string.isRequired,
  highlightText: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export default PageTitle;
