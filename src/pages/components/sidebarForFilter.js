import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import Example from "./test";

export default function SidebarForFilter() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="mt-24 pt-9">
      <div className="flex gap-1 cursor-pointer " onClick={showDrawer}>
        <div className="flex self-center">
          <FilterOutlined className="block" />
        </div>
        <div>
          <p className="font-medium w-6">Lọc</p>
        </div>
      </div>
      <div className="w-[90%]">
        <Drawer
          title="Bộ Lọc Tìm Kiếm"
          placement={placement}
          onClose={onClose}
          zIndex={10000}
          width={300}
          open={open}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="primary" onClick={onClose}>
                OK
              </Button>
            </Space>
          }
        >
          <Example />
        </Drawer>
      </div>
    </div>
  );
}

function ButtonInDrawer() {
  return (
    <div>
      <Button>Button in Drawer</Button>
    </div>
  );
}
