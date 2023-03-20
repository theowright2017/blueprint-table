import RGL, { WidthProvider } from "react-grid-layout";
import { Table } from "./Table";
import { TableButtonActionRail } from "./TableButtonActionRail";

import styles from "@/styles/Grid.module.css";

const ReactGridLayout = WidthProvider(RGL);

const drag_handle = {
  width: "100%",
  height: "20px",
  backgroundColor: "#CBC3E3",
};

const initialLayout = [
  /**
   * other item props
   * - static | isDraggable | isResizable | maxW | maxH, etc
   */
  { i: "a", x: 0, y: 0, w: 12, h: 6, minW: 3, minH: 5, maxH: 10 },
  { i: "b", x: 0, y: 10, w: 6, h: 6, minW: 3, minH: 5, maxH: 10 },
  { i: "c", x: 6, y: 0, w: 6, h: 6, minW: 3, minH: 5, maxH: 10 },
];

const dragHandleStyle = {};

export const Grid = (props) => {
  const generateDOM = () => {
    const items = ["a", "b", "c"];
    return items.map((key) => {
      return (
        <div className={styles.grid_item_container} key={key}>
          <div className={"drag_handle"} style={drag_handle}>
            {key}
          </div>
          <div className={styles.grid_item__table_container}>
            <Table />
          </div>
          <TableButtonActionRail className={styles.action_rail} />
        </div>
      );
    });
  };

  const onLayoutChange = (layout) => {
    console.log("fire");
  };

  return (
    <div className={styles.grid_container}>
      <ReactGridLayout
        className={"layout"}
        style={{ border: "1px solid black" }}
        width={1200}
        layout={initialLayout}
        draggableHandle={".drag_handle"}
        draggableCancel={styles.grid_item_container}
        margin={[10, 25]}
        cols={12}
        rowHeight={20}
        onLayoutchange={(layout) => onLayoutChange(layout)}
      >
        {generateDOM()}
      </ReactGridLayout>
    </div>
  );
};

/**
 * 
 * unused grid props
 *       maxRows={21}
         compactType={null} // null prevents snap to fit
         isBounded={true}
         autoSize={false}
         onResizeStop={onResizeStop}
 */
