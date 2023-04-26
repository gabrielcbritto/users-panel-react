import React from "react"

import { ContainerItens as Container} from "./styles"

function ContainerItens({BlurOn, children}){
    return <Container BlurOn={BlurOn}>{children}</Container>
}

export default ContainerItens