import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { FilterOutlined } from "@ant-design/icons";

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
      <Drawer
        title="Bộ Lọc Tìm Kiếm"
        placement={placement}
        width="90%"
        // i want to set margin top
        // style={{ marginTop: "75px" }}
        onClose={onClose}
        zIndex={10000}
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}
