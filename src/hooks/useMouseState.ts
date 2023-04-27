import React, { useState, useEffect } from 'react'

/**
 * React hook used to track a mouses state.
 *
 * @author [Jacob Head](https://github.com/HeadJk)
 */
const useMouseState = () => {
    const [mousePosition, setMousePosition]= useState({
        x: 0,
        y: 0,
    })

    const [mouseVelocity, setMouseVelocity]= useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        const listener = (e: MouseEvent) => {
            setMousePosition({
                x: e.pageX,
                y: e.pageY,
            })
            setMouseVelocity({
                x: e.movementX,
                y: e.movementY,
            })
        }

        document.addEventListener('mousemove', listener)
        return () => document.removeEventListener("mousemove", listener)
    })

    return {
        position: mousePosition,
        velocity: mouseVelocity,
    }
};

export default useMouseState;