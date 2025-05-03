// import React from "react";
// import { Button, Form, Input } from "antd";
// import { Trash2 } from "lucide-react";

// function Skills() {
//   return (
//     <div>
//       <Form.List name="skills">
//         {(fields, { add, remove }) => {
//           return (
//             <div>
//               <div className="flex gap-5 items-center mb-5">
//                 <Button size="small" onClick={() => add()}>
//                   Add skill
//                 </Button>
//               </div>

//               <div className="flex flex-col gap-5">
//                 {fields.map((field, index) => (
//                   <div className="grid grid-cols-4 gap-5 items-end">
//                     <Form.Item
//                       label="Technology"
//                       name={[field.name, "technology"]}
//                     >
//                       <Input />
//                     </Form.Item>

//                     <Form.Item
//                       label="Rating"
//                       name={[field.name, "rating"]}
//                     >
//                       <Input />
//                     </Form.Item>

//                     <Button
//                       onClick={() => remove(field.name)}
//                       className="w-max"
//                     >
//                       <Trash2 size={16} />
//                     </Button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         }}
//       </Form.List>
//     </div>
//   );
// }

// export default Skills;


import React from "react";
import { Button, Form, Input, Select, Rate } from "antd";
import { Trash2 } from "lucide-react";

const { Option } = Select;

function Skills() {
  return (
    <div>
      <Form.List name="skills">
        {(fields, { add, remove }) => {
          return (
            <div>
              <div className="flex gap-5 items-center mb-5">
                <Button size="small" onClick={() => add()}>
                  Add skill
                </Button>
              </div>

              <div className="flex flex-col gap-5">
                {fields.map((field) => (
                  <div
                    key={field.key}
                    className="grid grid-cols-5 gap-5 items-end"
                  >
                    <Form.Item
                      label="Technology"
                      name={[field.name, "technology"]}
                      rules={[{ required: true, message: "Enter skill name" }]}
                    >
                      <Input placeholder="e.g., React" />
                    </Form.Item>

                    <Form.Item
                      label="Category"
                      name={[field.name, "category"]}
                    >
                      <Select placeholder="Select category">
                        <Option value="Frontend">Frontend</Option>
                        <Option value="Backend">Backend</Option>
                        <Option value="Database">Database</Option>
                        <Option value="DevOps">DevOps</Option>
                        <Option value="Other">Other</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      label="Proficiency"
                      name={[field.name, "rating"]}
                      rules={[{ required: true, message: "Rate proficiency" }]}
                    >
                      <Rate allowHalf />
                    </Form.Item>

                    <Form.Item
                      label="Years of Exp"
                      name={[field.name, "experience"]}
                    >
                      <Input placeholder="e.g., 2" />
                    </Form.Item>

                    <Button
                      onClick={() => remove(field.name)}
                      className="w-max"
                      danger
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </Form.List>
    </div>
  );
}

export default Skills;

