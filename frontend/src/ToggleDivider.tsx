import { Children, useState } from "react";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

interface Props {
    text: string
    children?: JSX.Element
}

function ToggleDivider({ text, children }: Props) {

    const [toggled, setToggled] = useState(false);

    const toggle = (): void => setToggled(!toggled)

    const Chevron = (): JSX.Element => {
        if (toggled) {
            return <ChevronUp className="m-2" />
        } else {
            return <ChevronDown className="m-2" />
        }
    }

    return (
        <div className="toggle-divider">
            { toggled && children }
            <div className="toggle" onClick={toggle}>
                <div />
                <div>
                    <Chevron />
                    { (toggled ? "Hide " : "Show ") + text }
                    <Chevron />
                </div>
                <div />
            </div>
        </div>
    )
}

export default ToggleDivider
