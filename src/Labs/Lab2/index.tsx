import "./index.css";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIcons from "./ReactIcons";
import { Container } from 'react-bootstrap';
import BoostrapGrids from "./BootstrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";

export default function Lab2() {
  return (
    <Container>
      <h2> Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <div id="wd-css-id-selectors">
        <h3>ID Selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same name, e.g., P, we can refer to specific element by its ID.
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and feel.
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class Selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refere to elemtnts, you can use an element's CLASS attribute.
        </p>
        <h4 className="wd-class-selector">This heading has the same style as paragraph above</h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selector</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in the document
            <p className="wd-selector-3">
              This paragrapgh's red background is referenced as
              <br />
              .selector-2 .selector-3 <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span><br />
              You can combine these relationships to create specific 
              styles depending on the document structure
            </p>
          </div>
        </div>
      </div>

      <div id="wd-css-colors">
        <h2>Colors</h2>
        <h3 className="wd-fg-color-blue">Foreground color</h3>
        <p className="wd-fg-color-red">
          The text in this paragraph is red but
          <span className="wd-fg-color-green">this text is green</span>
        </p>
      </div>

      <div id="wd-css-background-colors">
        <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
        <p className="wd-bg-color-red wd-fg-color-black">
          This background of this paragraph is red but
          <span className="wd-bg-color-green wd-fg-color-white">
            the background of this text is green and the foreground white
          </span>
        </p>
      </div>

      <Borders />
      <Padding />
      <Margins />
      <Corners />
      <Dimensions />
      <Positions />

      <div id="wd-z-index">
        <h2>Z index</h2>
        <div className="wd-pos-relative">
          <div className="wd-pos-absolute-10-10 
              wd-bg-color-yellow wd-dimension-portrait">
            Portrait
          </div>
          <div className="wd-zindex-bring-to-front 
              wd-pos-absolute-50-50 wd-dimension-landscape
              wd-bg-color-blue wd-fg-color-white">
            Landscape
          </div>
          <div className="wd-pos-absolute-120-20 
              wd-bg-color-red wd-dimension-square">
            Square
          </div>
        </div><br /><br /><br /><br /><br /><br /><br />
      </div>

      <Float />
      <GridLayout />
      <Flex />
      <ReactIcons />
      <BoostrapGrids />
      <ScreenSizeLabel />
      <BootstrapTables />
      <BootstrapLists />
      <BootstrapForms />
      <BootstrapNavigation />


    </Container>
  );
}
