// import css from '../Accordion/Accordion.module.css';
// import css from './Faq.module.css';
import { useState } from 'react';
const css = {};

export default function Faq() {
  const [visible, setVisible] = useState('');
  const [visibleAll, setVisibleAll] = useState(false);

  function expandAll() {
    if (visibleAll) {
      return;
    }
    setVisibleAll(true);
  }

  function collapseAll() {
    if (visibleAll) {
      setVisibleAll(false);
    }
    if (visible) {
      setVisible('');
    }
  }

  function handleClick(e) {
    setVisible(e.target.id);
  }

  return (
    <div className={css?.container}>
      <div className={css?.accordion}>
        <h1>FAQ</h1>
        <button
          type="button"
          className={css?.btn}
          id="expand-all"
          onClick={expandAll}
        >
          Expand All
        </button>
        <button
          type="button"
          className={css?.btn}
          id="collapse-all"
          onClick={collapseAll}
        >
          Collapse All
        </button>
        <div className={css?.accordionItem}>
          <p className={css?.title} id="1" onClick={handleClick}>
            First Question
          </p>
          {(visible === '1' || visibleAll) && (
            <div className={css?.content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu interdum diam. Donec interdum porttitor risus non bibendum.
                Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                dignissim arcu nec elit faucibus condimentum. Donec facilisis
                consectetur enim sit amet varius. Pellentesque justo dui,
                sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                ante quis fringilla feugiat, mauris risus condimentum massa, at
                elementum libero quam ac ligula. Pellentesque at rhoncus dolor.
                Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor
                venenatis mauris placerat tristique eget id dolor. Quisque
                blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
                elementum tincidunt.
              </p>
            </div>
          )}
        </div>
        <div className={css?.accordionItem}>
          <p className={css?.title} id="2" onClick={handleClick}>
            Second Question
          </p>
          {(visible === '2' || visibleAll) && (
            <div className={css?.content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu interdum diam. Donec interdum porttitor risus non bibendum.
                Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                dignissim arcu nec elit faucibus condimentum. Donec facilisis
                consectetur enim sit amet varius. Pellentesque justo dui,
                sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                ante quis fringilla feugiat, mauris risus condimentum massa, at
                elementum libero quam ac ligula. Pellentesque at rhoncus dolor.
                Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor
                venenatis mauris placerat tristique eget id dolor. Quisque
                blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
                elementum tincidunt.
              </p>
            </div>
          )}
        </div>
        <div className={css?.accordionItem}>
          <p className={css?.title} id="3" onClick={handleClick}>
            Third Question
          </p>
          {(visible === '3' || visibleAll) && (
            <div className={css?.content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu interdum diam. Donec interdum porttitor risus non bibendum.
                Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                dignissim arcu nec elit faucibus condimentum. Donec facilisis
                consectetur enim sit amet varius. Pellentesque justo dui,
                sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                ante quis fringilla feugiat, mauris risus condimentum massa, at
                elementum libero quam ac ligula. Pellentesque at rhoncus dolor.
                Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor
                venenatis mauris placerat tristique eget id dolor. Quisque
                blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
                elementum tincidunt.
              </p>
            </div>
          )}
        </div>
        <div className={css?.accordionItem}>
          <p className={css?.title} id="4" onClick={handleClick}>
            Forth Question
          </p>
          {(visible === '4' || visibleAll) && (
            <div className={css?.content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu interdum diam. Donec interdum porttitor risus non bibendum.
                Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                dignissim arcu nec elit faucibus condimentum. Donec facilisis
                consectetur enim sit amet varius. Pellentesque justo dui,
                sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                ante quis fringilla feugiat, mauris risus condimentum massa, at
                elementum libero quam ac ligula. Pellentesque at rhoncus dolor.
                Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor
                venenatis mauris placerat tristique eget id dolor. Quisque
                blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
                elementum tincidunt.
              </p>
            </div>
          )}
        </div>
        <div className={css?.accordionItem}>
          <p className={css?.title} id="5" onClick={handleClick}>
            Fifth Question
          </p>
          {(visible === '5' || visibleAll) && (
            <div className={css?.content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu interdum diam. Donec interdum porttitor risus non bibendum.
                Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                dignissim arcu nec elit faucibus condimentum. Donec facilisis
                consectetur enim sit amet varius. Pellentesque justo dui,
                sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                ante quis fringilla feugiat, mauris risus condimentum massa, at
                elementum libero quam ac ligula. Pellentesque at rhoncus dolor.
                Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor
                venenatis mauris placerat tristique eget id dolor. Quisque
                blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
                elementum tincidunt.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
