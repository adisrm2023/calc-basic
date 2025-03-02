"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCalculator } from "../hooks/useCalculator"
import { motion } from "framer-motion"

const buttons = [
  { label: "C", action: "clearDisplay", className: "col-span-1 bg-red-500/90 hover:bg-red-600 text-white" },
  {
    label: "÷",
    action: "appendValue",
    value: "/",
    className: "col-span-1 bg-violet-600/80 hover:bg-violet-700 text-white",
  },
  {
    label: "×",
    action: "appendValue",
    value: "*",
    className: "col-span-1 bg-violet-600/80 hover:bg-violet-700 text-white",
  },
  { label: "⌫", action: "deleteLast", className: "col-span-1 bg-violet-600/80 hover:bg-violet-700 text-white" },
  { label: "7", action: "appendValue", value: "7", className: "bg-gray-700/90 hover:bg-gray-600 text-white" },
  { label: "8", action: "appendValue", value: "8", className: "bg-gray-700/90 hover:bg-gray-600 text-white" },
  { label: "9", action: "appendValue", value: "9", className: "bg-gray-700/90 hover:bg-gray-600 text-white" },
  { label: "−", action: "appendValue", value: "-", className: "bg-violet-600/80 hover:bg-violet-700 text-white" },
  { label: "4", action: "appendValue", value: "4", className: "bg-gray-700/90 hover:bg-gray-600 text-white" },
  { label: "5", action: "appendValue", value: "5", className: "bg-gray-700/90 hover:bg-gray-600 text-white" },
  { label: "6", action: "appendValue", value: "6", className: "bg-gray-700/90 hover:bg-gray-600 text-white" },
  { label: "+", action: "appendValue", value: "+", className: "bg-violet-600/80 hover:bg-violet-700 text-white" },
  { label: "1", action: "appendValue", value: "1", className: "bg-gray-700/90 hover:bg-gray-600 text-white" },
  { label: "2", action: "appendValue", value: "2", className: "bg-gray-700/90 hover:bg-gray-600 text-white" },
  { label: "3", action: "appendValue", value: "3", className: "bg-gray-700/90 hover:bg-gray-600 text-white" },
  {
    label: "=",
    action: "calculate",
    className:
      "row-span-2 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white",
  },
  {
    label: "0",
    action: "appendValue",
    value: "0",
    className: "col-span-2 bg-gray-700/90 hover:bg-gray-600 text-white",
  },
  { label: ".", action: "appendValue", value: ".", className: "bg-gray-700/90 hover:bg-gray-600 text-white" },
]

export function Calculator() {
  const { display, appendValue, clearDisplay, deleteLast, calculate } = useCalculator()

  const handleButtonClick = (action: string, value?: string) => {
    switch (action) {
      case "appendValue":
        appendValue(value!)
        break
      case "clearDisplay":
        clearDisplay()
        break
      case "deleteLast":
        deleteLast()
        break
      case "calculate":
        calculate()
        break
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[500px] p-6">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-700"
      >
        <div className="mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700 shadow-inner">
          <Input
            type="text"
            value={display}
            readOnly
            className="w-full text-right text-3xl font-mono tracking-wider bg-transparent border-0 text-white shadow-none focus-visible:ring-0 h-12 px-2"
          />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((button, index) => (
            <motion.div key={index} whileTap={{ scale: 0.95 }} className={button.label === "=" ? "row-span-2" : ""}>
              <Button
                onClick={() => handleButtonClick(button.action, button.value)}
                className={`w-full h-14 text-xl font-medium rounded-xl shadow-md ${button.className}`}
              >
                {button.label}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

