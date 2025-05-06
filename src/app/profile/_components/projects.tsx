"use client";
import React from "react";
import { Form, Input, Button, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

function Projects() {
  return (
    <Form.List name="projects">
      {(fields, { add, remove }) => (
        <>
          <h3 className="text-lg font-semibold mb-4">Projects</h3>

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
                <h3 className="text-md font-semibold text-gray-800">
                  Project #{key + 1}
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
                name={[name, "name"]}
                label="Project Name"
                rules={[{ required: true, message: "Please enter project name" }]}
                className="mb-6"
              >
                <Input placeholder="Enter project name" />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, "link"]}
                label="Project Link"
                rules={[{ required: true, message: "Please enter project link" }]}
                className="mb-6"
              >
                <Input placeholder="Enter live project link" />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, "description"]}
                label="Project Description"
                rules={[{ required: true, message: "Please enter project description" }]}
                className="mb-6"
              >
                <Input.TextArea rows={4} placeholder="Describe your project" />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, "startDate"]}
                label="Start Date"
                rules={[{ required: true, message: "Please enter start date" }]}
                className="mb-6"
              >
                <Input placeholder="MM/YYYY" />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, "endDate"]}
                label="End Date"
                rules={[{ required: true, message: "Please enter end date" }]}
                className="mb-6"
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
              Add Project
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
}

export default Projects;



