import React from 'react'
import TreeCard from "./Components/TreeCard"
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"
import Monkey from "./Components/Monkey.jsx"
import "./App.css"


export default function App() {
  return (
    <div>
      <Header />
      <Monkey />
    <  TreeCard treeName='Baobob' location='Across Africa' imgLink='https://media.cntraveller.com/photos/611bf4e3628f4910ed102938/master/w_1600%2Cc_limit/gettyimages-1281090177.jpg'/>
    
    < TreeCard treeName='Gnarled Juniper' location='Arizona' imgLink='https://media.cntraveller.com/photos/611bf4e2f6bd8f17556db944/master/w_1600%2Cc_limit/gettyimages-994569360.jpg'/>
    
    <TreeCard treeName='Oak' location='California' imgLink='https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT5l30nTKf4P986F-ZPLv3Xx4o4eVtpih2SO9dQSllU5Be1b5svboEPR3Y_RuQtca5Y0-fpSdmvNwAVMIo'/>
    
    < TreeCard treeName='Kapok' location='Mexico, Central America and the Caribbean' imgLink='https://upload.wikimedia.org/wikipedia/commons/2/23/Kapok_tree_Honolulu.jpg' />
    
    < TreeCard treeName='Socotra Dragon' location='Socotra archipelago' imgLink='https://upload.wikimedia.org/wikipedia/commons/8/83/Socotra_dragon_tree.JPG' />
    
    < TreeCard treeName='Rainbow Eucalyptus' location=' Philippines, Indonesia, and Papua New Guinea' imgLink='https://www.gardenia.net/wp-content/uploads/2023/05/Eucalyptus-deglupta.webp' />
    
    <Footer />
    </div>
  )
}