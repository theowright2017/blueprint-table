import React, { useState } from "react";

import { Button, Intent, Menu, MenuDivider, Classes } from "@blueprintjs/core";
import {
  Popover2,
  Classes as PopoverClasses,
  MenuItem2,
} from "@blueprintjs/popover2";

import gridStyles from "@/styles/Grid.module.css";

export const TableButtonActionRail = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = (state) => {
    setIsOpen(state);
  };

  const getMenuContent = () => {
    return (
      <Menu className={Classes.ELEVATION_1}>
        <MenuDivider title={"Scheduling"} />
        <MenuItem2
          text={"Schedule"}
          onClick={() => console.log("Schedule")}
          className={gridStyles.menu_item}
        />
        <MenuItem2
          text={"Unschedule"}
          onClick={() => console.log("Unschedule")}
          className={gridStyles.menu_item}
        />
      </Menu>
    );
  };

  return (
    <div className={gridStyles.action_rail}>
      <Popover2
        popoverClassName={PopoverClasses.POPOVER2_CONTENT}
        isOpen={isOpen}
        content={getMenuContent()}
        interactionKind={"click"}
        onInteraction={(state) => toggleIsOpen(state)}
        placement={"top-end"}
        usePortal={true}
        minimal={true}
      >
        <Button intent={Intent.PRIMARY} text={"Button"} />
      </Popover2>
    </div>
  );
};
