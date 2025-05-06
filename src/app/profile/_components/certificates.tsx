"use client";
import React from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Col,
  Row,
  Typography,
  Divider,
} from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title } = Typography;

function Certificates() {
  return (
    <>
      <Title level={3} style={{ marginBottom: 24 }}>
        Certificates
      </Title>
      <Form.List name="certificates">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }, index) => (
              <Card
                key={key}
                style={{
                  marginBottom: 32,
                  padding: 24,
                  borderRadius: 12,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
                title={`Certificate ${index + 1}`}
                extra={
                  <Button
                    type="link"
                    icon={<DeleteOutlined />}
                    danger
                    onClick={() => remove(name)}
                  >
                    Remove
                  </Button>
                }
              >
                <Row gutter={[24, 24]}>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, "title"]}
                      label="Certificate Title"
                      rules={[{ required: true, message: "Title is required" }]}
                    >
                      <Input placeholder="e.g. Frontend Development" />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, "issuer"]}
                      label="Issuer"
                      rules={[{ required: true, message: "Issuer is required" }]}
                    >
                      <Input placeholder="e.g. Coursera, Google" />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, "issueDate"]}
                      label="Issue Date"
                      rules={[{ required: true, message: "Issue date is required" }]}
                    >
                      <Input placeholder="e.g. 2024-08-01" />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, "link"]}
                      label="Certificate Link"
                      rules={[
                        {
                          type: "url",
                          message: "Enter a valid URL",
                        },
                      ]}
                    >
                      <Input placeholder="https://example.com/certificate" />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                icon={<PlusOutlined />}
                onClick={() => add()}
                block
                style={{ height: 48, fontWeight: "500", borderRadius: 8 }}
              >
                + Add Certificate
              </Button>
            </Form.Item>

            <Divider />
          </>
        )}
      </Form.List>
    </>
  );
}

export default Certificates;


