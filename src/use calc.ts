"use client"

import { useState } from "react"

export function useCalculator() {
  const [display, setDisplay] = useState("0")

  const appendValue = (value: string) => {
    setDisplay((prev) => (prev === "0" ? value : prev + value))
  }

  const clearDisplay = () => {
    setDisplay("0")
  }

  const deleteLast = () => {
    setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"))
  }

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(display)
      setDisplay(result.toString())
    } catch (error) {
      setDisplay("Error")
    }
  }

  return { display, appendValue, clearDisplay, deleteLast, calculate }
}

