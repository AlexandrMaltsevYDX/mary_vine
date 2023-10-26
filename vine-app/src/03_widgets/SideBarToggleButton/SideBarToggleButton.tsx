import { IconButton } from "@mui/material"
import Menu from "@mui/icons-material/Menu"
import React from "react"

interface SideBarToggleButtonProps {
    handl: Function
}

const SideBarToggleButton : React.FC<SideBarToggleButtonProps> = ({handl}) => {
    
    
    return (
        <IconButton onClick={() => handl()}>
            <Menu/>
        </IconButton>
    )

}

export default SideBarToggleButton