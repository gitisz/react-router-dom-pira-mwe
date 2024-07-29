import * as React from "react"
import { MenuComponentProps } from "app"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const MenuItem: React.FC<MenuComponentProps> = ({ piral }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        alert("Going Home!")
        navigate('/')
    }

    return (
        <Button
            onClick={handleClick}
        >
            Go Home Lib!
        </Button>
    );
}

export default MenuItem;