import "./index.css";
import ReactIcons from './ReactIcons';
import ForegroundColors from './ForegroundColors';
import BackgroundColors from './BackgroundColors';
import Borders from './Borders';
import Corners from './Corners';
import Dimensions from './Dimensions';
import Positions from './Positions';
import Zindex from './Zindex';
import Float from './Float';
import GridLayout from './GridLayout';
import Flex from './Flex';
import Padding from './Padding';
import Margins from './Margins';
import BootstrapGrid from "./BootstrapGrid";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";

export default function Lab2() {
  return (
    <div className="container">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      {/* <p style={{ backgroundColor: "blue", color: "white" }}> */}
      <p>
        Style attribute allows configuring look and feel
        right on the element. Although it's very convenient,
        it is considered bad practice and you should avoid
        using the style attribute.
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the
          elements of the same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and
          feel
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element's CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document
            <p className="wd-selector-3">
              This paragraph's red background is referenced as
              <br />
              .selector-2 .selector3<br />
              meaning the descendant of some ancestor.<br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span><br />
              You can combine these relationships to create specific
              styles depending on the document structure
            </p>
          </div>
        </div>
      </div>
      {/* 3.1.7 */}
      <ForegroundColors />

      {/* 3.1.8 */}
      <BackgroundColors />

      {/* 3.1.9 */}
      <Borders />

      {/* 3.1.10 */}
      <Corners />

      {/* 3.1.11 */}
      <Dimensions />

      {/* 3.1.12 */}
      <Padding />

      {/* 3.1.13 */}
      <Margins />

      {/* 3.1.14 */}
      <Positions />

      {/* 3.1.15 */}
      <Zindex />

      {/* 3.1.16 */}
      <Float />

      {/* 3.1.17 */}
      <GridLayout />

      {/* 3.1.18 */}
      <Flex />
      <ReactIcons />
      <BootstrapGrid />
      <BootstrapTables />
      <BootstrapLists />
      <BootstrapForms />
      <BootstrapNavigation />
    </div>
  );
}
