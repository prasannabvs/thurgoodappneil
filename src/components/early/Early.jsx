import "./early.scss";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Early() {
    
    
    return (
    <div className="early" id="early">
        <h1>Early Life</h1>
        <motion.div animate={{rotate: 360}} transition={{ repeat: 27, repeatType:"reverse", duration: 2 }}>
            <h2>His father William Canfield Marshall was a railroad porter and a steward at an all-white country club. </h2>
            <h2>His mother Norma Williams was an elementary school teacher.</h2>
            <h2>he would go to and observe public court cases with his father who liked to listen to the cases.</h2>
        </motion.div>
    </div>
  )
}
