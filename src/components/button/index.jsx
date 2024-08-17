import PropTypes from "prop-types";
import "./index.css";
//variant = "default" => orange
//variant = "secondary" => pink
export function Button({ variant = "primary", ...rest }) {
  return <button className={`container--button ${variant}`} {...rest} />;
}

//validação variant
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
};
