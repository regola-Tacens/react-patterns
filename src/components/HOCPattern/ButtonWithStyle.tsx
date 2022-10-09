// library imports
import { ReactElement, ReactNode } from "react"

// style imports
import '../../styles/hoc-pattern.css'

type ButtonWithStyleProps = {
  children: ReactElement | ReactNode
}

const ButtonWithStyle = ({children}: ButtonWithStyleProps) => {
  return (
    <button className="hoc-button">
      {children}
    </button>
)
}

export default ButtonWithStyle