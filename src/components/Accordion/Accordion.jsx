import {useState, useRef} from 'react'
import css from './Accordion.module.css'

export default function Accordion() {
const [visible, setVisible] = useState(false);
const ref = useRef(visible)

console.log('ref', ref.current?.textContent);
console.log('visible', visible);

const handleOpen = () => {
    setVisible(prev => !prev)
}

  return (
    <div className={css.container}>
        <div className={css.accordion}>
            <div className={css.accordionItem}>
                <p className={css.title} onClick = {handleOpen}>
                {/* <p className={css.title} onClick = {() => {setVisible(!visible)}}> */}
                  First Question
                </p>
               {visible && <div className={css.content}>
                  <p ref={ref}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget mauris.
        
                    Aliquam dapibus, ante quis fringilla feugiat, mauris risus condimentum massa, at elementum libero quam ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor venenatis mauris placerat tristique eget id dolor. Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec elementum tincidunt.
                  </p>
                </div>
                }
                
              </div>
        </div>
    </div>
  )
}


