// import React from "react";
// import { Button, Form, Input } from "antd";
// import { Trash2 } from "lucide-react";

// function Education() {
//   return (
//     <div>
//       <Form.List name="education">
//         {(fields, { add, remove }) => {
//           return (
//             <div>
//               <div className="flex gap-5 items-center mb-5">
//                 <Button size="small" onClick={() => add()}>
//                   Add education
//                 </Button>
//               </div>

//               <div className="flex flex-col gap-5">
//                 {fields.map((field, index) => (
//                   <div className="grid grid-cols-4 gap-5 items-end">
//                     <Form.Item
//                       label="Qualification"
//                       name={[field.name, "qualification"]}
//                     >
//                       <Input />
//                     </Form.Item>

//                     <Form.Item
//                       label="Year of Passing"
//                       name={[field.name, "yearOfPassing"]}
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

// export default Education;

import React from "react";
import { Button, Form, Input } from "antd";
import { Trash2 } from "lucide-react";

function Education() {
  return (
    <div>
      <Form.List name="education">
        {(fields, { add, remove }) => {
          return (
            <div>
              <div className="flex gap-5 items-center mb-5">
                <Button size="small" onClick={() => add()}>
                  Add education
                </Button>
              </div>

              <div className="flex flex-col gap-5">
                {fields.map((field, index) => (
                  <div
                    key={field.key}
                    className="grid grid-cols-5 gap-5 items-end"
                  >
                    <Form.Item
                      label="Qualification"
                      name={[field.name, "qualification"]}
                      rules={[{ required: true, message: "Required" }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Institution"
                      name={[field.name, "institution"]}
                      rules={[{ required: true, message: "Required" }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Year of Passing"
                      name={[field.name, "yearOfPassing"]}
                      rules={[{ required: true, message: "Required" }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="CGPA / %"
                      name={[field.name, "score"]}
                    >
                      <Input />
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

export default Education;

