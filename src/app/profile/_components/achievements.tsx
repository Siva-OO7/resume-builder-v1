"use client";
import React from "react";
import { Form, Input, Button, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

function Achievements() {
  return (
    <Form.List name="achievements">
      {(fields, { add, remove }) => (
        <>
          <h3 className="text-lg font-semibold mb-4">Achievements</h3>

          {fields.map(({ key, name, ...restField }) => (
            <Card
              key={key}
              bordered={false}
              className="mb-6 shadow-md"
              style={{
                padding: "20px",
                borderRadius: "8px",
                backgroundColor: "#fdfdfd",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-md font-semibold text-gray-800">
                  Achievement #{key + 1}
                </h3>
                <Button
                  danger
                  type="text"
                  icon={<MinusCircleOutlined />}
                  onClick={() => remove(name)}
                >
                  Remove
                </Button>
              </div>

              <Form.Item
                {...restField}
                name={[name, "title"]}
                label="Title"
                rules={[{ required: true, message: "Please enter a title" }]}
                className="mb-4"
              >
                <Input placeholder="E.g. Winner of XYZ Hackathon" />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, "description"]}
                label="Description"
                rules={[{ required: true, message: "Please enter a description" }]}
                className="mb-4"
              >
                <Input.TextArea rows={3} placeholder="Describe your achievement" />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, "date"]}
                label="Date (optional)"
                rules={[
                  {
                    pattern: /^(0[1-9]|1[0-2])\/\d{4}$/,
                    message: "Enter date in MM/YYYY format",
                  },
                ]}
                className="mb-4"
              >
                <Input placeholder="MM/YYYY" />
              </Form.Item>
            </Card>
          ))}

          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
              className="text-gray-700"
            >
              Add Achievement
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
}

export default Achievements;

