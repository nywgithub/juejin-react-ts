import React from 'react'
import { renderRoutes } from "react-router-config";

export default (props) => {

    return (
        <div>
            test
            {renderRoutes(props.route.routes)}
        </div>
    )
}