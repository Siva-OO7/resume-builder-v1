"use client";
import React from "react";
import { Form, Input, Button, Space, Divider, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

function Languages() {
  return (
    <Form.List name="languages">
      {(fields, { add, remove }) => (
        <>
          <h2 className="text-2xl font-semibold mb-6">Languages</h2>

          {fields.map(({ key, name, ...restField }) => (
            <Card
              key={key}
              bordered={false}
              className="mb-6 shadow-lg"
              style={{
                padding: "20px",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Language #{key + 1}
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
                name={[name, "language"]}
                label="Language"
                rules={[{ required: true, message: "Please enter language name" }]}
                className="mb-6"
              >
                <Input placeholder="e.g., English, Spanish, Hindi" />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, "reading"]}
                label="Reading Proficiency (%)"
                className="mb-6"
              >
                <Input
                  type="number"
                  placeholder="Enter percentage (0-100)"
                  min={0}
                  max={100}
                  suffix="%"
                />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, "writing"]}
                label="Writing Proficiency (%)"
                className="mb-6"
              >
                <Input
                  type="number"
                  placeholder="Enter percentage (0-100)"
                  min={0}
                  max={100}
                  suffix="%"
                />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, "speaking"]}
                label="Speaking Proficiency (%)"
                className="mb-6"
              >
                <Input
                  type="number"
                  placeholder="Enter percentage (0-100)"
                  min={0}
                  max={100}
                  suffix="%"
                />
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
              Add Language
            </Button>
          </Form.Item>

          <Divider />
        </>
      )}
    </Form.List>
  );
}

export default Languages;

