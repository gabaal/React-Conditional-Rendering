import "./TreeCard.css"
import Button from "./Button"

export default function TreeCard({treeName, imgLink, location}) {
  return (
    <div id="tree-card">
      <h2>The {treeName} Tree.</h2>
      <img src={imgLink} alt=""></img>
      <p>Found across {location}.</p>
      <Button />
    </div>
  )
}